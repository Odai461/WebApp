-- Migration 0025: Fix license_keys column naming
-- The code uses 'assigned_to_order_id' but schema has 'order_id'
-- Adding missing columns for consistency

-- Add assigned_to_order_id as alias for order_id
ALTER TABLE license_keys ADD COLUMN assigned_to_order_id INTEGER;

-- Add other missing columns that may be referenced
ALTER TABLE license_keys ADD COLUMN order_item_id INTEGER;
ALTER TABLE license_keys ADD COLUMN assigned_to_user_id INTEGER;
ALTER TABLE license_keys ADD COLUMN download_count INTEGER DEFAULT 0;
ALTER TABLE license_keys ADD COLUMN last_downloaded_at DATETIME;

-- Create indexes for new columns
CREATE INDEX IF NOT EXISTS idx_license_keys_assigned_to_order_id ON license_keys(assigned_to_order_id);
CREATE INDEX IF NOT EXISTS idx_license_keys_assigned_to_user_id ON license_keys(assigned_to_user_id);
CREATE INDEX IF NOT EXISTS idx_license_keys_order_item_id ON license_keys(order_item_id);

-- Copy data from order_id to assigned_to_order_id for existing records
UPDATE license_keys SET assigned_to_order_id = order_id WHERE order_id IS NOT NULL;
