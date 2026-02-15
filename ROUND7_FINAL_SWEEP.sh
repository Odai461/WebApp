#!/bin/bash
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║          ROUND 7: FINAL COMPREHENSIVE SWEEP                ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Final deep scan for any remaining issues..."
echo ""

echo "1. CHECKING FOR ENVIRONMENT VARIABLE LEAKS..."
echo "---------------------------------------------"
grep -rn "console\.log.*env\|console\.log.*process\.env" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Potential env var logging"

echo ""
echo "2. CHECKING FOR COMMENTED-OUT CODE..."
echo "--------------------------------------"
grep -rn "^[[:space:]]*//.*=\|^[[:space:]]*/\*.*=.*\*/" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Lines with commented-out code"

echo ""
echo "3. CHECKING FOR DEAD CODE (UNREACHABLE)..."
echo "------------------------------------------"
grep -rn "return.*\n.*[^}]" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Potential unreachable code after return"

echo ""
echo "4. CHECKING FOR INCONSISTENT NAMING..."
echo "--------------------------------------"
echo "Checking function naming patterns..."
grep -rn "function [a-z]" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "camelCase functions"
grep -rn "function [A-Z]" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "PascalCase functions"

echo ""
echo "5. CHECKING FOR MISSING RETURN TYPES..."
echo "---------------------------------------"
grep -rn "function.*(" src/ --include="*.ts" | grep -v "): " | grep -v " => " | wc -l
echo "Functions without explicit return type"

echo ""
echo "6. CHECKING FOR LARGE FUNCTIONS..."
echo "----------------------------------"
echo "Finding functions over 100 lines..."
awk '/^[[:space:]]*(export[[:space:]]+)?(async[[:space:]]+)?function/ {start=NR; name=$NF} /^}/ && start {if(NR-start>100) print FILENAME":"start":"name" ("NR-start" lines)"; start=0}' src/**/*.ts src/**/*.tsx 2>/dev/null | wc -l
echo "Functions over 100 lines"

echo ""
echo "7. CHECKING FOR MAGIC STRINGS..."
echo "--------------------------------"
grep -rn '"[A-Z][A-Z_]*"' src/ --include="*.ts" --include="*.tsx" | grep -v "import\|export\|//\|/\*" | wc -l
echo "Potential magic strings (UPPERCASE)"

echo ""
echo "8. CHECKING FOR MISSING JSDoc..."
echo "--------------------------------"
grep -rn "^export.*function\|^export.*class" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Exported functions/classes"
grep -rn "^[[:space:]]*/\*\*" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "JSDoc comments"

echo ""
echo "9. CHECKING FOR DUPLICATE STRINGS..."
echo "------------------------------------"
echo "Finding most common string literals..."
grep -roh '"[^"]\{20,\}"' src/ --include="*.tsx" | sort | uniq -c | sort -rn | head -5

echo ""
echo "10. CHECKING ERROR MESSAGE CONSISTENCY..."
echo "-----------------------------------------"
grep -rn "error.*:" src/index.tsx | grep -o "'[^']*'" | sort | uniq -c | sort -rn | head -5

echo ""
echo "11. CHECKING FOR MISSING LOADING STATES..."
echo "------------------------------------------"
grep -rn "fetch\|axios" src/ --include="*.tsx" | wc -l
echo "HTTP requests"
grep -rn "loading\|isLoading" src/ --include="*.tsx" | wc -l
echo "Loading state variables"

echo ""
echo "12. CHECKING FOR HARDCODED URLS..."
echo "----------------------------------"
grep -rn "https\?://[^'\"]" src/ --include="*.ts" --include="*.tsx" | grep -v "placeholder\|example\|via\.placeholder" | wc -l
echo "Hardcoded URLs (excluding placeholders)"

echo ""
echo "13. CHECKING FOR MISSING ERROR HANDLERS..."
echo "------------------------------------------"
grep -rn "\.then(" src/ --include="*.ts" --include="*.tsx" | wc -l
echo ".then() calls"
grep -rn "\.catch(" src/ --include="*.ts" --include="*.tsx" | wc -l
echo ".catch() calls"

echo ""
echo "14. CHECKING FOR SYNCHRONOUS STORAGE ACCESS..."
echo "----------------------------------------------"
grep -rn "localStorage\|sessionStorage" src/ --include="*.ts" --include="*.tsx" | wc -l
echo "Storage access (can block main thread)"

echo ""
echo "15. CHECKING BUILD OUTPUT SIZE..."
echo "---------------------------------"
if [ -d "dist" ]; then
  du -sh dist/
  echo "Current build size"
  find dist -name "*.js" -exec du -h {} \; | sort -rh | head -5
  echo "Largest JS files"
else
  echo "No dist folder found (run 'npm run build' first)"
fi

echo ""
echo "16. CHECKING FOR DUPLICATE DEPENDENCIES..."
echo "------------------------------------------"
if [ -f "package.json" ]; then
  echo "Checking for duplicates in dependencies and devDependencies..."
  comm -12 <(jq -r '.dependencies | keys[]' package.json 2>/dev/null | sort) <(jq -r '.devDependencies | keys[]' package.json 2>/dev/null | sort) | wc -l
  echo "Duplicate dependencies"
fi

echo ""
echo "17. CHECKING FOR OUTDATED PATTERNS..."
echo "-------------------------------------"
grep -rn "componentWillMount\|componentWillReceiveProps" src/ --include="*.tsx" | wc -l
echo "Deprecated React lifecycle methods"
grep -rn "createClass" src/ --include="*.tsx" | wc -l
echo "Old React.createClass usage"

echo ""
echo "18. CHECKING FOR DIRECT DOM MANIPULATION..."
echo "-------------------------------------------"
grep -rn "document\.getElementById\|document\.querySelector" src/ --include="*.tsx" | wc -l
echo "Direct DOM access (consider refs instead)"

echo ""
echo "19. CHECKING FOR MISSING KEYS IN LISTS..."
echo "-----------------------------------------"
grep -rn "\.map(" src/ --include="*.tsx" | wc -l
echo "Total .map() calls"
grep -rn "key=" src/ --include="*.tsx" | wc -l
echo "Elements with keys"

echo ""
echo "20. CHECKING FOR MISSING CLEANUP IN EFFECTS..."
echo "----------------------------------------------"
grep -rn "useEffect\|setInterval\|setTimeout\|addEventListener" src/ --include="*.tsx" | wc -l
echo "Effects/listeners that may need cleanup"
grep -rn "return.*=>.*clear\|return.*=>.*remove" src/ --include="*.tsx" | wc -l
echo "Cleanup functions found"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "              ROUND 7 FINAL SWEEP COMPLETE"
echo "═══════════════════════════════════════════════════════════"
