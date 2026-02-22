-- Add notifications table for admin panel
CREATE TABLE IF NOT EXISTS notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  type VARCHAR(50) NOT NULL, -- 'info', 'success', 'warning', 'error'
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  link VARCHAR(255),
  is_read BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at);

-- Insert some sample notifications for testing
INSERT INTO notifications (user_id, type, title, message, link, is_read) VALUES
(1, 'info', 'Willkommen im Admin-Panel', 'Ihr Admin-Panel ist bereit für die Nutzung.', '/admin/dashboard', 0),
(1, 'success', 'System Update', 'Das System wurde erfolgreich aktualisiert.', '/admin/settings', 0);
