#!/bin/bash
echo "=== ROUND 9: DEEP IMPLEMENTATION ANALYSIS ==="
echo ""
echo "Focus: Implementing utilities, refactoring code, fixing technical debt"
echo ""

# 1. Find all fetch() calls that should use safeFetch()
echo "1. FETCH CALLS NEEDING REFACTOR"
echo "   Finding raw fetch() calls that should use safeFetch()..."
grep -rn "await fetch(" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l
echo "   fetch() calls found"
echo ""

# 2. Find all axios calls
echo "2. AXIOS CALLS"
echo "   Finding axios usage..."
grep -rn "axios\." src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l
echo "   axios calls found"
echo ""

# 3. Check for missing error boundaries
echo "3. ERROR BOUNDARIES"
echo "   Checking for React error boundary implementations..."
grep -rn "componentDidCatch\|ErrorBoundary\|error.*boundary" src/ --include="*.tsx" 2>/dev/null | wc -l
echo "   error boundary references found"
echo ""

# 4. Find duplicate code patterns
echo "4. DUPLICATE CODE PATTERNS"
echo "   Finding duplicate formatPrice implementations..."
grep -rn "function formatPrice\|const formatPrice" src/ --include="*.tsx" --include="*.ts" 2>/dev/null
echo ""

echo "   Finding duplicate formatDate implementations..."
grep -rn "function formatDate\|const formatDate" src/ --include="*.tsx" --include="*.ts" 2>/dev/null
echo ""

# 5. Find hardcoded strings that should be constants
echo "5. HARDCODED API ENDPOINTS"
echo "   Finding hardcoded API paths..."
grep -roh "'/api/[^']*'" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | sort -u | head -20
echo ""

# 6. Check for proper TypeScript typing
echo "6. TYPE SAFETY ISSUES"
echo "   Finding 'any' type usage..."
grep -rn ": any\|as any\|<any>" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l
echo "   'any' type usages found"
echo ""

# 7. Find missing input validation
echo "7. INPUT VALIDATION"
echo "   Finding POST/PUT endpoints without validation..."
grep -rn "\.post(\|\.put(" src/api/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l
echo "   POST/PUT endpoints found"

grep -rn "zod\|yup\|joi\|validate\|schema" src/api/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l
echo "   validation implementations found"
echo ""

# 8. Check for SQL injection vulnerabilities
echo "8. SQL SAFETY CHECK"
echo "   Finding string interpolation in SQL queries..."
grep -rn "\.prepare(\`.*\${" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | head -10
echo ""

# 9. Find missing indexes hints
echo "9. DATABASE OPTIMIZATION HINTS"
echo "   Finding WHERE clauses without indexes..."
grep -rn "WHERE.*=" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | grep -i "email\|status\|created_at\|user_id" | wc -l
echo "   potential missing index hints found"
echo ""

# 10. Security headers check
echo "10. SECURITY HEADERS"
echo "    Checking for security header implementations..."
grep -rn "X-Frame-Options\|Content-Security-Policy\|X-Content-Type-Options\|Strict-Transport-Security" src/ 2>/dev/null | wc -l
echo "    security header implementations found"
echo ""

echo "=== ANALYSIS COMPLETE ==="
echo ""
echo "Next: Create targeted fixes for highest-impact issues"
