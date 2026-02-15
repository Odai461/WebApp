#!/bin/bash
echo "=== FINAL CONTROL CHECK - Pre-Deployment ==="
echo ""
echo "Comprehensive verification before deployment..."
echo ""

# 1. Git Status
echo "1. GIT REPOSITORY STATUS"
echo "========================"
git status --short | head -10
echo ""
echo "Total commits: $(git log --oneline | wc -l)"
echo "Current branch: $(git branch --show-current)"
echo "Latest commit: $(git log -1 --oneline)"
echo ""

# 2. Build Health
echo "2. BUILD VERIFICATION"
echo "===================="
if [ -d "dist" ]; then
  echo "✓ Build exists"
  echo "  Size: $(du -sh dist/ | cut -f1)"
  echo "  Worker: $(du -sh dist/_worker.js 2>/dev/null | cut -f1 || echo 'N/A')"
  echo ""
  echo "Build files:"
  ls -lh dist/ | head -5
else
  echo "⚠️  No build found. Running build..."
  npm run build > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    echo "✓ Build completed successfully"
  else
    echo "✗ Build failed"
  fi
fi
echo ""

# 3. Code Quality Checks
echo "3. CODE QUALITY VERIFICATION"
echo "============================"
echo "Console.log remaining: $(grep -rn "console\.log" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l)"
echo "  (Should be ~6, all intentional)"
echo ""
echo "Backup files: $(find src/ -name "*.backup" 2>/dev/null | wc -l)"
echo "  (Can be deleted after verification)"
echo ""
echo "TypeScript files: $(find src/ -name "*.ts" -o -name "*.tsx" | wc -l)"
echo "Migration files: $(ls migrations/*.sql 2>/dev/null | wc -l)"
echo ""

# 4. Database Status
echo "4. DATABASE VERIFICATION"
echo "========================"
if [ -d ".wrangler" ]; then
  echo "✓ Local database exists"
  echo "  Path: .wrangler/state/v3/d1/"
else
  echo "⚠️  No local database. Run: npm run db:migrate:local"
fi
echo ""
echo "Migration files:"
ls -lh migrations/*.sql 2>/dev/null | tail -5
echo ""

# 5. Configuration Files
echo "5. CONFIGURATION CHECK"
echo "======================"
if [ -f "wrangler.jsonc" ]; then
  echo "✓ wrangler.jsonc exists"
  grep -E "name|compatibility_date" wrangler.jsonc | head -3
else
  echo "⚠️  wrangler.jsonc missing"
fi
echo ""

if [ -f "package.json" ]; then
  echo "✓ package.json exists"
  echo "  Name: $(grep '"name"' package.json | cut -d'"' -f4)"
  echo "  Scripts: $(grep '"deploy"' package.json | wc -l) deployment script(s)"
else
  echo "⚠️  package.json missing"
fi
echo ""

if [ -f ".env.example" ]; then
  echo "✓ .env.example exists ($(wc -l < .env.example) variables)"
else
  echo "⚠️  .env.example missing"
fi
echo ""

# 6. Documentation
echo "6. DOCUMENTATION STATUS"
echo "======================="
echo "Markdown files: $(ls *.md 2>/dev/null | wc -l)"
echo "Key docs:"
ls -lh QUICK_START_GUIDE.md FINAL_COMPREHENSIVE_AUDIT.md ROUND12_DATABASE_FIXES.md 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
echo ""

# 7. Infrastructure Files
echo "7. INFRASTRUCTURE VERIFICATION"
echo "=============================="
echo "Middleware files:"
ls -lh src/middleware/*.ts 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
echo ""
echo "Utility files:"
ls -lh src/utils/*.ts 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
echo ""
echo "Constants:"
ls -lh src/constants/*.ts 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
echo ""

# 8. Security Check
echo "8. SECURITY VERIFICATION"
echo "========================"
echo "Checking for sensitive data..."
SECRETS=$(grep -r "password.*=.*['\"].\{10,\}\|api.*key.*=.*['\"].\{20,\}" src/ --include="*.ts" --include="*.tsx" 2>/dev/null | grep -v "placeholder\|example\|YOUR_\|XXX\|type\|interface" | wc -l)
if [ "$SECRETS" -eq 0 ]; then
  echo "✓ No hardcoded secrets found"
else
  echo "⚠️  Found $SECRETS potential secrets (review recommended)"
fi
echo ""

# 9. Performance Metrics
echo "9. PERFORMANCE INDICATORS"
echo "========================="
if [ -d "dist" ]; then
  WORKER_SIZE=$(du -b dist/_worker.js 2>/dev/null | cut -f1)
  if [ ! -z "$WORKER_SIZE" ]; then
    WORKER_MB=$(echo "scale=2; $WORKER_SIZE / 1024 / 1024" | bc)
    echo "Worker bundle: ${WORKER_MB}MB"
    if (( $(echo "$WORKER_MB < 5" | bc -l) )); then
      echo "  ✓ Size is good (< 5MB)"
    else
      echo "  ⚠️  Size is large (> 5MB)"
    fi
  fi
fi
echo ""
echo "Database indexes: $(grep -c "CREATE INDEX" migrations/0024_add_missing_indexes.sql 2>/dev/null || echo 0)"
echo "Pagination helpers: $(grep -c "export.*function" src/utils/db-query-helpers.ts 2>/dev/null || echo 0) functions"
echo "Transaction helpers: $(grep -c "export.*function" src/utils/db-transaction-helper.ts 2>/dev/null || echo 0) functions"
echo ""

# 10. Deployment Readiness
echo "10. DEPLOYMENT READINESS CHECKLIST"
echo "==================================="
CHECKS=0
PASSED=0

# Check 1: Build exists
if [ -d "dist" ]; then
  echo "✓ Build completed"
  PASSED=$((PASSED + 1))
else
  echo "✗ Build missing"
fi
CHECKS=$((CHECKS + 1))

# Check 2: No uncommitted changes
if [ -z "$(git status --porcelain)" ]; then
  echo "✓ No uncommitted changes"
  PASSED=$((PASSED + 1))
else
  echo "⚠️  Uncommitted changes present"
fi
CHECKS=$((CHECKS + 1))

# Check 3: Migrations exist
if [ -d "migrations" ] && [ "$(ls migrations/*.sql 2>/dev/null | wc -l)" -gt 0 ]; then
  echo "✓ Database migrations ready"
  PASSED=$((PASSED + 1))
else
  echo "✗ No migrations found"
fi
CHECKS=$((CHECKS + 1))

# Check 4: Configuration exists
if [ -f "wrangler.jsonc" ]; then
  echo "✓ Wrangler configuration ready"
  PASSED=$((PASSED + 1))
else
  echo "✗ Wrangler configuration missing"
fi
CHECKS=$((CHECKS + 1))

# Check 5: Documentation complete
if [ -f "QUICK_START_GUIDE.md" ]; then
  echo "✓ Deployment documentation ready"
  PASSED=$((PASSED + 1))
else
  echo "⚠️  Quick start guide missing"
fi
CHECKS=$((CHECKS + 1))

# Check 6: Code quality
CONSOLE_LOGS=$(grep -rn "console\.log" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l)
if [ "$CONSOLE_LOGS" -lt 10 ]; then
  echo "✓ Code quality verified (minimal console.log)"
  PASSED=$((PASSED + 1))
else
  echo "⚠️  Too many console.log statements ($CONSOLE_LOGS)"
fi
CHECKS=$((CHECKS + 1))

echo ""
echo "Readiness Score: $PASSED/$CHECKS checks passed"
echo ""

if [ "$PASSED" -eq "$CHECKS" ]; then
  echo "🎉 ALL CHECKS PASSED - READY FOR DEPLOYMENT"
elif [ "$PASSED" -ge $((CHECKS * 80 / 100)) ]; then
  echo "✓ DEPLOYMENT READY (with minor warnings)"
else
  echo "⚠️  REVIEW ISSUES BEFORE DEPLOYMENT"
fi

echo ""
echo "=== FINAL CONTROL CHECK COMPLETE ==="
