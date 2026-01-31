-- Enhanced Product Data with Images and Better Descriptions
-- This script updates existing products with images and better descriptions

-- Update existing products with better descriptions and images
-- Windows Products
UPDATE products SET 
  image_url = '/static/images/products/windows-11-pro.jpg',
  short_description = 'Windows 11 Pro - Das neueste Betriebssystem von Microsoft mit erweiterten Funktionen für Profis und Unternehmen. Inkl. BitLocker, Remote Desktop, Hyper-V.',
  description = 'Microsoft Windows 11 Pro bietet alle Features von Windows 11 Home plus zusätzliche Sicherheits- und Verwaltungsfunktionen für Unternehmen. Mit BitLocker-Verschlüsselung, Windows Information Protection (WIP), Remote Desktop und Hyper-V. Perfekt für professionelle Anwender und kleine bis mittelständische Unternehmen.'
WHERE name LIKE '%Windows 11 Pro%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows 11 Pro%');

UPDATE products SET 
  image_url = '/static/images/products/windows-11-home.jpg',
  short_description = 'Windows 11 Home - Das moderne Betriebssystem für Zuhause mit optimiertem Design und Gaming-Features.',
  description = 'Microsoft Windows 11 Home bringt ein völlig neues Design mit zentriertem Startmenü, abgerundeten Ecken und Snap Layouts. Optimiert für Gaming mit DirectStorage und Auto HDR. Perfekt für Privatanwender, Studenten und Familien.'
WHERE name LIKE '%Windows 11 Home%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows 11 Home%');

UPDATE products SET 
  image_url = '/static/images/products/windows-10-pro.jpg',
  short_description = 'Windows 10 Pro - Bewährtes Betriebssystem mit professionellen Features und langfristigem Support.',
  description = 'Microsoft Windows 10 Pro ist die professionelle Version des beliebten Betriebssystems. Mit erweiterten Sicherheitsfunktionen, Domänenbeitritt, Gruppenrichtlinien und BitLocker-Verschlüsselung. Ideal für Unternehmen die auf Stabilität und Kompatibilität setzen.'
WHERE name LIKE '%Windows 10 Pro%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows 10 Pro%');

-- Office Products
UPDATE products SET 
  image_url = '/static/images/products/office-2024-pro.jpg',
  short_description = 'Microsoft Office 2024 Professional Plus - Die komplette Office-Suite mit Word, Excel, PowerPoint, Outlook, Access, Publisher und mehr.',
  description = 'Microsoft Office 2024 Professional Plus ist die umfassendste Version der Office-Suite. Enthält Word, Excel, PowerPoint, Outlook, OneNote, Access, Publisher und Skype for Business. Einmalige Kauflizenz ohne Abo. Perfekt für Unternehmen und Power-User mit höchsten Ansprüchen.'
WHERE name LIKE '%Office%2024%Pro%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Office%2024%Pro%');

UPDATE products SET 
  image_url = '/static/images/products/office-2021-home.jpg',
  short_description = 'Microsoft Office 2021 Home & Business - Word, Excel, PowerPoint und Outlook für Privatanwender und kleine Unternehmen.',
  description = 'Microsoft Office 2021 Home & Business enthält die wichtigsten Office-Anwendungen: Word, Excel, PowerPoint und Outlook. Einmalige Kauflizenz für 1 PC oder Mac. Ideal für Selbstständige, Freiberufler und kleine Unternehmen.'
WHERE name LIKE '%Office%2021%Home%Business%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Office%2021%Home%Business%');

UPDATE products SET 
  image_url = '/static/images/products/office-2019-standard.jpg',
  short_description = 'Microsoft Office 2019 Standard - Die klassische Office-Suite mit Word, Excel, PowerPoint und Outlook.',
  description = 'Microsoft Office 2019 Standard bietet die bewährten Office-Anwendungen Word, Excel, PowerPoint und Outlook in der 2019er Version. Einmalige Kauflizenz ohne laufende Kosten. Perfekt für Anwender die eine stabile und zuverlässige Office-Lösung suchen.'
WHERE name LIKE '%Office%2019%Standard%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Office%2019%Standard%');

-- Antivirus Products
UPDATE products SET 
  image_url = '/static/images/products/kaspersky-total.jpg',
  short_description = 'Kaspersky Total Security - Umfassender Schutz für PC, Mac, Android und iOS mit VPN, Passwort-Manager und Kindersicherung.',
  description = 'Kaspersky Total Security bietet ultimativen Schutz gegen Viren, Ransomware, Phishing und Spyware. Inkl. Secure VPN, Password Manager, Parental Control und File Backup. Schützt bis zu 5 Geräte (Windows, Mac, Android, iOS). Deutsche Version mit deutschem Support.'
WHERE name LIKE '%Kaspersky%Total%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Kaspersky%Total%');

UPDATE products SET 
  image_url = '/static/images/products/bitdefender-total.jpg',
  short_description = 'Bitdefender Total Security - Preisgekrönter Schutz für alle Ihre Geräte mit minimalem System-Impact.',
  description = 'Bitdefender Total Security ist einer der besten Virenschutz-Lösungen auf dem Markt. Mehrfacher Testsieger mit hervorragenden Erkennungsraten. Inkl. VPN (200 MB/Tag), Anti-Ransomware, Firewall und Webcam-Schutz. Schützt Windows, Mac, Android und iOS.'
WHERE name LIKE '%Bitdefender%Total%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Bitdefender%Total%');

UPDATE products SET 
  image_url = '/static/images/products/norton-360.jpg',
  short_description = 'Norton 360 Deluxe - Umfassende Sicherheit mit Cloud-Backup, VPN und Identitätsschutz für die ganze Familie.',
  description = 'Norton 360 Deluxe bietet erstklassigen Virenschutz kombiniert mit 50 GB Cloud-Backup, unbegrenztem VPN und Dark Web Monitoring. Schützt bis zu 5 Geräte. Mit Parental Control für sicheres Surfen der Kinder. 100% Virus-Schutz-Versprechen von Norton.'
WHERE name LIKE '%Norton%360%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Norton%360%');

-- Server Products
UPDATE products SET 
  image_url = '/static/images/products/windows-server-2022.jpg',
  short_description = 'Windows Server 2022 Standard - Das moderne Server-Betriebssystem mit hybriden Cloud-Funktionen und erhöhter Sicherheit.',
  description = 'Microsoft Windows Server 2022 Standard ist die neueste Version des bewährten Server-Betriebssystems. Mit hybriden Cloud-Funktionen, erweiterten Sicherheitsfeatures und Container-Support. Ideal für kleine bis mittelständische Unternehmen. Unterstützt bis zu 2 VMs.'
WHERE name LIKE '%Windows Server%2022%Standard%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows Server%2022%Standard%');

UPDATE products SET 
  image_url = '/static/images/products/windows-server-2019.jpg',
  short_description = 'Windows Server 2019 Standard - Zuverlässiges Server-Betriebssystem mit bewährter Technologie und langfristigem Support.',
  description = 'Microsoft Windows Server 2019 Standard bietet Enterprise-Level-Features zu einem attraktiven Preis. Mit Hyper-V, Storage Spaces Direct und Software Defined Networking. Langfristiger Support bis 2029. Perfekt für Unternehmen die auf Stabilität setzen.'
WHERE name LIKE '%Windows Server%2019%Standard%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows Server%2019%Standard%');

-- CAD & Design Products
UPDATE products SET 
  image_url = '/static/images/products/autocad-2024.jpg',
  short_description = 'AutoCAD 2024 - Die weltweit führende CAD-Software für 2D- und 3D-Konstruktion.',
  description = 'Autodesk AutoCAD 2024 ist die professionelle CAD-Software für Architekten, Ingenieure und Konstrukteure. Mit leistungsstarken 2D- und 3D-Werkzeugen, automatisierten Workflows und Cloud-Zusammenarbeit. Inkl. branchenspezifische Toolsets.'
WHERE name LIKE '%AutoCAD%2024%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%AutoCAD%2024%');

UPDATE products SET 
  image_url = '/static/images/products/adobe-creative-cloud.jpg',
  short_description = 'Adobe Creative Cloud All Apps - Alle Adobe-Anwendungen inkl. Photoshop, Illustrator, InDesign, Premiere Pro und mehr.',
  description = 'Adobe Creative Cloud All Apps beinhaltet über 20 Desktop-Programme und Mobile-Apps. Mit Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom und vielen mehr. Inkl. 100 GB Cloud-Speicher und Adobe Fonts. Perfekt für Kreative und Designer.'
WHERE name LIKE '%Adobe%Creative Cloud%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Adobe%Creative Cloud%');

UPDATE products SET 
  image_url = '/static/images/products/coreldraw-2024.jpg',
  short_description = 'CorelDRAW Graphics Suite 2024 - Professionelle Grafikdesign-Software mit Vektorgrafik, Layout und Fotobearbeitung.',
  description = 'CorelDRAW Graphics Suite 2024 ist die umfassende Lösung für Grafikdesign. Enthält CorelDRAW (Vektorgrafik), Corel PHOTO-PAINT (Bildbearbeitung), PowerTRACE (Bitmap-zu-Vektor), AfterShot (RAW-Bearbeitung) und Font Manager. Deutsche Version mit deutschem Support.'
WHERE name LIKE '%CorelDRAW%2024%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%CorelDRAW%2024%');

-- Set all products to featured and bestseller for better visibility
UPDATE products SET is_featured = 1 WHERE name LIKE '%Windows 11%' OR name LIKE '%Office 202%';
UPDATE products SET is_bestseller = 1 WHERE name LIKE '%Windows%' OR name LIKE '%Office%' OR name LIKE '%Kaspersky%';
UPDATE products SET is_new = 1 WHERE name LIKE '%2024%' OR name LIKE '%2023%';

-- Set realistic ratings for popular products
UPDATE products SET rating = 4.8, review_count = 156 WHERE name LIKE '%Windows 11 Pro%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows 11 Pro%');
UPDATE products SET rating = 4.7, review_count = 203 WHERE name LIKE '%Office%2024%Pro%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Office%2024%Pro%');
UPDATE products SET rating = 4.9, review_count = 89 WHERE name LIKE '%Kaspersky%Total%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Kaspersky%Total%');
UPDATE products SET rating = 4.6, review_count = 134 WHERE name LIKE '%Bitdefender%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Bitdefender%');
UPDATE products SET rating = 4.5, review_count = 98 WHERE name LIKE '%AutoCAD%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%AutoCAD%');
UPDATE products SET rating = 4.7, review_count = 176 WHERE name LIKE '%Adobe Creative Cloud%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Adobe Creative Cloud%');
UPDATE products SET rating = 4.4, review_count = 67 WHERE name LIKE '%Norton%360%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Norton%360%');
UPDATE products SET rating = 4.6, review_count = 145 WHERE name LIKE '%Windows Server%2022%' AND id = (SELECT MIN(id) FROM products WHERE name LIKE '%Windows Server%2022%');
