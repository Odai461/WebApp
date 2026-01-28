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
  // Start transaction
  db.exec('BEGIN TRANSACTION');
  
  // Clear existing data
  db.exec('DELETE FROM product_images');
  db.exec('DELETE FROM product_translations');
  db.exec('DELETE FROM license_keys');
  db.exec('DELETE FROM products');
  db.exec('DELETE FROM category_translations');
  db.exec('DELETE FROM categories');
  db.exec('DELETE FROM brands');
  
  console.log('Cleared existing data');
  
  // Insert brands
  const brands = [
    { id: 1, name: 'Microsoft', slug: 'microsoft', logo_url: '/static/brands/microsoft.png', is_featured: 1 },
    { id: 2, name: 'Kaspersky', slug: 'kaspersky', logo_url: '/static/brands/kaspersky.png', is_featured: 1 },
    { id: 3, name: 'Norton', slug: 'norton', logo_url: '/static/brands/norton.png', is_featured: 1 },
    { id: 4, name: 'Bitdefender', slug: 'bitdefender', logo_url: '/static/brands/bitdefender.png', is_featured: 1 }
  ];
  
  const insertBrand = db.prepare('INSERT INTO brands (id, name, slug, logo_url, is_featured) VALUES (?, ?, ?, ?, ?)');
  brands.forEach(b => insertBrand.run(b.id, b.name, b.slug, b.logo_url, b.is_featured));
  console.log(`Inserted ${brands.length} brands`);
  
  // Insert categories
  const categories = [
    { id: 1, slug: 'windows', icon: 'fab fa-windows' },
    { id: 2, slug: 'office', icon: 'fas fa-file-word' },
    { id: 3, slug: 'antivirus', icon: 'fas fa-shield-alt' }
  ];
  
  const insertCategory = db.prepare('INSERT INTO categories (id, slug, icon) VALUES (?, ?, ?)');
  categories.forEach(c => insertCategory.run(c.id, c.slug, c.icon));
  console.log(`Inserted ${categories.length} categories`);
  
  // Insert category translations
  const catTranslations = [
    { category_id: 1, language: 'de', name: 'Windows' },
    { category_id: 2, language: 'de', name: 'Microsoft Office' },
    { category_id: 3, language: 'de', name: 'Antivirus' }
  ];
  
  const insertCatTrans = db.prepare('INSERT INTO category_translations (category_id, language, name) VALUES (?, ?, ?)');
  catTranslations.forEach(ct => insertCatTrans.run(ct.category_id, ct.language, ct.name));
  console.log(`Inserted ${catTranslations.length} category translations`);
  
  // Insert products
  const products = [
    // Windows products
    {
      id: 1, sku: 'WIN11-PRO-001', category_id: 1, brand_id: 1, slug: 'windows-11-professional',
      product_type: 'license', base_price: 29.99, discount_price: 19.99, discount_percentage: 33,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 1, is_new: 0, rating_average: 4.9, rating_count: 2347
    },
    {
      id: 2, sku: 'WIN11-HOME-001', category_id: 1, brand_id: 1, slug: 'windows-11-home',
      product_type: 'license', base_price: 19.99, discount_price: null, discount_percentage: 0,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 1, is_new: 0, rating_average: 4.8, rating_count: 1892
    },
    {
      id: 3, sku: 'WIN10-PRO-001', category_id: 1, brand_id: 1, slug: 'windows-10-professional',
      product_type: 'license', base_price: 24.99, discount_price: 17.99, discount_percentage: 28,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 1, is_new: 0, rating_average: 4.9, rating_count: 3421
    },
    {
      id: 4, sku: 'WIN10-HOME-001', category_id: 1, brand_id: 1, slug: 'windows-10-home',
      product_type: 'license', base_price: 14.99, discount_price: null, discount_percentage: 0,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 0, is_new: 0, rating_average: 4.7, rating_count: 1654
    },
    // Office products
    {
      id: 5, sku: 'OFF2024-PP-001', category_id: 2, brand_id: 1, slug: 'office-2024-professional-plus',
      product_type: 'license', base_price: 49.99, discount_price: 39.99, discount_percentage: 20,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 1, is_new: 1, rating_average: 4.9, rating_count: 892
    },
    {
      id: 6, sku: 'OFF2021-PP-001', category_id: 2, brand_id: 1, slug: 'office-2021-professional-plus',
      product_type: 'license', base_price: 44.99, discount_price: 34.99, discount_percentage: 22,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 1, is_new: 0, rating_average: 4.8, rating_count: 1745
    },
    {
      id: 7, sku: 'OFF2019-PP-001', category_id: 2, brand_id: 1, slug: 'office-2019-professional-plus',
      product_type: 'license', base_price: 39.99, discount_price: 29.99, discount_percentage: 25,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'perpetual', license_duration: 'lifetime',
      activation_limit: 1, is_featured: 1, is_bestseller: 1, is_new: 0, rating_average: 4.7, rating_count: 2341
    },
    // Antivirus products
    {
      id: 8, sku: 'KASP-TS-2024-001', category_id: 3, brand_id: 2, slug: 'kaspersky-total-security-2024',
      product_type: 'subscription', base_price: 34.99, discount_price: 24.99, discount_percentage: 29,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'subscription', license_duration: '1_year',
      activation_limit: 5, is_featured: 1, is_bestseller: 1, is_new: 1, rating_average: 4.8, rating_count: 1234
    },
    {
      id: 9, sku: 'NORT-360-DLX-001', category_id: 3, brand_id: 3, slug: 'norton-360-deluxe',
      product_type: 'subscription', base_price: 39.99, discount_price: 29.99, discount_percentage: 25,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'subscription', license_duration: '1_year',
      activation_limit: 5, is_featured: 1, is_bestseller: 1, is_new: 0, rating_average: 4.7, rating_count: 987
    },
    {
      id: 10, sku: 'BIT-TS-2024-001', category_id: 3, brand_id: 4, slug: 'bitdefender-total-security-2024',
      product_type: 'subscription', base_price: 44.99, discount_price: 34.99, discount_percentage: 22,
      vat_rate: 19.00, stock_type: 'unlimited', license_type: 'subscription', license_duration: '1_year',
      activation_limit: 10, is_featured: 1, is_bestseller: 1, is_new: 1, rating_average: 4.9, rating_count: 1567
    }
  ];
  
  const insertProduct = db.prepare(`
    INSERT INTO products (id, sku, category_id, brand_id, slug, product_type, base_price, discount_price, 
      discount_percentage, vat_rate, stock_type, license_type, license_duration, activation_limit, 
      is_featured, is_bestseller, is_new, rating_average, rating_count, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `);
  
  products.forEach(p => insertProduct.run(
    p.id, p.sku, p.category_id, p.brand_id, p.slug, p.product_type, p.base_price, p.discount_price,
    p.discount_percentage, p.vat_rate, p.stock_type, p.license_type, p.license_duration, p.activation_limit,
    p.is_featured, p.is_bestseller, p.is_new, p.rating_average, p.rating_count
  ));
  console.log(`Inserted ${products.length} products`);
  
  // Insert German and English translations for products
  const translations = [
    // German translations
    {
      product_id: 1, language: 'de',
      name: 'Windows 11 Professional',
      short_description: 'Das ultimative Betriebssystem für Profis und Unternehmen',
      long_description: 'Windows 11 Professional ist das ideale Betriebssystem für professionelle Anwender, kleine und mittelständische Unternehmen. Mit erweiterten Sicherheitsfunktionen, Remote-Desktop, BitLocker-Verschlüsselung und Hyper-V bietet Windows 11 Pro alles, was Sie für ein produktives Arbeitsumfeld benötigen.',
      features: JSON.stringify(['Remote Desktop', 'BitLocker-Verschlüsselung', 'Hyper-V', 'Windows Sandbox', 'Gruppenrichtlinienverwaltung']),
      meta_title: 'Windows 11 Professional kaufen | Sofortdownload | SoftwareKing24',
      meta_description: 'Windows 11 Professional Lizenz günstig kaufen. Sofortiger Download, 100% Original, lebenslange Lizenz. Jetzt bei SoftwareKing24!'
    },
    {
      product_id: 1, language: 'en',
      name: 'Windows 11 Professional',
      short_description: 'The ultimate operating system for professionals and businesses',
      long_description: 'Windows 11 Professional is the ideal operating system for professional users, small and medium-sized businesses. With advanced security features, Remote Desktop, BitLocker encryption and Hyper-V, Windows 11 Pro offers everything you need for a productive work environment.',
      features: JSON.stringify(['Remote Desktop', 'BitLocker Encryption', 'Hyper-V', 'Windows Sandbox', 'Group Policy Management']),
      meta_title: 'Buy Windows 11 Professional | Instant Download | SoftwareKing24',
      meta_description: 'Buy Windows 11 Professional license at great prices. Instant download, 100% original, lifetime license. Order now at SoftwareKing24!'
    },
    {
      product_id: 2, language: 'de',
      name: 'Windows 11 Home',
      short_description: 'Modernes Betriebssystem für Privatanwender',
      long_description: 'Windows 11 Home ist das perfekte Betriebssystem für Privatanwender. Mit einer modernen, intuitiven Benutzeroberfläche, verbesserten Gaming-Funktionen und nahtloser Integration von Microsoft-Diensten macht Windows 11 Home Ihren PC zum Mittelpunkt Ihres digitalen Lebens.',
      features: JSON.stringify(['Modernes Design', 'Snap Layouts', 'Widgets', 'Microsoft Teams Integration', 'DirectX 12 Ultimate']),
      meta_title: 'Windows 11 Home kaufen | Original Lizenz | SoftwareKing24',
      meta_description: 'Windows 11 Home Lizenz günstig kaufen. Sofortiger Download, 100% Original. Ideal für Privatanwender.'
    },
    {
      product_id: 2, language: 'en',
      name: 'Windows 11 Home',
      short_description: 'Modern operating system for home users',
      long_description: 'Windows 11 Home is the perfect operating system for home users. With a modern, intuitive user interface, improved gaming features and seamless integration of Microsoft services, Windows 11 Home makes your PC the center of your digital life.',
      features: JSON.stringify(['Modern Design', 'Snap Layouts', 'Widgets', 'Microsoft Teams Integration', 'DirectX 12 Ultimate']),
      meta_title: 'Buy Windows 11 Home | Original License | SoftwareKing24',
      meta_description: 'Buy Windows 11 Home license at great prices. Instant download, 100% original. Perfect for home users.'
    },
    {
      product_id: 3, language: 'de',
      name: 'Windows 10 Professional',
      short_description: 'Bewährtes Betriebssystem für Business',
      long_description: 'Windows 10 Professional bleibt die erste Wahl für viele Unternehmen und professionelle Anwender. Mit langjähriger Stabilität, umfangreicher Hardware-Unterstützung und allen Business-Funktionen ist Windows 10 Pro die sichere Wahl für produktives Arbeiten.',
      features: JSON.stringify(['Remote Desktop', 'BitLocker', 'Hyper-V', 'Domänenbeitritt', 'Gruppenrichtlinien']),
      meta_title: 'Windows 10 Pro kaufen | Günstige Lizenz | SoftwareKing24',
      meta_description: 'Windows 10 Professional Lizenz kaufen. Sofortdownload, 100% Original, lebenslange Nutzung. Support bis 2025.'
    },
    {
      product_id: 3, language: 'en',
      name: 'Windows 10 Professional',
      short_description: 'Proven operating system for business',
      long_description: 'Windows 10 Professional remains the first choice for many businesses and professional users. With long-term stability, extensive hardware support and all business functions, Windows 10 Pro is the safe choice for productive work.',
      features: JSON.stringify(['Remote Desktop', 'BitLocker', 'Hyper-V', 'Domain Join', 'Group Policies']),
      meta_title: 'Buy Windows 10 Pro | Affordable License | SoftwareKing24',
      meta_description: 'Buy Windows 10 Professional license. Instant download, 100% original, lifetime use. Support until 2025.'
    },
    {
      product_id: 5, language: 'de',
      name: 'Office 2024 Professional Plus',
      short_description: 'Die neueste Office-Suite für Profis',
      long_description: 'Office 2024 Professional Plus ist die umfassendste Office-Suite von Microsoft. Mit Word, Excel, PowerPoint, Outlook, Access, Publisher und mehr erhalten Sie alle Tools, die Sie für produktives Arbeiten benötigen. Neue AI-Funktionen und verbesserte Collaboration-Features machen Office 2024 zur besten Office-Version aller Zeiten.',
      features: JSON.stringify(['Word', 'Excel', 'PowerPoint', 'Outlook', 'Access', 'Publisher', 'AI-Integration', 'OneDrive 1TB']),
      meta_title: 'Office 2024 Professional Plus kaufen | SoftwareKing24',
      meta_description: 'Office 2024 Professional Plus Lizenz kaufen. Alle Apps inklusive. Sofortdownload, 100% Original.'
    },
    {
      product_id: 5, language: 'en',
      name: 'Office 2024 Professional Plus',
      short_description: 'The latest Office suite for professionals',
      long_description: 'Office 2024 Professional Plus is the most comprehensive Office suite from Microsoft. With Word, Excel, PowerPoint, Outlook, Access, Publisher and more, you get all the tools you need for productive work. New AI features and improved collaboration features make Office 2024 the best Office version ever.',
      features: JSON.stringify(['Word', 'Excel', 'PowerPoint', 'Outlook', 'Access', 'Publisher', 'AI Integration', 'OneDrive 1TB']),
      meta_title: 'Buy Office 2024 Professional Plus | SoftwareKing24',
      meta_description: 'Buy Office 2024 Professional Plus license. All apps included. Instant download, 100% original.'
    },
    {
      product_id: 8, language: 'de',
      name: 'Kaspersky Total Security 2024',
      short_description: 'Umfassender Schutz für alle Ihre Geräte',
      long_description: 'Kaspersky Total Security 2024 bietet erstklassigen Schutz vor Viren, Malware, Ransomware und Online-Bedrohungen. Mit fortschrittlichen Sicherheitsfunktionen wie Passwort-Manager, VPN und Kindersicherung schützen Sie bis zu 5 Geräte gleichzeitig.',
      features: JSON.stringify(['Antivirus & Anti-Malware', 'Firewall', 'VPN unbegrenzt', 'Passwort-Manager', 'Kindersicherung', '5 Geräte']),
      meta_title: 'Kaspersky Total Security 2024 kaufen | 5 Geräte | SoftwareKing24',
      meta_description: 'Kaspersky Total Security 2024 für 5 Geräte. Umfassender Schutz, VPN inklusive. Jetzt günstig kaufen!'
    },
    {
      product_id: 8, language: 'en',
      name: 'Kaspersky Total Security 2024',
      short_description: 'Comprehensive protection for all your devices',
      long_description: 'Kaspersky Total Security 2024 offers first-class protection against viruses, malware, ransomware and online threats. With advanced security features such as password manager, VPN and parental controls, you can protect up to 5 devices simultaneously.',
      features: JSON.stringify(['Antivirus & Anti-Malware', 'Firewall', 'Unlimited VPN', 'Password Manager', 'Parental Control', '5 Devices']),
      meta_title: 'Buy Kaspersky Total Security 2024 | 5 Devices | SoftwareKing24',
      meta_description: 'Kaspersky Total Security 2024 for 5 devices. Comprehensive protection, VPN included. Buy now at great prices!'
    }
  ];
  
  const insertTranslation = db.prepare(`
    INSERT INTO product_translations (product_id, language, name, short_description, long_description, 
      features, meta_title, meta_description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  
  translations.forEach(t => insertTranslation.run(
    t.product_id, t.language, t.name, t.short_description, t.long_description,
    t.features, t.meta_title, t.meta_description
  ));
  console.log(`Inserted ${translations.length} product translations (DE + EN)`);
  
  // Insert product images
  const images = [
    { product_id: 1, image_url: '/static/products/windows11-pro.jpg', alt_text: 'Windows 11 Professional', sort_order: 1, is_primary: 1 },
    { product_id: 2, image_url: '/static/products/windows11-home.jpg', alt_text: 'Windows 11 Home', sort_order: 1, is_primary: 1 },
    { product_id: 3, image_url: '/static/products/windows10-pro.jpg', alt_text: 'Windows 10 Professional', sort_order: 1, is_primary: 1 },
    { product_id: 5, image_url: '/static/products/office2024-pp.jpg', alt_text: 'Office 2024 Professional Plus', sort_order: 1, is_primary: 1 },
    { product_id: 8, image_url: '/static/products/kaspersky.jpg', alt_text: 'Kaspersky Total Security 2024', sort_order: 1, is_primary: 1 },
    { product_id: 9, image_url: '/static/products/norton360.jpg', alt_text: 'Norton 360 Deluxe', sort_order: 1, is_primary: 1 },
    { product_id: 10, image_url: '/static/products/bitdefender.jpg', alt_text: 'Bitdefender Total Security 2024', sort_order: 1, is_primary: 1 }
  ];
  
  const insertImage = db.prepare(`
    INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary)
    VALUES (?, ?, ?, ?, ?)
  `);
  
  images.forEach(img => insertImage.run(img.product_id, img.image_url, img.alt_text, img.sort_order, img.is_primary));
  console.log(`Inserted ${images.length} product images`);
  
  // Commit transaction
  db.exec('COMMIT');
  
  console.log('\n✅ Migration completed successfully!');
  
  // Verify
  const productCount = db.prepare('SELECT COUNT(*) as count FROM products').get();
  console.log(`\nTotal products: ${productCount.count}`);
  
  const sampleProducts = db.prepare(`
    SELECT p.id, p.slug, pt.name, p.base_price, p.discount_price 
    FROM products p
    LEFT JOIN product_translations pt ON p.id = pt.product_id AND pt.language = 'de'
    LIMIT 5
  `).all();
  
  console.log('\nSample products:');
  sampleProducts.forEach(p => {
    console.log(`  ${p.id}: ${p.slug} - ${p.name} - €${p.base_price} ${p.discount_price ? `(Sale: €${p.discount_price})` : ''}`);
  });
  
} catch (error) {
  console.error('Error:', error);
  try {
    db.exec('ROLLBACK');
  } catch (e) {
    // Ignore rollback errors
  }
  process.exit(1);
} finally {
  db.close();
}
