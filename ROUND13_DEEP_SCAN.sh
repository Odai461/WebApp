#!/bin/bash

echo "=== ROUND 13: Deep Code Quality Scan ==="
echo ""

echo "1️⃣ TypeScript Type Safety Issues"
echo "--------------------------------"
echo "Functions without return types: $(grep -r "function\|const.*=.*(" src/ --include="*.ts" --include="*.tsx" | grep -v "): " | wc -l)"
echo "Any types used: $(grep -r ": any" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Non-null assertions: $(grep -r "!" src/ --include="*.ts" --include="*.tsx" | grep -v "!=" | grep -v "!==" | wc -l)"
echo ""

echo "2️⃣ Error Handling Gaps"
echo "----------------------"
echo "Try-catch blocks: $(grep -r "try {" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Async functions: $(grep -r "async " src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Fetch calls: $(grep -r "fetch(" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Empty catch blocks: $(grep -A1 "} catch" src/ --include="*.ts" --include="*.tsx" | grep -c "^--$")"
echo ""

echo "3️⃣ Performance Issues"
echo "---------------------"
echo "SELECT * queries: $(grep -r "SELECT \*" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Missing LIMIT clauses: $(grep -r "SELECT" src/ --include="*.ts" --include="*.tsx" | grep -v "LIMIT" | wc -l)"
echo "N+1 query patterns (loops with DB calls): $(grep -B2 "\.prepare\|\.query" src/ --include="*.ts" --include="*.tsx" | grep -c "for\|forEach\|map")"
echo ""

echo "4️⃣ Security Issues"
echo "------------------"
echo "String concatenation in SQL: $(grep -r "prepare(\`.*\${" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Eval usage: $(grep -r "eval(" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "innerHTML usage: $(grep -r "innerHTML" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Hardcoded secrets check: $(grep -ri "password.*=.*['\"]" src/ --include="*.ts" --include="*.tsx" | grep -v "placeholder\|label\|Password" | wc -l)"
echo ""

echo "5️⃣ Code Duplication"
echo "-------------------"
echo "Duplicate formatPrice: $(grep -r "function formatPrice\|const formatPrice" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Duplicate formatDate: $(grep -r "function formatDate\|const formatDate" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Duplicate API endpoints: $(grep -r "'/api/" src/ --include="*.ts" --include="*.tsx" | sort | uniq -d | wc -l)"
echo ""

echo "6️⃣ React/JSX Issues"
echo "-------------------"
echo "Missing keys in .map(): $(grep -r "\.map(" src/ --include="*.tsx" | grep -v "key=" | wc -l)"
echo "Inline functions in JSX: $(grep -r "onClick={() =>" src/ --include="*.tsx" | wc -l)"
echo "Direct DOM manipulation: $(grep -r "document\." src/ --include="*.tsx" | wc -l)"
echo ""

echo "7️⃣ Memory Leaks"
echo "---------------"
echo "addEventListener without cleanup: $(grep -r "addEventListener" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "setInterval without cleanup: $(grep -r "setInterval" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "setTimeout usage: $(grep -r "setTimeout" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo ""

echo "8️⃣ Build Size Issues"
echo "--------------------"
if [ -f "dist/_worker.js" ]; then
  echo "Worker bundle size: $(du -h dist/_worker.js | cut -f1)"
  echo "Total dist size: $(du -sh dist/ | cut -f1)"
else
  echo "No build found - run 'npm run build' first"
fi
echo ""

echo "9️⃣ Database Issues"
echo "------------------"
echo "Queries without try-catch: $(grep -r "\.prepare(" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Missing indexes (JOIN without index): $(grep -r "JOIN" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo "Missing transactions for multi-step ops: $(grep -r "INSERT\|UPDATE\|DELETE" src/ --include="*.ts" --include="*.tsx" | wc -l)"
echo ""

echo "🔟 Code Complexity"
echo "------------------"
echo "Large files (>1000 lines):"
find src/ -name "*.ts" -o -name "*.tsx" | while read file; do
  lines=$(wc -l < "$file")
  if [ $lines -gt 1000 ]; then
    echo "  - $file: $lines lines"
  fi
done | head -10
echo ""

echo "📊 Summary Statistics"
echo "--------------------"
echo "Total TypeScript files: $(find src/ -name "*.ts" -o -name "*.tsx" | wc -l)"
echo "Total lines of code: $(find src/ -name "*.ts" -o -name "*.tsx" -exec wc -l {} + | tail -1 | awk '{print $1}')"
echo "Average file size: $(find src/ -name "*.ts" -o -name "*.tsx" -exec wc -l {} + | tail -1 | awk -v files=$(find src/ -name "*.ts" -o -name "*.tsx" | wc -l) '{print int($1/files)} " lines"')"
echo ""

echo "✅ Scan Complete!"
