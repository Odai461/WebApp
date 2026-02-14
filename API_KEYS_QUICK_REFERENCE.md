# 🔑 API Keys - Quick Reference Card

**Print this out and fill in as you go!**

---

## 1️⃣ Cloudflare (10 Min.)

**Account:** https://dash.cloudflare.com/sign-up  
**Token:** https://dash.cloudflare.com/profile/api-tokens

```bash
CLOUDFLARE_API_TOKEN=________________________________________
```

**Test:**
```bash
npx wrangler whoami
```

---

## 2️⃣ Stripe (10 Min.)

**Account:** https://dashboard.stripe.com/register  
**Keys:** https://dashboard.stripe.com/test/apikeys  
**Webhooks:** https://dashboard.stripe.com/test/webhooks

```bash
STRIPE_PUBLISHABLE_KEY=pk_test_____________________________
STRIPE_SECRET_KEY=sk_test___________________________________
STRIPE_WEBHOOK_SECRET=whsec_________________________________
```

**Webhook URL (local):** `http://localhost:3000/api/payments/stripe/webhook`

**Events:**
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `checkout.session.completed`

---

## 3️⃣ SendGrid (10 Min.)

**Account:** https://signup.sendgrid.com/  
**API Keys:** Settings → API Keys  
**Sender Auth:** Settings → Sender Authentication

```bash
SENDGRID_API_KEY=SG.____________________________________________
SENDGRID_FROM_EMAIL=noreply@___________________
SENDGRID_FROM_NAME=SoftwareKing24
```

**⚠️ Don't forget:** Verify sender email!

---

## 4️⃣ Security Secrets (5 Min.)

```bash
# Generate JWT Secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

JWT_SECRET=__________________________________________________

# Generate CSRF Secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

CSRF_SECRET=_________________________________________________
```

---

## 5️⃣ Complete .dev.vars File

```bash
# Cloudflare
CLOUDFLARE_API_TOKEN=

# Stripe
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# SendGrid
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=
SENDGRID_FROM_NAME=SoftwareKing24

# Security
JWT_SECRET=
CSRF_SECRET=

# App Config
NODE_ENV=development
APP_URL=http://localhost:3000
```

---

## ✅ Checklist

- [ ] Cloudflare account created
- [ ] Cloudflare token created & tested
- [ ] Stripe account created
- [ ] Stripe test keys copied
- [ ] Stripe webhook configured
- [ ] SendGrid account created
- [ ] SendGrid sender verified
- [ ] SendGrid API key created
- [ ] JWT secret generated
- [ ] CSRF secret generated
- [ ] All keys in .dev.vars
- [ ] .dev.vars in .gitignore ✓

---

## 🚀 Next Steps

After all keys are set up:

```bash
cd /home/user/webapp

# 1. Test locally
npm run build
pm2 restart webapp

# 2. Test endpoints
curl http://localhost:3000/api/products

# 3. Deploy to production
npm run deploy:prod
```

---

**Total Time:** ~30-45 minutes  
**Difficulty:** Easy - Just follow the guide!

**Full Guide:** See `API_KEYS_SETUP_GUIDE.md` for detailed instructions.
