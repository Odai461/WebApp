# 🔑 API Keys Setup Guide - Schritt für Schritt

**Geschätzte Zeit:** 30-45 Minuten  
**Stand:** 2026-02-14

---

## 📋 Übersicht - Was du brauchst

| Service | Zweck | Kosten | Priorität |
|---------|-------|--------|-----------|
| **Cloudflare** | Datenbank & Deployment | Kostenlos | ⚠️ KRITISCH |
| **Stripe** | Zahlungsabwicklung | Kostenlos (Test), 1.4% + €0.25 (Live) | ⚠️ KRITISCH |
| **SendGrid** | E-Mail-Versand | Kostenlos (100/Tag) | ⚠️ KRITISCH |

---

## 1️⃣ Cloudflare API Token (10 Minuten)

### Warum brauchen wir das?
- Erstellen der Production-Datenbank
- Deployment auf Cloudflare Pages
- Verwaltung von Environment Variables

### Schritt-für-Schritt:

#### **Schritt 1: Cloudflare Account erstellen**
1. Gehe zu: **https://dash.cloudflare.com/sign-up**
2. Registriere dich mit E-Mail
3. Bestätige deine E-Mail-Adresse
4. Login

**Zeit:** ~3 Minuten

#### **Schritt 2: API Token erstellen**
1. Gehe zu: **https://dash.cloudflare.com/profile/api-tokens**
2. Klicke: **"Create Token"**
3. Wähle Template: **"Edit Cloudflare Workers"**
4. Oder erstelle Custom Token mit diesen Permissions:
   - **Account** → **D1** → **Edit**
   - **Account** → **Cloudflare Pages** → **Edit**
   - **User** → **User Details** → **Read**

5. Klicke: **"Continue to summary"**
6. Klicke: **"Create Token"**
7. **WICHTIG:** Kopiere den Token sofort (wird nur einmal angezeigt!)

**Token Format:** `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (40+ Zeichen)

**Zeit:** ~3 Minuten

#### **Schritt 3: Token speichern**
```bash
# In .dev.vars (für lokale Entwicklung)
echo "CLOUDFLARE_API_TOKEN=dein-token-hier" >> .dev.vars

# Als Umgebungsvariable (für Terminal)
export CLOUDFLARE_API_TOKEN="dein-token-hier"
```

#### **Schritt 4: Token testen**
```bash
# Prüfe ob Token funktioniert
cd /home/user/webapp
npx wrangler whoami

# Erwartete Ausgabe:
# You are logged in with an API Token
# Account Name: Dein Name
# Account ID: xxxxxxxxxxxx
```

**✅ Cloudflare fertig!**

---

## 2️⃣ Stripe API Keys (10 Minuten)

### Warum brauchen wir das?
- Kreditkarten-Zahlungen akzeptieren
- Automatische Lizenz-Auslieferung nach Zahlung
- Webhook-Benachrichtigungen erhalten

### Schritt-für-Schritt:

#### **Schritt 1: Stripe Account erstellen**
1. Gehe zu: **https://dashboard.stripe.com/register**
2. Registriere dich mit E-Mail
3. Bestätige deine E-Mail-Adresse
4. Fülle Unternehmens-Informationen aus (kann später vervollständigt werden)
5. Login zum Dashboard

**Zeit:** ~3 Minuten

#### **Schritt 2: Test API Keys holen**
1. Gehe zu: **https://dashboard.stripe.com/test/apikeys**
2. Du siehst zwei Keys:
   - **Publishable key** (beginnt mit `pk_test_`)
   - **Secret key** (beginnt mit `sk_test_`)

3. **WICHTIG:** Klicke "Reveal test key" für den Secret Key
4. Kopiere beide Keys

**Test Keys Format:**
```
pk_test_51xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
sk_test_51xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Zeit:** ~2 Minuten

#### **Schritt 3: Webhook Secret holen**
1. Gehe zu: **https://dashboard.stripe.com/test/webhooks**
2. Klicke: **"Add endpoint"**
3. **Endpoint URL:** `http://localhost:3000/api/payments/stripe/webhook` (für Test)
4. **Events auswählen:**
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `checkout.session.completed`

5. Klicke: **"Add endpoint"**
6. Klicke auf den erstellten Webhook
7. Klicke: **"Reveal" beim "Signing secret"**
8. Kopiere das Secret (beginnt mit `whsec_`)

**Webhook Secret Format:** `whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Zeit:** ~3 Minuten

#### **Schritt 4: Keys speichern**
```bash
# In .dev.vars
cat >> .dev.vars << 'KEYS'
STRIPE_PUBLISHABLE_KEY=pk_test_dein-key-hier
STRIPE_SECRET_KEY=sk_test_dein-key-hier
STRIPE_WEBHOOK_SECRET=whsec_dein-secret-hier
KEYS
```

#### **Schritt 5: Stripe CLI installieren (Optional)**
```bash
# Für Webhook-Testing lokal
# Installation: https://stripe.com/docs/stripe-cli

# Nach Installation:
stripe login
stripe listen --forward-to localhost:3000/api/payments/stripe/webhook
```

**✅ Stripe fertig!**

---

## 3️⃣ SendGrid API Key (10 Minuten)

### Warum brauchen wir das?
- Willkommens-E-Mails senden
- Lizenzschlüssel per E-Mail liefern
- Bestellbestätigungen senden
- Passwort-Reset E-Mails

### Schritt-für-Schritt:

#### **Schritt 1: SendGrid Account erstellen**
1. Gehe zu: **https://signup.sendgrid.com/**
2. Registriere dich (kostenloser Plan: 100 E-Mails/Tag)
3. Bestätige deine E-Mail-Adresse
4. Fülle Onboarding-Fragen aus:
   - "What type of email do you plan to send?" → **Transactional**
   - "How many emails per month?" → **Under 5,000**

5. Login zum Dashboard

**Zeit:** ~3 Minuten

#### **Schritt 2: Sender Identity verifizieren**
1. Gehe zu: **Settings → Sender Authentication**
2. Wähle: **Single Sender Verification** (einfacher für Start)
3. Klicke: **"Create New Sender"**
4. Fülle aus:
   - **From Name:** SoftwareKing24
   - **From Email Address:** noreply@deine-domain.de
   - **Reply To:** support@deine-domain.de
   - Adresse und weitere Infos

5. Klicke: **"Create"**
6. **Prüfe deine E-Mails** und bestätige die Verifizierung
7. Warte auf Bestätigung (dauert ~1-2 Minuten)

**⚠️ Wichtig:** Ohne verifizierte E-Mail-Adresse kannst du keine E-Mails senden!

**Zeit:** ~4 Minuten

#### **Schritt 3: API Key erstellen**
1. Gehe zu: **Settings → API Keys**
2. Klicke: **"Create API Key"**
3. **Name:** SoftwareKing24 Production
4. **Permissions:** Wähle **"Full Access"** (empfohlen für Start)
   - Oder: **"Restricted Access"** → Nur **Mail Send** aktivieren

5. Klicke: **"Create & View"**
6. **WICHTIG:** Kopiere den API Key sofort!
   - Format: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - Wird nur einmal angezeigt!

**Zeit:** ~2 Minuten

#### **Schritt 4: API Key speichern**
```bash
# In .dev.vars
echo "SENDGRID_API_KEY=SG.dein-key-hier" >> .dev.vars
echo "SENDGRID_FROM_EMAIL=noreply@deine-domain.de" >> .dev.vars
echo "SENDGRID_FROM_NAME=SoftwareKing24" >> .dev.vars
```

#### **Schritt 5: Test-E-Mail senden (Optional)**
```bash
# Mit curl testen
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"to":"deine-test@email.de"}'
```

**✅ SendGrid fertig!**

---

## 4️⃣ Weitere Secrets generieren (5 Minuten)

### JWT Secret
```bash
# Generiere sicheren JWT Secret (32 Bytes)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Speichern in .dev.vars
echo "JWT_SECRET=dein-generierter-secret-hier" >> .dev.vars
```

### CSRF Secret
```bash
# Generiere sicheren CSRF Secret (32 Bytes)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Speichern in .dev.vars
echo "CSRF_SECRET=dein-generierter-secret-hier" >> .dev.vars
```

---

## 5️⃣ .dev.vars Datei - Finale Übersicht

Deine `.dev.vars` Datei sollte jetzt so aussehen:

```bash
# Cloudflare
CLOUDFLARE_API_TOKEN=dein-cloudflare-token-hier

# Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# SendGrid
SENDGRID_API_KEY=SG.xxxxx
SENDGRID_FROM_EMAIL=noreply@deine-domain.de
SENDGRID_FROM_NAME=SoftwareKing24

# Security Secrets
JWT_SECRET=dein-jwt-secret-hier
CSRF_SECRET=dein-csrf-secret-hier

# App Config
NODE_ENV=development
APP_URL=http://localhost:3000
```

---

## 6️⃣ Keys testen

### Test 1: Cloudflare
```bash
cd /home/user/webapp
npx wrangler whoami

# ✅ Erwartete Ausgabe: Account Name angezeigt
```

### Test 2: Stripe
```bash
# Test mit Stripe CLI
stripe --version

# Oder: API-Test mit curl
curl https://api.stripe.com/v1/charges \
  -u sk_test_dein-key-hier: \
  -d amount=1000 \
  -d currency=eur \
  -d source=tok_visa

# ✅ Erwartete Ausgabe: JSON mit charge-Objekt
```

### Test 3: SendGrid
```bash
# Test-E-Mail über API senden
curl -X POST "https://api.sendgrid.com/v3/mail/send" \
  -H "Authorization: Bearer $SENDGRID_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "personalizations": [{"to": [{"email": "deine@email.de"}]}],
    "from": {"email": "noreply@deine-domain.de"},
    "subject": "Test Email",
    "content": [{"type": "text/plain", "value": "Hello from SoftwareKing24!"}]
  }'

# ✅ Erwartete Ausgabe: 202 Accepted
```

---

## 7️⃣ Produktions-Keys (Später)

### Wann brauchst du Production Keys?

**JETZT verwenden:**
- ✅ Cloudflare API Token (kann für Test & Production verwendet werden)
- ✅ SendGrid API Key (kann für Test & Production verwendet werden)

**SPÄTER ersetzen (vor Go-Live):**
- 🔄 Stripe Test Keys → Live Keys
  - Von: `pk_test_` → `pk_live_`
  - Von: `sk_test_` → `sk_live_`
- 🔄 Webhook URL ändern:
  - Von: `localhost:3000` → `deine-domain.pages.dev`

### Stripe Live Keys holen:
1. Gehe zu: **https://dashboard.stripe.com/apikeys** (ohne /test/)
2. Vervollständige **"Activate your account"**
3. Füge Geschäftsinformationen hinzu
4. Warte auf Aktivierung
5. Hole Live Keys: `pk_live_` und `sk_live_`

---

## 8️⃣ Security Best Practices

### ⚠️ NIEMALS committen!
```bash
# Prüfe .gitignore
cat .gitignore | grep .dev.vars

# Sollte enthalten sein:
# .dev.vars
# .env
```

### ✅ Keys sicher speichern
- Verwende einen Passwort-Manager (1Password, LastPass)
- Backup in verschlüsseltem Speicher
- Teile Keys NUR über sichere Kanäle

### 🔄 Keys rotieren
- Ändere Keys regelmäßig (z.B. alle 90 Tage)
- Bei Verdacht auf Kompromittierung sofort ändern

---

## 9️⃣ Troubleshooting

### Problem: Cloudflare Token funktioniert nicht
```bash
# Lösung 1: Token neu erstellen mit korrekten Permissions
# Lösung 2: Cache leeren
rm -rf ~/.wrangler
npx wrangler whoami
```

### Problem: Stripe Webhook empfängt keine Events
```bash
# Lösung: Verwende Stripe CLI für lokales Testing
stripe listen --forward-to localhost:3000/api/payments/stripe/webhook

# Teste mit:
stripe trigger payment_intent.succeeded
```

### Problem: SendGrid E-Mails kommen nicht an
```bash
# Prüfe:
# 1. Sender Email verifiziert?
# 2. API Key korrekt?
# 3. Im Spam-Ordner?

# Debug:
pm2 logs webapp --nostream | grep SendGrid
```

---

## ✅ Checkliste

- [ ] Cloudflare Account erstellt
- [ ] Cloudflare API Token erstellt
- [ ] Cloudflare Token getestet (`wrangler whoami`)
- [ ] Stripe Account erstellt
- [ ] Stripe Test Keys kopiert
- [ ] Stripe Webhook eingerichtet
- [ ] Stripe Webhook Secret kopiert
- [ ] SendGrid Account erstellt
- [ ] SendGrid Sender Email verifiziert
- [ ] SendGrid API Key erstellt
- [ ] JWT Secret generiert
- [ ] CSRF Secret generiert
- [ ] Alle Keys in `.dev.vars` gespeichert
- [ ] `.dev.vars` ist in `.gitignore`
- [ ] Alle Tests durchgeführt

---

## 🎉 Fertig!

Du hast jetzt alle benötigten API Keys!

**Nächster Schritt:** Production Deployment

```bash
# Siehe: DEPLOYMENT_CHECKLIST.md
cd /home/user/webapp
npm run deploy:prod
```

---

**Dokumentiert am:** 2026-02-14  
**Geschätzte Zeit:** 30-45 Minuten  
**Tatsächliche Zeit:** _____________
