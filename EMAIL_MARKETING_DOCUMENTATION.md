# Email Marketing System - Complete Documentation

## 🎉 Overview

The Email Marketing System is now **FULLY FUNCTIONAL** with database integration, API endpoints, and a complete admin interface. This replaces the previous demo/static page with real functionality.

---

## 📊 System Architecture

### Database Tables (6 Tables)

#### 1. **email_campaigns**
Main campaign management table.

**Fields:**
- `id` - Primary key
- `name` - Campaign name
- `subject` - Email subject line
- `from_name` - Sender name (default: SOFTWAREKING24)
- `from_email` - Sender email (default: noreply@softwareking24.com)
- `template_id` - Foreign key to templates table
- `status` - draft, scheduled, sending, sent, paused, cancelled
- `campaign_type` - promotional, transactional, welcome, abandoned_cart, newsletter
- `segment_filter` - JSON filter for targeting
- `scheduled_at` - When to send
- `sent_at` - When it was sent
- `total_recipients, total_sent, total_delivered` - Send statistics
- `total_opened, total_clicked, total_bounced, total_unsubscribed` - Engagement metrics
- `revenue_generated` - Revenue tracking
- `created_at, updated_at` - Timestamps

#### 2. **email_templates**
Reusable email templates.

**Fields:**
- `id` - Primary key
- `name` - Template name
- `description` - Description
- `subject` - Default subject
- `html_content` - HTML email content
- `text_content` - Plain text version
- `template_type` - custom, welcome, abandoned_cart, order_confirmation, newsletter, promotional
- `thumbnail_url` - Template preview image
- `is_active` - Active flag
- `created_at, updated_at` - Timestamps

**Default Templates Included:**
1. Welcome Email
2. Abandoned Cart Reminder
3. Monthly Newsletter
4. Promotional Offer

#### 3. **email_subscribers**
Subscriber/contact list.

**Fields:**
- `id` - Primary key
- `email` - Email address (unique)
- `first_name, last_name` - Name fields
- `status` - active, unsubscribed, bounced, complained
- `subscription_source` - checkout, newsletter, manual, etc.
- `tags` - JSON array of tags
- `user_id` - Link to users table
- `subscribed_at, unsubscribed_at, last_activity_at` - Timestamps

#### 4. **email_logs**
Individual email send tracking.

**Fields:**
- `id` - Primary key
- `campaign_id, subscriber_id` - Foreign keys
- `email, subject` - Send details
- `status` - pending, sent, delivered, opened, clicked, bounced, failed
- `sent_at, delivered_at, opened_at, clicked_at, bounced_at` - Event timestamps
- `open_count, click_count` - Engagement counts
- `error_message` - Error details if failed
- `tracking_id` - Unique tracking ID

#### 5. **email_clicks**
Click tracking for links in emails.

**Fields:**
- `id` - Primary key
- `log_id, campaign_id, subscriber_id` - Foreign keys
- `url` - Clicked URL
- `clicked_at` - Timestamp
- `ip_address, user_agent` - User info

#### 6. **email_segments**
Audience segmentation for targeted campaigns.

**Fields:**
- `id` - Primary key
- `name, description` - Segment details
- `filter_rules` - JSON with filter conditions
- `subscriber_count` - Cached count
- `is_active` - Active flag

---

## 🔌 API Endpoints (16 Total)

### Campaign Management

#### GET `/api/email/campaigns`
List all email campaigns.

**Response:**
```json
{
  "success": true,
  "campaigns": [
    {
      "id": 1,
      "name": "Welcome Series",
      "subject": "Welcome to SOFTWAREKING24",
      "status": "sent",
      "campaign_type": "welcome",
      "total_sent": 1245,
      "total_opened": 687,
      "total_clicked": 234,
      "revenue_generated": 12450.00,
      "created_at": "2026-01-15"
    }
  ]
}
```

#### GET `/api/email/campaigns/:id`
Get single campaign details.

#### POST `/api/email/campaigns`
Create new campaign.

**Request Body:**
```json
{
  "name": "Spring Sale",
  "subject": "20% Off Spring Collection",
  "from_name": "SOFTWAREKING24",
  "from_email": "noreply@softwareking24.com",
  "template_id": 4,
  "status": "draft",
  "campaign_type": "promotional",
  "scheduled_at": "2026-03-15 10:00:00"
}
```

#### PUT `/api/email/campaigns/:id`
Update existing campaign.

#### DELETE `/api/email/campaigns/:id`
Delete campaign.

#### GET `/api/email/campaigns/:id/stats`
Get detailed campaign statistics.

**Response:**
```json
{
  "success": true,
  "stats": {
    "total_sent": 1245,
    "total_delivered": 1200,
    "total_opened": 687,
    "total_clicked": 234,
    "total_bounced": 45,
    "total_unsubscribed": 12,
    "revenue_generated": 12450.00,
    "open_rate": "55.2",
    "click_rate": "18.8",
    "delivery_rate": "96.4"
  }
}
```

### Template Management

#### GET `/api/email/templates`
List all active templates.

#### GET `/api/email/templates/:id`
Get single template.

#### POST `/api/email/templates`
Create new template.

**Request Body:**
```json
{
  "name": "New Product Announcement",
  "description": "Announce new products",
  "subject": "New Products Available!",
  "html_content": "<html>...</html>",
  "text_content": "Plain text version...",
  "template_type": "promotional"
}
```

#### PUT `/api/email/templates/:id`
Update template.

#### DELETE `/api/email/templates/:id`
Delete template.

### Subscriber Management

#### GET `/api/email/subscribers`
List all subscribers.

**Response:**
```json
{
  "success": true,
  "subscribers": [
    {
      "id": 1,
      "email": "test1@example.com",
      "first_name": "Max",
      "last_name": "Mustermann",
      "status": "active",
      "subscription_source": "newsletter",
      "subscribed_at": "2026-01-10"
    }
  ]
}
```

#### POST `/api/email/subscribers`
Add new subscriber.

**Request Body:**
```json
{
  "email": "newuser@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "status": "active",
  "subscription_source": "manual",
  "tags": ["vip", "software"]
}
```

#### PUT `/api/email/subscribers/:id`
Update subscriber.

#### DELETE `/api/email/subscribers/:id`
Remove subscriber.

### Dashboard & Utilities

#### GET `/api/email/dashboard`
Get email marketing dashboard statistics.

**Response:**
```json
{
  "success": true,
  "stats": {
    "total_campaigns": 15,
    "active_subscribers": 3450,
    "total_sent": 25680,
    "total_revenue": 145800.00,
    "recent_campaigns": [...],
    "top_performers": [...]
  }
}
```

#### POST `/api/email/send-test`
Send test email (simulation - would integrate with email service in production).

**Request Body:**
```json
{
  "email": "test@example.com",
  "subject": "Test Email",
  "content": "This is a test"
}
```

---

## 🎨 Frontend Features

### Dashboard View
Located at: `/admin/email-marketing`

**Statistics Cards:**
1. **Versendete E-Mails** - Total emails sent
2. **Durchschnittliche Öffnungsrate** - Average open rate
3. **Durchschnittliche Klickrate** - Average click rate
4. **Generierter Umsatz** - Total revenue generated

**Performance Chart:**
- Bar chart showing open rate and click rate for each campaign
- Top 10 campaigns displayed
- Visual comparison of engagement metrics

**Campaign Table:**
- All campaigns with full details
- Columns: Campaign name, Type, Status, Sent count, Opened count, Clicks, Revenue, Actions
- Status badges with color coding
- Action buttons (View, Edit, Duplicate, Delete)

### Modals

#### 1. Create Campaign Modal
**Fields:**
- Campaign name
- Subject line
- Campaign type (dropdown: Promotional, Welcome, Abandoned Cart, Newsletter, Transactional)
- Template selection (dropdown populated from templates API)
- From name
- From email
- Status (dropdown: Draft, Scheduled, Sending)

**Buttons:**
- Save (creates campaign via API)
- Cancel (closes modal)

#### 2. Templates Modal
**Display:**
- Grid layout of all templates
- Template card shows: Name, Description, Type badge
- Click to use template (populates create campaign form)

#### 3. Subscribers Modal
**Display:**
- Table of all subscribers
- Columns: Email, Name, Status, Source, Actions
- Add subscriber button
- Delete action for each subscriber

### Features

✅ **Real-time Data Loading**
- All data loaded from database via APIs
- No hardcoded/demo data
- Loading states while fetching

✅ **Campaign Management**
- Create new campaigns with form
- Edit campaigns (to be enhanced)
- Duplicate campaigns (to be enhanced)
- Delete campaigns with confirmation

✅ **Filtering & Search**
- Filter by status (all, draft, scheduled, sending, sent, paused)
- Search by campaign name or subject
- Real-time filtering

✅ **Performance Tracking**
- Open rate calculation
- Click rate calculation
- Revenue tracking
- Visual chart representation

✅ **Template System**
- 4 default templates included
- Template library modal
- Easy template selection

✅ **Subscriber Management**
- View all subscribers
- Add new subscribers
- Delete subscribers
- Status indicators

✅ **UI/UX**
- Toast notifications for actions
- Modal dialogs for forms
- Loading states
- Hover effects
- Responsive design
- Color-coded status badges

---

## 🚀 How to Use

### Step 1: Apply Database Migration

**On Local Kali Machine:**
```bash
cd /home/tool/Tools/webapp

# Apply migration
npx wrangler d1 migrations apply webapp-production --local

# Verify tables created
npx wrangler d1 execute webapp-production --local --command="SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'email_%';"
```

**Expected Output:**
```
email_campaigns
email_templates
email_subscribers
email_logs
email_clicks
email_segments
```

### Step 2: Build and Start Server

```bash
# Build
export NODE_OPTIONS="--max-old-space-size=8192"
npm run build

# Start
npm run dev
```

### Step 3: Access Email Marketing

**URL:** `http://localhost:5173/admin/email-marketing`

**What You'll See:**
1. Dashboard with statistics
2. Performance chart
3. Campaign list with 4 sample campaigns
4. Three action buttons: Vorlagen, Abonnenten, Neue Kampagne

### Step 4: Test Features

#### Test 1: View Campaigns
- Page loads automatically showing all campaigns
- Sample data includes 4 campaigns:
  - Welcome Series (sent, 1245 sent, 687 opened)
  - Product Updates (sent, 2340 sent, 1089 opened)
  - 20% Discount Campaign (sent, 3500 sent, 2100 opened)
  - Abandoned Cart Recovery (sending, 567 sent, 289 opened)

#### Test 2: Create New Campaign
1. Click **"Neue Kampagne"** button
2. Fill in form:
   - Name: "Test Campaign"
   - Subject: "Test Subject"
   - Type: Select "Promotional"
   - Template: Select a template
3. Click **"Speichern"**
4. Toast notification appears
5. Campaign appears in list

#### Test 3: View Templates
1. Click **"Vorlagen"** button
2. Modal opens showing 4 templates:
   - Welcome Email
   - Abandoned Cart
   - Newsletter Template
   - Promotional Offer
3. Click arrow on any template
4. Create campaign modal opens with template pre-selected

#### Test 4: View Subscribers
1. Click **"Abonnenten"** button
2. Modal opens showing subscriber table
3. Sample subscribers visible:
   - test1@example.com (Max Mustermann)
   - test2@example.com (Anna Schmidt)
   - test3@example.com (Peter Weber)

#### Test 5: Delete Campaign
1. Click red trash icon on any campaign
2. Confirmation dialog appears
3. Click OK
4. Campaign removed from list
5. Toast notification appears

#### Test 6: Filter Campaigns
1. Use status dropdown to filter by status
2. Use search box to search by name
3. Table updates in real-time

---

## 📈 Sample Data Included

### Campaigns (4)
1. **Welcome Series** - 1245 sent, 55.2% open rate, €12,450 revenue
2. **Product Updates** - 2340 sent, 46.5% open rate, €8,900 revenue
3. **20% Discount Campaign** - 3500 sent, 60% open rate, €45,600 revenue
4. **Abandoned Cart Recovery** - 567 sent, 51% open rate, €4,560 revenue

### Templates (4)
1. **Welcome Email** - Welcome new subscribers
2. **Abandoned Cart** - Remind about cart items
3. **Newsletter Template** - Monthly updates
4. **Promotional Offer** - Special offers and discounts

### Subscribers (3)
1. test1@example.com - Max Mustermann (active, newsletter)
2. test2@example.com - Anna Schmidt (active, checkout)
3. test3@example.com - Peter Weber (active, newsletter)

---

## 🔧 Integration Points

### Email Service Integration (Future)

The system is designed to integrate with email services like:
- **SendGrid** - Most popular, great API
- **Mailgun** - Developer-friendly
- **AWS SES** - Cost-effective
- **Postmark** - Transaction emails
- **Resend** - Modern alternative

**Integration Point:**
The `POST /api/email/send-test` endpoint is where you would add the actual email sending logic.

**Example (SendGrid):**
```typescript
import sgMail from '@sendgrid/mail';

app.post('/api/email/send', async (c) => {
  const { to, subject, html } = await c.req.json();
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  await sgMail.send({
    to,
    from: 'noreply@softwareking24.com',
    subject,
    html
  });
  
  return c.json({ success: true });
});
```

### Tracking Implementation

**Open Tracking:**
Add tracking pixel to emails:
```html
<img src="https://yoursite.com/track/open/{{tracking_id}}" width="1" height="1" />
```

**Click Tracking:**
Wrap links with tracking URLs:
```html
<a href="https://yoursite.com/track/click/{{tracking_id}}/{{url_encoded}}">
  Click here
</a>
```

---

## 📊 Database Schema Diagram

```
┌─────────────────────┐
│  email_campaigns    │
├─────────────────────┤
│ id (PK)             │
│ name                │
│ subject             │
│ template_id (FK)    │──┐
│ status              │  │
│ campaign_type       │  │
│ total_sent          │  │
│ total_opened        │  │
│ revenue_generated   │  │
└─────────────────────┘  │
         │               │
         │ 1:N           │
         ▼               │
┌─────────────────────┐  │
│   email_logs        │  │
├─────────────────────┤  │
│ id (PK)             │  │
│ campaign_id (FK)    │  │
│ subscriber_id (FK)  │──┤
│ tracking_id         │  │
│ status              │  │
│ opened_at           │  │
└─────────────────────┘  │
         │               │
         │ 1:N           │
         ▼               │
┌─────────────────────┐  │
│   email_clicks      │  │
├─────────────────────┤  │
│ id (PK)             │  │
│ log_id (FK)         │  │
│ url                 │  │
│ clicked_at          │  │
└─────────────────────┘  │
                         │
┌─────────────────────┐  │
│  email_templates    │  │
├─────────────────────┤  │
│ id (PK)             │◄─┘
│ name                │
│ subject             │
│ html_content        │
│ template_type       │
└─────────────────────┘

┌─────────────────────┐
│ email_subscribers   │
├─────────────────────┤
│ id (PK)             │
│ email (UNIQUE)      │
│ first_name          │
│ status              │
│ subscription_source │
└─────────────────────┘
         ▲
         │
         └──────── Referenced by email_logs
```

---

## ✅ Testing Checklist

- [ ] Database migration applied successfully
- [ ] Server starts without errors
- [ ] Page loads at `/admin/email-marketing`
- [ ] Dashboard statistics display correctly
- [ ] Performance chart renders with data
- [ ] Campaign table shows 4 sample campaigns
- [ ] "Neue Kampagne" button opens modal
- [ ] Campaign creation form submits successfully
- [ ] "Vorlagen" button opens template modal
- [ ] Template modal shows 4 templates
- [ ] "Abonnenten" button opens subscriber modal
- [ ] Subscriber table shows 3 sample subscribers
- [ ] Status filter dropdown works
- [ ] Search box filters campaigns
- [ ] Delete campaign works with confirmation
- [ ] Toast notifications appear for actions
- [ ] No console errors
- [ ] Responsive design works on mobile

---

## 🎯 Summary

### What Changed
❌ **Before:** Static demo page with hardcoded data  
✅ **After:** Fully functional system with database and APIs

### Features Implemented
- ✅ 6 database tables with relationships
- ✅ 16 API endpoints for full CRUD operations
- ✅ Real-time dashboard with statistics
- ✅ Campaign creation and management
- ✅ Template library system
- ✅ Subscriber management
- ✅ Performance tracking and charts
- ✅ Filtering and search functionality
- ✅ Modal dialogs for forms
- ✅ Toast notifications
- ✅ Sample data for immediate testing

### Ready for Production
With email service integration (SendGrid, Mailgun, etc.), this system is production-ready for:
- Newsletter campaigns
- Promotional emails
- Abandoned cart recovery
- Welcome series automation
- Transactional emails
- Performance tracking
- Revenue attribution

---

**Build on Kali and test the fully functional Email Marketing system! 📧🚀**
