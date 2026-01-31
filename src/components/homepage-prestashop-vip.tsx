export const HomepagePrestaShopVIP = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Software Lizenzen kaufen | Windows, Office, Server | SOFTWAREKING24</title>
        <meta name="description" content="✓ Offizielle Microsoft Software Lizenzen ✓ Windows 11, Office 2024, Server 2025 ✓ Sofortiger Download ✓ Lifetime Support ✓ 100% Legal ✓ Günstige Preise"/>
        <meta name="keywords" content="software lizenzen, windows 11 kaufen, office 2024, microsoft lizenzen, server lizenzen, esd lizenzen, software günstig, original software, sofort download"/>
        <meta name="author" content="SOFTWAREKING24"/>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <link rel="canonical" href="https://www.softwareking24.de/"/>
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.softwareking24.de/"/>
        <meta property="og:title" content="Software Lizenzen kaufen | SOFTWAREKING24"/>
        <meta property="og:description" content="Offizielle Microsoft Software Lizenzen. Windows, Office, Server. Sofortiger Download. Lifetime Support."/>
        <meta property="og:image" content="https://www.genspark.ai/api/files/s/gOkMMDMo"/>
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.softwareking24.de/"/>
        <meta property="twitter:title" content="Software Lizenzen kaufen | SOFTWAREKING24"/>
        <meta property="twitter:description" content="Offizielle Microsoft Software Lizenzen. Windows, Office, Server."/>
        <meta property="twitter:image" content="https://www.genspark.ai/api/files/s/gOkMMDMo"/>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <link href="/static/search-autocomplete.css" rel="stylesheet" />
        <link href="/static/auth_colors.css" rel="stylesheet" />
        <script src="/static/search-autocomplete.js" defer></script>
        
        <!-- Swiper for Sliders -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800&display=swap');
            
            :root {
                --primary: #2c3e50;
                --secondary: #d4af37;
                --accent: #3498db;
                --success: #27ae60;
                --danger: #e74c3c;
                --white: #ffffff;
                --light-gray: #f8f9fa;
                --border: #e1e8ed;
                --text: #333333;
                --text-light: #6c757d;
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Roboto', sans-serif;
                background: var(--white);
                color: var(--text);
                line-height: 1.6;
            }
            
            h1, h2, h3, h4, h5, h6 {
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                color: var(--primary);
            }
            
            /* Top Bar */
            .top-bar {
                background: var(--primary);
                color: white;
                font-size: 0.875rem;
                padding: 0.5rem 0;
            }
            
            /* Header */
            .main-header {
                background: var(--white);
                border-bottom: 1px solid var(--border);
                box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            }
            
            /* Search */
            .search-box {
                border: 2px solid var(--border);
                border-radius: 50px;
                overflow: hidden;
                transition: all 0.3s;
            }
            
            .search-box:focus-within {
                border-color: var(--secondary);
                box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
            }
            
            /* Navigation */
            .main-nav {
                background: var(--light-gray);
                border-bottom: 1px solid var(--border);
            }
            
            .nav-link {
                padding: 1rem 1.5rem;
                color: var(--text);
                font-weight: 500;
                transition: all 0.3s;
                border-bottom: 3px solid transparent;
            }
            
            .nav-link:hover {
                color: var(--secondary);
                border-bottom-color: var(--secondary);
                background: white;
            }
            
            /* Hero Slider */
            .hero-slider {
                position: relative;
                height: 500px;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                overflow: hidden;
            }
            
            .hero-content {
                position: relative;
                z-index: 2;
            }
            
            /* Trust Badges */
            .trust-badge {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1.5rem;
                background: white;
                border: 1px solid var(--border);
                border-radius: 50px;
                font-size: 0.875rem;
                font-weight: 500;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            }
            
            .trust-badge i {
                color: var(--secondary);
                font-size: 1.125rem;
            }
            
            /* Buttons */
            .btn-primary {
                background: linear-gradient(135deg, var(--secondary) 0%, #b8941f 100%);
                color: white;
                padding: 1rem 2.5rem;
                border: none;
                border-radius: 50px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
            }
            
            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
            }
            
            .btn-secondary {
                background: white;
                color: var(--primary);
                padding: 1rem 2.5rem;
                border: 2px solid var(--primary);
                border-radius: 50px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .btn-secondary:hover {
                background: var(--primary);
                color: white;
            }
            
            /* Category Cards */
            .category-card {
                background: white;
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s;
                cursor: pointer;
            }
            
            .category-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                border-color: var(--secondary);
            }
            
            .category-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto 1.5rem;
                background: linear-gradient(135deg, var(--light-gray) 0%, #e9ecef 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                color: var(--secondary);
                transition: all 0.3s;
            }
            
            .category-card:hover .category-icon {
                background: linear-gradient(135deg, var(--secondary) 0%, #b8941f 100%);
                color: white;
                transform: scale(1.1);
            }
            
            /* Product Cards */
            .product-card {
                background: white;
                border: 1px solid var(--border);
                border-radius: 12px;
                overflow: hidden;
                transition: all 0.3s;
                height: 100%;
            }
            
            .product-card:hover {
                box-shadow: 0 10px 30px rgba(0,0,0,0.12);
                transform: translateY(-5px);
            }
            
            .product-image {
                position: relative;
                padding: 2rem;
                background: var(--light-gray);
                height: 250px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .product-image img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            
            .product-badge {
                position: absolute;
                top: 1rem;
                left: 1rem;
                background: var(--danger);
                color: white;
                padding: 0.375rem 0.75rem;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 600;
            }
            
            .product-badge.new {
                background: var(--success);
            }
            
            .product-info {
                padding: 1.5rem;
            }
            
            .product-title {
                font-size: 1rem;
                font-weight: 600;
                color: var(--primary);
                margin-bottom: 0.5rem;
                min-height: 48px;
            }
            
            .product-price {
                font-size: 1.75rem;
                font-weight: 700;
                color: var(--secondary);
                margin: 1rem 0;
            }
            
            .product-price .old-price {
                font-size: 1.125rem;
                color: var(--text-light);
                text-decoration: line-through;
                margin-left: 0.5rem;
            }
            
            .product-rating {
                color: #ffc107;
                font-size: 0.875rem;
                margin-bottom: 1rem;
            }
            
            .btn-cart {
                width: 100%;
                background: var(--primary);
                color: white;
                padding: 0.75rem;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .btn-cart:hover {
                background: var(--secondary);
            }
            
            /* Features */
            .feature-box {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                padding: 2rem;
                background: white;
                border: 1px solid var(--border);
                border-radius: 12px;
                transition: all 0.3s;
            }
            
            .feature-box:hover {
                box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                transform: translateY(-3px);
            }
            
            .feature-icon {
                width: 70px;
                height: 70px;
                background: linear-gradient(135deg, var(--secondary) 0%, #b8941f 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                color: white;
                flex-shrink: 0;
            }
            
            /* Newsletter */
            .newsletter {
                background: linear-gradient(135deg, var(--primary) 0%, #34495e 100%);
                color: white;
                padding: 4rem 0;
            }
            
            .newsletter input {
                padding: 1rem 1.5rem;
                border: none;
                border-radius: 50px 0 0 50px;
                font-size: 1rem;
                flex: 1;
            }
            
            .newsletter button {
                padding: 1rem 2.5rem;
                background: var(--secondary);
                color: white;
                border: none;
                border-radius: 0 50px 50px 0;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .newsletter button:hover {
                background: #b8941f;
            }
            
            /* Footer */
            .footer {
                background: var(--primary);
                color: white;
                padding: 3rem 0 1rem;
            }
            
            .footer a {
                color: rgba(255,255,255,0.8);
                transition: color 0.3s;
            }
            
            .footer a:hover {
                color: var(--secondary);
            }
            
            /* Animations */
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .fade-in-up {
                animation: fadeInUp 0.8s ease-out;
            }
            
            /* Section Titles */
            .section-title {
                text-align: center;
                margin-bottom: 3rem;
            }
            
            .section-title h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                position: relative;
                display: inline-block;
            }
            
            .section-title h2::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 4px;
                background: linear-gradient(90deg, var(--secondary), #b8941f);
                border-radius: 2px;
            }
            
            .section-title p {
                color: var(--text-light);
                font-size: 1.125rem;
            }
            
            /* Container */
            .container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem;
            }
            
            /* Grid */
            .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
            .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
            .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
            
            @media (max-width: 1200px) {
                .grid-4 { grid-template-columns: repeat(3, 1fr); }
            }
            
            @media (max-width: 768px) {
                .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
            }
            
            /* Spacing */
            .section { padding: 5rem 0; }
            .section-sm { padding: 3rem 0; }
            
            /* Hero Slider */
            .hero-slider-wrapper {
                position: relative;
                height: 550px;
                overflow: hidden;
            }
            
            .swiper-slide-content {
                height: 100%;
                display: flex;
                align-items: center;
            }
            
            .swiper-button-next, .swiper-button-prev {
                color: var(--secondary) !important;
                background: white;
                width: 50px !important;
                height: 50px !important;
                border-radius: 50%;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            
            .swiper-button-next:after, .swiper-button-prev:after {
                font-size: 20px !important;
            }
            
            .swiper-pagination-bullet {
                background: var(--secondary) !important;
                width: 12px !important;
                height: 12px !important;
            }
            
            .swiper-pagination-bullet-active {
                width: 30px !important;
                border-radius: 6px !important;
            }
            
            /* Product Slider */
            .product-slider .swiper-slide {
                height: auto;
            }
            
            /* Testimonial Card */
            .testimonial-card {
                background: white;
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 2rem;
                text-align: center;
            }
            
            .testimonial-avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin: 0 auto 1rem;
                background: linear-gradient(135deg, var(--secondary), #b8941f);
                display: flex;
                align-items: center;
                justify-center;
                font-size: 2rem;
                color: white;
            }
            
            /* SEO Content Box */
            .seo-content-box {
                background: white;
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 3rem;
            }
            
            .seo-content-box h2 {
                font-size: 2rem;
                margin-bottom: 1.5rem;
            }
            
            .seo-content-box p {
                font-size: 1.125rem;
                line-height: 1.8;
                color: var(--text);
                margin-bottom: 1rem;
            }
            
            .seo-content-box ul {
                list-style: none;
                padding: 0;
            }
            
            .seo-content-box ul li {
                padding: 0.75rem 0;
                border-bottom: 1px solid var(--border);
                position: relative;
                padding-left: 2rem;
            }
            
            .seo-content-box ul li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: var(--success);
                font-weight: bold;
                font-size: 1.25rem;
            }
            
            /* Steps */
            .step-box {
                text-align: center;
                position: relative;
            }
            
            .step-number {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, var(--secondary), #b8941f);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                margin: 0 auto 1rem;
            }
            
            /* FAQ Accordion */
            .faq-item {
                background: white;
                border: 1px solid var(--border);
                border-radius: 8px;
                margin-bottom: 1rem;
                overflow: hidden;
            }
            
            .faq-question {
                padding: 1.5rem;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 600;
                transition: all 0.3s;
            }
            
            .faq-question:hover {
                background: var(--light-gray);
            }
            
            .faq-answer {
                padding: 0 1.5rem 1.5rem;
                display: none;
                color: var(--text-light);
                line-height: 1.8;
            }
            
            .faq-answer.active {
                display: block;
            }
        </style>
        
        <!-- Structured Data for SEO -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SOFTWAREKING24",
          "url": "https://www.softwareking24.de",
          "logo": "https://www.softwareking24.de/logo.png",
          "description": "Offizielle Microsoft Software Lizenzen - Windows, Office, Server. Sofortiger Download, Lifetime Support.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "DE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+49-123-456-789",
            "contactType": "customer service",
            "email": "support@softwareking24.de",
            "availableLanguage": ["de", "en"]
          },
          "sameAs": [
            "https://www.facebook.com/softwareking24",
            "https://twitter.com/softwareking24",
            "https://www.linkedin.com/company/softwareking24"
          ]
        }
        </script>
        
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Sind die Software-Lizenzen legal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, alle unsere Software-Lizenzen sind 100% legal und original. Wir verkaufen nur offizielle Microsoft-Lizenzen von autorisierten Partnern."
              }
            },
            {
              "@type": "Question",
              "name": "Wie schnell erhalte ich meine Lizenz?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sie erhalten Ihren Lizenzschlüssel sofort nach Zahlungseingang per E-Mail. Die Lieferung erfolgt in der Regel innerhalb von 5-10 Minuten."
              }
            },
            {
              "@type": "Question",
              "name": "Gibt es eine Garantie?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, wir bieten eine 30-Tage-Geld-zurück-Garantie. Wenn Sie nicht zufrieden sind, erstatten wir Ihnen den vollen Kaufpreis."
              }
            }
          ]
        }
        </script>
    </head>
    <body>
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-6">
                        <span><i class="fas fa-phone mr-2"></i>+49 123 456 789</span>
                        <span><i class="fas fa-envelope mr-2"></i>support@softwareking24.de</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <a href="#" class="hover:text-yellow-400 transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="hover:text-yellow-400 transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="hover:text-yellow-400 transition-colors">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <span class="ml-4">|</span>
                        <img src="https://flagcdn.com/w20/de.png" alt="Deutsch" class="ml-2" />
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Header -->
        <header class="main-header">
            <div class="container py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                            <i class="fas fa-crown text-white text-xl"></i>
                        </div>
                        <div>
                            <div class="text-2xl font-bold" style="color: var(--primary);">SOFTWAREKING24</div>
                            <div class="text-xs" style="color: var(--secondary);">Premium Software Solutions</div>
                        </div>
                    </a>
                    
                    <!-- Search -->
                    <div class="flex-1 max-w-2xl mx-8">
                        <div class="search-box flex">
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Search for Windows, Office, Server licenses..."
                                class="flex-1 px-6 py-3 outline-none"
                            />
                            <button class="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all">
                                <i class="fas fa-search"></i>
                            </button>
                            <div id="search-dropdown" class="autocomplete-dropdown"></div>
                        </div>
                    </div>
                    
                    <!-- Actions -->
                    <div class="flex items-center gap-4">
                        <!-- Account -->
                        <button onclick="authManager.showLoginModal()" data-auth-button="login" class="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                            <i class="fas fa-user text-2xl"></i>
                            <div class="text-left">
                                <div class="text-xs text-gray-500">Account</div>
                                <div class="font-semibold">Sign In</div>
                            </div>
                        </button>
                        
                        <!-- User Menu (hidden by default) -->
                        <div data-user-menu class="relative" style="display: none;">
                            <button onclick="toggleUserMenu()" class="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                                <i class="fas fa-user-circle text-2xl"></i>
                                <div class="text-left">
                                    <div class="text-xs text-gray-500">Welcome</div>
                                    <div class="font-semibold" data-user-name>User</div>
                                </div>
                                <i class="fas fa-chevron-down text-sm"></i>
                            </button>
                            
                            <div id="user-dropdown" class="hidden absolute right-0 mt-4 w-56 bg-white rounded-xl shadow-2xl py-2 border" style="border-color: var(--border); z-index: 1000;">
                                <a href="/dashboard" class="block px-6 py-3 hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-tachometer-alt mr-3"></i> Dashboard
                                </a>
                                <a href="/konto/bestellungen" class="block px-6 py-3 hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-shopping-bag mr-3"></i> Orders
                                </a>
                                <a href="/konto/lizenzen" class="block px-6 py-3 hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-key mr-3"></i> Licenses
                                </a>
                                <hr class="my-2">
                                <button onclick="authManager.logout()" class="block w-full text-left px-6 py-3 text-red-600 hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-sign-out-alt mr-3"></i> Sign Out
                                </button>
                            </div>
                        </div>
                        
                        <!-- Cart -->
                        <a href="/warenkorb" class="relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:transform hover:scale-105" style="background: var(--secondary); color: white;">
                            <i class="fas fa-shopping-cart text-xl"></i>
                            <span>Cart</span>
                            <span class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold" id="cart-badge" data-cart-count="0">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        
        <!-- Main Navigation -->
        <nav class="main-nav">
            <div class="container">
                <ul class="flex items-center justify-center">
                    <li><a href="/" class="nav-link"><i class="fas fa-home mr-2"></i>Home</a></li>
                    <li><a href="/produkte?category=Windows" class="nav-link"><i class="fab fa-windows mr-2"></i>Windows</a></li>
                    <li><a href="/produkte?category=Microsoft Office" class="nav-link"><i class="fas fa-file-word mr-2"></i>Microsoft Office</a></li>
                    <li><a href="/produkte?category=Server" class="nav-link"><i class="fas fa-server mr-2"></i>Server & CAL</a></li>
                    <li><a href="/produkte?category=Antivirus" class="nav-link"><i class="fas fa-shield-virus mr-2"></i>Antivirus</a></li>
                    <li><a href="/kontakt" class="nav-link"><i class="fas fa-envelope mr-2"></i>Contact</a></li>
                </ul>
            </div>
        </nav>
        
        <!-- Hero Slider with Swiper -->
        <section class="hero-slider-wrapper">
            <div class="swiper heroSwiper">
                <div class="swiper-wrapper">
                    <!-- Slide 1 -->
                    <div class="swiper-slide" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
                        <div class="container swiper-slide-content">
                            <div class="max-w-2xl">
                                <div class="flex gap-3 mb-6 flex-wrap">
                                    <span class="trust-badge">
                                        <i class="fas fa-certificate"></i>
                                        <span>Offizieller Partner</span>
                                    </span>
                                    <span class="trust-badge">
                                        <i class="fas fa-bolt"></i>
                                        <span>Sofort-Download</span>
                                    </span>
                                    <span class="trust-badge">
                                        <i class="fas fa-headset"></i>
                                        <span>24/7 Support</span>
                                    </span>
                                </div>
                                
                                <h1 class="text-5xl font-bold mb-4" style="color: var(--primary);">
                                    Windows 11 & Office 2024
                                </h1>
                                <h2 class="text-3xl mb-6" style="color: var(--secondary);">
                                    Original Software-Lizenzen
                                </h2>
                                <p class="text-xl mb-8 text-gray-700">
                                    Kaufen Sie offizielle Microsoft-Lizenzen. Sofortiger Download nach Zahlung. 
                                    Lifetime-Support inklusive. 100% legal und sicher.
                                </p>
                                
                                <div class="flex gap-4 flex-wrap">
                                    <a href="/produkte" class="btn-primary">
                                        Jetzt kaufen <i class="fas fa-arrow-right ml-2"></i>
                                    </a>
                                    <a href="/kontakt" class="btn-secondary">
                                        Beratung <i class="fas fa-phone ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 2 -->
                    <div class="swiper-slide" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
                        <div class="container swiper-slide-content">
                            <div class="max-w-2xl">
                                <div class="inline-block px-4 py-2 bg-red-500 text-white rounded-full font-bold mb-4">
                                    -30% RABATT
                                </div>
                                
                                <h1 class="text-5xl font-bold mb-4" style="color: var(--primary);">
                                    Windows Server 2025
                                </h1>
                                <h2 class="text-3xl mb-6" style="color: var(--secondary);">
                                    Für Ihr Unternehmen
                                </h2>
                                <p class="text-xl mb-8 text-gray-700">
                                    Professionelle Server-Lizenzen für Enterprise. CAL-Lizenzen, SQL Server und mehr. 
                                    Jetzt günstig kaufen und sofort nutzen.
                                </p>
                                
                                <div class="flex gap-4 flex-wrap">
                                    <a href="/produkte?category=Server" class="btn-primary">
                                        Server-Lizenzen <i class="fas fa-server ml-2"></i>
                                    </a>
                                    <a href="/produkte" class="btn-secondary">
                                        Alle Produkte <i class="fas fa-th ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 3 -->
                    <div class="swiper-slide" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
                        <div class="container swiper-slide-content">
                            <div class="max-w-2xl">
                                <div class="inline-block px-4 py-2 bg-green-500 text-white rounded-full font-bold mb-4">
                                    NEU
                                </div>
                                
                                <h1 class="text-5xl font-bold mb-4" style="color: var(--primary);">
                                    Microsoft Office 2024
                                </h1>
                                <h2 class="text-3xl mb-6" style="color: var(--secondary);">
                                    Jetzt verfügbar!
                                </h2>
                                <p class="text-xl mb-8 text-gray-700">
                                    Die neueste Office-Version mit Word, Excel, PowerPoint, Outlook. 
                                    Professional Plus oder Home & Business. Lebenslange Lizenz.
                                </p>
                                
                                <div class="flex gap-4 flex-wrap">
                                    <a href="/produkte?search=Office 2024" class="btn-primary">
                                        Office 2024 kaufen <i class="fas fa-file-word ml-2"></i>
                                    </a>
                                    <a href="/produkte?category=Microsoft Office" class="btn-secondary">
                                        Alle Office-Versionen <i class="fas fa-list ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Pagination -->
                <div class="swiper-pagination"></div>
                
                <!-- Navigation -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        
        <!-- Categories Section -->
        <section class="section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-title">
                    <h2>Shop by Category</h2>
                    <p>Browse our premium software collection</p>
                </div>
                
                <div class="grid-4">
                    <a href="/produkte?category=Windows" class="category-card">
                        <div class="category-icon">
                            <i class="fab fa-windows"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Windows</h3>
                        <p class="text-gray-600">Operating Systems</p>
                    </a>
                    
                    <a href="/produkte?category=Microsoft Office" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-file-word"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Microsoft Office</h3>
                        <p class="text-gray-600">Productivity Suites</p>
                    </a>
                    
                    <a href="/produkte?category=Server" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-server"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Server Solutions</h3>
                        <p class="text-gray-600">Enterprise Infrastructure</p>
                    </a>
                    
                    <a href="/produkte?category=Antivirus" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-shield-virus"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Security</h3>
                        <p class="text-gray-600">Antivirus Software</p>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Featured Products -->
        <section class="section">
            <div class="container">
                <div class="section-title">
                    <h2>Featured Products</h2>
                    <p>Top-selling licenses with exclusive offers</p>
                </div>
                
                <div class="grid-4">
                    <!-- Product 1 -->
                    <div class="product-card">
                        <div class="product-image">
                            <span class="product-badge">-25%</span>
                            <img src="https://www.genspark.ai/api/files/s/BbZ02vJb" alt="Windows 11 Pro" />
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">Windows 11 Professional</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="ml-2 text-gray-600">(128)</span>
                            </div>
                            <div class="product-price">
                                €29.90
                                <span class="old-price">€39.90</span>
                            </div>
                            <button class="btn-cart">
                                <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                    
                    <!-- Product 2 -->
                    <div class="product-card">
                        <div class="product-image">
                            <span class="product-badge new">New</span>
                            <img src="https://www.genspark.ai/api/files/s/ROfPpsGz" alt="Office 2024" />
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">Microsoft Office 2024 Professional Plus</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="ml-2 text-gray-600">(95)</span>
                            </div>
                            <div class="product-price">
                                €49.90
                            </div>
                            <button class="btn-cart">
                                <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                    
                    <!-- Product 3 -->
                    <div class="product-card">
                        <div class="product-image">
                            <span class="product-badge">-30%</span>
                            <img src="https://www.genspark.ai/api/files/s/rpFflsQH" alt="Windows Server" />
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">Windows Server 2025 Standard</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="ml-2 text-gray-600">(67)</span>
                            </div>
                            <div class="product-price">
                                €199.90
                                <span class="old-price">€299.90</span>
                            </div>
                            <button class="btn-cart">
                                <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                    
                    <!-- Product 4 -->
                    <div class="product-card">
                        <div class="product-image">
                            <img src="https://www.genspark.ai/api/files/s/BbZ02vJb" alt="Windows 10" />
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">Windows 10 Professional</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="ml-2 text-gray-600">(203)</span>
                            </div>
                            <div class="product-price">
                                €24.90
                            </div>
                            <button class="btn-cart">
                                <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Features -->
        <section class="section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-title">
                    <h2>Why Choose Us</h2>
                    <p>Premium service, guaranteed satisfaction</p>
                </div>
                
                <div class="grid-3">
                    <div class="feature-box">
                        <div class="feature-icon">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">100% Authentic</h3>
                            <p class="text-gray-600">Only official licenses from verified partners. Every product is genuine and fully compliant.</p>
                        </div>
                    </div>
                    
                    <div class="feature-box">
                        <div class="feature-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Instant Delivery</h3>
                            <p class="text-gray-600">Receive your license keys immediately via email. Start using your software in minutes.</p>
                        </div>
                    </div>
                    
                    <div class="feature-box">
                        <div class="feature-icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Premium Support</h3>
                            <p class="text-gray-600">Expert technical assistance available 24/7. We're here to help whenever you need us.</p>
                        </div>
                    </div>
                    
                    <div class="feature-box">
                        <div class="feature-icon">
                            <i class="fas fa-shield-check"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Secure Payment</h3>
                            <p class="text-gray-600">Bank-level encryption for all transactions. Your data is always protected.</p>
                        </div>
                    </div>
                    
                    <div class="feature-box">
                        <div class="feature-icon">
                            <i class="fas fa-undo"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Money-Back Guarantee</h3>
                            <p class="text-gray-600">30-day refund policy. Not satisfied? Get your money back, no questions asked.</p>
                        </div>
                    </div>
                    
                    <div class="feature-box">
                        <div class="feature-icon">
                            <i class="fas fa-infinity"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Lifetime Validity</h3>
                            <p class="text-gray-600">All licenses are perpetual. Use your software forever with no recurring fees.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- SEO Content Section: Why Choose Official Licenses -->
        <section class="section">
            <div class="container">
                <div class="grid-2 items-center gap-8">
                    <div>
                        <img src="https://www.genspark.ai/api/files/s/A99Snota" alt="Professionelles Team" class="rounded-2xl shadow-lg" />
                    </div>
                    <div class="seo-content-box">
                        <h2>Warum offizielle Software-Lizenzen kaufen?</h2>
                        <p>
                            Bei SOFTWAREKING24 kaufen Sie nur <strong>100% legale und originale Microsoft-Lizenzen</strong>. 
                            Als autorisierter Partner garantieren wir Ihnen vollständige Sicherheit und Rechtskonformität für Ihre Software.
                        </p>
                        <p>
                            Unsere Software-Lizenzen sind <strong>ESD-Lizenzen (Electronic Software Distribution)</strong> - 
                            vollwertige Vollversionen ohne zeitliche Begrenzung. Sie erhalten denselben Funktionsumfang wie bei 
                            einer Retail-Version, jedoch zu einem deutlich günstigeren Preis.
                        </p>
                        <ul>
                            <li>Offizielle Microsoft-Produktschlüssel</li>
                            <li>Lebenslange Gültigkeit der Lizenz</li>
                            <li>Keine versteckten Kosten oder Abonnements</li>
                            <li>Vollständige Updates und Sicherheitspatches</li>
                            <li>Deutscher Support per E-Mail und Telefon</li>
                            <li>Rechnung mit ausgewiesener MwSt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Bestsellers Slider -->
        <section class="section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-title">
                    <h2>Bestseller Software-Lizenzen</h2>
                    <p>Die beliebtesten Produkte unserer Kunden</p>
                </div>
                
                <div class="swiper productSwiper">
                    <div class="swiper-wrapper">
                        <!-- Bestseller 1 -->
                        <div class="swiper-slide">
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="product-badge">Bestseller</span>
                                    <img src="https://www.genspark.ai/api/files/s/BbZ02vJb" alt="Windows 11 Pro" />
                                </div>
                                <div class="product-info">
                                    <h3 class="product-title">Windows 11 Professional</h3>
                                    <div class="product-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="ml-2 text-gray-600">(237)</span>
                                    </div>
                                    <div class="product-price">
                                        €29.90
                                        <span class="old-price">€39.90</span>
                                    </div>
                                    <button class="btn-cart" onclick="window.location.href='/produkt/windows-11-pro'">
                                        <i class="fas fa-shopping-cart mr-2"></i>Details ansehen
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Bestseller 2 -->
                        <div class="swiper-slide">
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="product-badge new">Neu</span>
                                    <img src="https://www.genspark.ai/api/files/s/ROfPpsGz" alt="Office 2024" />
                                </div>
                                <div class="product-info">
                                    <h3 class="product-title">Microsoft Office 2024 Professional Plus</h3>
                                    <div class="product-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <span class="ml-2 text-gray-600">(189)</span>
                                    </div>
                                    <div class="product-price">
                                        €49.90
                                    </div>
                                    <button class="btn-cart" onclick="window.location.href='/produkt/office-2024-pro'">
                                        <i class="fas fa-shopping-cart mr-2"></i>Details ansehen
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Bestseller 3 -->
                        <div class="swiper-slide">
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="product-badge">-30%</span>
                                    <img src="https://www.genspark.ai/api/files/s/rpFflsQH" alt="Windows Server" />
                                </div>
                                <div class="product-info">
                                    <h3 class="product-title">Windows Server 2025 Standard</h3>
                                    <div class="product-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="ml-2 text-gray-600">(145)</span>
                                    </div>
                                    <div class="product-price">
                                        €199.90
                                        <span class="old-price">€299.90</span>
                                    </div>
                                    <button class="btn-cart" onclick="window.location.href='/produkt/server-2025'">
                                        <i class="fas fa-shopping-cart mr-2"></i>Details ansehen
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Bestseller 4 -->
                        <div class="swiper-slide">
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="https://www.genspark.ai/api/files/s/JBdMoqE1" alt="Antivirus" />
                                </div>
                                <div class="product-info">
                                    <h3 class="product-title">Kaspersky Total Security</h3>
                                    <div class="product-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <span class="ml-2 text-gray-600">(203)</span>
                                    </div>
                                    <div class="product-price">
                                        €24.90
                                    </div>
                                    <button class="btn-cart" onclick="window.location.href='/produkt/kaspersky'">
                                        <i class="fas fa-shopping-cart mr-2"></i>Details ansehen
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
        
        <!-- How We Deliver Section -->
        <section class="section">
            <div class="container">
                <div class="section-title">
                    <h2>So erhalten Sie Ihre Software-Lizenz</h2>
                    <p>Einfach, schnell und sicher in nur 3 Schritten</p>
                </div>
                
                <div class="grid-3">
                    <div class="step-box">
                        <div class="step-number">1</div>
                        <h3 class="text-xl font-bold mb-3">Produkt auswählen</h3>
                        <p class="text-gray-600">
                            Wählen Sie die gewünschte Software-Lizenz aus unserem Sortiment. 
                            Windows, Office, Server oder Antivirus - wir haben alles.
                        </p>
                    </div>
                    
                    <div class="step-box">
                        <div class="step-number">2</div>
                        <h3 class="text-xl font-bold mb-3">Sicher bezahlen</h3>
                        <p class="text-gray-600">
                            Zahlen Sie bequem per PayPal, Kreditkarte oder Sofortüberweisung. 
                            Alle Transaktionen sind SSL-verschlüsselt und sicher.
                        </p>
                    </div>
                    
                    <div class="step-box">
                        <div class="step-number">3</div>
                        <h3 class="text-xl font-bold mb-3">Sofort herunterladen</h3>
                        <p class="text-gray-600">
                            Erhalten Sie Ihren Lizenzschlüssel sofort per E-Mail. 
                            Download-Link inklusive. Aktivieren und loslegen!
                        </p>
                    </div>
                </div>
                
                <div class="text-center mt-8">
                    <img src="https://www.genspark.ai/api/files/s/ThRuaBlN" alt="Sofortige Lieferung" class="rounded-2xl shadow-lg mx-auto" style="max-width: 800px; width: 100%;" />
                </div>
            </div>
        </section>
        
        <!-- Testimonials Slider -->
        <section class="section" style="background: var(--light-gray);">
            <div class="container">
                <div class="section-title">
                    <h2>Das sagen unsere Kunden</h2>
                    <p>Über 15.000 zufriedene Kunden vertrauen uns</p>
                </div>
                
                <div class="swiper testimonialSwiper">
                    <div class="swiper-wrapper">
                        <!-- Testimonial 1 -->
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="testimonial-avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="product-rating mb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p class="text-gray-700 mb-4 italic">
                                    "Super schnelle Lieferung! Lizenzschlüssel kam innerhalb von 5 Minuten per E-Mail. 
                                    Aktivierung hat problemlos funktioniert. Sehr zu empfehlen!"
                                </p>
                                <h4 class="font-bold">Michael Schmidt</h4>
                                <p class="text-sm text-gray-500">Selbstständiger IT-Berater</p>
                            </div>
                        </div>
                        
                        <!-- Testimonial 2 -->
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="testimonial-avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="product-rating mb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p class="text-gray-700 mb-4 italic">
                                    "Habe hier schon mehrfach Office-Lizenzen gekauft. Immer alles top! 
                                    Preise sind unschlagbar günstig und die Lizenzen funktionieren einwandfrei."
                                </p>
                                <h4 class="font-bold">Sarah Müller</h4>
                                <p class="text-sm text-gray-500">Geschäftsführerin KMU</p>
                            </div>
                        </div>
                        
                        <!-- Testimonial 3 -->
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="testimonial-avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="product-rating mb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <p class="text-gray-700 mb-4 italic">
                                    "Professioneller Service und fairer Preis. Der Support hat mir bei der Installation geholfen. 
                                    Werde definitiv wieder hier kaufen!"
                                </p>
                                <h4 class="font-bold">Thomas Weber</h4>
                                <p class="text-sm text-gray-500">Systemadministrator</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>
        
        <!-- FAQ Section -->
        <section class="section">
            <div class="container">
                <div class="section-title">
                    <h2>Häufig gestellte Fragen (FAQ)</h2>
                    <p>Antworten auf die wichtigsten Fragen zu Software-Lizenzen</p>
                </div>
                
                <div class="max-w-3xl mx-auto">
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Sind die Software-Lizenzen legal und original?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            Ja, alle unsere Software-Lizenzen sind 100% legal und original. Wir verkaufen nur offizielle 
                            Microsoft-Lizenzen von autorisierten Partnern. Jede Lizenz ist vollständig aktivierbar und 
                            registriert bei Microsoft.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Wie schnell erhalte ich meine Lizenz nach dem Kauf?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            Sie erhalten Ihren Lizenzschlüssel sofort nach Zahlungseingang per E-Mail. Die Lieferung erfolgt 
                            in der Regel innerhalb von 5-10 Minuten. Bei Zahlungen per Vorkasse kann es bis zu 24 Stunden dauern.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Kann ich die Lizenz auf mehreren Geräten nutzen?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            Das hängt vom Lizenztyp ab. Einzelplatzlizenzen können auf einem Gerät aktiviert werden. 
                            Volumenlizenzen und Office 365 erlauben die Installation auf mehreren Geräten. Details finden Sie 
                            in der Produktbeschreibung.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Gibt es eine Geld-zurück-Garantie?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            Ja, wir bieten eine 30-Tage-Geld-zurück-Garantie. Wenn Sie mit Ihrer Lizenz nicht zufrieden sind, 
                            erstatten wir Ihnen den vollen Kaufpreis. Kontaktieren Sie einfach unseren Support.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Erhalte ich Updates für meine Software?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            Ja, Sie erhalten alle Updates und Sicherheitspatches direkt von Microsoft. Ihre Lizenz bleibt 
                            lebenslang gültig und erhält alle offiziellen Updates.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(this)">
                            <span>Welche Zahlungsmethoden werden akzeptiert?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            Wir akzeptieren PayPal, Kreditkarte (Visa, Mastercard), Sofortüberweisung, Vorkasse und auf Anfrage 
                            auch Kauf auf Rechnung für Geschäftskunden.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Trust & Guarantee Section -->
        <section class="section" style="background: var(--light-gray);">
            <div class="container">
                <div class="grid-2 items-center gap-8">
                    <div class="seo-content-box">
                        <h2>Unsere Garantie für Sie</h2>
                        <p>
                            Als einer der führenden Anbieter für <strong>Software-Lizenzen in Deutschland</strong> legen wir 
                            größten Wert auf Kundenzufriedenheit und Qualität. Unsere Garantieversprechen:
                        </p>
                        <ul>
                            <li><strong>30-Tage-Geld-zurück-Garantie</strong> - Zufrieden oder Geld zurück</li>
                            <li><strong>Kostenloser Ersatz</strong> - Bei defekten Lizenzen sofortiger Austausch</li>
                            <li><strong>Lifetime Support</strong> - Lebenslanger technischer Support per E-Mail</li>
                            <li><strong>Sichere Zahlung</strong> - SSL-Verschlüsselung und geprüfte Zahlungsanbieter</li>
                            <li><strong>Sofortige Lieferung</strong> - Lizenzschlüssel innerhalb von Minuten</li>
                            <li><strong>Rechnung mit MwSt</strong> - Für Privatpersonen und Unternehmen</li>
                        </ul>
                        <div class="mt-6">
                            <a href="/kontakt" class="btn-primary">
                                Jetzt kontaktieren <i class="fas fa-envelope ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.genspark.ai/api/files/s/Pjfz9zrZ" alt="Zufriedene Kunden" class="rounded-2xl shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Newsletter -->
        <section class="newsletter">
            <div class="container">
                <div class="text-center mb-8">
                    <h2 class="text-4xl font-bold text-white mb-4">Stay Updated</h2>
                    <p class="text-xl text-gray-300">Subscribe for exclusive offers and software updates</p>
                </div>
                
                <div class="max-w-2xl mx-auto">
                    <div class="flex">
                        <input type="email" placeholder="Enter your email address..." />
                        <button>Subscribe <i class="fas fa-paper-plane ml-2"></i></button>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="grid-4 mb-8">
                    <!-- Company -->
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                                <i class="fas fa-crown text-white"></i>
                            </div>
                            <div class="text-xl font-bold text-white">SOFTWAREKING24</div>
                        </div>
                        <p class="text-sm leading-relaxed mb-4">
                            Your trusted provider of official software licenses. Serving professionals worldwide.
                        </p>
                        <div class="flex gap-3">
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Products -->
                    <div>
                        <h4 class="text-lg font-bold text-white mb-4">Products</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/produkte?category=Windows">Windows Licenses</a></li>
                            <li><a href="/produkte?category=Microsoft Office">Microsoft Office</a></li>
                            <li><a href="/produkte?category=Server">Server Solutions</a></li>
                            <li><a href="/produkte?category=Antivirus">Antivirus Software</a></li>
                        </ul>
                    </div>
                    
                    <!-- Company -->
                    <div>
                        <h4 class="text-lg font-bold text-white mb-4">Company</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/page/ueber-uns">About Us</a></li>
                            <li><a href="/kontakt">Contact</a></li>
                            <li><a href="/page/faq">FAQ</a></li>
                            <li><a href="/page/agb">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    
                    <!-- Support -->
                    <div>
                        <h4 class="text-lg font-bold text-white mb-4">Support</h4>
                        <ul class="space-y-2 text-sm">
                            <li><i class="fas fa-envelope mr-2" style="color: var(--secondary);"></i>support@softwareking24.de</li>
                            <li><i class="fas fa-phone mr-2" style="color: var(--secondary);"></i>+49 123 456 789</li>
                            <li><i class="fas fa-clock mr-2" style="color: var(--secondary);"></i>24/7 Support</li>
                        </ul>
                    </div>
                </div>
                
                <hr style="border-color: rgba(255,255,255,0.1);" class="my-6" />
                
                <div class="flex justify-between items-center text-sm">
                    <p>&copy; 2025 SOFTWAREKING24. All rights reserved.</p>
                    <div class="flex gap-6">
                        <a href="/page/datenschutz">Privacy Policy</a>
                        <a href="/page/impressum">Imprint</a>
                    </div>
                </div>
            </div>
        </footer>
        
        <!-- Scripts -->
        <script>
            function toggleUserMenu() {
                const dropdown = document.getElementById('user-dropdown');
                dropdown.classList.toggle('hidden');
            }
            
            document.addEventListener('click', (e) => {
                const userMenu = document.querySelector('[data-user-menu]');
                if (userMenu && !userMenu.contains(e.target)) {
                    document.getElementById('user-dropdown').classList.add('hidden');
                }
            });
            
            // FAQ Toggle Function
            function toggleFAQ(element) {
                const answer = element.nextElementSibling;
                const icon = element.querySelector('i');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    if (ans !== answer) {
                        ans.classList.remove('active');
                    }
                });
                
                document.querySelectorAll('.faq-question i').forEach(ic => {
                    if (ic !== icon) {
                        ic.style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current FAQ
                answer.classList.toggle('active');
                
                if (answer.classList.contains('active')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
            
            // Initialize Swiper Sliders after DOM loads
            document.addEventListener('DOMContentLoaded', function() {
                // Hero Slider
                const heroSwiper = new Swiper('.heroSwiper', {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                });
                
                // Product Slider
                const productSwiper = new Swiper('.productSwiper', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    },
                });
                
                // Testimonial Slider
                const testimonialSwiper = new Swiper('.testimonialSwiper', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    },
                });
            });
        </script>
    </body>
    </html>
  `
}
