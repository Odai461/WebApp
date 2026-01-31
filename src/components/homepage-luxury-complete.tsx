import { 
  FAQSection, 
  BekanntAusSection, 
  B2BSection, 
  PartnerLogosSection, 
  ProcessStepsSection, 
  CategoryGridSection, 
  NewsletterSection 
} from './sections'

export const HomepageLuxuryComplete = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Software Lizenzen kaufen – Original & Sofort verfügbar | SOFTWAREKING24</title>
        <meta name="description" content="Günstige Software Lizenzen kaufen bei SOFTWAREKING24 ✓ Windows 11, Office 2024, Server 2025 ✓ Original-Lizenzen ✓ Sofortiger Download ✓ 100% Legal"/>
        <meta name="keywords" content="software lizenzen kaufen, windows 11, office 2024, esd lizenzen, microsoft lizenzen, server software, antivirus, original software"/>
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <link href="/static/search-autocomplete.css" rel="stylesheet" />
        <script src="/static/search-autocomplete.js" defer></script>
        
        <!-- Swiper for Sliders -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
            
            :root {
                --navy: #001f3f;
                --gold: #FFC107;
                --white: #ffffff;
                --light-gray: #f5f5f5;
                --border: #e0e0e0;
                --text: #333333;
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                background: var(--white);
                color: var(--text);
                line-height: 1.6;
            }
            
            .container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 20px;
            }
            
            /* Top Bar */
            .top-bar {
                background: var(--navy);
                color: white;
                padding: 10px 0;
                font-size: 14px;
            }
            
            .top-bar-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
            }
            
            .top-bar-left {
                display: flex;
                gap: 20px;
                align-items: center;
            }
            
            .lang-switch {
                display: flex;
                gap: 10px;
            }
            
            .lang-btn {
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                padding: 5px 12px;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .lang-btn:hover, .lang-btn.active {
                background: var(--gold);
                color: var(--navy);
                border-color: var(--gold);
            }
            
            .top-bar-center {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .top-bar-right {
                display: flex;
                gap: 20px;
            }
            
            .top-bar a {
                color: white;
                text-decoration: none;
                transition: color 0.3s;
            }
            
            .top-bar a:hover {
                color: var(--gold);
            }
            
            /* Main Header */
            .main-header {
                background: white;
                padding: 20px 0;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                position: sticky;
                top: 0;
                z-index: 999;
            }
            
            .header-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 40px;
            }
            
            .logo {
                height: 60px;
                width: auto;
            }
            
            .search-box {
                flex: 1;
                max-width: 600px;
                display: flex;
                border: 2px solid var(--gold);
                border-radius: 4px;
                overflow: hidden;
            }
            
            .search-box input {
                flex: 1;
                padding: 12px 20px;
                border: none;
                font-size: 15px;
                outline: none;
            }
            
            .search-box button {
                background: var(--gold);
                color: var(--navy);
                border: none;
                padding: 12px 30px;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .search-box button:hover {
                background: #ffb300;
            }
            
            .cart-btn {
                background: var(--gold);
                color: var(--navy);
                border: none;
                padding: 12px 30px;
                border-radius: 4px;
                font-weight: 700;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                position: relative;
                transition: all 0.3s;
            }
            
            .cart-btn:hover {
                background: #ffb300;
                transform: translateY(-2px);
            }
            
            .cart-badge {
                position: absolute;
                top: -8px;
                right: -8px;
                background: var(--navy);
                color: white;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 700;
            }
            
            /* Navigation */
            .nav-bar {
                background: var(--navy);
                position: relative;
                z-index: 998;
            }
            
            .nav-menu {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                list-style: none;
            }
            
            .nav-item {
                position: relative;
            }
            
            .nav-link {
                display: block;
                padding: 15px 25px;
                color: white;
                text-decoration: none;
                font-weight: 600;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                transition: all 0.3s;
            }
            
            .nav-link:hover {
                background: rgba(255, 193, 7, 0.2);
                color: var(--gold);
            }
            
            /* Hero Section */
            .hero {
                background: linear-gradient(135deg, var(--navy) 0%, #003366 100%);
                color: white;
                padding: 100px 0;
                position: relative;
                overflow: hidden;
            }
            
            .hero-content {
                position: relative;
                z-index: 2;
                text-align: center;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .hero h1 {
                font-size: 56px;
                font-weight: 900;
                margin-bottom: 25px;
                line-height: 1.2;
            }
            
            .hero p {
                font-size: 20px;
                margin-bottom: 40px;
                opacity: 0.9;
            }
            
            .hero-cta {
                display: inline-block;
                background: var(--gold);
                color: var(--navy);
                padding: 18px 50px;
                border-radius: 4px;
                text-decoration: none;
                font-weight: 700;
                font-size: 18px;
                text-transform: uppercase;
                transition: all 0.3s;
            }
            
            .hero-cta:hover {
                background: #ffb300;
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4);
            }
            
            /* Trust Bar */
            .trust-bar {
                background: white;
                padding: 60px 0;
                margin-top: -40px;
                position: relative;
                z-index: 10;
            }
            
            .trust-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
            }
            
            .trust-card {
                background: white;
                padding: 40px 30px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                transition: all 0.3s;
                border: 2px solid transparent;
            }
            
            .trust-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 40px rgba(0,0,0,0.12);
                border-color: var(--gold);
            }
            
            .trust-card i {
                font-size: 56px;
                color: var(--gold);
                margin-bottom: 20px;
            }
            
            .trust-card h3 {
                font-size: 20px;
                font-weight: 700;
                color: var(--navy);
                margin-bottom: 12px;
            }
            
            .trust-card p {
                font-size: 15px;
                color: #666;
                line-height: 1.6;
            }
            
            /* Product Section */
            .product-section {
                padding: 80px 0;
            }
            
            .section-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
            }
            
            .section-title {
                font-size: 38px;
                font-weight: 800;
                color: var(--navy);
            }
            
            .view-all {
                color: var(--gold);
                text-decoration: none;
                font-weight: 600;
                font-size: 16px;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: gap 0.3s;
            }
            
            .view-all:hover {
                gap: 12px;
            }
            
            /* Product Card */
            .product-card {
                background: white;
                border: 2px solid var(--border);
                border-radius: 12px;
                padding: 25px;
                text-align: center;
                transition: all 0.3s;
                position: relative;
                height: 100%;
            }
            
            .product-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 35px rgba(0,0,0,0.12);
                border-color: var(--gold);
            }
            
            .deal-badge {
                position: absolute;
                top: 0;
                right: 0;
                background: var(--gold);
                color: var(--navy);
                padding: 8px 16px;
                border-radius: 0 12px 0 12px;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
            }
            
            .category-tag {
                position: absolute;
                top: 15px;
                left: 15px;
                background: var(--navy);
                color: white;
                padding: 6px 14px;
                border-radius: 4px;
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
            }
            
            .product-image {
                width: 100%;
                height: 180px;
                object-fit: contain;
                margin-bottom: 20px;
            }
            
            .product-rating {
                color: var(--gold);
                font-size: 14px;
                margin-bottom: 12px;
            }
            
            .product-name {
                font-size: 17px;
                font-weight: 600;
                color: var(--navy);
                margin-bottom: 12px;
                min-height: 42px;
            }
            
            .product-price-old {
                font-size: 14px;
                color: #999;
                text-decoration: line-through;
                margin-bottom: 5px;
            }
            
            .product-price {
                font-size: 28px;
                font-weight: 900;
                color: var(--gold);
                margin-bottom: 8px;
            }
            
            .price-label {
                font-size: 13px;
                color: #666;
                margin-bottom: 15px;
            }
            
            .download-badge {
                display: inline-block;
                background: var(--light-gray);
                color: var(--navy);
                padding: 6px 14px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 15px;
            }
            
            .add-cart-btn {
                background: var(--gold);
                color: var(--navy);
                border: none;
                padding: 14px 20px;
                border-radius: 6px;
                font-weight: 700;
                font-size: 14px;
                cursor: pointer;
                width: 100%;
                text-transform: uppercase;
                transition: all 0.3s;
            }
            
            .add-cart-btn:hover {
                background: #ffb300;
                transform: translateY(-2px);
            }
            
            /* Swiper */
            .swiper {
                padding: 0 50px 40px;
            }
            
            .swiper-button-next,
            .swiper-button-prev {
                color: var(--gold) !important;
                background: white;
                width: 45px;
                height: 45px;
                border-radius: 50%;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            
            .swiper-button-next:after,
            .swiper-button-prev:after {
                font-size: 22px;
            }
            
            .swiper-pagination-bullet-active {
                background: var(--gold) !important;
            }
            
            /* Footer */
            .footer {
                background: var(--navy);
                color: white;
                padding: 60px 0 30px;
            }
            
            .footer-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 40px;
                margin-bottom: 40px;
            }
            
            .footer-section h4 {
                font-size: 18px;
                font-weight: 700;
                color: var(--gold);
                margin-bottom: 20px;
                text-transform: uppercase;
            }
            
            .footer-section ul {
                list-style: none;
            }
            
            .footer-section ul li {
                margin-bottom: 12px;
            }
            
            .footer-section ul li a {
                color: #ccc;
                text-decoration: none;
                font-size: 15px;
                transition: color 0.3s;
            }
            
            .footer-section ul li a:hover {
                color: var(--gold);
            }
            
            .footer-section p {
                color: #ccc;
                font-size: 15px;
                line-height: 1.8;
            }
            
            .trust-badges {
                display: flex;
                gap: 15px;
                margin-top: 20px;
                flex-wrap: wrap;
            }
            
            .trust-badge-item {
                background: white;
                padding: 10px 15px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 600;
                color: var(--navy);
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.1);
                color: #999;
                font-size: 14px;
            }
            
            .payment-icons {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-top: 15px;
                font-size: 28px;
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .header-content {
                    flex-direction: column;
                    gap: 20px;
                }
                
                .hero h1 {
                    font-size: 36px;
                }
                
                .section-title {
                    font-size: 28px;
                }
                
                .nav-menu {
                    flex-direction: column;
                }
                
                .top-bar-content {
                    flex-direction: column;
                    gap: 10px;
                }
            }
        </style>
    </head>
    <body>
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-content">
                    <div class="top-bar-left">
                        <div class="lang-switch">
                            <button class="lang-btn active">🇩🇪 DE</button>
                            <button class="lang-btn">🇬🇧 EN</button>
                        </div>
                        <select style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 5px 12px; border-radius: 4px; cursor: pointer;">
                            <option>EUR €</option>
                            <option>USD $</option>
                            <option>GBP £</option>
                        </select>
                    </div>
                    
                    <div class="top-bar-center">
                        <i class="fas fa-phone"></i>
                        <span>Hotline: <strong>+49 (0) 123 456 789</strong></span>
                    </div>
                    
                    <div class="top-bar-right">
                        <a href="/hersteller">Hersteller</a>
                        <a href="/service">Service Center</a>
                        <a href="/user/dashboard">Mein Konto</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Header -->
        <header class="main-header">
            <div class="container">
                <div class="header-content">
                    <a href="/">
                        <img src="/static/logo.png" alt="SoftwareKing24" class="logo">
                    </a>
                    
                    <div class="search-box">
                        <input type="text" id="search-input" placeholder="Software suchen...">
                        <button onclick="performSearch()">Suchen</button>
                    </div>
                    
                    <button class="cart-btn" onclick="window.location.href='/warenkorb'">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Warenkorb</span>
                        <span class="cart-badge" id="cart-count">0</span>
                    </button>
                </div>
            </div>
        </header>
        
        <!-- Navigation -->
        <nav class="nav-bar">
            <div class="container">
                <ul class="nav-menu">
                    <li class="nav-item"><a href="/produkte?category=Windows" class="nav-link">Windows</a></li>
                    <li class="nav-item"><a href="/produkte?category=Office" class="nav-link">Microsoft Office</a></li>
                    <li class="nav-item"><a href="/produkte?category=Server" class="nav-link">Server & CAL</a></li>
                    <li class="nav-item"><a href="/produkte?category=Antivirus" class="nav-link">Antivirus</a></li>
                    <li class="nav-item"><a href="/produkte?category=CAD" class="nav-link">CAD & Design</a></li>
                    <li class="nav-item"><a href="/produkte" class="nav-link">Alle Produkte</a></li>
                    <li class="nav-item"><a href="/kontakt" class="nav-link">Kontakt</a></li>
                </ul>
            </div>
        </nav>
        
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Günstige Software Lizenzen kaufen – Original & Sofort verfügbar</h1>
                    <p>Hochwertige Original-Lizenzen für Windows, Office, Server und Antivirus-Software. Sofortiger Download, lebenslanger Support, 100% legal und sicher.</p>
                    <a href="/produkte" class="hero-cta">Jetzt Software Kaufen</a>
                </div>
            </div>
        </section>
        
        <!-- Trust Bar -->
        <section class="trust-bar">
            <div class="container">
                <div class="trust-grid">
                    <div class="trust-card">
                        <i class="fas fa-bolt"></i>
                        <h3>Blitzversand per E-Mail</h3>
                        <p>Ihre Lizenz erhalten Sie innerhalb weniger Minuten direkt per E-Mail zugestellt.</p>
                    </div>
                    
                    <div class="trust-card">
                        <i class="fas fa-tools"></i>
                        <h3>Kostenlose Installation</h3>
                        <p>Detaillierte Anleitungen und kostenloser Support bei der Einrichtung.</p>
                    </div>
                    
                    <div class="trust-card">
                        <i class="fas fa-shield-alt"></i>
                        <h3>100% Original & Legal</h3>
                        <p>Nur echte Software-Lizenzen direkt von autorisierten Partnern.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Top Deals Section -->
        <section class="product-section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">🔥 Top-Angebote des Tages</h2>
                    <a href="/produkte" class="view-all">Alle anzeigen <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="swiper products-swiper-deals">
                    <div class="swiper-wrapper" id="deals-products"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
        
        ${FAQSection()}
        ${BekanntAusSection()}
        ${B2BSection()}
        
        <!-- Windows Betriebssysteme Section -->
        <section class="product-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Windows Betriebssysteme</h2>
                    <a href="/produkte?category=Windows" class="view-all">Alle anzeigen <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="swiper products-swiper-windows">
                    <div class="swiper-wrapper" id="windows-products"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
        
        ${PartnerLogosSection()}
        ${ProcessStepsSection()}
        
        <!-- Microsoft Office Section -->
        <section class="product-section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Microsoft Office Pakete</h2>
                    <a href="/produkte?category=Office" class="view-all">Alle anzeigen <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="swiper products-swiper-office">
                    <div class="swiper-wrapper" id="office-products"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
        
        ${CategoryGridSection()}
        
        <!-- Server & CAL Section -->
        <section class="product-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Server & CAL Lizenzen</h2>
                    <a href="/produkte?category=Server" class="view-all">Alle anzeigen <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="swiper products-swiper-server">
                    <div class="swiper-wrapper" id="server-products"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
        
        <!-- Antivirus Section -->
        <section class="product-section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Antivirus & Sicherheit</h2>
                    <a href="/produkte?category=Antivirus" class="view-all">Alle anzeigen <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="swiper products-swiper-antivirus">
                    <div class="swiper-wrapper" id="antivirus-products"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
        
        ${NewsletterSection()}
        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-section">
                        <h4>Informationen</h4>
                        <ul>
                            <li><a href="/about">Über uns</a></li>
                            <li><a href="/impressum">Impressum</a></li>
                            <li><a href="/datenschutz">Datenschutz</a></li>
                            <li><a href="/agb">AGB</a></li>
                            <li><a href="/widerruf">Widerrufsrecht</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Mein Konto</h4>
                        <ul>
                            <li><a href="/login">Anmelden</a></li>
                            <li><a href="/registrieren">Registrieren</a></li>
                            <li><a href="/user/dashboard">Dashboard</a></li>
                            <li><a href="/user/orders">Meine Bestellungen</a></li>
                            <li><a href="/warenkorb">Warenkorb</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Produkte</h4>
                        <ul>
                            <li><a href="/produkte?category=Windows">Windows</a></li>
                            <li><a href="/produkte?category=Office">Microsoft Office</a></li>
                            <li><a href="/produkte?category=Server">Server</a></li>
                            <li><a href="/produkte?category=Antivirus">Antivirus</a></li>
                            <li><a href="/produkte">Alle Produkte</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Kontakt</h4>
                        <p>SoftwareKing24 GmbH<br>
                        Musterstraße 123<br>
                        12345 Musterstadt<br>
                        Deutschland</p>
                        <p style="margin-top: 15px;">
                            <i class="fas fa-phone"></i> +49 (0) 123 456 789<br>
                            <i class="fas fa-envelope"></i> info@softwareking24.de
                        </p>
                        <div class="trust-badges">
                            <div class="trust-badge-item">Trusted Shops</div>
                            <div class="trust-badge-item">EHI Geprüft</div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 SoftwareKing24.de - Alle Rechte vorbehalten</p>
                    <div class="payment-icons">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-paypal"></i>
                        <i class="fab fa-cc-amex"></i>
                    </div>
                </div>
            </div>
        </footer>
        
        <script>
            // Cart management
            function updateCartCount() {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                document.getElementById('cart-count').textContent = cart.length;
            }
            updateCartCount();
            
            // Search
            function performSearch() {
                const query = document.getElementById('search-input').value;
                if (query) window.location.href = '/produkte?search=' + encodeURIComponent(query);
            }
            
            document.getElementById('search-input').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performSearch();
            });
            
            // Load products
            async function loadProducts() {
                try {
                    const response = await axios.get('/api/products?limit=50');
                    const products = response.data.products || [];
                    
                    // Split by category
                    const deals = products.slice(0, 10);
                    const windows = products.filter(p => p.category === 'Windows').slice(0, 10);
                    const office = products.filter(p => p.category === 'Office').slice(0, 10);
                    const server = products.filter(p => p.category === 'Server').slice(0, 10);
                    const antivirus = products.filter(p => p.category === 'Antivirus').slice(0, 10);
                    
                    // Render
                    renderProducts('deals-products', deals, true);
                    renderProducts('windows-products', windows);
                    renderProducts('office-products', office);
                    renderProducts('server-products', server);
                    renderProducts('antivirus-products', antivirus);
                    
                    // Initialize swipers
                    ['.products-swiper-deals', '.products-swiper-windows', '.products-swiper-office', 
                     '.products-swiper-server', '.products-swiper-antivirus'].forEach(selector => {
                        new Swiper(selector, {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            navigation: {
                                nextEl: selector + ' .swiper-button-next',
                                prevEl: selector + ' .swiper-button-prev',
                            },
                            pagination: {
                                el: selector + ' .swiper-pagination',
                                clickable: true,
                            },
                            breakpoints: {
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                                1280: { slidesPerView: 5 },
                            },
                        });
                    });
                } catch (error) {
                    console.error('Error loading products:', error);
                }
            }
            
            function renderProducts(containerId, products, showDeals = false) {
                const container = document.getElementById(containerId);
                if (!container) return;
                
                container.innerHTML = products.map((p, i) => {
                    const hasOldPrice = showDeals && i < 3;
                    const oldPrice = hasOldPrice ? (p.price * 1.5).toFixed(2) : null;
                    
                    return \`
                        <div class="swiper-slide">
                            <div class="product-card">
                                \${showDeals && i < 3 ? '<div class="deal-badge">Angebot!</div>' : ''}
                                <div class="category-tag">\${p.category || 'Software'}</div>
                                <img src="\${p.image_url || '/static/placeholder.png'}" alt="\${p.name}" class="product-image">
                                <div class="product-rating">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                                <div class="product-name">\${p.name}</div>
                                \${hasOldPrice ? '<div class="product-price-old">€' + oldPrice + '</div>' : ''}
                                <div class="product-price">€\${p.price.toFixed(2)}</div>
                                <div class="price-label">ab</div>
                                <div class="download-badge"><i class="fas fa-download"></i> Sofortiger Download</div>
                                <button class="add-cart-btn" onclick="addToCart(\${p.id})">In den Warenkorb</button>
                            </div>
                        </div>
                    \`;
                }).join('');
            }
            
            function addToCart(productId) {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                if (!cart.find(item => item.id === productId)) {
                    cart.push({ id: productId, quantity: 1 });
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    alert('Produkt wurde zum Warenkorb hinzugefügt!');
                } else {
                    alert('Produkt ist bereits im Warenkorb!');
                }
            }
            
            loadProducts();
        </script>
    </body>
    </html>
  `;
};
