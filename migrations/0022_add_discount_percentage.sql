-- Migration: Add discount_percentage column to products
-- Date: 2026-02-13
-- Description: Add discount_percentage column and calculate from base_price and discount_price

-- Add new column
ALTER TABLE products ADD COLUMN discount_percentage REAL;

-- Calculate and populate discount_percentage
UPDATE products 
SET discount_percentage = ROUND(((base_price - discount_price) / base_price) * 100, 2)
WHERE discount_price IS NOT NULL AND discount_price > 0 AND base_price > 0;

-- Create index for the new column
CREATE INDEX IF NOT EXISTS idx_products_discount_percentage ON products(discount_percentage);
