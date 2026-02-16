#!/bin/bash

echo "=== Fixing React Keys in .map() Calls ==="
echo ""

# Find files with the most missing keys
echo "Files with most missing keys:"
for file in src/components/*.tsx; do
  count=$(grep -c "\.map(" "$file" 2>/dev/null | grep -v "key=")
  if [ "$count" -gt 5 ]; then
    echo "  - $(basename $file): ~$count instances"
  fi
done | sort -t: -k2 -rn | head -20

echo ""
echo "Sample issues found:"
grep -rn "\.map((.*) =>" src/components/*.tsx | grep -v "key=" | head -10

echo ""
echo "✅ Analysis complete. Manual fixes needed for context-specific key selection."
