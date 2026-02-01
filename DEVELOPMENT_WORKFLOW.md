# 🚀 DEVELOPMENT WORKFLOW - Complete Guide

## 🎯 **Your Development Process**

Now that it's running on localhost, here's your complete development workflow:

---

## 📋 **WORKFLOW OVERVIEW**

```
1. Edit Code → 2. Save File → 3. Build (optional) → 4. Refresh Browser → 5. Test → 6. Commit
```

---

## 🔧 **DEVELOPMENT MODES**

### **Mode 1: Hot Reload Development (RECOMMENDED)**

**Best for**: Rapid UI changes, CSS tweaks, component updates

**Setup:**
```bash
cd ~/projects/webapp

# Terminal 1: Start dev server
npm run dev

# OR with Wrangler (for Cloudflare-specific features)
npm run dev:sandbox
```

**How it works:**
- ✅ **Auto-reload**: Changes appear instantly
- ✅ **Fast**: No manual rebuild needed
- ✅ **Real-time**: See changes as you type
- ✅ **Error display**: Shows errors in browser

**When to use:**
- Editing HTML/JSX/TSX files
- Changing CSS/styles
- Updating components
- Tweaking UI elements

---

### **Mode 2: Build & Restart (For Production Testing)**

**Best for**: Testing production builds, API changes, server logic

**Setup:**
```bash
# Stop current server
pm2 stop webapp  # or Ctrl+C if running in terminal

# Make your changes...

# Build
npm run build

# Restart
pm2 restart webapp

# View logs
pm2 logs webapp --lines 50
```

**When to use:**
- Testing production performance
- Verifying minified code
- Testing server-side logic
- Before deploying

---

## 📁 **FILE STRUCTURE & WHAT TO EDIT**

### **Frontend/UI Changes:**

```
src/components/
├── shop-homepage-premium.tsx    ← Edit homepage design
├── admin-analytics.tsx          ← Edit analytics dashboard  
├── admin-automations.tsx        ← Edit automations page
├── admin-faq.tsx                ← Edit FAQ management
└── ...

Changes here → Rebuild + Refresh browser
```

### **Backend/API Changes:**

```
src/
├── index.tsx                    ← Main routes & API endpoints
├── routes/
│   ├── cart.ts                  ← Cart API
│   ├── products.ts              ← Products API
│   └── ...
└── lib/
    ├── database.ts              ← Database helpers
    ├── auth.ts                  ← Authentication
    └── ...

Changes here → Rebuild + Restart server
```

### **Static Assets:**

```
public/static/
├── logo.png                     ← Your logo
├── logo-footer.png
├── app.js                       ← Frontend JavaScript
├── styles.css                   ← Custom CSS
└── ...

Changes here → Just refresh browser (no rebuild needed)
```

### **Database:**

```
migrations/
├── 0001_initial_schema.sql
├── 0002_add_analytics.sql
└── ...

Changes here → Run migration command
```

---

## 🎨 **COMMON DEVELOPMENT TASKS**

### **Task 1: Change Brand Colors (Navy + Gold)**

**File to edit:** `src/components/shop-homepage-premium.tsx`

**Steps:**
```bash
# 1. Open file in your editor
nano ~/projects/webapp/src/components/shop-homepage-premium.tsx
# or
code ~/projects/webapp/src/components/shop-homepage-premium.tsx

# 2. Find the CSS variables section (around line 18-30)
# 3. Replace purple/pink colors with navy/gold
# 4. Save file
# 5. Rebuild
npm run build

# 6. Restart
pm2 restart webapp

# 7. Refresh browser
```

**What to change:**
```css
/* FROM: */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #667eea;

/* TO: */
background: linear-gradient(135deg, #0a1628 0%, #1a2332 100%);
color: #f5a623;
```

---

### **Task 2: Add Your Logo**

**Steps:**
```bash
# 1. Your logo is already at:
~/projects/webapp/public/static/logo.png

# 2. Edit homepage to use it
# File: src/components/shop-homepage-premium.tsx
# Around line 100-120 (navigation section)

# Find:
<i class="fas fa-crown text-white text-xl"></i>

# Replace with:
<img src="/static/logo.png" alt="SOFTWAREKING24" class="h-12" />

# 3. Save and rebuild
npm run build
pm2 restart webapp
```

---

### **Task 3: Make "Add to Cart" Button Work**

**File to edit:** `src/components/shop-homepage-premium.tsx`

**Find the button (around line 450):**
```typescript
<button class="btn-primary" onclick="addToCart('windows-11-pro')">
  In den Warenkorb
</button>
```

**The JavaScript is already there (around line 920):**
```javascript
function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Produkt wurde zum Warenkorb hinzugefügt!');
}
```

**To make it better:**
1. Add API call to save to database
2. Show toast notification instead of alert
3. Update cart icon in real-time

---

### **Task 4: Connect to Real Products Database**

**File to edit:** `src/components/shop-homepage-premium.tsx`

**Find the loadFeaturedProducts function (around line 915):**
```javascript
async function loadFeaturedProducts() {
  try {
    const response = await fetch('/api/products?featured=true&limit=4');
    const data = await response.json();
    // ... render products
  } catch (error) {
    console.error('Failed to load products:', error);
  }
}
```

**This already connects to your database!**

**To add more products:**
```bash
# 1. Access database
npx wrangler d1 execute webapp-production --local --command="SELECT * FROM products LIMIT 5"

# 2. Add products
npx wrangler d1 execute webapp-production --local --command="
INSERT INTO products (name, price, description, category, featured)
VALUES ('Windows 11 Pro', 89.99, 'Vollversion', 'windows', 1)
"
```

---

### **Task 5: Create New Page/Component**

**Example: Create a "Contact" page**

**Step 1: Create component file**
```bash
cd ~/projects/webapp/src/components
nano contact-page.tsx
```

**Step 2: Write the component**
```typescript
export function ContactPage() {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <title>Kontakt - SOFTWAREKING24</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <h1>Kontakt</h1>
      <form>
        <!-- Your form here -->
      </form>
    </body>
    </html>
  `;
}
```

**Step 3: Add route in index.tsx**
```bash
nano ~/projects/webapp/src/index.tsx
```

Add at the top:
```typescript
import { ContactPage } from './components/contact-page'
```

Add route (around line 270):
```typescript
app.get('/kontakt', (c) => {
  return c.html(ContactPage())
})
```

**Step 4: Build and restart**
```bash
npm run build
pm2 restart webapp
```

**Step 5: Access**
```
http://localhost:3000/kontakt
```

---

## 🔄 **TYPICAL DEVELOPMENT CYCLE**

### **Cycle 1: Quick UI Tweaks (5-10 minutes)**

```bash
# 1. Edit component file
nano src/components/shop-homepage-premium.tsx

# 2. Save changes (Ctrl+O, Enter, Ctrl+X)

# 3. Rebuild
npm run build

# 4. Restart (if using PM2)
pm2 restart webapp

# 5. Refresh browser
# Press F5 or Ctrl+R

# 6. Test changes

# 7. If good, commit
git add src/components/shop-homepage-premium.tsx
git commit -m "feat: Update homepage colors to brand colors"
```

---

### **Cycle 2: Add New Feature (30-60 minutes)**

```bash
# 1. Create branch (optional but recommended)
git checkout -b feature/mega-menu

# 2. Create/edit files
nano src/components/mega-menu.tsx

# 3. Update main index
nano src/index.tsx

# 4. Add styles if needed
nano public/static/styles.css

# 5. Test locally
npm run build
pm2 restart webapp
# Test in browser

# 6. Commit changes
git add .
git commit -m "feat: Add professional mega menu"

# 7. Merge to main (if using branches)
git checkout main
git merge feature/mega-menu

# 8. Push to GitHub (if you have repo)
git push origin main
```

---

### **Cycle 3: Database Changes (15-30 minutes)**

```bash
# 1. Create migration file
nano migrations/0003_add_reviews_table.sql

# 2. Write SQL
CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER,
  rating INTEGER,
  comment TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

# 3. Apply migration
npx wrangler d1 migrations apply webapp-production --local

# 4. Update code to use new table
nano src/index.tsx

# 5. Add API endpoint
app.get('/api/reviews/:productId', async (c) => {
  const { productId } = c.req.param()
  const reviews = await c.env.DB.prepare(
    'SELECT * FROM reviews WHERE product_id = ?'
  ).bind(productId).all()
  return c.json(reviews)
})

# 6. Rebuild and test
npm run build
pm2 restart webapp
```

---

## 🛠️ **ESSENTIAL TOOLS & EDITORS**

### **Recommended Editors:**

**1. VS Code (Best for web development)**
```bash
# Install
sudo snap install code --classic

# Open project
cd ~/projects/webapp
code .
```

**Extensions to install:**
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- GitLens

**2. Sublime Text**
```bash
sudo snap install sublime-text --classic
```

**3. Nano (Quick edits)**
```bash
nano filename.tsx
```

**4. Vim (If you prefer)**
```bash
vim filename.tsx
```

---

## 🐛 **DEBUGGING**

### **Check Server Logs:**
```bash
# PM2 logs
pm2 logs webapp --lines 100

# Follow logs in real-time
pm2 logs webapp

# Check for errors
pm2 logs webapp --err
```

### **Check Browser Console:**
```
1. Open browser (Firefox/Chrome)
2. Press F12
3. Go to Console tab
4. Look for errors (red text)
```

### **Test API Endpoints:**
```bash
# Test with curl
curl http://localhost:3000/api/products

# With formatting
curl http://localhost:3000/api/products | jq

# Test POST
curl -X POST http://localhost:3000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": "1", "quantity": 1}'
```

### **Database Queries:**
```bash
# Check tables
npx wrangler d1 execute webapp-production --local --command="
SELECT name FROM sqlite_master WHERE type='table'
"

# Query data
npx wrangler d1 execute webapp-production --local --command="
SELECT * FROM products LIMIT 10
"

# Check specific record
npx wrangler d1 execute webapp-production --local --command="
SELECT * FROM products WHERE id = 1
"
```

---

## 📊 **MONITORING & PERFORMANCE**

### **Watch for Changes (Auto-rebuild):**
```bash
# Watch mode (auto-rebuild on changes)
npm run dev
```

### **Check Memory Usage:**
```bash
pm2 monit
```

### **Performance Testing:**
```bash
# Check page load time
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:3000/

# curl-format.txt contains:
time_total: %{time_total}s
```

---

## 🎯 **DEVELOPMENT PRIORITIES**

**Now that it's running locally, here's what to tackle:**

### **Priority 1: Brand Identity (1-2 hours)**
1. ✅ Change colors from purple to Navy (#0a1628) + Gold (#f5a623)
2. ✅ Integrate logo from `/static/logo.png`
3. ✅ Update all gradients
4. ✅ Change button styles
5. ✅ Update hover states

**Files to edit:**
- `src/components/shop-homepage-premium.tsx`

---

### **Priority 2: Professional Menu (2-3 hours)**
1. ✅ Create mega menu component
2. ✅ Add Windows category with subcategories
3. ✅ Add Office category with subcategories
4. ✅ Add dropdown menus for other categories
5. ✅ Make all links functional
6. ✅ Add mobile menu

**Files to create/edit:**
- `src/components/mega-menu.tsx` (new)
- `src/components/shop-homepage-premium.tsx` (edit navigation)

---

### **Priority 3: Functional Features (3-4 hours)**
1. ✅ Connect "Add to Cart" to database
2. ✅ Make search functional
3. ✅ Connect product cards to database
4. ✅ Make newsletter form work
5. ✅ Add real countdown timer
6. ✅ Make category filters work

**Files to edit:**
- `src/index.tsx` (API endpoints)
- `src/components/shop-homepage-premium.tsx` (frontend logic)

---

### **Priority 4: Enhanced Footer (1-2 hours)**
1. ✅ Add 6-column layout
2. ✅ Add all product categories
3. ✅ Add company links
4. ✅ Add support links
5. ✅ Add payment logos
6. ✅ Add trust badges

**Files to edit:**
- `src/components/shop-homepage-premium.tsx` (footer section)

---

## 💾 **GIT WORKFLOW**

### **Regular Commits:**
```bash
# Check what changed
git status

# See differences
git diff

# Stage changes
git add src/components/shop-homepage-premium.tsx

# Commit with message
git commit -m "feat: Change brand colors to navy and gold"

# View history
git log --oneline -10
```

### **Branching (for bigger features):**
```bash
# Create feature branch
git checkout -b feature/mega-menu

# Work on feature...
# Make commits...

# Switch back to main
git checkout main

# Merge feature
git merge feature/mega-menu

# Delete branch
git branch -d feature/mega-menu
```

### **Backup/Push to GitHub:**
```bash
# Add remote (if not exists)
git remote add origin https://github.com/USERNAME/webapp.git

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

---

## 🚀 **DEPLOYING TO PRODUCTION**

When ready to deploy:

```bash
# 1. Build production version
npm run build

# 2. Test locally
npm run preview

# 3. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name softwareking24

# 4. Your site will be live at:
# https://softwareking24.pages.dev
```

---

## 📝 **QUICK REFERENCE COMMANDS**

| Task | Command |
|------|---------|
| **Start dev server** | `npm run dev` |
| **Build project** | `npm run build` |
| **Restart app** | `pm2 restart webapp` |
| **View logs** | `pm2 logs webapp` |
| **Stop app** | `pm2 stop webapp` |
| **Database query** | `npx wrangler d1 execute webapp-production --local --command="SQL"` |
| **Apply migrations** | `npm run db:migrate:local` |
| **Git commit** | `git add . && git commit -m "message"` |
| **Check port 3000** | `sudo lsof -i :3000` |
| **Kill port 3000** | `sudo fuser -k 3000/tcp` |

---

## 🎉 **YOU'RE READY TO DEVELOP!**

**Your typical workflow:**
1. Edit file in `src/components/`
2. Save
3. `npm run build`
4. `pm2 restart webapp`
5. Refresh browser
6. Test
7. `git commit`
8. Repeat

**Start with:**
- Change colors to Navy + Gold
- Add your logo
- Make buttons functional

**Questions?**
- Ask me anything!
- I'll help with specific code
- I can walk you through each task

**What would you like to work on first?**
1. Brand colors + logo?
2. Professional menu?
3. Make features functional?
4. Something else?
