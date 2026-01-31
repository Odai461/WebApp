export const HomepageSoftwarekingFinal = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SoftwareKing24 - Die besten Software Angebote | Windows, Office, Server</title>
        <meta name="description" content="SoftwareKing24 - Ihr vertrauenswürdiger Shop für Original Software-Lizenzen. Windows, Office, Antivirus, Server-Lösungen zu Top-Preisen. Sofortiger Download."/>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <link href="/static/search-autocomplete.css" rel="stylesheet" />
        <script src="/static/search-autocomplete.js" defer></script>
        
        <!-- Swiper for Product Sliders -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
            
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
                padding: 8px 0;
                font-size: 13px;
            }
            
            .top-bar a {
                color: white;
                text-decoration: none;
                margin: 0 15px;
            }
            
            .top-bar a:hover {
                color: var(--gold);
            }
            
            /* Header */
            .main-header {
                background: white;
                padding: 20px 0;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            .logo-section {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            
            .logo-icon {
                width: 60px;
                height: 60px;
                background: var(--gold);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                color: var(--navy);
            }
            
            .logo-text {
                font-size: 32px;
                font-weight: 900;
                color: var(--navy);
                letter-spacing: -0.5px;
            }
            
            .logo-tagline {
                font-size: 13px;
                color: #666;
                font-weight: 500;
            }
            
            /* Search Bar */
            .search-container {
                flex: 1;
                max-width: 600px;
                margin: 0 40px;
            }
            
            .search-box {
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
                padding: 0 30px;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .search-box button:hover {
                background: #ffb300;
            }
            
            /* Language Switcher */
            .language-switcher {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            
            .lang-flag {
                width: 32px;
                height: 24px;
                cursor: pointer;
                border: 2px solid transparent;
                border-radius: 4px;
                transition: all 0.3s;
            }
            
            .lang-flag:hover {
                border-color: var(--gold);
            }
            
            /* Cart Icon */
            .cart-icon {
                position: relative;
                color: var(--navy);
                font-size: 28px;
                cursor: pointer;
                margin-left: 20px;
            }
            
            .cart-badge {
                position: absolute;
                top: -8px;
                right: -8px;
                background: var(--gold);
                color: var(--navy);
                width: 22px;
                height: 22px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 700;
            }
            
            /* Navigation */
            .main-nav {
                background: var(--navy);
                padding: 0;
            }
            
            .nav-links {
                display: flex;
                justify-content: center;
                list-style: none;
                margin: 0;
                padding: 0;
            }
            
            .nav-links li a {
                display: block;
                padding: 15px 25px;
                color: white;
                text-decoration: none;
                font-weight: 600;
                font-size: 15px;
                transition: all 0.3s;
            }
            
            .nav-links li a:hover {
                background: rgba(255, 193, 7, 0.2);
                color: var(--gold);
            }
            
            /* Hero Section */
            .hero {
                background: linear-gradient(135deg, var(--navy) 0%, #003366 100%);
                padding: 80px 0;
                position: relative;
                overflow: hidden;
            }
            
            .hero::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('https://www.genspark.ai/api/files/s/ER1RZDA1') center/cover;
                opacity: 0.3;
            }
            
            .hero-content {
                position: relative;
                z-index: 2;
                text-align: center;
                color: white;
            }
            
            .hero h1 {
                font-size: 56px;
                font-weight: 900;
                margin-bottom: 20px;
                color: white;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .hero-subtitle {
                font-size: 24px;
                margin-bottom: 40px;
                font-weight: 500;
            }
            
            .cta-button {
                display: inline-block;
                background: var(--gold);
                color: var(--navy);
                padding: 18px 50px;
                border-radius: 4px;
                text-decoration: none;
                font-weight: 800;
                font-size: 18px;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .cta-button:hover {
                background: #ffb300;
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 193, 7, 0.5);
            }
            
            /* Section Titles */
            .section-title {
                text-align: center;
                font-size: 36px;
                font-weight: 800;
                color: var(--navy);
                margin: 60px 0 40px;
                text-transform: uppercase;
                letter-spacing: -0.5px;
            }
            
            /* Product Card */
            .product-card {
                background: white;
                border: 2px solid var(--gold);
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                transition: all 0.3s;
                cursor: pointer;
            }
            
            .product-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
            }
            
            .product-image {
                width: 100%;
                height: 200px;
                object-fit: contain;
                margin-bottom: 15px;
            }
            
            .product-name {
                font-size: 18px;
                font-weight: 700;
                color: var(--navy);
                margin-bottom: 10px;
            }
            
            .product-price {
                font-size: 28px;
                font-weight: 900;
                color: var(--gold);
                margin-bottom: 15px;
            }
            
            .add-to-cart-btn {
                background: var(--gold);
                color: var(--navy);
                border: none;
                padding: 12px 30px;
                border-radius: 4px;
                font-weight: 700;
                font-size: 15px;
                cursor: pointer;
                width: 100%;
                transition: all 0.3s;
                text-transform: uppercase;
            }
            
            .add-to-cart-btn:hover {
                background: #ffb300;
                transform: translateY(-2px);
            }
            
            /* Product Slider */
            .products-slider {
                margin: 40px 0;
            }
            
            .swiper-button-next,
            .swiper-button-prev {
                color: var(--gold) !important;
            }
            
            .swiper-pagination-bullet-active {
                background: var(--gold) !important;
            }
            
            /* Trust Bar */
            .trust-bar {
                background: var(--light-gray);
                padding: 40px 0;
                text-align: center;
            }
            
            .trust-bar h3 {
                font-size: 24px;
                color: var(--navy);
                margin-bottom: 30px;
                font-weight: 700;
            }
            
            .trust-logos {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 50px;
                flex-wrap: wrap;
            }
            
            .trust-logo {
                font-size: 22px;
                font-weight: 700;
                color: #666;
                padding: 15px 30px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }
            
            /* B2B Section */
            .b2b-section {
                background: var(--navy);
                padding: 80px 0;
                position: relative;
                overflow: hidden;
            }
            
            .b2b-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('https://www.genspark.ai/api/files/s/TaoZwbkz') center/cover;
                opacity: 0.2;
            }
            
            .b2b-content {
                position: relative;
                z-index: 2;
                text-align: center;
                color: white;
            }
            
            .b2b-icon {
                width: 100px;
                height: 100px;
                margin: 0 auto 30px;
                background: var(--gold);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .b2b-icon img {
                width: 60px;
                height: 60px;
            }
            
            .b2b-section h2 {
                font-size: 42px;
                font-weight: 800;
                margin-bottom: 20px;
                color: white;
            }
            
            .b2b-section p {
                font-size: 20px;
                margin-bottom: 30px;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
            }
            
            /* Categories Grid */
            .categories-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
                margin: 40px 0;
            }
            
            .category-card {
                background: white;
                border: 2px solid var(--gold);
                border-radius: 8px;
                padding: 40px 20px;
                text-align: center;
                transition: all 0.3s;
                cursor: pointer;
            }
            
            .category-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 30px rgba(255, 193, 7, 0.3);
            }
            
            .category-icon {
                font-size: 64px;
                color: var(--gold);
                margin-bottom: 20px;
            }
            
            .category-card h3 {
                font-size: 24px;
                font-weight: 700;
                color: var(--navy);
                margin-bottom: 10px;
            }
            
            .category-card p {
                font-size: 15px;
                color: #666;
            }
            
            /* Footer */
            .footer {
                background: var(--navy);
                color: white;
                padding: 60px 0 20px;
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
                margin-bottom: 20px;
                color: var(--gold);
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
                transition: color 0.3s;
                font-size: 15px;
            }
            
            .footer-section ul li a:hover {
                color: var(--gold);
            }
            
            .footer-badges {
                display: flex;
                gap: 20px;
                margin-top: 20px;
            }
            
            .footer-badge {
                background: white;
                color: var(--navy);
                padding: 10px 20px;
                border-radius: 4px;
                font-weight: 700;
                font-size: 13px;
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.1);
                color: #999;
                font-size: 14px;
            }
            
            .payment-icons {
                margin-top: 20px;
                font-size: 32px;
            }
            
            .payment-icons i {
                margin: 0 10px;
                color: var(--gold);
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .hero h1 {
                    font-size: 36px;
                }
                
                .section-title {
                    font-size: 28px;
                }
                
                .nav-links {
                    flex-direction: column;
                }
                
                .logo-section {
                    flex-direction: column;
                }
                
                .search-container {
                    margin: 20px 0;
                }
            }
        </style>
    </head>
    <body>
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <i class="fas fa-phone"></i> Hotline: +49 (0) 123 456 789 |
                        <i class="fas fa-envelope"></i> info@softwareking24.de
                    </div>
                    <div>
                        <a href="/login"><i class="fas fa-user"></i> Anmelden</a>
                        <a href="/registrieren"><i class="fas fa-user-plus"></i> Registrieren</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Header -->
        <div class="main-header">
            <div class="container">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <div class="logo-section">
                        <div class="logo-icon">
                            <i class="fas fa-crown"></i>
                        </div>
                        <div>
                            <div class="logo-text">SoftwareKing24</div>
                            <div class="logo-tagline">Die besten Software-Angebote</div>
                        </div>
                    </div>
                    
                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" id="search-input" placeholder="Software suchen...">
                            <button onclick="window.location.href='/produkte'">Suchen</button>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div class="language-switcher">
                            <img src="https://flagcdn.com/w40/de.png" class="lang-flag" alt="Deutsch" title="Deutsch">
                            <img src="https://flagcdn.com/w40/gb.png" class="lang-flag" alt="English" title="English">
                        </div>
                        <a href="/warenkorb" class="cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-badge" id="cart-count">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Navigation -->
        <nav class="main-nav">
            <div class="container">
                <ul class="nav-links">
                    <li><a href="/"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="/produkte">Alle Produkte</a></li>
                    <li><a href="/produkte?category=Windows"><i class="fab fa-windows"></i> Windows</a></li>
                    <li><a href="/produkte?category=Office"><i class="fas fa-file-alt"></i> Microsoft Office</a></li>
                    <li><a href="/produkte?category=Server"><i class="fas fa-server"></i> Server</a></li>
                    <li><a href="/produkte?category=Antivirus"><i class="fas fa-shield-alt"></i> Antivirus</a></li>
                    <li><a href="/kontakt"><i class="fas fa-envelope"></i> Kontakt</a></li>
                </ul>
            </div>
        </nav>
        
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>🦁 Die besten Angebote des Tages!</h1>
                    <p class="hero-subtitle">Original Software-Lizenzen zu Top-Preisen | Sofortiger Download | Lifetime Support</p>
                    <a href="/produkte" class="cta-button">Jetzt einkaufen</a>
                </div>
            </div>
        </section>
        
        <!-- Product Categories -->
        <section style="padding: 60px 0; background: white;">
            <div class="container">
                <h2 class="section-title">Beliebte Kategorien</h2>
                <div class="categories-grid">
                    <a href="/produkte?category=Windows" style="text-decoration: none;">
                        <div class="category-card">
                            <div class="category-icon"><i class="fab fa-windows"></i></div>
                            <h3>Windows</h3>
                            <p>Betriebssysteme für jeden Bedarf</p>
                        </div>
                    </a>
                    
                    <a href="/produkte?category=Office" style="text-decoration: none;">
                        <div class="category-card">
                            <div class="category-icon"><i class="fas fa-file-alt"></i></div>
                            <h3>Microsoft Office</h3>
                            <p>Produktivität auf höchstem Niveau</p>
                        </div>
                    </a>
                    
                    <a href="/produkte?category=Server" style="text-decoration: none;">
                        <div class="category-card">
                            <div class="category-icon"><i class="fas fa-server"></i></div>
                            <h3>Server-Lösungen</h3>
                            <p>Professionelle Serverlösungen</p>
                        </div>
                    </a>
                    
                    <a href="/produkte?category=Antivirus" style="text-decoration: none;">
                        <div class="category-card">
                            <div class="category-icon"><i class="fas fa-shield-virus"></i></div>
                            <h3>Antivirus</h3>
                            <p>Maximaler Schutz für Ihre Systeme</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Top Products Slider -->
        <section style="padding: 60px 0; background: var(--light-gray);">
            <div class="container">
                <h2 class="section-title">🔥 Top-Angebote</h2>
                <div class="swiper products-slider">
                    <div class="swiper-wrapper" id="top-products">
                        <!-- Products will be loaded dynamically -->
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
        
        <!-- Trust Bar -->
        <section class="trust-bar">
            <div class="container">
                <h3>Bekannt aus</h3>
                <div class="trust-logos">
                    <div class="trust-logo">CHIP</div>
                    <div class="trust-logo">FOCUS</div>
                    <div class="trust-logo">it-news</div>
                    <div class="trust-logo">Computer Bild</div>
                    <div class="trust-logo">PCMag</div>
                </div>
            </div>
        </section>
        
        <!-- B2B Section -->
        <section class="b2b-section">
            <div class="container">
                <div class="b2b-content">
                    <div class="b2b-icon">
                        <img src="https://www.genspark.ai/api/files/s/oVSK5g3T" alt="Lion">
                    </div>
                    <h2>Attraktive Angebote für Firmen & Gewerbetreibende</h2>
                    <p>Erhalten Sie bis zu 50% Rabatt auf Ihr individuelles Angebot. Profitieren Sie von unseren Mengenrabatten und professionellem Support.</p>
                    <a href="/kontakt" class="cta-button">Jetzt Angebot anfragen</a>
                </div>
            </div>
        </section>
        
        <!-- Why Choose Us -->
        <section style="padding: 80px 0; background: white;">
            <div class="container">
                <h2 class="section-title">Warum SoftwareKing24?</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-top: 40px;">
                    <div style="text-align: center;">
                        <div style="font-size: 64px; color: var(--gold); margin-bottom: 20px;">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 10px;">100% Original</h3>
                        <p style="color: #666;">Nur echte und legale Software-Lizenzen</p>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="font-size: 64px; color: var(--gold); margin-bottom: 20px;">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 10px;">Sofortiger Download</h3>
                        <p style="color: #666;">Lizenzschlüssel per E-Mail in Minuten</p>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="font-size: 64px; color: var(--gold); margin-bottom: 20px;">
                            <i class="fas fa-headset"></i>
                        </div>
                        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 10px;">Lifetime Support</h3>
                        <p style="color: #666;">Kostenloser Support für alle Kunden</p>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="font-size: 64px; color: var(--gold); margin-bottom: 20px;">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 10px;">Sichere Zahlung</h3>
                        <p style="color: #666;">SSL-verschlüsselte Bezahlung</p>
                    </div>
                </div>
            </div>
        </section>
        
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
                        <div class="footer-badges">
                            <div class="footer-badge">Trusted Shops</div>
                            <div class="footer-badge">EHI Geprüft</div>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Mein Konto</h4>
                        <ul>
                            <li><a href="/login">Anmelden</a></li>
                            <li><a href="/registrieren">Registrieren</a></li>
                            <li><a href="/user/dashboard">Mein Dashboard</a></li>
                            <li><a href="/user/orders">Meine Bestellungen</a></li>
                            <li><a href="/warenkorb">Warenkorb</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Produkte</h4>
                        <ul>
                            <li><a href="/produkte?category=Windows">Windows</a></li>
                            <li><a href="/produkte?category=Office">Microsoft Office</a></li>
                            <li><a href="/produkte?category=Server">Server-Lösungen</a></li>
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
                        <p style="margin-top: 20px;">
                            <i class="fas fa-phone"></i> +49 (0) 123 456 789<br>
                            <i class="fas fa-envelope"></i> info@softwareking24.de
                        </p>
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
            // Update cart count
            function updateCartCount() {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                document.getElementById('cart-count').textContent = cart.length;
            }
            updateCartCount();
            
            // Load top products
            async function loadTopProducts() {
                try {
                    const response = await axios.get('/api/products?limit=8');
                    const products = response.data.products || [];
                    
                    const productsHTML = products.map(product => \`
                        <div class="swiper-slide">
                            <div class="product-card">
                                <img src="\${product.image_url || '/static/placeholder.png'}" alt="\${product.name}" class="product-image">
                                <div class="product-name">\${product.name}</div>
                                <div class="product-price">€\${product.price.toFixed(2)}</div>
                                <button class="add-to-cart-btn" onclick="addToCart(\${product.id})">
                                    In den Warenkorb
                                </button>
                            </div>
                        </div>
                    \`).join('');
                    
                    document.getElementById('top-products').innerHTML = productsHTML;
                    
                    // Initialize Swiper
                    new Swiper('.products-slider', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        breakpoints: {
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        },
                    });
                } catch (error) {
                    console.error('Error loading products:', error);
                }
            }
            
            loadTopProducts();
            
            // Add to cart function
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
        </script>
    </body>
    </html>
  `;
};
