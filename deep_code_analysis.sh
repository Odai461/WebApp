#!/bin/bash
echo "=== DEEP CODE ANALYSIS ==="
echo ""

echo "1. CHECKING FOR DUPLICATE CODE..."
echo "--------------------------------"

# Check for duplicate functions
echo "Potential duplicate function names:"
grep -r "^[[:space:]]*function\|^[[:space:]]*const.*=.*=>.*{" src/ --include="*.ts" --include="*.tsx" | \
  sed 's/.*function \([^(]*\).*/\1/' | \
  sed 's/.*const \([^ ]*\).*/\1/' | \
  sort | uniq -d | head -10

echo ""
echo "2. CHECKING API RESPONSE CONSISTENCY..."
echo "---------------------------------------"

# Check for inconsistent API response formats
echo "API endpoints with inconsistent response formats:"
grep -rn "return c.json({" src/index.tsx | grep -v "success:" | head -5

echo ""
echo "3. CHECKING FOR UNUSED IMPORTS..."
echo "---------------------------------"

# Sample check for unused imports (checking a few key files)
echo "Checking src/index.tsx for potentially unused imports..."
grep "^import" src/index.tsx | wc -l
echo "Total imports in main file"

echo ""
echo "4. CHECKING ERROR HANDLING..."
echo "-----------------------------"

# Check for try-catch blocks without proper error logging
echo "Try-catch blocks without proper error handling:"
grep -rn "catch.*{" src/ --include="*.ts" --include="*.tsx" | \c -l
echo "Total catch blocks found"

grep -rn "catch.*{\s*$" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Empty catch blocks found"

echo ""
echo "5. CHECKING DATABASE QUERY PATTERNS..."
echo "--------------------------------------"

# Check for SQL injection vulnerabilities
echo "Checking for potential SQL injection risks:"
grep -rn "prepare(\`.*\${" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Queries with template literals (potential SQL injection)"

echo "Queries with proper parameter binding:"
grep -rn "\.bind(" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Total .bind() calls"

echo ""
echo "6. CHECKING FOR HARDCODED VALUES..."
echo "-----------------------------------"

echo "Hardcoded API keys or secrets (should use env vars):"
grep -rn "apiKey\|api_key\|secret\|password.*=.*['\"]" src/ --include="*.ts" --include="*.tsx" | grep -v "process.env" | wc -l

echo ""
echo "7. CHECKING TYPE SAFETY..."
echo "-------------------------"

echo "Usage of 'any' type (reduces type safety):"
grep -rn ": any" src/ --include="*.ts" --include="*.tsx" | wc -l

echo "Usage of '@ts-ignore' or '@ts-expect-error':"
grep -rn "@ts-ignore\|@ts-expect-error" src/ --include="*.ts" --include="*.tsx" | wc -l

echo ""
echo "8. CHECKING ASYNC/AWAIT PATTERNS..."
echo "-----------------------------------"

echo "Async functions without try-catch:"
grep -rn "async.*{" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Total async functions"

echo ""
echo "9. CHECKING FOR MISSING NULL CHECKS..."
echo "--------------------------------------"

echo "Direct property access without null checking:"
grep -rn "\\.rows\[0\]\." src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Direct array access patterns (potential null errors)"

echo ""
echo "10. CHECKING FRONTEND INTEGRATION..."
echo "------------------------------------"

# Check if frontend files reference correct API endpoints
echo "Checking frontend API endpoint references:"
grep -r "fetch.*api" public/ --include="*.js" 2>/dev/null | wc -l
echo "API calls in frontend"

echo ""
echo "=== ANALYSIS COMPLETE ==="
