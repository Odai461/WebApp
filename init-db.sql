-- Quick database initialization script
-- Run this to create all necessary tables for import

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_id INTEGER,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS category_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  language TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  UNIQUE(category_id, language)
);

CREATE TABLE IF NOT EXISTS brands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  is_featured INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  woocommerce_id TEXT,
  sku TEXT UNIQUE NOT NULL,
  category_id INTEGER NOT NULL,
  brand_id INTEGER,
  slug TEXT UNIQUE NOT NULL,
  product_type TEXT NOT NULL DEFAULT 'license',
  base_price DECIMAL(10, 2) NOT NULL,
  discount_price DECIMAL(10, 2),
  discount_percentage INTEGER,
  vat_rate DECIMAL(5, 2) DEFAULT 19.00,
  stock_type TEXT DEFAULT 'unlimited',
  available_licenses INTEGER DEFAULT 0,
  license_type TEXT,
  license_duration TEXT,
  delivery_type TEXT DEFAULT 'instant',
  activation_limit INTEGER DEFAULT 1,
  is_featured INTEGER DEFAULT 0,
  is_new INTEGER DEFAULT 0,
  is_bestseller INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  rating_average DECIMAL(3, 2) DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  language TEXT NOT NULL,
  name TEXT NOT NULL,
  short_description TEXT,
  long_description TEXT,
  features TEXT,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  UNIQUE(product_id, language)
);

CREATE TABLE IF NOT EXISTS product_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INTEGER DEFAULT 0,
  is_primary INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_products_woocommerce_id ON products(woocommerce_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_product_translations_product ON product_translations(product_id);
CREATE INDEX IF NOT EXISTS idx_product_translations_language ON product_translations(language);
CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_categories_parent ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_category_translations_category ON category_translations(category_id);
