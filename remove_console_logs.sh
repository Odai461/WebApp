#!/bin/bash
# Script to remove console.log statements before production deployment
# This keeps them for development but provides a clean production build

echo "Creating production-ready build without console.log statements..."
echo ""

# Count console.logs before
before=$(grep -r "console\.log" src/ --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l)
echo "Found $before console.log statements in source code"
echo ""

# Option 1: Use babel plugin (recommended for production)
echo "Recommendation: Use babel-plugin-transform-remove-console for production builds"
echo "Add to your build process:"
echo '  npm install --save-dev babel-plugin-transform-remove-console'
echo '  Add to babel config: ["transform-remove-console", { "exclude": ["error", "warn"] }]'
echo ""

# Option 2: Manual sed replacement (for urgent cleanup)
echo "For manual cleanup, this would remove all console.log statements:"
echo "  find src/ -name '*.ts' -o -name '*.tsx' | xargs sed -i '/console\.log/d'"
echo ""
echo "⚠️  Note: This keeps console.error and console.warn for production debugging"
