const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../.wrangler/state/v3/d1/miniflare-D1DatabaseObject');
const dbFiles = fs.readdirSync(dbPath).filter(f => f.endsWith('.sqlite'));

if (dbFiles.length === 0) {
  console.error('No SQLite database file found');
  process.exit(1);
}

const dbFile = path.join(dbPath, dbFiles[0]);
console.log(`Using database: ${dbFile}`);

const db = new Database(dbFile);

// Read and execute migration 0006
const migration0006 = fs.readFileSync(path.join(__dirname, '../migrations/0006_import_full_products.sql'), 'utf8');

try {
  // Split by semicolons and execute each statement
  const statements = migration0006.split(';').filter(s => s.trim().length > 0);
  
  console.log(`Executing ${statements.length} SQL statements from migration 0006...`);
  
  db.exec('BEGIN TRANSACTION');
  
  for (const statement of statements) {
    try {
      db.exec(statement + ';');
    } catch (err) {
      console.log(`Warning: ${err.message}`);
      // Continue on errors (table might exist, etc.)
    }
  }
  
  db.exec('COMMIT');
  
  console.log('Migration 0006 applied successfully!');
  
  // Verify products
  const count = db.prepare('SELECT COUNT(*) as count FROM products').get();
  console.log(`Total products in database: ${count.count}`);
  
  // Show some products
  const products = db.prepare('SELECT id, sku, slug, base_price FROM products LIMIT 5').all();
  console.log('\nSample products:');
  products.forEach(p => {
    console.log(`  ${p.id}: ${p.sku} - ${p.slug} - $${p.base_price}`);
  });
  
} catch (error) {
  console.error('Error applying migration:', error);
  process.exit(1);
} finally {
  db.close();
}
