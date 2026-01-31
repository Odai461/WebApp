-- Fix product categories based on product names and brands
-- This will categorize products into: Windows, Office, Server, Antivirus, Graphics, etc.

-- First, let's see what categories exist
SELECT id, slug FROM categories LIMIT 20;

-- Update Windows products
UPDATE products SET category_id = (SELECT id FROM categories WHERE slug = 'windows' LIMIT 1)
WHERE (
  name LIKE '%Windows%'
  OR name LIKE '%Win 11%'
  OR name LIKE '%Win 10%'
  OR name LIKE '%Win10%'
  OR name LIKE '%Win11%'
  OR name LIKE '%Microsoft Windows%'
) AND (category_id IS NULL OR category_id = 'null');

-- Update Office products
UPDATE products SET category_id = (SELECT id FROM categories WHERE slug = 'office' LIMIT 1)
WHERE (
  name LIKE '%Office%'
  OR name LIKE '%Word%'
  OR name LIKE '%Excel%'
  OR name LIKE '%PowerPoint%'
  OR name LIKE '%Outlook%'
  OR name LIKE '%Microsoft 365%'
  OR name LIKE '%M365%'
) AND (category_id IS NULL OR category_id = 'null');

-- Update Antivirus products
UPDATE products SET category_id = (SELECT id FROM categories WHERE slug = 'sicherheit-antivirus' LIMIT 1)
WHERE (
  name LIKE '%Antivirus%'
  OR name LIKE '%Kaspersky%'
  OR name LIKE '%Norton%'
  OR name LIKE '%McAfee%'
  OR name LIKE '%Bitdefender%'
  OR name LIKE '%AVG%'
  OR name LIKE '%Avast%'
  OR name LIKE '%ESET%'
  OR name LIKE '%Security%'
  OR name LIKE '%Defender%'
) AND (category_id IS NULL OR category_id = 'null');

-- Update Server products
UPDATE products SET category_id = (SELECT id FROM categories WHERE slug = 'server-software' LIMIT 1)
WHERE (
  name LIKE '%Server%'
  OR name LIKE '%SQL Server%'
  OR name LIKE '%Windows Server%'
  OR name LIKE '%Exchange%'
  OR name LIKE '%CAL%'
) AND (category_id IS NULL OR category_id = 'null');

-- Update CAD/Design products
UPDATE products SET category_id = (SELECT id FROM categories WHERE slug = 'grafik-foto' LIMIT 1)
WHERE (
  name LIKE '%AutoCAD%'
  OR name LIKE '%Photoshop%'
  OR name LIKE '%Illustrator%'
  OR name LIKE '%CorelDRAW%'
  OR name LIKE '%Adobe%'
  OR name LIKE '%Design%'
  OR name LIKE '%3D%'
) AND (category_id IS NULL OR category_id = 'null');

-- Check results
SELECT 
  c.slug as category,
  COUNT(*) as product_count
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
GROUP BY c.slug
ORDER BY product_count DESC;
