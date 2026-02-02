-- SOFTWAREKING24 - Additional Tables for Admin Functionality
-- This migration adds essential tables needed by the admin panel

-- ============================================================================
-- CATEGORIES
-- ============================================================================

CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    parent_id INTEGER,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    image_url TEXT,
    sort_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    meta_title TEXT,
    meta_description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_is_active ON categories(is_active);

-- Seed categories
INSERT OR IGNORE INTO categories (id, name, slug, description, icon, is_active) VALUES
(1, 'Office Software', 'office', 'Microsoft Office und Alternativen', 'briefcase', 1),
(2, 'Antivirus', 'antivirus', 'Antivirus und Sicherheitssoftware', 'shield-alt', 1),
(3, 'Games', 'games', 'PC Spiele und Gaming', 'gamepad', 1),
(4, 'Development', 'development', 'Entwicklertools und IDEs', 'code', 1),
(5, 'Server', 'server', 'Server-Software und Lizenzen', 'server', 1),
(6, 'PC & Windows', 'pc-windows', 'Windows Betriebssysteme', 'desktop', 1);

-- ============================================================================
-- LICENSE KEYS
-- ============================================================================

CREATE TABLE IF NOT EXISTS license_keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    order_id INTEGER,
    license_key TEXT UNIQUE NOT NULL,
    key_type TEXT DEFAULT 'standard',
    status TEXT DEFAULT 'available' CHECK(status IN ('available', 'assigned', 'used', 'expired', 'revoked')),
    activation_limit INTEGER DEFAULT 1,
    activation_count INTEGER DEFAULT 0,
    expires_at DATETIME,
    assigned_at DATETIME,
    activated_at DATETIME,
    revoked_at DATETIME,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_license_keys_product_id ON license_keys(product_id);
CREATE INDEX IF NOT EXISTS idx_license_keys_order_id ON license_keys(order_id);
CREATE INDEX IF NOT EXISTS idx_license_keys_status ON license_keys(status);
CREATE INDEX IF NOT EXISTS idx_license_keys_license_key ON license_keys(license_key);

-- ============================================================================
-- EMAIL TEMPLATES
-- ============================================================================

CREATE TABLE IF NOT EXISTS email_templates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    subject TEXT NOT NULL,
    body_html TEXT NOT NULL,
    body_text TEXT,
    variables TEXT, -- JSON array of available variables
    category TEXT DEFAULT 'transactional',
    language TEXT DEFAULT 'de',
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_email_templates_name ON email_templates(name);
CREATE INDEX IF NOT EXISTS idx_email_templates_category ON email_templates(category);

-- Seed email templates
INSERT OR IGNORE INTO email_templates (id, name, subject, body_html, body_text, category, is_active) VALUES
(1, 'order_confirmation', 'Bestellbestätigung - {{order_number}}', 
  '<h1>Vielen Dank für Ihre Bestellung!</h1><p>Ihre Bestellnummer: {{order_number}}</p>',
  'Vielen Dank für Ihre Bestellung! Bestellnummer: {{order_number}}', 
  'orders', 1),
(2, 'license_delivery', 'Ihre Software-Lizenz - {{product_name}}',
  '<h1>Ihre Lizenz ist bereit!</h1><p>Lizenzschlüssel: {{license_key}}</p>',
  'Ihre Lizenz ist bereit! Lizenzschlüssel: {{license_key}}',
  'licenses', 1);

-- ============================================================================
-- COUPONS
-- ============================================================================

CREATE TABLE IF NOT EXISTS coupons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    description TEXT,
    discount_type TEXT DEFAULT 'percentage' CHECK(discount_type IN ('percentage', 'fixed', 'free_shipping')),
    discount_value REAL NOT NULL,
    min_purchase_amount REAL DEFAULT 0,
    max_discount_amount REAL,
    usage_limit INTEGER,
    usage_count INTEGER DEFAULT 0,
    usage_limit_per_customer INTEGER DEFAULT 1,
    valid_from DATETIME,
    valid_until DATETIME,
    applicable_products TEXT, -- JSON array of product IDs
    applicable_categories TEXT, -- JSON array of category IDs
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons(code);
CREATE INDEX IF NOT EXISTS idx_coupons_is_active ON coupons(is_active);
CREATE INDEX IF NOT EXISTS idx_coupons_valid_until ON coupons(valid_until);

-- ============================================================================
-- NEWSLETTER SUBSCRIBERS
-- ============================================================================

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    first_name TEXT,
    last_name TEXT,
    status TEXT DEFAULT 'subscribed' CHECK(status IN ('subscribed', 'unsubscribed', 'pending')),
    confirmation_token TEXT,
    confirmed_at DATETIME,
    unsubscribed_at DATETIME,
    source TEXT DEFAULT 'website',
    tags TEXT, -- JSON array
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);

-- ============================================================================
-- COOKIE CONSENT (GDPR)
-- ============================================================================

CREATE TABLE IF NOT EXISTS cookie_consent (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT NOT NULL,
    consent_given INTEGER DEFAULT 0,
    consent_types TEXT, -- JSON: {analytics: true, marketing: false}
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cookie_consent_visitor_id ON cookie_consent(visitor_id);

-- ============================================================================
-- CONTACT MESSAGES
-- ============================================================================

CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK(status IN ('new', 'read', 'replied', 'archived')),
    replied_at DATETIME,
    replied_by INTEGER,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (replied_by) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- ============================================================================
-- ACTIVITY LOG
-- ============================================================================

CREATE TABLE IF NOT EXISTS activity_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    action TEXT NOT NULL,
    entity_type TEXT,
    entity_id INTEGER,
    description TEXT,
    ip_address TEXT,
    user_agent TEXT,
    metadata TEXT, -- JSON
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_activity_log_user_id ON activity_log(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_action ON activity_log(action);
CREATE INDEX IF NOT EXISTS idx_activity_log_entity ON activity_log(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON activity_log(created_at);
