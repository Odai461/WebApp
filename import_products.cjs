#!/usr/bin/env node

/**
 * Product Import Script for SOFTWAREKING24
 * Imports products from products_clean_normalized.csv into the database
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Parse CSV line manually (handles quoted fields with commas)
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// Convert German price format to decimal
function parsePrice(priceStr) {
  if (!priceStr || priceStr === '') return null;
  // Remove quotes and convert comma to dot
  return parseFloat(priceStr.replace(/"/g, '').replace(',', '.'));
}

// Extract brand from product name
function extractBrand(name) {
  // Common software brands
  const brands = [
    'Microsoft', 'Adobe', 'Autodesk', 'AVG', 'Avast', 'Kaspersky',
    'Norton', 'McAfee', 'ESET', 'Bitdefender', 'Ashampoo', 'Corel',
    'VMware', 'Windows', 'Office', 'AOMEI', 'AdGuard', 'Steam',
    'nPixio', 'Valheim'
  ];
  
  for (const brand of brands) {
    if (name.includes(brand)) {
      return brand;
    }
  }
  
  // Extract first word as brand if no match
  const firstWord = name.split(' ')[0];
  return firstWord || 'Software';
}

// Extract category from product name
function extractCategory(name) {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('windows') || nameLower.includes('office')) {
    return 'Betriebssysteme & Office';
  }
  if (nameLower.includes('antivirus') || nameLower.includes('security') || 
      nameLower.includes('norton') || nameLower.includes('kaspersky') ||
      nameLower.includes('avg') || nameLower.includes('avast')) {
    return 'Sicherheit & Antivirus';
  }
  if (nameLower.includes('autocad') || nameLower.includes('maya') || 
      nameLower.includes('3ds max') || nameLower.includes('inventor')) {
    return 'CAD & 3D-Design';
  }
  if (nameLower.includes('photoshop') || nameLower.includes('lightroom') ||
      nameLower.includes('acrobat') || nameLower.includes('illustrator')) {
    return 'Grafik & Foto';
  }
  if (nameLower.includes('backup') || nameLower.includes('optimizer') ||
      nameLower.includes('driver')) {
    return 'Systemtools & Utilities';
  }
  if (nameLower.includes('game') || nameLower.includes('steam') ||
      nameLower.includes('cd key') || nameLower.includes('valheim') ||
      nameLower.includes('age of empires')) {
    return 'Games';
  }
  
  return 'Software Allgemein';
}

async function importProducts() {
  const csvPath = '/home/user/uploaded_files/products_clean_normalized.csv';
  
  console.log('🚀 Starting product import...');
  console.log('📁 Reading:', csvPath);
  
  const fileStream = fs.createReadStream(csvPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  const products = [];
  const categories = new Set();
  const brands = new Set();
  let lineCount = 0;
  let isHeader = true;
  
  for await (const line of rl) {
    lineCount++;
    
    if (isHeader) {
      isHeader = false;
      continue;
    }
    
    const fields = parseCSVLine(line);
    const [type, name, sku, regularPrice, salePrice, parent] = fields;
    
    if (!name || !sku) continue;
    
    const brand = extractBrand(name);
    const category = extractCategory(name);
    
    brands.add(brand);
    categories.add(category);
    
    const product = {
      type,
      name,
      sku,
      regular_price: parsePrice(regularPrice),
      sale_price: parsePrice(salePrice),
      parent,
      brand,
      category,
      is_active: true,
      is_downloadable: true,
      is_virtual: true
    };
    
    products.push(product);
  }
  
  console.log('✅ Parsed', products.length, 'products');
  console.log('📦 Found', categories.size, 'categories:', Array.from(categories).join(', '));
  console.log('🏷️  Found', brands.size, 'brands:', Array.from(brands).join(', '));
  
  // Save to JSON file
  const outputPath = '/tmp/products_parsed.json';
  fs.writeFileSync(outputPath, JSON.stringify({
    products,
    categories: Array.from(categories),
    brands: Array.from(brands),
    stats: {
      total_products: products.length,
      simple_products: products.filter(p => p.type.includes('simple')).length,
      variations: products.filter(p => p.type === 'variation').length,
      with_sale: products.filter(p => p.sale_price).length
    }
  }, null, 2));
  
  console.log('💾 Saved parsed data to:', outputPath);
  
  return { products, categories: Array.from(categories), brands: Array.from(brands) };
}

// Run import
importProducts().then(result => {
  console.log('✅ Import complete!');
  console.log('📊 Summary:');
  console.log('   Products:', result.products.length);
  console.log('   Categories:', result.categories.length);
  console.log('   Brands:', result.brands.length);
}).catch(err => {
  console.error('❌ Import failed:', err);
  process.exit(1);
});
