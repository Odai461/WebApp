#!/bin/bash
echo "============================================"
echo "ULTRA COMPREHENSIVE PLATFORM SCAN"
echo "============================================"
echo ""

# Test every single route
echo "1. Testing EVERY route in the application..."
echo "---"
routes=(
  "/"
  "/de"
  "/new-light-theme"
  "/wishlist"
  "/api/products"
  "/api/products/featured"
  "/api/products/new"
  "/api/products/bestsellers"
  "/api/products/id/9"
  "/api/products/id/10"
  "/api/products/microsoft-office-2021-pro"
  "/api/categories"
  "/api/categories/security-software/products"
  "/api/categories/office-software/products"
  "/api/categories/operating-systems/products"
  "/api/brands"
  "/api/brands/featured"
  "/api/cart"
  "/api/cart/add"
  "/api/cart/update"
  "/api/cart/remove"
  "/api/products/search/autocomplete?q=office"
  "/api/products/search/autocomplete?q=windows"
  "/admin/categories"
)

failed=0
slow=0
for route in "${routes[@]}"; do
  start=$(date +%s%3N)
  status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$route")
  end=$(date +%s%3N)
  time=$((end - start))
  
  if [ "$status" -eq 200 ]; then
    if [ "$time" -gt 100 ]; then
      echo "⚠️  $route - $status (${time}ms - SLOW)"
      ((slow++))
    else
      echo "✅ $route - $status (${time}ms)"
    fi
  else
    echo "❌ $route - $status"
    ((failed++))
  fi
done
echo "Failed: $failed, Slow (>100ms): $slow"
echo ""

# Check for missing environment variables
echo "2. Checking for missing environment variables..."
echo "---"
if [ -f ".env" ]; then
  echo "✅ .env file exists"
  echo "Variables defined:"
  grep -v "^#" .env | grep -v "^$" | cut -d= -f1 | while read var; do
    echo "  - $var"
  done
else
  echo "⚠️  .env file not found (using .dev.vars or defaults)"
fi
echo ""

# Check for TODO/FIXME comments in code
echo "3. Scanning for TODO/FIXME in source code..."
echo "---"
todo_count=$(grep -r "TODO\|FIXME\|XXX\|HACK" src/ --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l)
echo "Found $todo_count TODO/FIXME comments"
if [ "$todo_count" -gt 0 ]; then
  grep -r "TODO\|FIXME\|XXX\|HACK" src/ --include="*.ts" --include="*.tsx" -n 2>/dev/null | head -10
fi
echo ""

# Check for console.log statements
echo "4. Checking for debug console.log statements..."
echo "---"
console_count=$(grep -r "console\\.log" src/ --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l)
echo "Found $console_count console.log statements"
if [ "$console_count" -gt 0 ]; then
  echo "⚠️  Consider removing debug logs before production"
  grep -r "console\\.log" src/ --include="*.ts" --include="*.tsx" -n 2>/dev/null | head -5
fi
echo ""

# Check database for data quality issues
echo "5. Deep database data quality checks..."
echo "---"
npx wrangler d1 execute webapp-production --local --command="
SELECT 'Products with empty descriptions' as issue, COUNT(*) as count 
FROM products WHERE description IS NULL OR description = '';
" 2>&1 | grep -A 3 "results" | grep "count"

npx wrangler d1 execute webapp-production --local --command="
SELECT 'Products with missing SKU' as issue, COUNT(*) as count 
FROM products WHERE sku IS NULL OR sku = '';
" 2>&1 | grep -A 3 "results" | grep "count"

npx wrangler d1 execute webapp-production --local --command="
SELECT 'Products with invalid image URLs' as issue, COUNT(*) as count 
FROM products WHERE image_url IS NULL OR image_url = '';
" 2>&1 | grep -A 3 "results" | grep "count"

npx wrangler d1 execute webapp-production --local --command="
SELECT 'Products out of stock' as issue, COUNT(*) as count 
FROM products WHERE stock <= 0;
" 2>&1 | grep -A 3 "results" | grep "count"

echo ""

# Check for unused files
echo "6. Checking for potentially unused files..."
echo "---"
echo "Backup files:"
find . -name "*.backup*" -o -name "*.bak" -o -name "*~" 2>/dev/null | wc -l | xargs echo "Found"
echo "Temp files:"
find . -name "*.tmp" -o -name "*.temp" 2>/dev/null | wc -l | xargs echo "Found"
echo ""

# Check package.json for security issues
echo "7. Checking for outdated dependencies..."
echo "---"
if command -v npm &> /dev/null; then
  echo "Running npm audit..."
  npm audit --production 2>&1 | grep -E "vulnerabilities|found" | head -5
fi
echo ""

# Check file permissions
echo "8. Checking critical file permissions..."
echo "---"
critical_files=(
  ".env"
  ".dev.vars"
  "wrangler.jsonc"
  "package.json"
)
for file in "${critical_files[@]}"; do
  if [ -f "$file" ]; then
    perms=$(stat -c "%a" "$file" 2>/dev/null || stat -f "%A" "$file" 2>/dev/null)
    echo "$file: $perms"
  fi
done
echo ""

# Check for missing indexes on frequently queried columns
echo "9. Analyzing query performance..."
echo "---"
echo "Checking if all foreign keys are indexed..."
npx wrangler d1 execute webapp-production --local --command="
SELECT name FROM sqlite_master 
WHERE type='index' 
AND (name LIKE '%category_id%' OR name LIKE '%brand_id%' OR name LIKE '%user_id%');
" 2>&1 | grep -A 10 "results" | grep "name" | wc -l | xargs echo "Foreign key indexes found:"
echo ""

# Check for proper error handling
echo "10. Testing error handling..."
echo "---"
echo "Testing invalid product ID:"
curl -s "http://localhost:3000/api/products/id/99999" | jq '.success, .error' 2>/dev/null || echo "Failed to parse"
echo ""
echo "Testing invalid slug:"
curl -s "http://localhost:3000/api/products/invalid-slug-12345" | jq '.success, .error' 2>/dev/null || echo "Failed to parse"
echo ""

# Memory and resource usage
echo "11. Checking resource usage..."
echo "---"
ps aux | grep -E "node|wrangler" | grep -v grep | awk '{print "Process:", $11, "- CPU:", $3"%, Mem:", $4"%"}' | head -5
echo ""

# Check git status
echo "12. Git repository status..."
echo "---"
git status --short | head -10
uncommitted=$(git status --short | wc -l)
echo "Uncommitted changes: $uncommitted"
echo ""

echo "============================================"
echo "SCAN COMPLETE"
echo "============================================"
