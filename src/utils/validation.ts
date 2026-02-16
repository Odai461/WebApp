/**
 * Input Validation & Sanitization Utilities
 * Comprehensive validation for all user inputs
 */

export interface ValidationResult {
  valid: boolean
  errors: string[]
  sanitized?: any
}

/**
 * Validate email address
 */
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = []
  
  if (!email || typeof email !== 'string') {
    errors.push('Email is required')
    return { valid: false, errors }
  }

  const sanitized = email.trim().toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(sanitized)) {
    errors.push('Invalid email format')
  }

  if (sanitized.length > 255) {
    errors.push('Email too long (max 255 characters)')
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: errors.length === 0 ? sanitized : undefined,
  }
}

/**
 * Validate and sanitize string input
 */
export function validateString(
  value: any,
  options: {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    trim?: boolean
  } = {}
): ValidationResult {
  const {
    required = false,
    minLength = 0,
    maxLength = 10000,
    pattern,
    trim = true,
  } = options

  const errors: string[] = []

  if (!value && required) {
    errors.push('This field is required')
    return { valid: false, errors }
  }

  if (!value && !required) {
    return { valid: true, errors: [], sanitized: '' }
  }

  let sanitized = String(value)
  if (trim) sanitized = sanitized.trim()

  if (sanitized.length < minLength) {
    errors.push(`Minimum length is ${minLength} characters`)
  }

  if (sanitized.length > maxLength) {
    errors.push(`Maximum length is ${maxLength} characters`)
  }

  if (pattern && !pattern.test(sanitized)) {
    errors.push('Invalid format')
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: errors.length === 0 ? sanitized : undefined,
  }
}

/**
 * Validate number input
 */
export function validateNumber(
  value: any,
  options: {
    required?: boolean
    min?: number
    max?: number
    integer?: boolean
  } = {}
): ValidationResult {
  const { required = false, min, max, integer = false } = options
  const errors: string[] = []

  if ((value === null || value === undefined || value === '') && required) {
    errors.push('This field is required')
    return { valid: false, errors }
  }

  if ((value === null || value === undefined || value === '') && !required) {
    return { valid: true, errors: [], sanitized: null }
  }

  const num = Number(value)

  if (isNaN(num)) {
    errors.push('Must be a valid number')
    return { valid: false, errors }
  }

  if (integer && !Number.isInteger(num)) {
    errors.push('Must be an integer')
  }

  if (min !== undefined && num < min) {
    errors.push(`Minimum value is ${min}`)
  }

  if (max !== undefined && num > max) {
    errors.push(`Maximum value is ${max}`)
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: errors.length === 0 ? num : undefined,
  }
}

/**
 * Sanitize HTML content (remove dangerous tags and attributes)
 */
export function sanitizeHTML(html: string): string {
  if (!html) return ''

  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

  // Remove event handlers
  sanitized = sanitized.replace(/on\w+="[^"]*"/gi, '')
  sanitized = sanitized.replace(/on\w+='[^']*'/gi, '')

  // Remove javascript: protocol
  sanitized = sanitized.replace(/href="javascript:[^"]*"/gi, 'href="#"')
  sanitized = sanitized.replace(/href='javascript:[^']*'/gi, "href='#'")

  // Remove data URIs (potential XSS)
  sanitized = sanitized.replace(/src="data:[^"]*"/gi, 'src="#"')

  return sanitized
}

/**
 * Validate URL
 */
export function validateURL(url: string, options: { allowedProtocols?: string[] } = {}): ValidationResult {
  const { allowedProtocols = ['http', 'https'] } = options
  const errors: string[] = []

  if (!url) {
    errors.push('URL is required')
    return { valid: false, errors }
  }

  try {
    const parsed = new URL(url)

    if (!allowedProtocols.includes(parsed.protocol.replace(':', ''))) {
      errors.push(`Protocol must be one of: ${allowedProtocols.join(', ')}`)
    }

    return {
      valid: errors.length === 0,
      errors,
      sanitized: errors.length === 0 ? url : undefined,
    }
  } catch {
    errors.push('Invalid URL format')
    return { valid: false, errors }
  }
}

/**
 * Validate JSON input
 */
export function validateJSON(value: string): ValidationResult {
  const errors: string[] = []

  try {
    const parsed = JSON.parse(value)
    return {
      valid: true,
      errors: [],
      sanitized: parsed,
    }
  } catch (error) {
    errors.push('Invalid JSON format')
    return { valid: false, errors }
  }
}

/**
 * Validate object against schema
 */
export function validateObject<T extends Record<string, any>>(
  obj: any,
  schema: Record<string, (value: any) => ValidationResult>
): ValidationResult & { data?: T } {
  const errors: string[] = []
  const sanitized: any = {}

  for (const [key, validator] of Object.entries(schema)) {
    const result = validator(obj[key])

    if (!result.valid) {
      errors.push(`${key}: ${result.errors.join(', ')}`)
    } else if (result.sanitized !== undefined) {
      sanitized[key] = result.sanitized
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    data: errors.length === 0 ? sanitized as T : undefined,
  }
}

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map()

  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}

  check(identifier: string): { allowed: boolean; remaining: number; resetAt: number } {
    const now = Date.now()
    const requests = this.requests.get(identifier) || []

    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < this.windowMs)

    if (validRequests.length >= this.maxRequests) {
      const oldestRequest = Math.min(...validRequests)
      const resetAt = oldestRequest + this.windowMs

      return {
        allowed: false,
        remaining: 0,
        resetAt,
      }
    }

    // Add current request
    validRequests.push(now)
    this.requests.set(identifier, validRequests)

    return {
      allowed: true,
      remaining: this.maxRequests - validRequests.length,
      resetAt: now + this.windowMs,
    }
  }

  reset(identifier: string): void {
    this.requests.delete(identifier)
  }
}

/**
 * Validate file upload
 */
export function validateFile(
  file: { name: string; size: number; type: string },
  options: {
    maxSize?: number // in bytes
    allowedTypes?: string[]
    allowedExtensions?: string[]
  } = {}
): ValidationResult {
  const {
    maxSize = 10 * 1024 * 1024, // 10MB default
    allowedTypes = [],
    allowedExtensions = [],
  } = options

  const errors: string[] = []

  if (file.size > maxSize) {
    errors.push(`File size exceeds ${maxSize / 1024 / 1024}MB limit`)
  }

  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    errors.push(`File type ${file.type} not allowed`)
  }

  if (allowedExtensions.length > 0) {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!ext || !allowedExtensions.includes(ext)) {
      errors.push(`File extension .${ext} not allowed`)
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: file,
  }
}
