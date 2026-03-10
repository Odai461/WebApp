-- Security Scans System
-- Table for tracking security vulnerability scans

CREATE TABLE IF NOT EXISTS security_scans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  scan_name TEXT NOT NULL,
  scan_type TEXT NOT NULL, -- e.g., 'Full Scan', 'Quick Scan', 'Custom Scan'
  scan_status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed'
  scan_target TEXT, -- What was scanned (URL, IP, etc.)
  vulnerabilities_found INTEGER DEFAULT 0,
  critical_issues INTEGER DEFAULT 0,
  high_issues INTEGER DEFAULT 0,
  medium_issues INTEGER DEFAULT 0,
  low_issues INTEGER DEFAULT 0,
  is_automated BOOLEAN DEFAULT 0,
  scan_duration INTEGER, -- Duration in seconds
  scan_results TEXT, -- JSON with detailed results
  error_message TEXT, -- If scan failed
  started_at DATETIME,
  completed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_security_scans_status ON security_scans(scan_status);
CREATE INDEX IF NOT EXISTS idx_security_scans_created ON security_scans(created_at DESC);

-- Insert sample security scans for demo
INSERT INTO security_scans (
  scan_name, 
  scan_type, 
  scan_status, 
  scan_target,
  vulnerabilities_found, 
  critical_issues, 
  high_issues,
  medium_issues,
  low_issues,
  is_automated,
  scan_duration,
  started_at,
  completed_at,
  created_at
) VALUES 
(
  'Wöchentlicher Sicherheitsscan',
  'Full Scan',
  'completed',
  'https://softwareking24.com',
  12,
  2,
  3,
  5,
  2,
  1,
  3600,
  datetime('now', '-7 days', '+2 hours'),
  datetime('now', '-7 days', '+3 hours'),
  datetime('now', '-7 days')
),
(
  'API-Schwachstellen-Scan',
  'API Scan',
  'completed',
  'https://api.softwareking24.com',
  5,
  1,
  2,
  2,
  0,
  0,
  1800,
  datetime('now', '-3 days', '+10 hours'),
  datetime('now', '-3 days', '+10 hours', '+30 minutes'),
  datetime('now', '-3 days')
),
(
  'SSL/TLS Zertifikats-Prüfung',
  'SSL Scan',
  'completed',
  'https://softwareking24.com',
  0,
  0,
  0,
  0,
  0,
  1,
  300,
  datetime('now', '-1 day', '+5 hours'),
  datetime('now', '-1 day', '+5 hours', '+5 minutes'),
  datetime('now', '-1 day')
),
(
  'Datenbank-Sicherheitsaudit',
  'Database Scan',
  'completed',
  'Database Server',
  8,
  1,
  3,
  3,
  1,
  0,
  2400,
  datetime('now', '-5 days', '+14 hours'),
  datetime('now', '-5 days', '+15 hours'),
  datetime('now', '-5 days')
),
(
  'Penetrationstest',
  'Penetration Test',
  'completed',
  'https://softwareking24.com',
  15,
  3,
  5,
  5,
  2,
  0,
  7200,
  datetime('now', '-14 days', '+9 hours'),
  datetime('now', '-14 days', '+11 hours'),
  datetime('now', '-14 days')
),
(
  'OWASP Top 10 Scan',
  'OWASP Scan',
  'completed',
  'Web Application',
  7,
  1,
  2,
  3,
  1,
  1,
  1500,
  datetime('now', '-2 days', '+3 hours'),
  datetime('now', '-2 days', '+3 hours', '+25 minutes'),
  datetime('now', '-2 days')
),
(
  'Dependency-Schwachstellen-Check',
  'Dependency Scan',
  'completed',
  'npm packages',
  23,
  5,
  8,
  7,
  3,
  1,
  600,
  datetime('now', '-4 days', '+1 hour'),
  datetime('now', '-4 days', '+1 hour', '+10 minutes'),
  datetime('now', '-4 days')
),
(
  'Schnellscan',
  'Quick Scan',
  'running',
  'https://softwareking24.com',
  0,
  0,
  0,
  0,
  0,
  0,
  NULL,
  datetime('now', '-2 minutes'),
  NULL,
  datetime('now', '-2 minutes')
),
(
  'Firewall-Konfigurationsscan',
  'Firewall Scan',
  'completed',
  'Firewall Rules',
  3,
  0,
  1,
  2,
  0,
  1,
  900,
  datetime('now', '-6 days', '+16 hours'),
  datetime('now', '-6 days', '+16 hours', '+15 minutes'),
  datetime('now', '-6 days')
),
(
  'Container-Sicherheitsaudit',
  'Container Scan',
  'completed',
  'Docker Images',
  11,
  2,
  4,
  4,
  1,
  0,
  3000,
  datetime('now', '-10 days', '+11 hours'),
  datetime('now', '-10 days', '+12 hours'),
  datetime('now', '-10 days')
);
