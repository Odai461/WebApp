#!/bin/bash

echo "=== Finding Placeholder vs Real Admin Pages ==="
echo ""

# Test sample URLs to see which show placeholder
test_urls=(
  "/admin/form-editor"
  "/admin/workflow-automation"
  "/admin/api-management"
  "/admin/webhooks"
  "/admin/import-export"
  "/admin/data-migration"
  "/admin/system-logs"
  "/admin/performance-monitor"
)

echo "Testing URLs for placeholder content:"
for url in "${test_urls[@]}"; do
  result=$(curl -s "https://3000-iajr1uzogojd35ozgn244-ea026bf9.sandbox.novita.ai$url" 2>&1 | grep -i "In Entwicklung" | wc -l)
  if [ $result -gt 0 ]; then
    echo "  ❌ $url - PLACEHOLDER"
  else
    echo "  ✅ $url - Implemented"
  fi
done

echo ""
echo "=== Checking Route Configuration ==="
echo "Total configured routes in admin-page-configs.ts: $(grep \"'/admin/\" src/admin-page-configs.ts | grep -v "^//" | wc -l)"
echo "Admin component files: $(ls -1 src/components/admin-*.tsx | wc -l)"
echo ""

echo "=== Sample Placeholder Routes (from sidebar) ==="
grep -A1 "menu-item" src/components/admin-sidebar-advanced.tsx | grep 'href="/admin/' | sed 's/.*href="\([^"]*\)".*/\1/' | sort -u | head -30

