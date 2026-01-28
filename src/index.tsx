import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import type { CloudflareBindings } from './types'
import { DatabaseHelper } from './lib/database'
import { Layout } from './renderer'
import { Homepage } from './components/homepage'
import { 
  formatPrice, 
  generateOrderNumber, 
  generateToken, 
  getSessionExpiration,
  hashPassword,
  verifyPassword,
  calculateVAT,
  safeJsonParse,
  generateProductSchema,
  generateFAQSchema
} from './utils/helpers'

type Env = {
  Bindings: CloudflareBindings
}

const app = new Hono<Env>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ============================================
// MIDDLEWARE: Database Helper
// ============================================

app.use('*', async (c, next) => {
  c.set('db', new DatabaseHelper(c.env.DB))
  await next()
})

// ============================================
// MIDDLEWARE: Language Detection
// ============================================

app.use('*', async (c, next) => {
  const url = new URL(c.req.url)
  const pathParts = url.pathname.split('/').filter(Boolean)
  const language = pathParts[0] === 'de' ? 'de' : 'en'
  c.set('language', language)
  await next()
})

// ============================================
// HOMEPAGE ROUTE
// ============================================

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Homepage />
    </Layout>
  )
})

app.get('/de', (c) => {
  return c.html(
    <Layout>
      <Homepage />
    </Layout>
  )
})

// ============================================
// API ROUTES: Products
// ============================================

app.get('/api/products/featured', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const language = c.get('language') || 'en'
    const limit = parseInt(c.req.query('limit') || '8')

    const products = await db.getFeaturedProducts(language, limit)

    return c.json({ success: true, data: products })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch featured products' }, 500)
  }
})

app.get('/api/products/bestsellers', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const language = c.get('language') || 'en'
    const limit = parseInt(c.req.query('limit') || '6')

    const products = await db.getBestsellerProducts(language, limit)

    return c.json({ success: true, data: products })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch bestseller products' }, 500)
  }
})

app.get('/api/products/new', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const language = c.get('language') || 'en'
    const limit = parseInt(c.req.query('limit') || '6')

    const products = await db.getNewProducts(language, limit)

    return c.json({ success: true, data: products })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch new products' }, 500)
  }
})

app.get('/api/products/:slug', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const language = c.get('language') || 'en'
    const slug = c.req.param('slug')

    const product = await db.getProductBySlug(slug, language)

    if (!product) {
      return c.json({ success: false, error: 'Product not found' }, 404)
    }

    return c.json({ success: true, data: product })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch product' }, 500)
  }
})

// ============================================
// API ROUTES: Categories
// ============================================

app.get('/api/categories', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const language = c.get('language') || 'en'

    const categories = await db.getAllCategories(language)

    return c.json({ success: true, data: categories })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch categories' }, 500)
  }
})

app.get('/api/categories/:slug/products', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const language = c.get('language') || 'en'
    const slug = c.req.param('slug')
    const page = parseInt(c.req.query('page') || '1')
    const limit = parseInt(c.req.query('limit') || '20')

    const result = await db.getProductsByCategory(slug, language, page, limit)

    return c.json({ success: true, data: result })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch category products' }, 500)
  }
})

// ============================================
// API ROUTES: Brands
// ============================================

app.get('/api/brands/featured', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const limit = parseInt(c.req.query('limit') || '8')

    const brands = await db.getFeaturedBrands(limit)

    return c.json({ success: true, data: brands })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch brands' }, 500)
  }
})

// ============================================
// API ROUTES: Authentication
// ============================================

app.post('/api/auth/register', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const body = await c.req.json()

    // Validate input
    if (!body.email || !body.password || !body.first_name || !body.last_name) {
      return c.json({ success: false, error: 'Missing required fields' }, 400)
    }

    // Check if user exists
    const existingUser = await db.getUserByEmail(body.email)
    if (existingUser) {
      return c.json({ success: false, error: 'Email already registered' }, 400)
    }

    // Hash password
    const passwordHash = await hashPassword(body.password)

    // Create user
    const userId = await db.createUser({
      email: body.email,
      password_hash: passwordHash,
      first_name: body.first_name,
      last_name: body.last_name,
      role: 'customer',
      language_preference: c.get('language') || 'en'
    })

    // Create session
    const token = generateToken()
    const expiresAt = getSessionExpiration()
    await db.createSession(userId, token, expiresAt)

    return c.json({ 
      success: true, 
      data: { 
        token,
        user: {
          id: userId,
          email: body.email,
          first_name: body.first_name,
          last_name: body.last_name,
          role: 'customer'
        }
      } 
    })
  } catch (error) {
    return c.json({ success: false, error: 'Registration failed' }, 500)
  }
})

app.post('/api/auth/login', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const body = await c.req.json()

    // Validate input
    if (!body.email || !body.password) {
      return c.json({ success: false, error: 'Missing email or password' }, 400)
    }

    // Get user
    const user = await db.getUserByEmail(body.email)
    if (!user) {
      return c.json({ success: false, error: 'Invalid credentials' }, 401)
    }

    // Verify password
    const isValid = await verifyPassword(body.password, user.password_hash)
    if (!isValid) {
      return c.json({ success: false, error: 'Invalid credentials' }, 401)
    }

    // Create session
    const token = generateToken()
    const expiresAt = getSessionExpiration()
    await db.createSession(user.id, token, expiresAt)

    return c.json({ 
      success: true, 
      data: { 
        token,
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          role: user.role
        }
      } 
    })
  } catch (error) {
    return c.json({ success: false, error: 'Login failed' }, 500)
  }
})

app.post('/api/auth/logout', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const authHeader = c.req.header('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ success: false, error: 'No token provided' }, 401)
    }

    const token = authHeader.substring(7)
    await db.deleteSession(token)

    return c.json({ success: true, message: 'Logged out successfully' })
  } catch (error) {
    return c.json({ success: false, error: 'Logout failed' }, 500)
  }
})

app.get('/api/auth/me', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const authHeader = c.req.header('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ success: false, error: 'No token provided' }, 401)
    }

    const token = authHeader.substring(7)
    const session = await db.getSessionByToken(token)

    if (!session) {
      return c.json({ success: false, error: 'Invalid or expired token' }, 401)
    }

    return c.json({ 
      success: true, 
      data: {
        id: session.user_id,
        email: session.email,
        first_name: session.first_name,
        last_name: session.last_name,
        role: session.role
      }
    })
  } catch (error) {
    return c.json({ success: false, error: 'Authentication failed' }, 500)
  }
})

// ============================================
// API ROUTES: Orders
// ============================================

app.post('/api/orders', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const body = await c.req.json()

    // Validate input
    if (!body.email || !body.first_name || !body.last_name || !body.items || body.items.length === 0) {
      return c.json({ success: false, error: 'Missing required fields' }, 400)
    }

    // Calculate totals
    let subtotal = 0
    const orderItems = []

    for (const item of body.items) {
      const product = await db.getProductBySlug(item.slug, c.get('language') || 'en')
      if (!product) {
        return c.json({ success: false, error: `Product not found: ${item.slug}` }, 400)
      }

      const price = product.discount_price || product.base_price
      const quantity = item.quantity || 1
      const itemTotal = price * quantity
      
      subtotal += itemTotal

      orderItems.push({
        product_id: product.id,
        product_name: product.name,
        product_sku: product.sku,
        quantity,
        unit_price: price,
        tax_rate: product.vat_rate,
        tax_amount: calculateVAT(itemTotal, product.vat_rate),
        total: itemTotal
      })
    }

    const taxAmount = calculateVAT(subtotal, 19.0) // Default VAT
    const total = subtotal + taxAmount

    // Create order
    const orderNumber = generateOrderNumber()
    const orderId = await db.createOrder({
      order_number: orderNumber,
      user_id: body.user_id || null,
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      company: body.company,
      vat_number: body.vat_number,
      country: body.country || 'DE',
      subtotal,
      tax_amount: taxAmount,
      discount_amount: 0,
      total,
      currency: 'EUR',
      language: c.get('language') || 'en'
    })

    // Add order items and assign license keys
    for (const item of orderItems) {
      await db.addOrderItem({
        order_id: orderId,
        ...item
      })

      // Assign license key if available
      const licenseKey = await db.getAvailableLicenseKey(item.product_id)
      if (licenseKey) {
        await db.assignLicenseKeyToOrder(licenseKey.id, orderId)
      }
    }

    return c.json({ 
      success: true, 
      data: {
        order_number: orderNumber,
        order_id: orderId,
        total,
        message: 'Order created successfully'
      }
    })
  } catch (error) {
    console.error('Order creation error:', error)
    return c.json({ success: false, error: 'Failed to create order' }, 500)
  }
})

app.get('/api/orders/:orderNumber', async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    const orderNumber = c.req.param('orderNumber')

    const order = await db.getOrderByNumber(orderNumber)

    if (!order) {
      return c.json({ success: false, error: 'Order not found' }, 404)
    }

    return c.json({ success: true, data: order })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch order' }, 500)
  }
})

// ============================================
// ADMIN API ROUTES (Protected)
// ============================================

// Admin middleware
const adminAuth = async (c: any, next: any) => {
  const db = c.get('db') as DatabaseHelper
  const authHeader = c.req.header('Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ success: false, error: 'Unauthorized' }, 401)
  }

  const token = authHeader.substring(7)
  const session = await db.getSessionByToken(token)

  if (!session || session.role !== 'admin') {
    return c.json({ success: false, error: 'Admin access required' }, 403)
  }

  c.set('currentUser', session)
  await next()
}

app.get('/api/admin/dashboard', adminAuth, async (c) => {
  try {
    const db = c.get('db') as DatabaseHelper
    
    // Get dashboard statistics
    const stats = {
      totalProducts: 0,
      totalOrders: 0,
      totalRevenue: 0,
      totalCustomers: 0
    }

    // You can add more complex queries here

    return c.json({ success: true, data: stats })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch dashboard data' }, 500)
  }
})

export default app
