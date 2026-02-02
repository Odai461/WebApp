-- Migration: Language Management System
-- Creates tables for multi-language support with dynamic translations

-- Table: languages
-- Stores all available languages
CREATE TABLE IF NOT EXISTS languages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL UNIQUE, -- ISO 639-1 code (de, en, fr, etc.)
  name TEXT NOT NULL, -- Language name
  native_name TEXT NOT NULL, -- Native language name (Deutsch, English, etc.)
  flag_emoji TEXT, -- Flag emoji for UI
  is_active INTEGER DEFAULT 1, -- 1 = active, 0 = inactive
  is_default INTEGER DEFAULT 0, -- 1 = default language, 0 = not default
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table: translations
-- Stores all translatable text strings
CREATE TABLE IF NOT EXISTS translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  translation_key TEXT NOT NULL, -- Unique key for the text (e.g., 'header.products')
  language_code TEXT NOT NULL,
  translated_text TEXT NOT NULL,
  context TEXT, -- Optional context/description
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (language_code) REFERENCES languages(code) ON DELETE CASCADE,
  UNIQUE(translation_key, language_code)
);

-- Table: page_translations
-- Stores translations for static pages
CREATE TABLE IF NOT EXISTS page_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  page_slug TEXT NOT NULL, -- Page identifier (e.g., 'about', 'contact')
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  meta_title TEXT,
  meta_description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (language_code) REFERENCES languages(code) ON DELETE CASCADE,
  UNIQUE(page_slug, language_code)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_languages_code ON languages(code);
CREATE INDEX IF NOT EXISTS idx_languages_active ON languages(is_active);
CREATE INDEX IF NOT EXISTS idx_translations_key ON translations(translation_key);
CREATE INDEX IF NOT EXISTS idx_translations_lang ON translations(language_code);
CREATE INDEX IF NOT EXISTS idx_page_translations_slug ON page_translations(page_slug);
CREATE INDEX IF NOT EXISTS idx_page_translations_lang ON page_translations(language_code);

-- Insert default languages
INSERT OR IGNORE INTO languages (code, name, native_name, flag_emoji, is_active, is_default, sort_order) VALUES
  ('de', 'German', 'Deutsch', '🇩🇪', 1, 1, 1),
  ('en', 'English', 'English', '🇬🇧', 1, 0, 2),
  ('fr', 'French', 'Français', '🇫🇷', 1, 0, 3),
  ('es', 'Spanish', 'Español', '🇪🇸', 0, 0, 4),
  ('it', 'Italian', 'Italiano', '🇮🇹', 0, 0, 5);

-- Insert sample translations for German (default)
INSERT OR IGNORE INTO translations (translation_key, language_code, translated_text, context) VALUES
  ('nav.home', 'de', 'Startseite', 'Main navigation'),
  ('nav.products', 'de', 'Produkte', 'Main navigation'),
  ('nav.about', 'de', 'Über uns', 'Main navigation'),
  ('nav.contact', 'de', 'Kontakt', 'Main navigation'),
  ('nav.cart', 'de', 'Warenkorb', 'Main navigation'),
  ('nav.account', 'de', 'Mein Konto', 'Main navigation'),
  ('footer.company', 'de', 'Unternehmen', 'Footer section'),
  ('footer.support', 'de', 'Support', 'Footer section'),
  ('footer.legal', 'de', 'Rechtliches', 'Footer section'),
  ('button.buy_now', 'de', 'Jetzt kaufen', 'Call to action'),
  ('button.add_to_cart', 'de', 'In den Warenkorb', 'Shopping action'),
  ('button.checkout', 'de', 'Zur Kasse', 'Shopping action');

-- Insert sample translations for English
INSERT OR IGNORE INTO translations (translation_key, language_code, translated_text, context) VALUES
  ('nav.home', 'en', 'Home', 'Main navigation'),
  ('nav.products', 'en', 'Products', 'Main navigation'),
  ('nav.about', 'en', 'About Us', 'Main navigation'),
  ('nav.contact', 'en', 'Contact', 'Main navigation'),
  ('nav.cart', 'en', 'Cart', 'Main navigation'),
  ('nav.account', 'en', 'My Account', 'Main navigation'),
  ('footer.company', 'en', 'Company', 'Footer section'),
  ('footer.support', 'en', 'Support', 'Footer section'),
  ('footer.legal', 'en', 'Legal', 'Footer section'),
  ('button.buy_now', 'en', 'Buy Now', 'Call to action'),
  ('button.add_to_cart', 'en', 'Add to Cart', 'Shopping action'),
  ('button.checkout', 'en', 'Checkout', 'Shopping action');

-- Insert sample translations for French
INSERT OR IGNORE INTO translations (translation_key, language_code, translated_text, context) VALUES
  ('nav.home', 'fr', 'Accueil', 'Main navigation'),
  ('nav.products', 'fr', 'Produits', 'Main navigation'),
  ('nav.about', 'fr', 'À propos', 'Main navigation'),
  ('nav.contact', 'fr', 'Contact', 'Main navigation'),
  ('nav.cart', 'fr', 'Panier', 'Main navigation'),
  ('nav.account', 'fr', 'Mon Compte', 'Main navigation'),
  ('footer.company', 'fr', 'Entreprise', 'Footer section'),
  ('footer.support', 'fr', 'Support', 'Footer section'),
  ('footer.legal', 'fr', 'Légal', 'Footer section'),
  ('button.buy_now', 'fr', 'Acheter maintenant', 'Call to action'),
  ('button.add_to_cart', 'fr', 'Ajouter au panier', 'Shopping action'),
  ('button.checkout', 'fr', 'Commander', 'Shopping action');
