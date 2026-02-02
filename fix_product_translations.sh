#!/bin/bash
# Comment out product_translations operations

# Backup first
cp src/index.tsx src/index.tsx.translations_backup

# Remove product_translations INSERT/UPDATE/SELECT blocks
sed -i '/INSERT INTO product_translations/,/\.run()/d' src/index.tsx
sed -i '/UPDATE product_translations/,/\.run()/d' src/index.tsx
sed -i '/SELECT id FROM product_translations/,/\.first()/d' src/index.tsx
sed -i '/Add translations if name provided/,/^    }/d' src/index.tsx
sed -i '/Update translation if exists/,/^      }/d' src/index.tsx

echo "✅ Fixed product_translations"
