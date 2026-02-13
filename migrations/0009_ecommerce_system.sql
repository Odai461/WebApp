-- ============================================
-- E-Commerce System Migration
-- Created: 2026-02-13
-- ============================================

-- Shopping Cart table
CREATE TABLE IF NOT EXISTS shopping_carts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  session_id TEXT,
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'abandoned', 'converted')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_carts_user ON shopping_carts(user_id);
CREATE INDEX IF NOT EXISTS idx_carts_session ON shopping_carts(session_id);
CREATE INDEX IF NOT EXISTS idx_carts_status ON shopping_carts(status);

-- Shopping Cart Items table
CREATE TABLE IF NOT EXISTS cart_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cart_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK(quantity > 0),
  price DECIMAL(10, 2) NOT NULL,
  discount_price DECIMAL(10, 2),
  subtotal DECIMAL(10, 2) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cart_id) REFERENCES shopping_carts(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  UNIQUE(cart_id, product_id)
);

CREATE INDEX IF NOT EXISTS idx_cart_items_cart ON cart_items(cart_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_product ON cart_items(product_id);

-- Orders table (enhanced)
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_number TEXT UNIQUE NOT NULL,
  user_id INTEGER,
  cart_id INTEGER,
  
  -- Customer info
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  
  -- Billing address
  billing_address TEXT NOT NULL,
  billing_city TEXT NOT NULL,
  billing_postal_code TEXT NOT NULL,
  billing_country TEXT NOT NULL DEFAULT 'DE',
  
  -- Shipping address (optional, same as billing if not provided)
  shipping_address TEXT,
  shipping_city TEXT,
  shipping_postal_code TEXT,
  shipping_country TEXT,
  
  -- Order totals
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0,
  shipping_cost DECIMAL(10, 2) DEFAULT 0,
  tax_amount DECIMAL(10, 2) NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  
  -- Order status
  order_status TEXT DEFAULT 'pending' CHECK(order_status IN (
    'pending', 'processing', 'payment_pending', 'payment_failed', 
    'paid', 'fulfilled', 'shipped', 'delivered', 'cancelled', 'refunded'
  )),
  payment_status TEXT DEFAULT 'pending' CHECK(payment_status IN (
    'pending', 'processing', 'completed', 'failed', 'refunded', 'cancelled'
  )),
  
  -- Payment info
  payment_method TEXT,
  payment_id TEXT,
  payment_details TEXT, -- JSON
  
  -- Timestamps
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  paid_at DATETIME,
  shipped_at DATETIME,
  delivered_at DATETIME,
  
  -- Notes
  customer_notes TEXT,
  admin_notes TEXT,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (cart_id) REFERENCES shopping_carts(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(order_status);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);

-- Order Items table
CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  product_id INTEGER,
  
  -- Product snapshot (in case product is deleted/changed)
  product_sku TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_image_url TEXT,
  
  quantity INTEGER NOT NULL DEFAULT 1 CHECK(quantity > 0),
  unit_price DECIMAL(10, 2) NOT NULL,
  discount_price DECIMAL(10, 2),
  subtotal DECIMAL(10, 2) NOT NULL,
  
  -- License info (if applicable)
  license_key TEXT,
  license_assigned_at DATETIME,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_order_items_sku ON order_items(product_sku);

-- Order History / Status Changes
CREATE TABLE IF NOT EXISTS order_status_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  from_status TEXT,
  to_status TEXT NOT NULL,
  changed_by INTEGER, -- user_id or null for system
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (changed_by) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_order_history_order ON order_status_history(order_id);
CREATE INDEX IF NOT EXISTS idx_order_history_created ON order_status_history(created_at DESC);

-- Payment Transactions
CREATE TABLE IF NOT EXISTS payment_transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  transaction_id TEXT UNIQUE NOT NULL,
  payment_method TEXT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  status TEXT NOT NULL CHECK(status IN ('pending', 'completed', 'failed', 'refunded', 'cancelled')),
  
  -- Payment gateway response
  gateway_response TEXT, -- JSON
  error_message TEXT,
  
  -- Timestamps
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME,
  
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_payments_order ON payment_transactions(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_transaction ON payment_transactions(transaction_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payment_transactions(status);
