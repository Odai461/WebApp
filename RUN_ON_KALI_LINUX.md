# 🐧 Running SOFTWAREKING24 on Kali Linux

## ✅ Prerequisites

### 1. Install Node.js and npm
```bash
# Check if already installed
node --version
npm --version

# If not installed, install Node.js 18+ (recommended)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

### 2. Install Git (if not already installed)
```bash
sudo apt-get install git
```

### 3. Optional but Recommended: PM2
```bash
sudo npm install -g pm2
```

---

## 📥 Download/Clone the Project

### Option A: Download as Backup
If you have the project backed up, download and extract:
```bash
# Download your project backup
# Extract to your desired location
tar -xzf webapp-backup.tar.gz -C ~/projects/
cd ~/projects/webapp
```

### Option B: Clone from GitHub
If you have it on GitHub:
```bash
cd ~/projects
git clone https://github.com/YOUR_USERNAME/webapp.git
cd webapp
```

### Option C: Get from Current Sandbox
I can create a backup for you right now:
```bash
# I'll create a tar.gz backup you can download
```

---

## 🚀 Setup and Run

### 1. Navigate to Project Directory
```bash
cd ~/projects/webapp  # Or wherever you extracted it
```

### 2. Install Dependencies
```bash
npm install
```
**Note**: This will install all packages listed in `package.json`. Takes 2-5 minutes.

### 3. Create Environment File (if needed)
```bash
# Create .dev.vars for local development
cat > .dev.vars << 'EOF'
# Local development environment variables
DATABASE_URL=local
NODE_ENV=development
EOF
```

### 4. Initialize Database (Local D1)
```bash
# Create local database migrations
npx wrangler d1 migrations apply webapp-production --local

# If you have seed data
npx wrangler d1 execute webapp-production --local --file=./seed.sql
```

### 5. Build the Project
```bash
npm run build
```
**Expected output**: 
```
✓ 138 modules transformed.
dist/_worker.js  2.7MB
✓ built in 3s
```

### 6. Run the Development Server

**Option A: Using Wrangler (Development Mode)**
```bash
npm run dev:sandbox
# or
npx wrangler pages dev dist --ip 0.0.0.0 --port 3000
```

**Option B: Using PM2 (Production-like)**
```bash
pm2 start ecosystem.config.cjs
pm2 logs webapp --lines 100
```

**Option C: Direct NPM Script**
```bash
npm run dev
```

### 7. Access the Application
Open your browser and go to:
```
http://localhost:3000
```

---

## 🔧 Local Development Commands

### Build Commands
```bash
npm run build          # Build for production
npm run dev            # Start dev server
npm run preview        # Preview production build
```

### Database Commands
```bash
# Apply migrations locally
npm run db:migrate:local

# Execute SQL commands
npx wrangler d1 execute webapp-production --local --command="SELECT * FROM products LIMIT 10"

# Reset database
npm run db:reset

# Seed database
npm run db:seed
```

### PM2 Commands (if using PM2)
```bash
pm2 start webapp                  # Start app
pm2 stop webapp                   # Stop app
pm2 restart webapp                # Restart app
pm2 logs webapp                   # View logs
pm2 logs webapp --lines 100       # View last 100 lines
pm2 list                          # List all apps
pm2 delete webapp                 # Remove from PM2
```

### Port Management
```bash
# Check what's using port 3000
sudo lsof -i :3000

# Kill process on port 3000
sudo fuser -k 3000/tcp

# Or
sudo kill -9 $(sudo lsof -t -i:3000)
```

---

## 📁 Project Structure

```
webapp/
├── src/
│   ├── index.tsx                 # Main entry point
│   ├── components/               # UI components
│   │   ├── shop-homepage-premium.tsx
│   │   ├── admin-analytics.tsx
│   │   └── ...
│   ├── lib/                      # Business logic
│   ├── routes/                   # API routes
│   └── types/                    # TypeScript types
├── public/                       # Static assets
│   └── static/
│       ├── logo.png
│       └── ...
├── dist/                         # Build output
├── migrations/                   # Database migrations
├── package.json                  # Dependencies
├── wrangler.jsonc               # Cloudflare config
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite config
└── ecosystem.config.cjs         # PM2 config
```

---

## 🐛 Troubleshooting

### Issue: Port Already in Use
```bash
# Solution 1: Kill the process
sudo fuser -k 3000/tcp

# Solution 2: Use a different port
npx wrangler pages dev dist --port 3001
```

### Issue: Module Not Found
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build Fails
```bash
# Check Node version (needs 18+)
node --version

# Update if needed
nvm install 18
nvm use 18
```

### Issue: Database Not Found
```bash
# Initialize database
npx wrangler d1 migrations apply webapp-production --local

# Check database
npx wrangler d1 execute webapp-production --local --command="SELECT name FROM sqlite_master WHERE type='table'"
```

### Issue: Cannot Access from Other Devices on Network
```bash
# Bind to 0.0.0.0 instead of localhost
npx wrangler pages dev dist --ip 0.0.0.0 --port 3000

# Then access via your Kali Linux IP:
http://192.168.1.XXX:3000
```

---

## 🔥 Performance Tips for Kali Linux

### 1. Increase Node Memory (if needed)
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### 2. Use PM2 Cluster Mode
```javascript
// ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'webapp',
    script: 'npx',
    args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
    instances: 1,  // Or 'max' for all CPU cores
    exec_mode: 'fork'
  }]
}
```

### 3. Enable Swap (if low on RAM)
```bash
# Check current swap
free -h

# Create swap file (2GB)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## 🌐 Accessing from Other Devices

### On Your Local Network
```bash
# Find your Kali IP
ip addr show
# or
hostname -I

# Start server bound to 0.0.0.0
npm run dev:sandbox

# Access from other devices:
http://YOUR_KALI_IP:3000
```

### Using ngrok (Public Access)
```bash
# Install ngrok
sudo snap install ngrok

# Expose local port
ngrok http 3000

# You'll get a public URL like:
# https://abc123.ngrok.io
```

---

## 📦 Creating a Backup

### Full Project Backup
```bash
cd ~/projects
tar -czf webapp-backup-$(date +%Y%m%d).tar.gz webapp/
```

### Database Backup Only
```bash
# Backup local D1 database
cp -r .wrangler/state/v3/d1 ~/backups/d1-backup-$(date +%Y%m%d)
```

---

## 🚀 Deploying to Production (from Kali)

### 1. Setup Cloudflare Wrangler
```bash
npx wrangler login
```

### 2. Deploy
```bash
npm run build
npx wrangler pages deploy dist --project-name softwareking24
```

---

## 🎯 Quick Start Script

Create a quick start script:
```bash
cat > start.sh << 'EOF'
#!/bin/bash
echo "Starting SOFTWAREKING24..."

# Kill any existing process on port 3000
fuser -k 3000/tcp 2>/dev/null || true

# Start with PM2
pm2 delete webapp 2>/dev/null || true
pm2 start ecosystem.config.cjs

# Show logs
sleep 3
pm2 logs webapp --nostream --lines 20

echo ""
echo "✅ Server started!"
echo "🌐 Access at: http://localhost:3000"
echo "📊 Logs: pm2 logs webapp"
echo "🛑 Stop: pm2 stop webapp"
EOF

chmod +x start.sh
```

Then just run:
```bash
./start.sh
```

---

## ⚙️ System Requirements

**Minimum**:
- CPU: 2 cores
- RAM: 2GB
- Disk: 1GB free space
- Node.js: 18.x or higher

**Recommended**:
- CPU: 4+ cores
- RAM: 4GB+
- Disk: 5GB free space
- SSD for better performance

---

## 📝 Summary

**To run on Kali Linux**:
1. Install Node.js 18+
2. Download/clone project
3. Run `npm install`
4. Run `npm run build`
5. Run `npm run dev:sandbox` or `pm2 start ecosystem.config.cjs`
6. Access at `http://localhost:3000`

**Want me to create a backup for you to download right now?** I can package the entire project into a `.tar.gz` file that you can extract on your Kali machine.

Just say "yes" and I'll create it for you!
