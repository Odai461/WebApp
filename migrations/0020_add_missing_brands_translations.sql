-- Migration: Add missing brands and translation tables
-- Date: 2026-02-13
-- Description: Add brands, category_translations, and brand_translations tables

-- Brands table
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

CREATE INDEX IF NOT EXISTS idx_brands_slug ON brands(slug);
CREATE INDEX IF NOT EXISTS idx_brands_featured ON brands(is_featured);

-- Category Translations
CREATE TABLE IF NOT EXISTS category_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  language TEXT NOT NULL DEFAULT 'de',
  name TEXT NOT NULL,
  description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
  UNIQUE(category_id, language)
);

CREATE INDEX IF NOT EXISTS idx_category_translations_category ON category_translations(category_id);
CREATE INDEX IF NOT EXISTS idx_category_translations_language ON category_translations(language);

-- Brand Translations
CREATE TABLE IF NOT EXISTS brand_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand_id INTEGER NOT NULL,
  language TEXT NOT NULL DEFAULT 'de',
  name TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE,
  UNIQUE(brand_id, language)
);

CREATE INDEX IF NOT EXISTS idx_brand_translations_brand ON brand_translations(brand_id);
CREATE INDEX IF NOT EXISTS idx_brand_translations_language ON brand_translations(language);

-- Insert sample brands
INSERT OR IGNORE INTO brands (id, name, slug, logo_url, website_url, is_featured, sort_order) VALUES
(1, 'Microsoft', 'microsoft', '/static/images/brands/microsoft.png', 'https://www.microsoft.com', 1, 1),
(2, 'Adobe', 'adobe', '/static/images/brands/adobe.png', 'https://www.adobe.com', 1, 2),
(3, 'Kaspersky', 'kaspersky', '/static/images/brands/kaspersky.png', 'https://www.kaspersky.com', 1, 3),
(4, 'Bitdefender', 'bitdefender', '/static/images/brands/bitdefender.png', 'https://www.bitdefender.com', 1, 4);

-- Insert sample category translations (using actual categories from database)
INSERT OR IGNORE INTO category_translations (category_id, language, name, description) VALUES
(1, 'de', 'Office Software', 'Microsoft Office und Büroanwendungen'),
(1, 'en', 'Office Software', 'Microsoft Office and Office Applications'),
(2, 'de', 'Antivirus', 'Antivirus und Sicherheitssoftware'),
(2, 'en', 'Antivirus', 'Antivirus and Security Software'),
(3, 'de', 'Spiele', 'PC Spiele und Gaming Software'),
(3, 'en', 'Games', 'PC Games and Gaming Software'),
(4, 'de', 'Entwicklung', 'Entwicklungstools und IDEs'),
(4, 'en', 'Development', 'Development Tools and IDEs'),
(5, 'de', 'Server', 'Server Betriebssysteme und Software'),
(5, 'en', 'Server', 'Server Operating Systems and Software'),
(6, 'de', 'PC & Windows', 'Windows Betriebssysteme und PC Software'),
(6, 'en', 'PC & Windows', 'Windows Operating Systems and PC Software');

-- Insert sample brand translations
INSERT OR IGNORE INTO brand_translations (brand_id, language, name, description) VALUES
(1, 'de', 'Microsoft', 'Microsoft Produkte und Lizenzen'),
(1, 'en', 'Microsoft', 'Microsoft Products and Licenses'),
(2, 'de', 'Adobe', 'Adobe Creative Cloud Produkte'),
(2, 'en', 'Adobe', 'Adobe Creative Cloud Products'),
(3, 'de', 'Kaspersky', 'Kaspersky Antivirus Software'),
(3, 'en', 'Kaspersky', 'Kaspersky Antivirus Software'),
(4, 'de', 'Bitdefender', 'Bitdefender Sicherheitssoftware'),
(4, 'en', 'Bitdefender', 'Bitdefender Security Software');
