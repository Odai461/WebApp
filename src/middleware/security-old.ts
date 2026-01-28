// Security Middleware Module
// Implements CSRF, Rate Limiting, and Security Headers

import type { Context, Next } from 'hono'
import { randomBytes, createHmac } from 'crypto'

// ============================================
// CSRF PROTECTION
// ============================================

interface CSRFConfig {
  secret: string
  cookieName?: string
  headerName?: string
}

export class CSRFProtection {
  private secret: string
  private cookieName: string
  private headerName: string

  constructor(config: CSRFConfig) {
    this.secret = config.secret
    this.cookieName = config.cookieName || 'csrf-token'
    this.headerName = config.headerName || 'x-csrf-token'
  }

  generateToken(): string {
    const token = randomBytes(32).toString('hex')
    const timestamp = Date.now().toString()
    const signature = createHmac('sha256', this.secret)
      .update(`${token}:${timestamp}`)
      .digest('hex')
    return `${token}:${timestamp}:${signature}`
  }

  validateToken(token: string): boolean {
    if (!token) return false

    const parts = token.split(':')
    if (parts.length !== 3) return false

    const [tokenPart, timestamp, signature] = parts
    
    // Check if token is too old (1 hour max)
    const tokenAge = Date.now() - parseInt(timestamp)
    if (tokenAge > 3600000) return false

    // Verify signature
    const expectedSignature = createHmac('sha256', this.secret)
      .update(`${tokenPart}:${timestamp}`)
      .digest('hex')

    return signature === expectedSignature
  }

  middleware() {
    return async (c: Context, next: Next) => {
      // GET requests: generate and set token
      if (c.req.method === 'GET') {
        const token = this.generateToken()
        c.set('csrfToken', token)
        await next()
        return
      }

      // POST/PUT/DELETE/PATCH: validate token
      if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(c.req.method)) {
        const token = c.req.header(this.headerName) || 
                     c.req.header('X-CSRF-TOKEN') ||
                     c.req.header('x-csrf-token')
        
        if (!token || !this.validateToken(token)) {
          return c.json({ 
            success: false, 
            error: 'Invalid or missing CSRF token' 
          }, 403)
        }
      }

      await next()
    }
  }
}

// ============================================
// RATE LIMITING
// ============================================

interface RateLimitConfig {
  windowMs: number
  maxRequests: number
  keyGenerator?: (c: Context) => string
}

interface RateLimitEntry {
  count: number
  resetAt: number
}

export class RateLimiter {
  private store: Map<string, RateLimitEntry>
  private windowMs: number
  private maxRequests: number
  private keyGenerator: (c: Context) => string

  constructor(config: RateLimitConfig) {
    this.store = new Map()
    this.windowMs = config.windowMs
    this.maxRequests = config.maxRequests
    this.keyGenerator = config.keyGenerator || ((c: Context) => {
      return c.req.header('x-forwarded-for') || 
             c.req.header('cf-connecting-ip') || 
             'unknown'
    })

    // Cleanup old entries every minute
    setInterval(() => this.cleanup(), 60000)
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, entry] of this.store.entries()) {
      if (entry.resetAt < now) {
        this.store.delete(key)
      }
    }
  }

  middleware() {
    return async (c: Context, next: Next) => {
      const key = this.keyGenerator(c)
      const now = Date.now()
      
      let entry = this.store.get(key)
      
      if (!entry || entry.resetAt < now) {
        entry = {
          count: 0,
          resetAt: now + this.windowMs
        }
        this.store.set(key, entry)
      }

      entry.count++

      // Set rate limit headers
      c.header('X-RateLimit-Limit', this.maxRequests.toString())
      c.header('X-RateLimit-Remaining', Math.max(0, this.maxRequests - entry.count).toString())
      c.header('X-RateLimit-Reset', new Date(entry.resetAt).toISOString())

      if (entry.count > this.maxRequests) {
        return c.json({
          success: false,
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((entry.resetAt - now) / 1000)
        }, 429)
      }

      await next()
    }
  }
}

// ============================================
// SECURITY HEADERS
// ============================================

export const securityHeaders = () => {
  return async (c: Context, next: Next) => {
    await next()

    // Prevent clickjacking
    c.header('X-Frame-Options', 'DENY')
    
    // Prevent MIME type sniffing
    c.header('X-Content-Type-Options', 'nosniff')
    
    // Enable XSS protection
    c.header('X-XSS-Protection', '1; mode=block')
    
    // Referrer policy
    c.header('Referrer-Policy', 'strict-origin-when-cross-origin')
    
    // Content Security Policy
    c.header('Content-Security-Policy', [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net https://js.stripe.com",
      "style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://cdn.jsdelivr.net",
      "connect-src 'self' https://api.stripe.com",
      "frame-src https://js.stripe.com https://hooks.stripe.com",
      "object-src 'none'",
      "base-uri 'self'"
    ].join('; '))
    
    // Permissions Policy
    c.header('Permissions-Policy', [
      'geolocation=()',
      'microphone=()',
      'camera=()',
      'payment=(self)'
    ].join(', '))
  }
}

// ============================================
// IP WHITELIST (for admin routes)
// ============================================

export const ipWhitelist = (allowedIPs: string[]) => {
  return async (c: Context, next: Next) => {
    const clientIP = c.req.header('x-forwarded-for') || 
                    c.req.header('cf-connecting-ip') || 
                    'unknown'

    if (!allowedIPs.includes(clientIP) && !allowedIPs.includes('*')) {
      return c.json({
        success: false,
        error: 'Access denied from your IP address'
      }, 403)
    }

    await next()
  }
}

// ============================================
// REQUEST SIZE LIMITER
// ============================================

export const requestSizeLimit = (maxSizeBytes: number) => {
  return async (c: Context, next: Next) => {
    const contentLength = c.req.header('content-length')
    
    if (contentLength && parseInt(contentLength) > maxSizeBytes) {
      return c.json({
        success: false,
        error: `Request body too large. Maximum size: ${maxSizeBytes} bytes`
      }, 413)
    }

    await next()
  }
}

// ============================================
// ADMIN AUTHENTICATION (Enhanced)
// ============================================

export const enhancedAdminAuth = async (c: Context, next: Next) => {
  const db = c.get('db')
  const authHeader = c.req.header('Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ success: false, error: 'Unauthorized' }, 401)
  }

  const token = authHeader.substring(7)
  
  // Get session with user details
  const session = await db.db.prepare(`
    SELECT 
      s.id as session_id,
      s.expires_at,
      u.id as user_id,
      u.email,
      u.role,
      u.status,
      u.last_login
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ?
    LIMIT 1
  `).bind(token).first()

  if (!session) {
    return c.json({ success: false, error: 'Invalid session' }, 401)
  }

  // Check session expiration
  const expiresAt = new Date(session.expires_at as string)
  if (expiresAt < new Date()) {
    return c.json({ success: false, error: 'Session expired' }, 401)
  }

  // Check admin role
  if (session.role !== 'admin') {
    return c.json({ success: false, error: 'Admin access required' }, 403)
  }

  // Check account status
  if (session.status !== 'active') {
    return c.json({ success: false, error: 'Account is not active' }, 403)
  }

  // Store user info in context
  c.set('currentUser', {
    id: session.user_id,
    email: session.email,
    role: session.role,
    sessionId: session.session_id
  })

  // Log admin action (will be implemented in audit module)
  c.set('auditAction', {
    userId: session.user_id,
    action: `${c.req.method} ${c.req.path}`,
    timestamp: new Date().toISOString()
  })

  await next()
}

// ============================================
// BRUTE FORCE PROTECTION
// ============================================

interface BruteForceEntry {
  attempts: number
  lockUntil: number
}

export class BruteForceProtection {
  private store: Map<string, BruteForceEntry>
  private maxAttempts: number
  private lockDuration: number

  constructor(maxAttempts: number = 5, lockDurationMs: number = 900000) {
    this.store = new Map()
    this.maxAttempts = maxAttempts
    this.lockDuration = lockDurationMs

    // Cleanup every 5 minutes
    setInterval(() => this.cleanup(), 300000)
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, entry] of this.store.entries()) {
      if (entry.lockUntil < now) {
        this.store.delete(key)
      }
    }
  }

  recordAttempt(identifier: string): void {
    const now = Date.now()
    const entry = this.store.get(identifier) || { attempts: 0, lockUntil: 0 }
    
    entry.attempts++
    
    if (entry.attempts >= this.maxAttempts) {
      entry.lockUntil = now + this.lockDuration
    }
    
    this.store.set(identifier, entry)
  }

  resetAttempts(identifier: string): void {
    this.store.delete(identifier)
  }

  isLocked(identifier: string): boolean {
    const entry = this.store.get(identifier)
    if (!entry) return false
    
    const now = Date.now()
    if (entry.lockUntil < now) {
      this.store.delete(identifier)
      return false
    }
    
    return entry.attempts >= this.maxAttempts
  }

  getRemainingLockTime(identifier: string): number {
    const entry = this.store.get(identifier)
    if (!entry || entry.lockUntil < Date.now()) return 0
    
    return Math.ceil((entry.lockUntil - Date.now()) / 1000)
  }
}

// Export singleton instances
export const csrf = new CSRFProtection({
  secret: process.env.CSRF_SECRET || 'your-csrf-secret-change-in-production'
})

export const loginRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10
})

export const apiRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 100
})

export const adminRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 50
})

export const bruteForceProtection = new BruteForceProtection(5, 900000)
