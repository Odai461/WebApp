#!/usr/bin/env node

/**
 * Import Products to Database - SOFTWAREKING24
 * This script imports the parsed products into SQLite database
 */

const Database = require('better-sqlite3');
const fs = require('fs');

// Read parsed products
const productsData = JSON.parse(fs.readFileSync('/tmp/products_parsed.json', 'utf8'));
const { products, categories, brands } = productsData;

// Connect to database
const dbPath = '/home/user/webapp/.wrangler/state/v3/d1/miniflare-D1DatabaseObject/9ba2b04bf514d9facfd57ed57d849e77241a7adc99d1c1545d06688b43d84248.sqlite';
const db = new Database(dbPath);

console.log('🗄️  Connected to database:', dbPath);
console.log('📦 Products to import:', products.length);
console.log('📁 Categories:', categories.length);
console.log('🏷️  Brands:', brands.length);

try {
  // Start transaction
  db.exec('BEGIN TRANSACTION');
  
  // 1. Insert Categories
  console.log('\n1️⃣  Inserting categories...');
  const insertCategory = db.prepare(`
    INSERT OR IGNORE INTO categories (name, slug, description, is_active)
    VALUES (?, ?, ?, 1)
  `);
  
  const categoryMap = {};
  categories.forEach((cat, idx) => {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    insertCategory.run(cat, slug, `${cat} Software und Lizenzen`);
    
    // Get the ID
    const result = db.prepare('SELECT id FROM categories WHERE slug = ?').get(slug);
    if (result) {
      categoryMap[cat] = result.id;
      console.log(`   ✅ ${cat} (ID: ${result.id})`);
    }
  });
  
  // 2. Insert Brands
  console.log('\n2️⃣  Inserting brands...');
  const insertBrand = db.prepare(`
    INSERT OR IGNORE INTO brands (name, slug, is_active)
    VALUES (?, ?, 1)
  `);
  
  const brandMap = {};
  brands.forEach((brand, idx) => {
    const slug = brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    insertBrand.run(brand, slug);
    
    // Get the ID
    const result = db.prepare('SELECT id FROM brands WHERE slug = ?').get(slug);
    if (result) {
      brandMap[brand] = result.id;
      console.log(`   ✅ ${brand} (ID: ${result.id})`);
    }
  });
  
  // 3. Insert Products
  console.log('\n3️⃣  Inserting products...');
  const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products (
      name, slug, sku, 
      base_price, discount_price,
      category_id, brand_id,
      is_active, is_downloadable, is_virtual,
      stock_quantity, stock_status,
      created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 1, 1, 1, 999, 'in_stock', datetime('now'), datetime('now'))
  `);
  
  let imported = 0;
  let skipped = 0;
  
  products.forEach((product, idx) => {
    try {
      const slug = product.sku.toLowerCase() || 
                   product.name.toLowerCase().substring(0, 50).replace(/[^a-z0-9]+/g, '-');
      
      const categoryId = categoryMap[product.category] || 1;
      const brandId = brandMap[product.brand] || 1;
      
      insertProduct.run(
        product.name,
        slug,
        product.sku,
        product.regular_price,
        product.sale_price,
        categoryId,
        brandId
      );
      
      imported++;
      
      if ((idx + 1) % 25 === 0) {
        console.log(`   ✅ Imported ${idx + 1}/${products.length} products...`);
      }
    } catch (err) {
      skipped++;
      if (err.message.includes('UNIQUE constraint')) {
        // Product already exists, skip
      } else {
        console.error(`   ⚠️  Error importing ${product.name}:`, err.message);
      }
    }
  });
  
  // Commit transaction
  db.exec('COMMIT');
  
  console.log('\n✅ Import Complete!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 Summary:`);
  console.log(`   Categories: ${categories.length} inserted`);
  console.log(`   Brands: ${brands.length} inserted`);
  console.log(`   Products: ${imported} imported, ${skipped} skipped`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  // Verify counts
  const counts = {
    categories: db.prepare('SELECT COUNT(*) as count FROM categories').get().count,
    brands: db.prepare('SELECT COUNT(*) as count FROM brands').get().count,
    products: db.prepare('SELECT COUNT(*) as count FROM products').get().count
  };
  
  console.log('\n📈 Database Verification:');
  console.log(`   Categories in DB: ${counts.categories}`);
  console.log(`   Brands in DB: ${counts.brands}`);
  console.log(`   Products in DB: ${counts.products}`);
  
} catch (error) {
  db.exec('ROLLBACK');
  console.error('\n❌ Import failed:', error);
  process.exit(1);
} finally {
  db.close();
}
