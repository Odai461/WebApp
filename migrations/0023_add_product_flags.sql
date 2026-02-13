-- Migration: Add missing product flag columns
-- Date: 2026-02-13
-- Description: Add is_bestseller and is_new columns

-- Add new columns
ALTER TABLE products ADD COLUMN is_bestseller INTEGER DEFAULT 0;
ALTER TABLE products ADD COLUMN is_new INTEGER DEFAULT 0;
ALTER TABLE products ADD COLUMN brand_id INTEGER;
ALTER TABLE products ADD COLUMN category_id INTEGER;

-- Copy category data if it exists as TEXT
UPDATE products SET category_id = (
  SELECT id FROM categories WHERE categories.slug = products.category OR categories.name = products.category LIMIT 1
) WHERE category_id IS NULL;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_products_bestseller ON products(is_bestseller);
CREATE INDEX IF NOT EXISTS idx_products_new ON products(is_new);
CREATE INDEX IF NOT EXISTS idx_products_brand_id ON products(brand_id);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);

-- Set some products as bestsellers and new (sample data)
UPDATE products SET is_bestseller = 1 WHERE sold_count > 0 OR rating >= 4.5;
UPDATE products SET is_new = 1 WHERE created_at >= datetime('now', '-30 days');
