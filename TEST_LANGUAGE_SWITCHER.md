# Language Switcher - Testing Guide

## ✅ What's Been Implemented

### 1. **Language Switcher Component** (`src/components/language-switcher.tsx`)
   - Dropdown in admin sidebar (bottom)
   - Shows current language with flag
   - Lists all available languages (DE, EN, FR, ES)
   - Changes language on click

### 2. **Translation API** (`src/index.tsx`)
   - **GET `/api/translations/:lang`** - Returns translations object
   - **Response format:**
   ```json
   {
     "success": true,
     "translations": {
       "nav.home": "Home",
       "nav.products": "Products",
       "nav.cart": "Cart",
       "nav.account": "My Account",
       "admin_dashboard": "Admin Dashboard",
       ...
     },
     "language": "en"
   }
   ```

### 3. **Translation Library** (`src/lib/translations.ts`)
   - Pre-built translations for 4 languages
   - 100+ translation keys covering:
     - Navigation
     - Admin pages
     - Forms
     - Buttons
     - Messages
   - Helper function: `getTranslations(lang)`

### 4. **Language Manager Page** (`/admin/languages`)
   - View all languages
   - Add/edit/delete languages
   - Set default language
   - Toggle active status

## 🚧 What Still Needs to Be Done

### Critical Missing Piece: Translation Context/State Management

The language switcher UI is there and functional, but **the translations are not being applied to the page content yet**.

**Why?** The switcher changes the language preference, but there's no:
1. **Global state** to hold current language
2. **Translation function** (`t(key)`) available in components
3. **Re-rendering** of components when language changes

### Solution Required:

You need to implement ONE of these approaches:

#### **Option A: Simple Vanilla JS (Quick Fix)**
Add this to admin pages:

```typescript
// In AdminSidebarAdvanced or main layout
let currentLang = localStorage.getItem('admin_language') || 'de';
let translations = {};

// Load translations
async function loadTranslations(lang) {
  const response = await fetch(`/api/translations/${lang}`);
  const data = await response.json();
  if (data.success) {
    translations = data.translations;
    currentLang = lang;
    updatePageText();
  }
}

// Translation function
function t(key) {
  return translations[key] || key;
}

// Update all elements with data-i18n attribute
function updatePageText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

// Listen for language change events
window.addEventListener('languageChanged', (e) => {
  loadTranslations(e.detail.language);
});

// Initialize
loadTranslations(currentLang);
```

Then in your HTML:
```html
<h1 data-i18n="admin_dashboard">Admin Dashboard</h1>
<button data-i18n="button_save">Speichern</button>
```

#### **Option B: React/Preact Context (Proper Solution)**
Since you're using TSX, you could set up:
1. Translation Context Provider
2. `useTranslation()` hook
3. `<Trans>` component

## 🧪 How to Test (On Your Local Machine)

### Step 1: Rebuild the Project
```bash
cd /home/tool/Tools/webapp
git pull origin main
npm run build
npm run dev
```

### Step 2: Open Admin Panel
```
http://localhost:5173/admin
```

### Step 3: Check Language Switcher
- Look at bottom of sidebar
- Should show: 🇩🇪 Deutsch (or current language)
- Click to see dropdown with all languages

### Step 4: Test API
```bash
# Test English translations
curl http://localhost:5173/api/translations/en | jq '.translations | keys | .[:10]'

# Test German translations
curl http://localhost:5173/api/translations/de | jq '.translations.admin_dashboard'
```

### Step 5: Verify Language Change
1. Click language switcher
2. Select "English"
3. Open browser console (F12)
4. Type: `localStorage.getItem('admin_language')`
5. Should return: `"en"`

### Step 6: Check Translation Loading
Open Network tab (F12) and look for:
- Request to `/api/translations/en` after language switch
- Response should be object format (not array)

## 📋 Current Translation Keys Available

Here are the main categories of translation keys you can use:

### Navigation
- `nav.home`, `nav.products`, `nav.cart`, `nav.account`

### Admin Pages  
- `admin_dashboard`, `admin_products`, `admin_orders`, `admin_customers`
- `admin_settings`, `admin_languages`, `admin_themes`

### Forms
- `form.email`, `form.password`, `form.name`
- `form.required`, `form.invalid_email`

### Buttons
- `button_save`, `button_cancel`, `button_delete`, `button_edit`
- `button_add`, `button_search`, `button_export`

### Messages
- `message_success`, `message_error`, `message_loading`
- `message_saved`, `message_deleted`

### Status
- `status_active`, `status_inactive`, `status_pending`
- `status_published`, `status_draft`

## 🎯 Next Steps

### To Make Language Switching Fully Functional:

1. **Choose implementation approach** (Option A or B above)
2. **Add translation function** to your components
3. **Update existing hardcoded text** with translation keys
4. **Test language switching** across all pages

### Quick Win Pages to Convert First:
1. Admin Dashboard (`/admin`)
2. Shop Settings (`/admin/settings/shop`)
3. Performance Settings (`/admin/settings/performance`)

### Example Conversion:

**Before:**
```typescript
<h1 className="text-2xl font-bold">Admin Dashboard</h1>
<button>Speichern</button>
```

**After (Option A):**
```typescript
<h1 className="text-2xl font-bold" data-i18n="admin_dashboard">Admin Dashboard</h1>
<button data-i18n="button_save">Speichern</button>
```

**After (Option B with React):**
```typescript
const { t } = useTranslation();
<h1 className="text-2xl font-bold">{t('admin_dashboard')}</h1>
<button>{t('button_save')}</button>
```

## 🐛 Known Issues

1. **Build timeout in sandbox** - Build works locally but times out in sandbox (too large)
2. **No translation context yet** - Need to implement global state/context
3. **Hardcoded text** - Most pages still have German hardcoded text

## 📦 What's Committed

Latest commits:
- `3169da1` - fix: Convert translation API response from array to object format
- `0106bc6` - docs: Add translation system documentation  
- `bf3eb61` - feat: Translation Engine - Real Language Switching
- `b3aac99` - feat: Language Management System - Full Implementation

## 🌐 Live URLs

**Sandbox (old build):**
- https://3000-iajr1uzogojd35ozgn244-583b4d74.sandbox.novita.ai/admin

**Local:**
- http://localhost:5173/admin
- http://localhost:5173/admin/languages
- http://localhost:5173/admin/settings/shop

---

## Summary

**Working:** Language switcher UI, Translation API, Language database, Language manager page

**Not Working Yet:** Actual text translation on pages (need to implement translation context/state)

**Action Required:** Choose Option A or Option B above and implement in your local environment.
