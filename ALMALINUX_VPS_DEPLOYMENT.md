# 🚀 AlmaLinux VPS Deployment Guide - SoftwareKing24 Webapp

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Server Preparation](#server-preparation)
3. [Install Required Software](#install-required-software)
4. [Deploy Application](#deploy-application)
5. [Configure Nginx Reverse Proxy](#configure-nginx-reverse-proxy)
6. [SSL Certificate Setup](#ssl-certificate-setup)
7. [Production Configuration](#production-configuration)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## 📋 Prerequisites

### What You Need:
- ✅ AlmaLinux VPS (8 or 9)
- ✅ Root or sudo access
- ✅ Domain name pointing to your VPS IP
- ✅ Minimum 2GB RAM, 2 CPU cores
- ✅ 20GB+ disk space
- ✅ Backup file downloaded

### Your Domain Setup:
```
Type    Name    Value           TTL
A       @       YOUR_VPS_IP     3600
A       www     YOUR_VPS_IP     3600
```

---

## 🛠️ Server Preparation

### Step 1: Connect to Your VPS

```bash
# SSH into your server
ssh root@YOUR_VPS_IP

# Or if using non-root user
ssh your_username@YOUR_VPS_IP
```

### Step 2: Update System

```bash
# Update all packages
sudo dnf update -y

# Install EPEL repository
sudo dnf install epel-release -y

# Install basic utilities
sudo dnf install -y wget curl git vim unzip tar
```

### Step 3: Create Application User (Optional but Recommended)

```bash
# Create user for running the app
sudo useradd -m -s /bin/bash webapp

# Set password
sudo passwd webapp

# Add to sudo group
sudo usermod -aG wheel webapp

# Switch to webapp user (or continue as root)
su - webapp
```

---

## 📦 Install Required Software

### 1. Install Node.js 20.x

```bash
# Download Node.js 20 setup script
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -

# Install Node.js
sudo dnf install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show v10.x.x
```

### 2. Install PM2 Process Manager

```bash
# Install PM2 globally
sudo npm install -g pm2

# Verify installation
pm2 --version

# Configure PM2 to start on boot
pm2 startup systemd
# Follow the command it outputs, usually:
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u webapp --hp /home/webapp
```

### 3. Install Wrangler CLI

```bash
# Install Wrangler
sudo npm install -g wrangler

# Verify
wrangler --version
```

### 4. Install Nginx

```bash
# Install Nginx
sudo dnf install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### 5. Install Firewalld (if not already installed)

```bash
# Install firewalld
sudo dnf install -y firewalld

# Start and enable
sudo systemctl start firewalld
sudo systemctl enable firewalld

# Open HTTP and HTTPS ports
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

---

## 🚀 Deploy Application

### Step 1: Upload Backup to Server

**Option A: Using SCP (from your local machine)**
```bash
# Upload backup to server
scp webapp-kali-ready-backup.tar.gz root@YOUR_VPS_IP:/home/webapp/
```

**Option B: Using wget (on server)**
```bash
# If you have the backup on a web server
cd /home/webapp
wget https://www.genspark.ai/api/files/s/9J7IycY8 -O webapp-backup.tar.gz
```

**Option C: Using SFTP**
```bash
# Use an SFTP client like FileZilla or WinSCP
# Upload to: /home/webapp/
```

### Step 2: Extract and Setup

```bash
# Navigate to home directory
cd /home/webapp

# Extract backup
tar -xzf webapp-backup.tar.gz

# The backup creates /home/user/webapp, so move contents
# If extracted to /home/webapp/home/user/webapp:
if [ -d "home/user/webapp" ]; then
    mv home/user/webapp/* ./
    rm -rf home
fi

# Or if you extracted to different location, move to /home/webapp:
# mv /path/to/extracted/webapp/* /home/webapp/

# Set proper permissions
sudo chown -R webapp:webapp /home/webapp
chmod -R 755 /home/webapp

# Navigate to project directory
cd /home/webapp

# Verify structure
ls -la
# You should see: package.json, src/, public/, etc.
```

### Step 3: Install Dependencies

```bash
# Install all npm packages
npm install --production

# If you get permission errors:
# sudo chown -R webapp:webapp /home/webapp
# npm install --production
```

### Step 4: Initialize Database

```bash
# Apply database migrations
npx wrangler d1 migrations apply webapp-production --local

# Verify tables were created
npx wrangler d1 execute webapp-production --local \
  --command="SELECT name FROM sqlite_master WHERE type='table'"
```

### Step 5: Build Project

```bash
# Build the production bundle
npm run build

# Verify dist/ directory was created
ls -la dist/
```

### Step 6: Configure Production Environment

```bash
# Create production environment file
cat > .env.production << 'EOF'
NODE_ENV=production
PORT=3000
JWT_SECRET=YOUR_SUPER_SECRET_JWT_KEY_CHANGE_THIS
HOST=0.0.0.0
EOF

# Set secure permissions
chmod 600 .env.production
```

### Step 7: Update PM2 Configuration for Production

```bash
# Edit ecosystem.config.cjs
vim ecosystem.config.cjs
```

**Update to this production configuration:**
```javascript
module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'npx',
      args: 'wrangler pages dev dist --d1=webapp-production --local --ip 0.0.0.0 --port 3000',
      cwd: '/home/webapp',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/home/webapp/logs/error.log',
      out_file: '/home/webapp/logs/output.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '500M',
      watch: false,
    }
  ]
}
```

### Step 8: Create Logs Directory

```bash
# Create logs directory
mkdir -p /home/webapp/logs
chmod 755 /home/webapp/logs
```

### Step 9: Start Application

```bash
# Kill any process on port 3000
sudo fuser -k 3000/tcp 2>/dev/null || true

# Start with PM2
cd /home/webapp
pm2 start ecosystem.config.cjs

# Check status
pm2 status

# View logs
pm2 logs webapp --lines 50

# Test locally
curl http://localhost:3000
```

### Step 10: Save PM2 Configuration

```bash
# Save PM2 process list
pm2 save

# This ensures your app restarts on server reboot
```

---

## 🌐 Configure Nginx Reverse Proxy

### Step 1: Create Nginx Configuration

```bash
# Create Nginx config file
sudo vim /etc/nginx/conf.d/webapp.conf
```

**Add this configuration (replace YOUR_DOMAIN.com):**

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com;
    
    # For SSL certificate verification (Let's Encrypt)
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # Redirect all HTTP to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# HTTPS Configuration
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com;

    # SSL Certificates (will be configured after Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/YOUR_DOMAIN.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/YOUR_DOMAIN.com/privkey.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Logging
    access_log /var/log/nginx/webapp_access.log;
    error_log /var/log/nginx/webapp_error.log;

    # Max upload size
    client_max_body_size 50M;

    # Proxy settings
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### Step 2: Test Nginx Configuration

```bash
# Test configuration
sudo nginx -t

# If OK, reload Nginx
sudo systemctl reload nginx
```

**For now, comment out the SSL lines since we don't have certificates yet:**

```bash
# Edit the config
sudo vim /etc/nginx/conf.d/webapp.conf

# Comment out SSL-related lines (lines starting with 'ssl_' and 'listen 443')
# Save and test again
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 SSL Certificate Setup

### Step 1: Install Certbot

```bash
# Install Certbot for Nginx
sudo dnf install -y certbot python3-certbot-nginx

# Verify installation
certbot --version
```

### Step 2: Obtain SSL Certificate

```bash
# Stop Nginx temporarily
sudo systemctl stop nginx

# Get certificate (replace YOUR_DOMAIN.com)
sudo certbot certonly --standalone -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com

# Follow the prompts:
# - Enter your email
# - Agree to terms
# - Choose whether to share email with EFF
```

### Step 3: Update Nginx Configuration

```bash
# Now uncomment the SSL lines in your config
sudo vim /etc/nginx/conf.d/webapp.conf

# Uncomment these lines:
# listen 443 ssl http2;
# ssl_certificate ...
# ssl_certificate_key ...
# All other ssl_ lines

# Test configuration
sudo nginx -t

# Start Nginx
sudo systemctl start nginx
```

### Step 4: Set Up Auto-Renewal

```bash
# Test renewal
sudo certbot renew --dry-run

# Certbot automatically creates a systemd timer for renewal
# Verify it's enabled
sudo systemctl list-timers | grep certbot
```

---

## ⚙️ Production Configuration

### 1. Configure Production Database

For production, you should create a production D1 database on Cloudflare:

```bash
# Login to Cloudflare (from your VPS)
npx wrangler login

# Create production D1 database
npx wrangler d1 create webapp-production-live

# Note the database_id from output
# Update wrangler.jsonc with the production database_id
```

**Or continue using local SQLite for VPS deployment** (simpler for standalone VPS):

The local D1 database works fine for VPS deployment. No changes needed.

### 2. Configure Environment Variables

```bash
# Edit .env.production
vim /home/webapp/.env.production
```

**Add your production secrets:**
```env
NODE_ENV=production
PORT=3000
JWT_SECRET=YOUR_VERY_SECURE_JWT_SECRET_HERE_64_CHARS_MINIMUM
HOST=0.0.0.0
DOMAIN=YOUR_DOMAIN.com
```

### 3. Generate Strong JWT Secret

```bash
# Generate a secure random secret
openssl rand -base64 64

# Copy output and paste into .env.production as JWT_SECRET
```

### 4. Restart Application

```bash
# Restart PM2 app
pm2 restart webapp

# Check logs
pm2 logs webapp --lines 50

# Save PM2 config
pm2 save
```

---

## 📊 Monitoring & Maintenance

### PM2 Monitoring

```bash
# View real-time dashboard
pm2 monit

# List processes
pm2 list

# View logs
pm2 logs webapp

# View specific lines
pm2 logs webapp --lines 100

# Clear logs
pm2 flush

# Restart app
pm2 restart webapp

# Stop app
pm2 stop webapp

# Delete app from PM2
pm2 delete webapp
```

### Check Application Health

```bash
# Test local connection
curl http://localhost:3000

# Test external connection
curl https://YOUR_DOMAIN.com

# Test cart API
curl -X POST https://YOUR_DOMAIN.com/api/cart/items \
  -H "Content-Type: application/json" \
  -H "X-Session-ID: test123" \
  -d '{"product_id": 1, "quantity": 1}'
```

### View Logs

```bash
# Application logs
pm2 logs webapp

# Nginx access logs
sudo tail -f /var/log/nginx/webapp_access.log

# Nginx error logs
sudo tail -f /var/log/nginx/webapp_error.log

# System logs
sudo journalctl -u nginx -f
```

### Database Management

```bash
# View products
npx wrangler d1 execute webapp-production --local \
  --command="SELECT * FROM products LIMIT 10"

# View orders
npx wrangler d1 execute webapp-production --local \
  --command="SELECT * FROM orders ORDER BY created_at DESC LIMIT 10"

# View cart items
npx wrangler d1 execute webapp-production --local \
  --command="SELECT COUNT(*) as active_carts FROM shopping_carts WHERE status='active'"

# Backup database
cp .wrangler/state/v3/d1/miniflare-D1DatabaseObject/your-db-id.sqlite \
   /home/webapp/backups/db-backup-$(date +%Y%m%d).sqlite
```

### Performance Monitoring

```bash
# Install htop for system monitoring
sudo dnf install -y htop

# View system resources
htop

# Check disk space
df -h

# Check memory usage
free -h

# Check network connections
sudo netstat -tuln | grep 3000
```

---

## 🔄 Common Maintenance Tasks

### Update Application

```bash
# Stop application
pm2 stop webapp

# Pull latest code (if using git)
cd /home/webapp
git pull origin main

# Or upload new backup and extract
# Then:

# Install dependencies
npm install --production

# Run migrations
npx wrangler d1 migrations apply webapp-production --local

# Rebuild
npm run build

# Restart
pm2 restart webapp
```

### Backup Database

```bash
# Create backup script
vim /home/webapp/backup-db.sh
```

**Add this script:**
```bash
#!/bin/bash
BACKUP_DIR="/home/webapp/backups"
DATE=$(date +%Y%m%d-%H%M%S)

mkdir -p $BACKUP_DIR

# Backup database
cp .wrangler/state/v3/d1/miniflare-D1DatabaseObject/*.sqlite \
   $BACKUP_DIR/db-backup-$DATE.sqlite

# Keep only last 7 days of backups
find $BACKUP_DIR -name "db-backup-*.sqlite" -mtime +7 -delete

echo "Backup completed: db-backup-$DATE.sqlite"
```

**Make executable and test:**
```bash
chmod +x /home/webapp/backup-db.sh
cd /home/webapp
./backup-db.sh
```

**Create daily backup cron job:**
```bash
# Edit crontab
crontab -e

# Add this line (backup daily at 2 AM)
0 2 * * * cd /home/webapp && ./backup-db.sh >> /home/webapp/logs/backup.log 2>&1
```

### Update System Packages

```bash
# Update all packages
sudo dnf update -y

# Update Node.js (if needed)
sudo dnf update -y nodejs

# Update npm packages
cd /home/webapp
npm update

# Restart app
pm2 restart webapp
```

---

## 🚨 Troubleshooting

### Port 3000 Already in Use

```bash
# Find process
sudo lsof -i :3000

# Kill process
sudo fuser -k 3000/tcp

# Restart app
pm2 restart webapp
```

### Nginx 502 Bad Gateway

```bash
# Check if app is running
pm2 status

# Check app logs
pm2 logs webapp

# Restart app
pm2 restart webapp

# Restart Nginx
sudo systemctl restart nginx
```

### Database Errors

```bash
# Reset local database
rm -rf /home/webapp/.wrangler/state/v3/d1
npx wrangler d1 migrations apply webapp-production --local
pm2 restart webapp
```

### Permission Errors

```bash
# Fix ownership
sudo chown -R webapp:webapp /home/webapp

# Fix permissions
chmod -R 755 /home/webapp
chmod 600 /home/webapp/.env.production
```

### SSL Certificate Issues

```bash
# Renew certificate manually
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run

# Restart Nginx
sudo systemctl restart nginx
```

---

## 🎯 Quick Reference Commands

```bash
# Application Management
pm2 list                    # List all apps
pm2 restart webapp          # Restart app
pm2 logs webapp             # View logs
pm2 monit                   # Monitor resources

# Nginx Management
sudo systemctl status nginx # Check status
sudo systemctl restart nginx # Restart Nginx
sudo nginx -t               # Test config

# Firewall Management
sudo firewall-cmd --list-all # List rules
sudo firewall-cmd --reload   # Reload firewall

# Database Operations
npx wrangler d1 execute webapp-production --local \
  --command="YOUR_SQL_HERE"

# SSL Certificate
sudo certbot renew          # Renew certificate
sudo certbot certificates   # List certificates
```

---

## 🌐 Access Your Application

After deployment, access your application at:

- **🏠 Homepage:** https://YOUR_DOMAIN.com
- **🛡️ Admin Panel:** https://YOUR_DOMAIN.com/admin
- **🛒 Cart:** https://YOUR_DOMAIN.com/cart
- **🧪 Test Page:** https://YOUR_DOMAIN.com/test-cart.html

---

## 📋 Deployment Checklist

- [ ] VPS provisioned with AlmaLinux
- [ ] Domain DNS configured
- [ ] Node.js installed
- [ ] PM2 installed
- [ ] Nginx installed
- [ ] Firewall configured
- [ ] Application uploaded and extracted
- [ ] Dependencies installed
- [ ] Database initialized
- [ ] Application built
- [ ] PM2 started and configured for boot
- [ ] Nginx configured as reverse proxy
- [ ] SSL certificate obtained and configured
- [ ] Environment variables set
- [ ] Backup script created
- [ ] Monitoring configured
- [ ] Test all endpoints working

---

## 🎉 Success!

Your SoftwareKing24 webapp is now running on AlmaLinux VPS with:

✅ Production-grade setup  
✅ Nginx reverse proxy  
✅ SSL/HTTPS encryption  
✅ PM2 process management  
✅ Automatic restarts  
✅ Database backups  
✅ Security configured  

**Your site is live at:** https://YOUR_DOMAIN.com

---

**Last Updated:** 2026-02-13  
**Version:** Production Ready  
**Support:** Check logs with `pm2 logs webapp`
