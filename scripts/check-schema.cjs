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

try {
  // Check current schema
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all();
  console.log('\nCurrent tables:');
  tables.forEach(t => console.log(`  - ${t.name}`));
  
  // Check products table schema
  const schema = db.prepare("PRAGMA table_info(products)").all();
  console.log('\nProducts table columns:');
  schema.forEach(col => console.log(`  - ${col.name} (${col.type})`));
  
  // Check current products
  const currentProducts = db.prepare('SELECT * FROM products LIMIT 1').all();
  console.log('\nSample product:');
  console.log(JSON.stringify(currentProducts[0], null, 2));
  
} catch (error) {
  console.error('Error:', error);
} finally {
  db.close();
}
