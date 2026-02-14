#!/bin/bash
echo "=== CHECKING SQL INJECTION SAFETY ==="
echo ""

# Function to check context around SQL injection line
check_context() {
  local file=$1
  local line=$2
  echo "Checking $file:$line"
  echo "Context (10 lines before):"
  sed -n "$((line-10)),$((line+2))p" "$file" | grep -E "allowedFields|whitelist|ALLOWED" || echo "⚠️  NO FIELD VALIDATION FOUND"
  echo "---"
}

# Check each instance
check_context "src/index.tsx" 6345
check_context "src/index.tsx" 6400
check_context "src/index.tsx" 6549
check_context "src/index.tsx" 6962
check_context "src/index.tsx" 7124
check_context "src/index.tsx" 7221

