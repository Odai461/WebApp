-- Migration: Add base_price and discount_price columns to products
-- Date: 2026-02-13
-- Description: Add columns that the code expects (base_price, discount_price) and migrate data from price/sale_price

-- Add new columns
ALTER TABLE products ADD COLUMN base_price REAL;
ALTER TABLE products ADD COLUMN discount_price REAL;

-- Copy data from old columns to new columns
UPDATE products SET base_price = price WHERE base_price IS NULL;
UPDATE products SET discount_price = sale_price WHERE discount_price IS NULL;

-- Create indexes for the new columns
CREATE INDEX IF NOT EXISTS idx_products_base_price ON products(base_price);
CREATE INDEX IF NOT EXISTS idx_products_discount_price ON products(discount_price);
