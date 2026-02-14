# 🚀 AlmaLinux VPS Deployment - Quick Start Summary

## 📦 Download Backup

**Link:** https://www.genspark.ai/api/files/s/9J7IycY8  
**Size:** 167 MB

---

## ⚡ Quick Deployment (3 Methods)

### Method 1: Automated Script (Easiest!)

```bash
# 1. Upload backup and script to VPS
scp webapp-kali-ready-backup.tar.gz setup-almalinux-vps.sh root@YOUR_VPS_IP:/root/

# 2. SSH into VPS
ssh root@YOUR_VPS_IP

# 3. Run automated setup
chmod +x setup-almalinux-vps.sh
./setup-almalinux-vps.sh

# 4. Follow the on-screen instructions
# The script will:
# - Install Node.js, PM2, Nginx, Certbot
# - Configure firewall
# - Setup Nginx reverse proxy
# - Create backup scripts
```

### Method 2: Manual Setup

```bash
# === ON YOUR LOCAL MACHINE ===
# Upload backup to VPS
scp webapp-kali-ready-backup.tar.gz root@YOUR_VPS_IP:/home/webapp/

# === ON YOUR VPS ===
# SSH into server
ssh root@YOUR_VPS_IP

# Update system
sudo dnf update -y
sudo dnf install -y epel-release wget curl git

# Install Node.js 20
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Install PM2 and Wrangler
sudo npm install -g pm2 wrangler

# Install Nginx
sudo dnf install -y nginx
sudo systemctl enable nginx

# Configure firewall
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

# Extract and setup app
cd /home/webapp
tar -xzf webapp-kali-ready-backup.tar.gz
npm install --production
npx wrangler d1 migrations apply webapp-production --local
npm run build

# Start app
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup

# Get SSL certificate
sudo dnf install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Start Nginx
sudo systemctl start nginx
```

### Method 3: Docker (Future Option)

Coming soon - Dockerized deployment option.

---

## 📋 Essential Commands

### Application Management
```bash
pm2 start webapp          # Start app
pm2 stop webapp           # Stop app
pm2 restart webapp        # Restart app
pm2 logs webapp           # View logs
pm2 monit                 # Monitor resources
pm2 status                # Check status
```

### Nginx Management
```bash
sudo systemctl start nginx     # Start Nginx
sudo systemctl stop nginx      # Stop Nginx
sudo systemctl restart nginx   # Restart Nginx
sudo systemctl status nginx    # Check status
sudo nginx -t                  # Test configuration
```

### SSL Certificate
```bash
sudo certbot --nginx -d yourdomain.com    # Get certificate
sudo certbot renew                         # Renew certificate
sudo certbot certificates                  # List certificates
```

### Database Operations
```bash
# View products
npx wrangler d1 execute webapp-production --local \
  --command="SELECT * FROM products LIMIT 5"

# Backup database
./backup-db.sh
```

### System Monitoring
```bash
htop                      # System resources
df -h                     # Disk space
free -h                   # Memory usage
sudo lsof -i :3000       # Check port 3000
```

---

## 🌐 After Deployment

Your site will be accessible at:

- **Homepage:** https://yourdomain.com
- **Admin:** https://yourdomain.com/admin
- **Cart:** https://yourdomain.com/cart
- **API:** https://yourdomain.com/api/health

---

## 🔧 Configuration Files

### Main Locations
```
/home/webapp/                      # Application root
/home/webapp/ecosystem.config.cjs  # PM2 configuration
/home/webapp/.env.production       # Environment variables
/etc/nginx/conf.d/webapp.conf      # Nginx configuration
/home/webapp/logs/                 # Application logs
/var/log/nginx/                    # Nginx logs
```

---

## 🆘 Troubleshooting

### App won't start
```bash
pm2 logs webapp           # Check logs
pm2 restart webapp        # Restart app
sudo fuser -k 3000/tcp   # Kill port 3000
```

### Nginx 502 Error
```bash
pm2 status                       # Check if app is running
sudo systemctl restart nginx     # Restart Nginx
sudo tail -f /var/log/nginx/webapp_error.log
```

### Database issues
```bash
rm -rf .wrangler/state/v3/d1
npx wrangler d1 migrations apply webapp-production --local
pm2 restart webapp
```

### SSL problems
```bash
sudo certbot renew
sudo systemctl restart nginx
```

---

## 📊 System Requirements

- **OS:** AlmaLinux 8 or 9
- **CPU:** 2+ cores
- **RAM:** 2GB minimum, 4GB recommended
- **Disk:** 20GB+ free space
- **Network:** Static IP, open ports 80, 443

---

## ✅ Deployment Checklist

- [ ] Domain DNS configured (A records to VPS IP)
- [ ] VPS accessible via SSH
- [ ] Run setup script or manual installation
- [ ] Upload and extract backup
- [ ] Install dependencies
- [ ] Initialize database
- [ ] Build application
- [ ] Configure environment variables
- [ ] Start with PM2
- [ ] Configure Nginx
- [ ] Obtain SSL certificate
- [ ] Test all endpoints
- [ ] Setup monitoring
- [ ] Configure backups

---

## 🎯 Quick Test

```bash
# Test local
curl http://localhost:3000

# Test external
curl https://yourdomain.com

# Test cart API
curl -X POST https://yourdomain.com/api/cart/items \
  -H "Content-Type: application/json" \
  -H "X-Session-ID: test123" \
  -d '{"product_id": 1, "quantity": 1}'
```

---

## 📚 Documentation Files

1. **ALMALINUX_VPS_DEPLOYMENT.md** - Complete deployment guide
2. **setup-almalinux-vps.sh** - Automated setup script
3. **BACKUP_README.md** - Backup usage guide
4. **README.md** - Project documentation

---

## 🎉 Success Indicators

✅ PM2 shows webapp as "online"  
✅ Nginx is running  
✅ Domain resolves to VPS IP  
✅ HTTPS certificate is valid  
✅ Application accessible via domain  
✅ Cart functionality works  
✅ Admin panel accessible  

---

## 📞 Need Help?

**Check logs:**
```bash
pm2 logs webapp                              # App logs
sudo tail -f /var/log/nginx/webapp_error.log # Nginx logs
sudo journalctl -u nginx -f                  # System logs
```

**Common fixes:**
1. Restart app: `pm2 restart webapp`
2. Restart Nginx: `sudo systemctl restart nginx`
3. Check firewall: `sudo firewall-cmd --list-all`
4. Verify DNS: `nslookup yourdomain.com`
5. Test SSL: `openssl s_client -connect yourdomain.com:443`

---

**Last Updated:** 2026-02-13  
**Status:** Production Ready  
**Version:** 1.0.0
