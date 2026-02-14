#!/bin/bash

# 🚀 AlmaLinux VPS Quick Setup Script - SoftwareKing24 Webapp
# This script automates the deployment on AlmaLinux VPS

set -e  # Exit on error

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  🚀 SoftwareKing24 - AlmaLinux VPS Deployment          ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Functions
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    print_error "Please run as root or with sudo"
    exit 1
fi

# Get non-root user
read -p "Enter the username to run the app (default: webapp): " APP_USER
APP_USER=${APP_USER:-webapp}

read -p "Enter your domain name (e.g., example.com): " DOMAIN_NAME
if [ -z "$DOMAIN_NAME" ]; then
    print_error "Domain name is required!"
    exit 1
fi

print_info "Installing for user: $APP_USER"
print_info "Domain: $DOMAIN_NAME"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

# Step 1: Update System
print_info "Step 1: Updating system..."
dnf update -y
dnf install -y epel-release
dnf install -y wget curl git vim unzip tar policycoreutils-python-utils
print_success "System updated"

# Step 2: Create app user if doesn't exist
print_info "Step 2: Setting up application user..."
if id "$APP_USER" &>/dev/null; then
    print_info "User $APP_USER already exists"
else
    useradd -m -s /bin/bash $APP_USER
    print_success "User $APP_USER created"
fi

# Step 3: Install Node.js
print_info "Step 3: Installing Node.js 20.x..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
dnf install -y nodejs
NODE_VERSION=$(node --version)
print_success "Node.js installed: $NODE_VERSION"

# Step 4: Install PM2
print_info "Step 4: Installing PM2..."
npm install -g pm2
print_success "PM2 installed"

# Step 5: Install Wrangler
print_info "Step 5: Installing Wrangler..."
npm install -g wrangler
print_success "Wrangler installed"

# Step 6: Install Nginx
print_info "Step 6: Installing Nginx..."
dnf install -y nginx
systemctl enable nginx
print_success "Nginx installed"

# Step 7: Configure Firewall
print_info "Step 7: Configuring firewall..."
systemctl start firewalld
systemctl enable firewalld
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --permanent --add-port=3000/tcp
firewall-cmd --reload
print_success "Firewall configured"

# Step 8: Create application directory structure
print_info "Step 8: Creating directory structure..."
APP_DIR="/home/$APP_USER"
mkdir -p $APP_DIR/logs
mkdir -p $APP_DIR/backups
chown -R $APP_USER:$APP_USER $APP_DIR
print_success "Directory structure created"

# Step 9: Install Certbot
print_info "Step 9: Installing Certbot for SSL..."
dnf install -y certbot python3-certbot-nginx
print_success "Certbot installed"

# Step 10: Create Nginx configuration
print_info "Step 10: Creating Nginx configuration..."
cat > /etc/nginx/conf.d/webapp.conf << EOF
# HTTP Server - Redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN_NAME www.$DOMAIN_NAME;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://\$server_name\$request_uri;
    }
}

# HTTPS Server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $DOMAIN_NAME www.$DOMAIN_NAME;

    # SSL will be configured by Certbot
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    access_log /var/log/nginx/webapp_access.log;
    error_log /var/log/nginx/webapp_error.log;

    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Test Nginx config
nginx -t
print_success "Nginx configured"

# Step 11: Create backup script
print_info "Step 11: Creating backup script..."
cat > $APP_DIR/backup-db.sh << 'EOFBACKUP'
#!/bin/bash
BACKUP_DIR="/home/$USER/backups"
DATE=$(date +%Y%m%d-%H%M%S)
mkdir -p $BACKUP_DIR
if [ -d ".wrangler/state/v3/d1" ]; then
    cp -r .wrangler/state/v3/d1 $BACKUP_DIR/db-backup-$DATE/
    find $BACKUP_DIR -name "db-backup-*" -mtime +7 -exec rm -rf {} \; 2>/dev/null
    echo "Backup completed: db-backup-$DATE"
else
    echo "No database found to backup"
fi
EOFBACKUP

chown $APP_USER:$APP_USER $APP_DIR/backup-db.sh
chmod +x $APP_DIR/backup-db.sh
print_success "Backup script created"

# Step 12: Instructions for manual steps
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  🎉 Server Setup Complete!                              ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps (Manual):${NC}"
echo ""
echo -e "${BLUE}1. Upload your webapp backup:${NC}"
echo -e "   scp webapp-kali-ready-backup.tar.gz root@YOUR_VPS_IP:$APP_DIR/"
echo ""
echo -e "${BLUE}2. Extract and setup application:${NC}"
echo -e "   su - $APP_USER"
echo -e "   cd $APP_DIR"
echo -e "   tar -xzf webapp-kali-ready-backup.tar.gz"
echo -e "   # Move files if needed: mv home/user/webapp/* ./"
echo -e "   npm install --production"
echo -e "   npx wrangler d1 migrations apply webapp-production --local"
echo -e "   npm run build"
echo ""
echo -e "${BLUE}3. Configure environment:${NC}"
echo -e "   vim .env.production"
echo -e "   # Add: JWT_SECRET=\$(openssl rand -base64 64)"
echo ""
echo -e "${BLUE}4. Start application:${NC}"
echo -e "   pm2 start ecosystem.config.cjs"
echo -e "   pm2 save"
echo -e "   pm2 startup"
echo ""
echo -e "${BLUE}5. Obtain SSL certificate:${NC}"
echo -e "   sudo certbot --nginx -d $DOMAIN_NAME -d www.$DOMAIN_NAME"
echo ""
echo -e "${BLUE}6. Start Nginx:${NC}"
echo -e "   sudo systemctl start nginx"
echo ""
echo -e "${BLUE}7. Test your site:${NC}"
echo -e "   https://$DOMAIN_NAME"
echo ""
echo -e "${GREEN}✅ Installation script completed!${NC}"
echo ""
print_info "Logs: pm2 logs webapp"
print_info "Monitor: pm2 monit"
print_info "Documentation: $APP_DIR/ALMALINUX_VPS_DEPLOYMENT.md"
echo ""
