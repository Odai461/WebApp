-- Analytics System Migration
-- Comprehensive user behavior, conversion, device, and traffic tracking

-- Page Views Table
CREATE TABLE IF NOT EXISTS analytics_page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  user_id INTEGER,
  page_url TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  ip_address TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT, -- 'desktop', 'mobile', 'tablet'
  browser TEXT,
  os TEXT,
  screen_resolution TEXT,
  duration_seconds INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- User Sessions Table
CREATE TABLE IF NOT EXISTS analytics_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL UNIQUE,
  user_id INTEGER,
  start_time DATETIME NOT NULL,
  end_time DATETIME,
  duration_seconds INTEGER,
  pages_visited INTEGER DEFAULT 0,
  is_bounce INTEGER DEFAULT 0, -- 1 if only one page visited
  device_type TEXT,
  browser TEXT,
  os TEXT,
  country TEXT,
  traffic_source TEXT, -- 'direct', 'search', 'social', 'email', 'referral'
  traffic_medium TEXT,
  traffic_campaign TEXT,
  landing_page TEXT,
  exit_page TEXT,
  converted INTEGER DEFAULT 0, -- 1 if user made a purchase
  conversion_value REAL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Events Table (clicks, form submissions, etc.)
CREATE TABLE IF NOT EXISTS analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  user_id INTEGER,
  event_type TEXT NOT NULL, -- 'click', 'form_submit', 'add_to_cart', 'purchase', etc.
  event_category TEXT,
  event_action TEXT,
  event_label TEXT,
  event_value REAL,
  page_url TEXT,
  element_id TEXT,
  element_class TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Conversion Funnel Table
CREATE TABLE IF NOT EXISTS analytics_funnel_steps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  user_id INTEGER,
  step_name TEXT NOT NULL, -- 'home', 'product_view', 'cart', 'checkout', 'purchase'
  step_order INTEGER NOT NULL,
  completed INTEGER DEFAULT 0,
  completed_at DATETIME,
  time_spent_seconds INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Traffic Sources Table
CREATE TABLE IF NOT EXISTS analytics_traffic_sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  source TEXT, -- 'google', 'facebook', 'direct', etc.
  medium TEXT, -- 'organic', 'cpc', 'social', 'email', 'referral'
  campaign TEXT,
  keyword TEXT,
  referrer_url TEXT,
  landing_page TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Product Analytics Table
CREATE TABLE IF NOT EXISTS analytics_product_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  user_id INTEGER,
  product_id INTEGER NOT NULL,
  view_duration_seconds INTEGER DEFAULT 0,
  added_to_cart INTEGER DEFAULT 0,
  purchased INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Search Queries Table
CREATE TABLE IF NOT EXISTS analytics_search_queries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  user_id INTEGER,
  query TEXT NOT NULL,
  results_count INTEGER DEFAULT 0,
  clicked_result INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_page_views_session ON analytics_page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_user ON analytics_page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created ON analytics_page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON analytics_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created ON analytics_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_events_session ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_events_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_events_created ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_funnel_session ON analytics_funnel_steps(session_id);
CREATE INDEX IF NOT EXISTS idx_funnel_step ON analytics_funnel_steps(step_name);
CREATE INDEX IF NOT EXISTS idx_traffic_created ON analytics_traffic_sources(created_at);
CREATE INDEX IF NOT EXISTS idx_product_views_product ON analytics_product_views(product_id);
CREATE INDEX IF NOT EXISTS idx_product_views_created ON analytics_product_views(created_at);
CREATE INDEX IF NOT EXISTS idx_search_queries_created ON analytics_search_queries(created_at);

-- Insert sample analytics data for testing
-- Sample sessions
INSERT OR IGNORE INTO analytics_sessions (id, session_id, user_id, start_time, end_time, duration_seconds, pages_visited, is_bounce, device_type, browser, os, country, traffic_source, traffic_medium, landing_page, exit_page, converted, conversion_value) VALUES
(1, 'sess_001', 1, datetime('now', '-2 hours'), datetime('now', '-1 hour 45 minutes'), 900, 5, 0, 'desktop', 'Chrome', 'Windows', 'DE', 'search', 'organic', '/products', '/checkout/success', 1, 149.99),
(2, 'sess_002', 2, datetime('now', '-1 hour'), datetime('now', '-55 minutes'), 300, 3, 0, 'mobile', 'Safari', 'iOS', 'AT', 'social', 'facebook', '/home', '/cart', 0, 0),
(3, 'sess_003', NULL, datetime('now', '-30 minutes'), datetime('now', '-29 minutes'), 60, 1, 1, 'desktop', 'Firefox', 'macOS', 'CH', 'direct', 'none', '/home', '/home', 0, 0),
(4, 'sess_004', 3, datetime('now', '-45 minutes'), datetime('now', '-30 minutes'), 900, 7, 0, 'tablet', 'Chrome', 'Android', 'DE', 'email', 'newsletter', '/products/special', '/checkout/success', 1, 299.99),
(5, 'sess_005', NULL, datetime('now', '-20 minutes'), datetime('now', '-15 minutes'), 300, 2, 0, 'mobile', 'Chrome', 'Android', 'DE', 'search', 'cpc', '/products', '/product/123', 0, 0);

-- Sample page views
INSERT OR IGNORE INTO analytics_page_views (session_id, user_id, page_url, page_title, device_type, browser, os, duration_seconds) VALUES
('sess_001', 1, '/home', 'Homepage', 'desktop', 'Chrome', 'Windows', 120),
('sess_001', 1, '/products', 'Products', 'desktop', 'Chrome', 'Windows', 300),
('sess_001', 1, '/product/123', 'Product Detail', 'desktop', 'Chrome', 'Windows', 180),
('sess_001', 1, '/cart', 'Shopping Cart', 'desktop', 'Chrome', 'Windows', 120),
('sess_001', 1, '/checkout/success', 'Order Success', 'desktop', 'Chrome', 'Windows', 180),
('sess_002', 2, '/home', 'Homepage', 'mobile', 'Safari', 'iOS', 60),
('sess_002', 2, '/products', 'Products', 'mobile', 'Safari', 'iOS', 180),
('sess_002', 2, '/cart', 'Shopping Cart', 'mobile', 'Safari', 'iOS', 60),
('sess_003', NULL, '/home', 'Homepage', 'desktop', 'Firefox', 'macOS', 60),
('sess_004', 3, '/products/special', 'Special Offers', 'tablet', 'Chrome', 'Android', 120);

-- Sample events
INSERT OR IGNORE INTO analytics_events (session_id, user_id, event_type, event_category, event_action, event_label, event_value, page_url) VALUES
('sess_001', 1, 'click', 'product', 'view', 'Product 123', NULL, '/product/123'),
('sess_001', 1, 'add_to_cart', 'ecommerce', 'add', 'Product 123', 149.99, '/product/123'),
('sess_001', 1, 'purchase', 'ecommerce', 'transaction', 'Order 123', 149.99, '/checkout/success'),
('sess_002', 2, 'click', 'navigation', 'menu', 'Products', NULL, '/home'),
('sess_002', 2, 'add_to_cart', 'ecommerce', 'add', 'Product 456', 79.99, '/products'),
('sess_004', 3, 'click', 'promotion', 'banner', 'Special Offer', NULL, '/products/special'),
('sess_004', 3, 'add_to_cart', 'ecommerce', 'add', 'Product 789', 299.99, '/products/special'),
('sess_004', 3, 'purchase', 'ecommerce', 'transaction', 'Order 124', 299.99, '/checkout/success');

-- Sample funnel steps
INSERT OR IGNORE INTO analytics_funnel_steps (session_id, user_id, step_name, step_order, completed, completed_at, time_spent_seconds) VALUES
('sess_001', 1, 'home', 1, 1, datetime('now', '-2 hours'), 120),
('sess_001', 1, 'product_view', 2, 1, datetime('now', '-1 hour 50 minutes'), 300),
('sess_001', 1, 'cart', 3, 1, datetime('now', '-1 hour 50 minutes'), 120),
('sess_001', 1, 'checkout', 4, 1, datetime('now', '-1 hour 48 minutes'), 180),
('sess_001', 1, 'purchase', 5, 1, datetime('now', '-1 hour 45 minutes'), 180),
('sess_002', 2, 'home', 1, 1, datetime('now', '-1 hour'), 60),
('sess_002', 2, 'product_view', 2, 1, datetime('now', '-59 minutes'), 180),
('sess_002', 2, 'cart', 3, 1, datetime('now', '-56 minutes'), 60),
('sess_002', 2, 'checkout', 4, 0, NULL, 0);

-- Sample traffic sources
INSERT OR IGNORE INTO analytics_traffic_sources (session_id, source, medium, campaign, keyword, referrer_url, landing_page) VALUES
('sess_001', 'google', 'organic', NULL, 'software shop', 'https://www.google.com', '/products'),
('sess_002', 'facebook', 'social', 'spring_sale', NULL, 'https://www.facebook.com', '/home'),
('sess_003', 'direct', 'none', NULL, NULL, NULL, '/home'),
('sess_004', 'newsletter', 'email', 'weekly_newsletter', NULL, NULL, '/products/special'),
('sess_005', 'google', 'cpc', 'search_ads', 'software', 'https://www.google.com', '/products');

-- Sample product views
INSERT OR IGNORE INTO analytics_product_views (session_id, user_id, product_id, view_duration_seconds, added_to_cart, purchased) VALUES
('sess_001', 1, 1, 180, 1, 1),
('sess_002', 2, 2, 120, 1, 0),
('sess_004', 3, 3, 90, 1, 1),
('sess_005', NULL, 1, 60, 0, 0);

-- Sample search queries
INSERT OR IGNORE INTO analytics_search_queries (session_id, user_id, query, results_count, clicked_result) VALUES
('sess_001', 1, 'windows software', 15, 1),
('sess_002', 2, 'office suite', 8, 1),
('sess_005', NULL, 'antivirus', 12, 0);
