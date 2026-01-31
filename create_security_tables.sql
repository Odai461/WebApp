-- Security Tables for Advanced Security Features
-- Tables: firewall_rules, blocked_ips, login_protection_settings, user_roles, user_2fa, file_protection_rules

-- Firewall Rules
CREATE TABLE IF NOT EXISTS firewall_rules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rule_name TEXT NOT NULL,
  rule_type TEXT NOT NULL, -- 'allow', 'deny', 'rate_limit'
  ip_address TEXT,
  ip_range TEXT,
  country_code TEXT,
  user_agent TEXT,
  path_pattern TEXT,
  method TEXT, -- 'GET', 'POST', 'PUT', 'DELETE', '*'
  priority INTEGER DEFAULT 100,
  max_requests INTEGER, -- for rate_limit
  time_window INTEGER, -- seconds, for rate_limit
  action TEXT DEFAULT 'block', -- 'block', 'challenge', 'log'
  is_active INTEGER DEFAULT 1,
  description TEXT,
  created_by INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_firewall_rules_active ON firewall_rules(is_active);
CREATE INDEX IF NOT EXISTS idx_firewall_rules_priority ON firewall_rules(priority);

-- Blocked IPs
CREATE TABLE IF NOT EXISTS blocked_ips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_address TEXT NOT NULL UNIQUE,
  reason TEXT NOT NULL,
  block_type TEXT DEFAULT 'manual', -- 'manual', 'auto', 'firewall'
  severity TEXT DEFAULT 'medium', -- 'low', 'medium', 'high', 'critical'
  blocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  blocked_by INTEGER,
  expires_at DATETIME,
  unblocked_at DATETIME,
  unblocked_by INTEGER,
  is_active INTEGER DEFAULT 1,
  attempts_count INTEGER DEFAULT 0,
  last_attempt_at DATETIME,
  notes TEXT,
  FOREIGN KEY (blocked_by) REFERENCES users(id),
  FOREIGN KEY (unblocked_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_blocked_ips_active ON blocked_ips(is_active);
CREATE INDEX IF NOT EXISTS idx_blocked_ips_address ON blocked_ips(ip_address);

-- Login Protection Settings
CREATE TABLE IF NOT EXISTS login_protection_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setting_name TEXT NOT NULL UNIQUE,
  setting_value TEXT,
  is_enabled INTEGER DEFAULT 1,
  updated_by INTEGER,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (updated_by) REFERENCES users(id)
);

-- Insert default login protection settings
INSERT OR IGNORE INTO login_protection_settings (setting_name, setting_value, is_enabled) VALUES
  ('max_failed_attempts', '5', 1),
  ('lockout_duration', '900', 1), -- 15 minutes in seconds
  ('rate_limit_window', '60', 1), -- 1 minute
  ('rate_limit_max', '10', 1), -- max 10 attempts per minute
  ('require_captcha_after', '3', 1), -- show captcha after 3 failed attempts
  ('enable_2fa', '0', 0),
  ('session_timeout', '3600', 1), -- 1 hour
  ('require_strong_password', '1', 1);

-- User Roles and Permissions
CREATE TABLE IF NOT EXISTS user_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  role_name TEXT NOT NULL UNIQUE,
  role_slug TEXT NOT NULL UNIQUE,
  description TEXT,
  permissions TEXT, -- JSON array of permissions
  is_system INTEGER DEFAULT 0, -- system roles cannot be deleted
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert default roles
INSERT OR IGNORE INTO user_roles (role_name, role_slug, description, permissions, is_system) VALUES
  ('Administrator', 'admin', 'Full system access', '["all"]', 1),
  ('Customer', 'customer', 'Regular customer access', '["view_products", "make_orders", "view_own_orders"]', 1),
  ('Support', 'support', 'Customer support access', '["view_products", "view_orders", "manage_tickets"]', 1),
  ('Manager', 'manager', 'Store manager access', '["manage_products", "view_orders", "manage_customers"]', 0);

-- Add role_id to users table if not exists (via ALTER - handled separately)
-- ALTER TABLE users ADD COLUMN role_id INTEGER DEFAULT 2 REFERENCES user_roles(id);

-- Two-Factor Authentication
CREATE TABLE IF NOT EXISTS user_2fa (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL UNIQUE,
  method TEXT NOT NULL, -- 'totp', 'sms', 'email'
  secret TEXT, -- for TOTP
  phone_number TEXT, -- for SMS
  backup_codes TEXT, -- JSON array of backup codes
  is_enabled INTEGER DEFAULT 0,
  is_verified INTEGER DEFAULT 0,
  last_used_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_user_2fa_user ON user_2fa(user_id);

-- File Protection Rules
CREATE TABLE IF NOT EXISTS file_protection_rules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rule_name TEXT NOT NULL,
  file_pattern TEXT NOT NULL, -- e.g., '*.php', '/admin/*', '*.exe'
  action TEXT NOT NULL, -- 'block', 'scan', 'quarantine'
  file_type TEXT, -- 'executable', 'script', 'document', 'image', 'archive'
  max_size INTEGER, -- in bytes
  allowed_extensions TEXT, -- JSON array
  blocked_extensions TEXT, -- JSON array
  is_active INTEGER DEFAULT 1,
  description TEXT,
  created_by INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_file_protection_active ON file_protection_rules(is_active);

-- Insert default file protection rules
INSERT OR IGNORE INTO file_protection_rules (rule_name, file_pattern, action, file_type, blocked_extensions, is_active, description) VALUES
  ('Block Executables', '*.exe,*.bat,*.cmd', 'block', 'executable', '["exe","bat","cmd","com","msi"]', 1, 'Block executable files'),
  ('Block Scripts', '*.php,*.asp,*.jsp', 'block', 'script', '["php","asp","jsp","aspx"]', 1, 'Block server-side scripts'),
  ('Scan Archives', '*.zip,*.rar,*.7z', 'scan', 'archive', '[]', 1, 'Scan archive files for threats'),
  ('Block Suspicious', '*.scr,*.pif,*.vbs', 'block', 'executable', '["scr","pif","vbs","js"]', 1, 'Block suspicious file types');

-- API Webhooks (for security events)
CREATE TABLE IF NOT EXISTS api_webhooks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  webhook_name TEXT NOT NULL,
  webhook_url TEXT NOT NULL,
  event_types TEXT, -- JSON array: ['login_failed', 'ip_blocked', 'firewall_triggered']
  is_active INTEGER DEFAULT 1,
  secret_key TEXT, -- for webhook signature verification
  retry_count INTEGER DEFAULT 3,
  timeout_seconds INTEGER DEFAULT 30,
  last_triggered_at DATETIME,
  last_status TEXT,
  created_by INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_webhooks_active ON api_webhooks(is_active);

-- Security Notifications
CREATE TABLE IF NOT EXISTS security_notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  notification_type TEXT NOT NULL, -- 'info', 'warning', 'error', 'critical'
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT, -- 'firewall', 'login', '2fa', 'file_protection'
  ip_address TEXT,
  user_id INTEGER,
  is_read INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_security_notifications_read ON security_notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_security_notifications_type ON security_notifications(notification_type);

-- Summary table creation log
SELECT 'Security tables created successfully' as status;
