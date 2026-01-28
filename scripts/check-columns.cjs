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

const db = new Database(dbFile);

try {
  // Check product_translations schema
  const schema = db.prepare("PRAGMA table_info(product_translations)").all();
  console.log('\nproduct_translations table columns:');
  schema.forEach(col => console.log(`  - ${col.name} (${col.type})`));
  
  // Check product_images schema
  const imgSchema = db.prepare("PRAGMA table_info(product_images)").all();
  console.log('\nproduct_images table columns:');
  imgSchema.forEach(col => console.log(`  - ${col.name} (${col.type})`));
  
} catch (error) {
  console.error('Error:', error);
} finally {
  db.close();
}
