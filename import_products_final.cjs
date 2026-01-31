#!/usr/bin/env node

/**
 * Import Products to Database - SOFTWAREKING24
 * Matches the actual database schema with translations
 */

const Database = require('better-sqlite3');
const fs = require('fs');

// Read parsed products
const productsData = JSON.parse(fs.readFileSync('/tmp/products_parsed.json', 'utf8'));
const { products, categories, brands } = productsData;

// Connect to database - try the new DB first, then fallback to old
const dbFiles = [
  '/home/user/webapp/.wrangler/state/v3/d1/miniflare-D1DatabaseObject/2a9adfc37df94d1f5838d91719c7e40ad26dbcbe17f8ceacbbc7711bcab18831.sqlite',
  '/home/user/webapp/.wrangler/state/v3/d1/miniflare-D1DatabaseObject/9ba2b04bf514d9facfd57ed57d849e77241a7adc99d1c1545d06688b43d84248.sqlite'
];

let dbPath = '';
for (const file of dbFiles) {
  if (fs.existsSync(file)) {
    dbPath = file;
    break;
  }
}

if (!dbPath) {
  console.error('❌ No database file found!');
  process.exit(1);
}

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
    INSERT OR IGNORE INTO categories (slug, is_active, created_at, updated_at)
    VALUES (?, 1, datetime('now'), datetime('now'))
  `);
  
  const insertCategoryTranslation = db.prepare(`
    INSERT OR IGNORE INTO category_translations (category_id, language, name, description)
    VALUES (?, ?, ?, ?)
  `);
  
  const categoryMap = {};
  categories.forEach((cat) => {
    const slug = cat.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    insertCategory.run(slug);
    
    // Get the ID
    const result = db.prepare('SELECT id FROM categories WHERE slug = ?').get(slug);
    if (result) {
      categoryMap[cat] = result.id;
      
      // Insert German translation
      insertCategoryTranslation.run(result.id, 'de', cat, `${cat} Software und Lizenzen`);
      
      // Insert English translation
      const enName = cat; // Keep same for now
      insertCategoryTranslation.run(result.id, 'en', enName, `${enName} Software and Licenses`);
      
      console.log(`   ✅ ${cat} (ID: ${result.id}, slug: ${slug})`);
    }
  });
  
  // 2. Insert Brands
  console.log('\n2️⃣  Inserting brands...');
  const insertBrand = db.prepare(`
    INSERT OR IGNORE INTO brands (name, slug, is_featured, created_at)
    VALUES (?, ?, 0, datetime('now'))
  `);
  
  const brandMap = {};
  brands.forEach((brand) => {
    const slug = brand.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    insertBrand.run(brand, slug);
    
    // Get the ID
    const result = db.prepare('SELECT id FROM brands WHERE slug = ?').get(slug);
    if (result) {
      brandMap[brand] = result.id;
      console.log(`   ✅ ${brand} (ID: ${result.id}, slug: ${slug})`);
    }
  });
  
  // 3. Insert Products
  console.log('\n3️⃣  Inserting products...');
  const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products (
      sku, slug,
      category_id, brand_id,
      base_price, discount_price,
      name, short_description, description,
      product_type, stock_type, delivery_type,
      is_active, is_featured, is_new,
      available_licenses, stock_quantity, in_stock,
      vat_rate,
      created_at, updated_at
    ) VALUES (
      ?, ?,
      ?, ?,
      ?, ?,
      ?, ?, ?,
      'simple', 'digital', 'instant',
      1, 0, 1,
      999, 999, 1,
      19.00,
      datetime('now'), datetime('now')
    )
  `);
  
  let imported = 0;
  let skipped = 0;
  
  products.forEach((product, idx) => {
    try {
      const slug = (product.sku || product.name)
        .toLowerCase()
        .substring(0, 80)
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      
      const categoryId = categoryMap[product.category] || 1;
      const brandId = brandMap[product.brand] || 1;
      
      // Generate short description
      const shortDesc = `${product.name} - Original Lizenz von ${product.brand}`;
      const fullDesc = `<p><strong>${product.name}</strong></p><p>Kategorie: ${product.category}</p><p>Marke: ${product.brand}</p><p>SKU: ${product.sku}</p>`;
      
      insertProduct.run(
        product.sku,
        slug,
        categoryId,
        brandId,
        product.regular_price,
        product.sale_price || null,
        product.name,
        shortDesc,
        fullDesc
      );
      
      imported++;
      
      if ((idx + 1) % 25 === 0) {
        console.log(`   📦 Imported ${idx + 1}/${products.length} products...`);
      }
    } catch (err) {
      skipped++;
      if (err.message.includes('UNIQUE constraint')) {
        // Product already exists, skip silently
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
  console.log(`   Categories: ${categories.length} inserted/updated`);
  console.log(`   Brands: ${brands.length} inserted/updated`);
  console.log(`   Products: ${imported} imported, ${skipped} skipped (duplicates)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  // Verify counts
  const counts = {
    categories: db.prepare('SELECT COUNT(*) as count FROM categories').get().count,
    brands: db.prepare('SELECT COUNT(*) as count FROM brands').get().count,
    products: db.prepare('SELECT COUNT(*) as count FROM products').get().count
  };
  
  console.log('\n📈 Database Verification:');
  console.log(`   Total Categories in DB: ${counts.categories}`);
  console.log(`   Total Brands in DB: ${counts.brands}`);
  console.log(`   Total Products in DB: ${counts.products}`);
  
  // Show some sample products
  console.log('\n🔍 Sample Products:');
  const samples = db.prepare('SELECT name, sku, base_price, discount_price FROM products ORDER BY id DESC LIMIT 5').all();
  samples.forEach((p, i) => {
    const price = p.discount_price ? `${p.discount_price}€ (war ${p.base_price}€)` : `${p.base_price}€`;
    console.log(`   ${i+1}. ${p.name} - ${price}`);
  });
  
} catch (error) {
  db.exec('ROLLBACK');
  console.error('\n❌ Import failed:', error);
  console.error(error.stack);
  process.exit(1);
} finally {
  db.close();
}
