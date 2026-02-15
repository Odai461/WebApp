#!/bin/bash
echo "=== DEDUPLICATING formatPrice and formatDate ==="
echo ""

# Files with duplicate formatPrice
FORMATPRICE_FILES=(
  "src/components/cart.tsx"
  "src/components/checkout.tsx"
  "src/components/dashboard.tsx"
  "src/components/product-detail-modern.tsx"
  "src/components/products-page-modern.tsx"
  "src/components/products-page.tsx"
  "src/components/search-autocomplete.tsx"
)

# Files with duplicate formatDate
FORMATDATE_FILES=(
  "src/components/admin-certificates.tsx"
  "src/components/admin-contact-messages.tsx"
  "src/components/admin-coupons.tsx"
  "src/components/admin-tickets.tsx"
  "src/components/admin-users.tsx"
)

echo "Step 1: Add import statement to files needing formatPrice..."
for file in "${FORMATPRICE_FILES[@]}"; do
  if [ -f "$file" ]; then
    # Check if import already exists
    if ! grep -q "import.*formatPrice.*from.*utils/helpers" "$file"; then
      echo "  Adding import to $file"
      # Add import after first import or at top
      sed -i "1i import { formatPrice } from '../utils/helpers';" "$file"
    fi
  fi
done

echo ""
echo "Step 2: Add import statement to files needing formatDate..."
for file in "${FORMATDATE_FILES[@]}"; do
  if [ -f "$file" ]; then
    if ! grep -q "import.*formatDate.*from.*utils/helpers" "$file"; then
      echo "  Adding import to $file"
      sed -i "1i import { formatDate } from '../utils/helpers';" "$file"
    fi
  fi
done

echo ""
echo "Step 3: Summary"
echo "  formatPrice files updated: ${#FORMATPRICE_FILES[@]}"
echo "  formatDate files updated: ${#FORMATDATE_FILES[@]}"
echo ""
echo "Note: Manual cleanup of inline function definitions still needed"
echo "      (Removing 'function formatPrice() {...}' blocks)"
echo ""
echo "To verify imports were added:"
echo "  grep -n 'import.*formatPrice' ${FORMATPRICE_FILES[0]}"
echo "  grep -n 'import.*formatDate' ${FORMATDATE_FILES[0]}"
