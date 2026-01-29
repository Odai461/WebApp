# Settings Structure - WordPress-Level Organization

## Overview
Settings are now properly organized into logical categories in the `system_settings` table with clear separation of responsibilities. This follows WordPress and enterprise admin panel best practices.

## Database Structure
**Table**: `system_settings`
- `setting_key` (TEXT, UNIQUE) - Unique identifier for the setting
- `setting_value` (TEXT) - The value of the setting
- `setting_type` (TEXT) - Data type: 'string', 'number', 'boolean', 'json'
- `category` (TEXT) - Logical grouping: 'general', 'email', 'orders', 'payment', 'security', 'notifications'
- `description` (TEXT) - Human-readable description
- `is_public` (INTEGER) - Whether the setting is public (1) or admin-only (0)
- `updated_at` (DATETIME) - Last update timestamp

## Category Organization

### 1. **General** (`category = 'general'`)
**Purpose**: Shop identity, company information, and localization

**Settings**:
- `site_name` - Shop name (e.g., "SOFTWAREKING24")
- `site_tagline` - Shop slogan
- `site_email` - Main contact email
- `site_phone` - Contact phone number
- `currency` - Default currency (EUR, USD, GBP)
- `currency_symbol` - Currency symbol (€, $, £)
- `tax_rate` - VAT/Tax rate percentage
- `items_per_page` - Items per page in lists
- `maintenance_mode` - Enable/disable maintenance mode
- `maintenance_message` - Message shown during maintenance

**UI Location**: Settings → General

---

### 2. **SMTP & Email** (`category = 'email'`)
**Purpose**: Email delivery configuration and sender identity

**Settings**:
- `smtp_host` - SMTP server hostname
- `smtp_port` - SMTP port (587, 465, 25)
- `smtp_user` - SMTP username
- `smtp_from_name` - Sender name
- `smtp_from_email` - Sender email address
- `email_notifications_enabled` - Enable/disable email notifications

**UI Location**: Settings → SMTP & E-Mail

---

### 3. **Shop & Orders** (`category = 'orders'`)
**Purpose**: Checkout behavior, digital delivery, and order processing

**Settings**:
- `order_prefix` - Order number prefix (e.g., "ORD")
- `min_order_amount` - Minimum order value
- `allow_guest_checkout` - Allow checkout without registration
- `auto_send_license` - Automatically send licenses after payment

**UI Location**: Settings → Shop & Bestellungen

---

### 4. **Payments** (`category = 'payment'`)
**Purpose**: Payment provider configuration

**Settings**:
- `stripe_enabled` - Enable Stripe payments
- `paypal_enabled` - Enable PayPal payments
- `bank_transfer_enabled` - Enable bank transfer

**Note**: API keys for payment providers are stored separately under "Advanced → API Keys"

**UI Location**: Settings → Zahlungen

---

### 5. **Security** (`category = 'security'`)
**Purpose**: Login protection, session management, and security features

**Settings**:
- `max_login_attempts` - Maximum login attempts before lockout
- `session_timeout` - Session timeout in minutes
- `require_email_verification` - Require email verification for new accounts

**UI Location**: Settings → Sicherheit

---

### 6. **Notifications** (`category = 'notifications'`)
**Purpose**: Admin notification preferences

**Settings**:
- `notify_new_order` - Notify on new orders
- `notify_refund_request` - Notify on refund requests
- `notify_low_stock` - Notify on low stock
- `low_stock_threshold` - Low stock threshold number

**UI Location**: Settings → Benachrichtigungen

---

### 7. **Advanced** (`category = 'advanced'`)
**Purpose**: API keys, cron jobs, cache, debug mode (future)

**Settings**: (To be implemented)
- API keys for third-party services
- Cron job configuration
- Cache settings
- Debug and maintenance modes

**UI Location**: Settings → Erweitert

---

## API Endpoints

### GET `/api/admin/settings`
Fetch settings, optionally filtered by category.

**Query Parameters**:
- `category` (optional) - Filter by category (e.g., `?category=general`)

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "setting_key": "site_name",
      "setting_value": "SOFTWAREKING24",
      "setting_type": "string",
      "category": "general",
      "description": "Website name",
      "is_public": 1,
      "updated_at": "2026-01-29 14:40:32"
    }
  ]
}
```

### POST `/api/admin/settings`
Bulk update multiple settings.

**Request Body**:
```json
{
  "settings": [
    {
      "key": "site_name",
      "value": "New Shop Name",
      "type": "string"
    },
    {
      "key": "maintenance_mode",
      "value": "1",
      "type": "boolean"
    }
  ]
}
```

**Response**:
```json
{
  "success": true,
  "message": "2 settings updated successfully"
}
```

---

## UI Design Principles

### Tab-Based Navigation
Settings use a horizontal tab interface similar to WordPress:
- General
- SMTP & E-Mail
- Shop & Bestellungen
- Zahlungen
- Sicherheit
- Benachrichtigungen
- Erweitert

### Section Headers
Within each tab, related settings are grouped under section headers:
- Shop-Informationen
- Lokalisierung
- SMTP-Konfiguration
- Absender-Identität
- etc.

### Field Types
- **Text fields**: For strings (site_name, smtp_host)
- **Number fields**: For numeric values (tax_rate, max_login_attempts)
- **Checkboxes**: For boolean values (maintenance_mode, auto_send_license)
- **Select dropdowns**: For predefined options (currency)
- **Textareas**: For longer text (maintenance_message)

### Help Text
Each setting can include help text explaining its purpose and impact.

### Validation
- Required fields are marked
- Number fields validate numeric input
- Email fields validate email format
- Changes are validated server-side

---

## Migration from Old Structure

### Before (Incorrect)
- All settings mixed in one "General" section
- No logical grouping
- Hard to find specific settings
- Poor UX

### After (Correct - WordPress-style)
- Settings organized by responsibility
- Clear tabs for each category
- Easy to navigate
- Professional admin experience
- Matches enterprise standards

---

## Best Practices

### Adding New Settings
1. Determine the correct category
2. Choose descriptive `setting_key`
3. Set appropriate `setting_type`
4. Add helpful `description`
5. Mark `is_public` correctly
6. Insert into `system_settings` table

### Naming Conventions
- Use snake_case for setting keys
- Prefix related settings (e.g., `smtp_*`, `notify_*`)
- Keep keys concise but descriptive

### Security
- Never expose sensitive settings (API keys, passwords) via public API
- Mark sensitive settings with `is_public = 0`
- Validate and sanitize all input
- Use environment variables for highly sensitive data

---

## Future Enhancements

### Phase 2
- Advanced tab with API key management
- Cron job configuration
- Cache management
- Debug mode toggle

### Phase 3
- Per-user settings (user preferences)
- Multi-language settings UI
- Settings import/export
- Settings history/rollback

---

## Status
✅ Database structure complete
✅ API endpoints implemented
✅ Category-based filtering working
⏳ UI implementation (in progress)
⏳ Advanced tab features (planned)

**Last Updated**: 2026-01-29
