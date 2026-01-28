-- ============================================
-- SEED DATA FOR DIGITAL SOFTWARE STORE
-- ============================================

-- Insert Admin User
INSERT OR IGNORE INTO users (email, password_hash, first_name, last_name, role, email_verified) 
VALUES ('admin@example.com', '$2a$10$K7BaZjBbcbqYvJFnK2vKwOXqWF5j1X3FY5YFz5KF5KF5KF5KF5KF5', 'Admin', 'User', 'admin', 1);

-- Insert Demo Customer
INSERT OR IGNORE INTO users (email, password_hash, first_name, last_name, role, email_verified) 
VALUES ('customer@example.com', '$2a$10$K7BaZjBbcbqYvJFnK2vKwOXqWF5j1X3FY5YFz5KF5KF5KF5KF5KF5', 'John', 'Doe', 'customer', 1);

-- ============================================
-- BRANDS
-- ============================================

INSERT OR IGNORE INTO brands (name, slug, logo_url, is_featured, sort_order) VALUES 
('Microsoft', 'microsoft', '/static/brands/microsoft.png', 1, 1),
('Adobe', 'adobe', '/static/brands/adobe.png', 1, 2),
('Kaspersky', 'kaspersky', '/static/brands/kaspersky.png', 1, 3),
('Norton', 'norton', '/static/brands/norton.png', 1, 4),
('Autodesk', 'autodesk', '/static/brands/autodesk.png', 1, 5);

-- ============================================
-- CATEGORIES
-- ============================================

INSERT OR IGNORE INTO categories (id, parent_id, slug, icon, sort_order) VALUES 
(1, NULL, 'windows', 'fa-windows', 1),
(2, NULL, 'office', 'fa-file-word', 2),
(3, NULL, 'server', 'fa-server', 3),
(4, NULL, 'antivirus', 'fa-shield-alt', 4),
(5, NULL, 'games', 'fa-gamepad', 5),
(6, NULL, 'design', 'fa-palette', 6);

-- Category Translations (English)
INSERT OR IGNORE INTO category_translations (category_id, language, name, description, meta_title, meta_description) VALUES 
(1, 'en', 'Windows', 'Genuine Windows operating systems', 'Windows OS Software | Buy Windows License Keys', 'Purchase genuine Windows 10 and Windows 11 license keys. Instant delivery, lifetime support.'),
(2, 'en', 'Office', 'Microsoft Office suites', 'Microsoft Office 2021 & 365 | Buy Office License Keys', 'Get Microsoft Office 2021, Office 365, and Office 2019 license keys with instant delivery.'),
(3, 'en', 'Server', 'Windows Server software', 'Windows Server Licenses | Server Software', 'Purchase Windows Server 2022, 2019 licenses for your business infrastructure.'),
(4, 'en', 'Antivirus', 'Security & antivirus software', 'Antivirus Software | Internet Security Solutions', 'Protect your devices with Kaspersky, Norton, and other top antivirus solutions.'),
(5, 'en', 'Games', 'PC games and gaming platforms', 'PC Games & Gaming Software | Digital Download', 'Buy PC games, Steam keys, and gaming platform licenses at great prices.'),
(6, 'en', 'Design', 'Creative and design software', 'Adobe Creative Cloud | Design Software Licenses', 'Get Adobe Photoshop, Illustrator, and other creative software licenses.');

-- Category Translations (German)
INSERT OR IGNORE INTO category_translations (category_id, language, name, description, meta_title, meta_description) VALUES 
(1, 'de', 'Windows', 'Echte Windows Betriebssysteme', 'Windows OS Software | Windows Lizenzschlüssel kaufen', 'Kaufen Sie echte Windows 10 und Windows 11 Lizenzschlüssel. Sofortlieferung, lebenslanger Support.'),
(2, 'de', 'Office', 'Microsoft Office Pakete', 'Microsoft Office 2021 & 365 | Office Lizenzschlüssel kaufen', 'Holen Sie sich Microsoft Office 2021, Office 365 und Office 2019 Lizenzschlüssel mit Sofortlieferung.'),
(3, 'de', 'Server', 'Windows Server Software', 'Windows Server Lizenzen | Server Software', 'Kaufen Sie Windows Server 2022, 2019 Lizenzen für Ihre Geschäftsinfrastruktur.'),
(4, 'de', 'Antivirus', 'Sicherheits- & Antivirus-Software', 'Antivirus Software | Internet-Sicherheitslösungen', 'Schützen Sie Ihre Geräte mit Kaspersky, Norton und anderen Top-Antivirus-Lösungen.'),
(5, 'de', 'Games', 'PC-Spiele und Gaming-Plattformen', 'PC-Spiele & Gaming-Software | Digitaler Download', 'Kaufen Sie PC-Spiele, Steam-Keys und Gaming-Plattform-Lizenzen zu günstigen Preisen.'),
(6, 'de', 'Design', 'Kreativ- und Design-Software', 'Adobe Creative Cloud | Design Software Lizenzen', 'Holen Sie sich Adobe Photoshop, Illustrator und andere kreative Software-Lizenzen.');

-- ============================================
-- PRODUCTS
-- ============================================

-- Windows 11 Pro
INSERT OR IGNORE INTO products (sku, category_id, brand_id, slug, product_type, base_price, discount_price, discount_percentage, vat_rate, stock_type, license_type, license_duration, compatibility, activation_limit, is_featured, is_bestseller) 
VALUES ('WIN11-PRO-001', 1, 1, 'windows-11-pro', 'license', 199.99, 79.99, 60, 19.00, 'unlimited', 'perpetual', 'lifetime', '["Windows 11 compatible PC"]', 1, 1, 1);

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(1, 'en', 'Windows 11 Pro', 'Official Microsoft Windows 11 Professional license key', 'Get the latest Windows 11 Professional operating system with all advanced features. Perfect for professionals and power users who need enhanced security, remote desktop, BitLocker encryption, and business tools. This is a genuine Microsoft product key with lifetime validity.', '["Enhanced Security with BitLocker", "Remote Desktop Connection", "Windows Sandbox", "Hyper-V Virtualization", "Group Policy Management", "Lifetime License", "Instant Digital Delivery", "24/7 Support"]', 'Buy Windows 11 Pro License Key - Instant Delivery | 60% OFF', 'Purchase genuine Windows 11 Professional license key with lifetime activation. Instant digital delivery. Save 60% today!');

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(1, 'de', 'Windows 11 Pro', 'Offizieller Microsoft Windows 11 Professional Lizenzschlüssel', 'Holen Sie sich das neueste Windows 11 Professional Betriebssystem mit allen erweiterten Funktionen. Perfekt für Profis und Power-User, die erweiterte Sicherheit, Remote-Desktop, BitLocker-Verschlüsselung und Business-Tools benötigen. Dies ist ein echter Microsoft-Produktschlüssel mit lebenslanger Gültigkeit.', '["Erweiterte Sicherheit mit BitLocker", "Remote-Desktop-Verbindung", "Windows Sandbox", "Hyper-V-Virtualisierung", "Gruppenrichtlinienverwaltung", "Lebenslange Lizenz", "Sofortige digitale Lieferung", "24/7 Support"]', 'Windows 11 Pro Lizenzschlüssel kaufen - Sofortlieferung | 60% RABATT', 'Kaufen Sie einen echten Windows 11 Professional Lizenzschlüssel mit lebenslanger Aktivierung. Sofortige digitale Lieferung. Sparen Sie heute 60%!');

-- Microsoft Office 2021 Professional Plus
INSERT OR IGNORE INTO products (sku, category_id, brand_id, slug, product_type, base_price, discount_price, discount_percentage, vat_rate, stock_type, license_type, license_duration, compatibility, activation_limit, is_featured, is_new) 
VALUES ('OFFICE-2021-PP', 2, 1, 'office-2021-professional-plus', 'license', 249.99, 49.99, 80, 19.00, 'unlimited', 'perpetual', 'lifetime', '["Windows 10", "Windows 11"]', 1, 1, 1);

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(2, 'en', 'Microsoft Office 2021 Professional Plus', 'Complete Office suite with Word, Excel, PowerPoint, Outlook & more', 'Microsoft Office 2021 Professional Plus is the ultimate productivity suite for Windows. Includes all classic Office applications: Word, Excel, PowerPoint, Outlook, Access, Publisher, and OneNote. One-time purchase for lifetime use on 1 PC. No subscription required!', '["Word, Excel, PowerPoint, Outlook", "Access & Publisher Included", "OneNote for Note-taking", "Lifetime License - No Subscription", "Compatible with Windows 10/11", "Instant Digital Delivery", "Official Microsoft Product", "Professional Business Tools"]', 'Microsoft Office 2021 Professional Plus - 80% OFF | Lifetime License', 'Buy Office 2021 Pro Plus license key. Includes Word, Excel, PowerPoint, Outlook & more. Lifetime activation, instant delivery.');

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(2, 'de', 'Microsoft Office 2021 Professional Plus', 'Vollständige Office-Suite mit Word, Excel, PowerPoint, Outlook & mehr', 'Microsoft Office 2021 Professional Plus ist die ultimative Produktivitätssuite für Windows. Enthält alle klassischen Office-Anwendungen: Word, Excel, PowerPoint, Outlook, Access, Publisher und OneNote. Einmaliger Kauf für lebenslange Nutzung auf 1 PC. Kein Abonnement erforderlich!', '["Word, Excel, PowerPoint, Outlook", "Access & Publisher enthalten", "OneNote für Notizen", "Lebenslange Lizenz - Kein Abo", "Kompatibel mit Windows 10/11", "Sofortige digitale Lieferung", "Offizielles Microsoft-Produkt", "Professionelle Business-Tools"]', 'Microsoft Office 2021 Professional Plus - 80% RABATT | Lebenslange Lizenz', 'Office 2021 Pro Plus Lizenzschlüssel kaufen. Enthält Word, Excel, PowerPoint, Outlook & mehr. Lebenslange Aktivierung, Sofortlieferung.');

-- Kaspersky Total Security
INSERT OR IGNORE INTO products (sku, category_id, brand_id, slug, product_type, base_price, discount_price, discount_percentage, vat_rate, stock_type, license_type, license_duration, compatibility, activation_limit, is_featured) 
VALUES ('KASP-TS-3D-1Y', 4, 3, 'kaspersky-total-security-3-devices', 'license', 89.99, 39.99, 56, 19.00, 'unlimited', 'subscription', '1-year', '["Windows", "macOS", "Android", "iOS"]', 3, 1);

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(3, 'en', 'Kaspersky Total Security 2024 - 3 Devices / 1 Year', 'Complete protection for PC, Mac, and mobile devices', 'Kaspersky Total Security 2024 provides comprehensive protection against all types of malware, ransomware, phishing, and online threats. Protect up to 3 devices (PC, Mac, Android, iOS) with a single license. Includes parental controls, password manager, VPN, and more.', '["Protects 3 Devices", "1 Year Subscription", "Anti-Malware & Ransomware", "Secure VPN Included", "Password Manager", "Parental Controls", "Safe Money for Banking", "Privacy Protection"]', 'Kaspersky Total Security 2024 - 3 Devices | Save 56%', 'Buy Kaspersky Total Security 2024 for 3 devices. Complete antivirus protection with VPN, password manager. 1-year license, instant delivery.');

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(3, 'de', 'Kaspersky Total Security 2024 - 3 Geräte / 1 Jahr', 'Kompletter Schutz für PC, Mac und mobile Geräte', 'Kaspersky Total Security 2024 bietet umfassenden Schutz gegen alle Arten von Malware, Ransomware, Phishing und Online-Bedrohungen. Schützen Sie bis zu 3 Geräte (PC, Mac, Android, iOS) mit einer einzigen Lizenz. Inklusive Kindersicherung, Passwort-Manager, VPN und mehr.', '["Schützt 3 Geräte", "1-Jahres-Abonnement", "Anti-Malware & Ransomware", "Sicheres VPN enthalten", "Passwort-Manager", "Kindersicherung", "Safe Money für Banking", "Datenschutz"]', 'Kaspersky Total Security 2024 - 3 Geräte | Sparen Sie 56%', 'Kaspersky Total Security 2024 für 3 Geräte kaufen. Kompletter Antivirus-Schutz mit VPN, Passwort-Manager. 1-Jahres-Lizenz, Sofortlieferung.');

-- Adobe Creative Cloud
INSERT OR IGNORE INTO products (sku, category_id, brand_id, slug, product_type, base_price, discount_price, discount_percentage, vat_rate, stock_type, license_type, license_duration, compatibility, activation_limit, is_new) 
VALUES ('ADOBE-CC-1Y', 6, 2, 'adobe-creative-cloud-all-apps', 'license', 599.99, 449.99, 25, 19.00, 'unlimited', 'subscription', '1-year', '["Windows 10+", "macOS 10.15+"]', 2, 1);

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(4, 'en', 'Adobe Creative Cloud All Apps - 1 Year', 'Complete Adobe creative suite with 20+ apps', 'Adobe Creative Cloud All Apps gives you access to the entire collection of Adobe creative desktop and mobile apps. Includes Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, XD, and 15+ more applications. Perfect for designers, photographers, and video editors.', '["20+ Creative Apps", "Photoshop, Illustrator, InDesign", "Premiere Pro & After Effects", "100GB Cloud Storage", "Adobe Fonts Access", "Portfolio Website", "Mobile Apps Included", "1 Year Subscription"]', 'Adobe Creative Cloud All Apps - 1 Year Subscription | 25% OFF', 'Get Adobe Creative Cloud complete suite. 20+ apps including Photoshop, Illustrator, Premiere Pro. 1-year license, instant delivery.');

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(4, 'de', 'Adobe Creative Cloud Alle Apps - 1 Jahr', 'Vollständige Adobe Creative Suite mit 20+ Apps', 'Adobe Creative Cloud Alle Apps gibt Ihnen Zugriff auf die gesamte Sammlung von Adobe-Desktop- und Mobil-Apps. Enthält Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, XD und 15+ weitere Anwendungen. Perfekt für Designer, Fotografen und Videobearbeiter.', '["20+ Kreative Apps", "Photoshop, Illustrator, InDesign", "Premiere Pro & After Effects", "100GB Cloud-Speicher", "Adobe Fonts Zugriff", "Portfolio-Website", "Mobile Apps enthalten", "1-Jahres-Abonnement"]', 'Adobe Creative Cloud Alle Apps - 1-Jahres-Abo | 25% RABATT', 'Holen Sie sich die vollständige Adobe Creative Cloud Suite. 20+ Apps inkl. Photoshop, Illustrator, Premiere Pro. 1-Jahres-Lizenz, Sofortlieferung.');

-- Windows Server 2022 Standard
INSERT OR IGNORE INTO products (sku, category_id, brand_id, slug, product_type, base_price, discount_price, discount_percentage, vat_rate, stock_type, license_type, license_duration, compatibility, activation_limit, is_featured) 
VALUES ('WINSRV-2022-STD', 3, 1, 'windows-server-2022-standard', 'license', 899.99, 399.99, 56, 19.00, 'unlimited', 'perpetual', 'lifetime', '["Server Hardware"]', 1, 0);

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(5, 'en', 'Windows Server 2022 Standard', 'Enterprise server operating system', 'Windows Server 2022 Standard edition provides a reliable and secure platform for your business infrastructure. Includes advanced features for virtualization, networking, storage, and security. Ideal for small to medium-sized businesses.', '["Lifetime License", "Supports 2 VMs", "Hyper-V Virtualization", "Advanced Security Features", "Storage Spaces Direct", "Software-Defined Networking", "Active Directory", "Remote Desktop Services"]', 'Windows Server 2022 Standard License | 56% OFF', 'Buy Windows Server 2022 Standard license key. Enterprise-grade server OS with Hyper-V. Lifetime activation, instant delivery.');

INSERT OR IGNORE INTO product_translations (product_id, language, name, short_description, long_description, features, meta_title, meta_description) VALUES 
(5, 'de', 'Windows Server 2022 Standard', 'Enterprise-Server-Betriebssystem', 'Windows Server 2022 Standard Edition bietet eine zuverlässige und sichere Plattform für Ihre Geschäftsinfrastruktur. Enthält erweiterte Funktionen für Virtualisierung, Netzwerk, Speicher und Sicherheit. Ideal für kleine bis mittelgroße Unternehmen.', '["Lebenslange Lizenz", "Unterstützt 2 VMs", "Hyper-V-Virtualisierung", "Erweiterte Sicherheitsfunktionen", "Storage Spaces Direct", "Software-Defined Networking", "Active Directory", "Remote-Desktop-Dienste"]', 'Windows Server 2022 Standard Lizenz | 56% RABATT', 'Windows Server 2022 Standard Lizenzschlüssel kaufen. Enterprise-Server-OS mit Hyper-V. Lebenslange Aktivierung, Sofortlieferung.');

-- ============================================
-- PRODUCT IMAGES
-- ============================================

INSERT OR IGNORE INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) VALUES 
(1, '/static/products/windows-11-pro.jpg', 'Windows 11 Pro', 0, 1),
(2, '/static/products/office-2021-pro.jpg', 'Microsoft Office 2021 Professional Plus', 0, 1),
(3, '/static/products/kaspersky-total.jpg', 'Kaspersky Total Security 2024', 0, 1),
(4, '/static/products/adobe-cc.jpg', 'Adobe Creative Cloud All Apps', 0, 1),
(5, '/static/products/server-2022.jpg', 'Windows Server 2022 Standard', 0, 1);

-- ============================================
-- PRODUCT FAQs
-- ============================================

INSERT OR IGNORE INTO product_faqs (product_id, language, question, answer, sort_order) VALUES 
(1, 'en', 'Is this a genuine Windows 11 license?', 'Yes, this is a 100% genuine Microsoft Windows 11 Professional license key. It provides full functionality and lifetime updates directly from Microsoft.', 1),
(1, 'en', 'How quickly will I receive my license key?', 'Your license key will be delivered instantly via email after payment confirmation. You can also access it in your account dashboard.', 2),
(1, 'en', 'Can I use this key on multiple computers?', 'No, each Windows 11 Pro license key can only be activated on one device at a time. You need separate licenses for multiple computers.', 3),
(1, 'de', 'Ist dies eine echte Windows 11 Lizenz?', 'Ja, dies ist ein 100% echter Microsoft Windows 11 Professional Lizenzschlüssel. Er bietet volle Funktionalität und lebenslange Updates direkt von Microsoft.', 1),
(1, 'de', 'Wie schnell erhalte ich meinen Lizenzschlüssel?', 'Ihr Lizenzschlüssel wird nach Zahlungsbestätigung sofort per E-Mail zugestellt. Sie können auch in Ihrem Konto-Dashboard darauf zugreifen.', 2);

-- ============================================
-- LICENSE KEYS (Sample)
-- ============================================

INSERT OR IGNORE INTO license_keys (product_id, license_key, key_type, activation_limit, status) VALUES 
(1, 'W269N-WFGWX-YVC9B-4J6C9-T83GX', 'single', 1, 'available'),
(1, 'VK7JG-NPHTM-C97JM-9MPGT-3V66T', 'single', 1, 'available'),
(2, 'XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99', 'single', 1, 'available'),
(2, 'NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP', 'single', 1, 'available'),
(3, 'KASP-2024-XXXX-YYYY-ZZZZ', 'single', 3, 'available'),
(4, 'ADOBE-CC-2024-XXXXX', 'single', 2, 'available'),
(5, 'N2KJX-J94YW-TQVFB-DG9YT-724CC', 'single', 1, 'available');

-- ============================================
-- COUPONS
-- ============================================

INSERT OR IGNORE INTO coupons (code, type, value, min_purchase_amount, max_uses, valid_from, valid_until, is_active) VALUES 
('WELCOME10', 'percentage', 10.00, 50.00, 100, datetime('now'), datetime('now', '+30 days'), 1),
('SAVE20', 'percentage', 20.00, 100.00, 0, datetime('now'), datetime('now', '+90 days'), 1),
('FIRST25', 'percentage', 25.00, 0.00, 1, datetime('now'), datetime('now', '+365 days'), 1);

-- ============================================
-- CMS PAGES
-- ============================================

INSERT OR IGNORE INTO pages (slug, page_type, is_active) VALUES 
('about-us', 'standard', 1),
('privacy-policy', 'legal', 1),
('terms-conditions', 'legal', 1),
('imprint', 'legal', 1);

INSERT OR IGNORE INTO page_translations (page_id, language, title, content, meta_title, meta_description) VALUES 
(1, 'en', 'About Us', '<h1>About Our Software Store</h1><p>We are a leading provider of genuine software licenses...</p>', 'About Us - Trusted Software License Provider', 'Learn about our commitment to providing genuine software licenses at competitive prices.'),
(1, 'de', 'Über uns', '<h1>Über unseren Software-Shop</h1><p>Wir sind ein führender Anbieter von echten Software-Lizenzen...</p>', 'Über uns - Vertrauenswürdiger Software-Lizenzanbieter', 'Erfahren Sie mehr über unser Engagement für echte Software-Lizenzen zu wettbewerbsfähigen Preisen.');

-- ============================================
-- SETTINGS
-- ============================================

INSERT OR IGNORE INTO settings (setting_key, setting_value, setting_type) VALUES 
('site_name_en', 'Premium Software Store', 'string'),
('site_name_de', 'Premium Software Shop', 'string'),
('default_language', 'en', 'string'),
('default_currency', 'EUR', 'string'),
('vat_rate_eu', '19.00', 'number'),
('email_from', 'noreply@softwarestore.com', 'string'),
('support_email', 'support@softwarestore.com', 'string'),
('enable_guest_checkout', '1', 'boolean'),
('min_order_amount', '10.00', 'number');

-- ============================================
-- HOMEPAGE SECTIONS
-- ============================================

INSERT OR IGNORE INTO homepage_sections (section_key, section_type, is_enabled, sort_order, config) VALUES 
('hero_banner', 'hero', 1, 1, '{"title": "Premium Software Licenses", "subtitle": "Instant Delivery • Lifetime Support • Best Prices"}'),
('trust_badges', 'trust_badges', 1, 2, '{"badges": ["SSL Secure", "EHI Certified", "Instant Delivery", "24/7 Support"]}'),
('featured_products', 'featured_products', 1, 3, '{"limit": 8, "show_discount": true}'),
('categories', 'categories', 1, 4, '{"show_icons": true}'),
('bestsellers', 'bestsellers', 1, 5, '{"limit": 6}'),
('partner_logos', 'partners', 1, 6, '{"logos": ["Microsoft", "Adobe", "Kaspersky", "Norton"]}'),
('purchase_steps', 'purchase_steps', 1, 7, '{"steps": 4}');
