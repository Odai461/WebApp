import { 
  FAQSection, 
  BekanntAusSection, 
  B2BSection, 
  PartnerLogosSection, 
  ProcessStepsSection, 
  CategoryGridSection, 
  NewsletterSection 
} from './sections'

export const HomepageUltraProfessional = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SOFTWAREKING24 - Premium Software Lizenzen | Windows, Office, Server</title>
        <meta name="description" content="Kaufen Sie Original Software-Lizenzen bei SOFTWAREKING24 ✓ Windows 11 Pro ✓ Microsoft Office 2024 ✓ Server 2025 ✓ Blitzversand ✓ 100% Legal"/>
        <meta name="keywords" content="software lizenzen kaufen, windows 11 pro, office 2024, esd lizenzen, microsoft original, server software, antivirus"/>
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <link href="/static/search-autocomplete.css" rel="stylesheet" />
        <script src="/static/search-autocomplete.js" defer></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
            
            :root {
                --navy: #001f3f;
                --navy-light: #003366;
                --gold: #FFC107;
                --gold-dark: #FFA000;
                --white: #ffffff;
                --light-gray: #f8f9fa;
                --border: #e0e0e0;
                --text: #2c3e50;
                --text-light: #6c757d;
                --success: #28a745;
                --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
                --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
                --shadow-lg: 0 10px 40px rgba(0,0,0,0.12);
                --shadow-xl: 0 20px 60px rgba(0,0,0,0.15);
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
                overflow-x: hidden;
            }
            
            h1, h2, h3, h4, h5, h6 {
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                line-height: 1.2;
            }
            
            .container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 20px;
            }
            
            /* ==================== TOP BAR ==================== */
            .top-bar {
                background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
                color: white;
                padding: 12px 0;
                font-size: 14px;
                position: relative;
                overflow: hidden;
            }
            
            .top-bar::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                animation: shimmer 3s infinite;
            }
            
            @keyframes shimmer {
                to { left: 100%; }
            }
            
            .top-bar-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                z-index: 1;
            }
            
            .top-bar-left {
                display: flex;
                gap: 30px;
                align-items: center;
            }
            
            .top-bar-item {
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s;
            }
            
            .top-bar-item:hover {
                transform: translateY(-2px);
                color: var(--gold);
            }
            
            .lang-switch {
                display: flex;
                gap: 8px;
                background: rgba(255,255,255,0.1);
                padding: 4px;
                border-radius: 20px;
            }
            
            .lang-btn {
                background: transparent;
                border: none;
                color: white;
                padding: 6px 14px;
                border-radius: 16px;
                cursor: pointer;
                transition: all 0.3s;
                font-weight: 600;
                font-size: 13px;
            }
            
            .lang-btn:hover {
                background: rgba(255,255,255,0.2);
            }
            
            .lang-btn.active {
                background: var(--gold);
                color: var(--navy);
            }
            
            /* ==================== MAIN HEADER ==================== */
            .main-header {
                background: white;
                padding: 20px 0;
                position: sticky;
                top: 0;
                z-index: 1000;
                box-shadow: var(--shadow-md);
                transition: all 0.3s;
            }
            
            .main-header.scrolled {
                padding: 15px 0;
                box-shadow: var(--shadow-lg);
            }
            
            .header-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 40px;
            }
            
            .logo-wrapper {
                position: relative;
                flex-shrink: 0;
            }
            
            .logo {
                height: 55px;
                transition: all 0.3s;
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
            }
            
            .logo:hover {
                transform: scale(1.05);
            }
            
            .search-container {
                flex: 1;
                max-width: 700px;
                position: relative;
            }
            
            .search-wrapper {
                position: relative;
                background: var(--light-gray);
                border-radius: 30px;
                padding: 4px;
                box-shadow: var(--shadow-sm);
                transition: all 0.3s;
            }
            
            .search-wrapper:focus-within {
                box-shadow: 0 0 0 4px rgba(0,31,63,0.1);
                background: white;
            }
            
            .search-box {
                width: 100%;
                padding: 14px 150px 14px 24px;
                border: none;
                border-radius: 26px;
                font-size: 15px;
                background: transparent;
                transition: all 0.3s;
            }
            
            .search-box:focus {
                outline: none;
            }
            
            .search-box::placeholder {
                color: var(--text-light);
            }
            
            .search-btn {
                position: absolute;
                right: 6px;
                top: 50%;
                transform: translateY(-50%);
                background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
                border: none;
                padding: 12px 28px;
                border-radius: 24px;
                cursor: pointer;
                color: var(--navy);
                font-weight: 700;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s;
                box-shadow: 0 4px 12px rgba(255,193,7,0.3);
            }
            
            .search-btn:hover {
                transform: translateY(-50%) translateY(-2px);
                box-shadow: 0 6px 20px rgba(255,193,7,0.4);
            }
            
            .header-actions {
                display: flex;
                gap: 20px;
                align-items: center;
            }
            
            .header-link {
                color: var(--text);
                text-decoration: none;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s;
                padding: 8px 16px;
                border-radius: 8px;
            }
            
            .header-link:hover {
                color: var(--navy);
                background: var(--light-gray);
            }
            
            .cart-btn {
                position: relative;
                background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
                color: white;
                padding: 14px 28px;
                border-radius: 30px;
                text-decoration: none;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 12px;
                transition: all 0.3s;
                box-shadow: 0 4px 16px rgba(0,31,63,0.2);
                overflow: hidden;
            }
            
            .cart-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }
            
            .cart-btn:hover::before {
                left: 100%;
            }
            
            .cart-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 24px rgba(0,31,63,0.3);
            }
            
            .cart-count {
                background: var(--gold);
                color: var(--navy);
                border-radius: 50%;
                padding: 4px 10px;
                font-size: 13px;
                font-weight: 800;
                min-width: 24px;
                text-align: center;
                box-shadow: 0 2px 8px rgba(255,193,7,0.4);
            }
            
            /* ==================== NAVIGATION ==================== */
            .navigation {
                background: var(--light-gray);
                border-bottom: 2px solid var(--border);
                position: relative;
            }
            
            .nav-container {
                display: flex;
                justify-content: center;
                position: relative;
            }
            
            .nav-menu {
                display: flex;
                gap: 8px;
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .nav-item {
                position: relative;
            }
            
            .nav-link {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 18px 24px;
                text-decoration: none;
                color: var(--text);
                font-weight: 600;
                font-size: 15px;
                transition: all 0.3s;
                border-radius: 10px;
                position: relative;
            }
            
            .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%) scaleX(0);
                width: 80%;
                height: 3px;
                background: linear-gradient(90deg, var(--gold), var(--gold-dark));
                transition: transform 0.3s;
                border-radius: 2px 2px 0 0;
            }
            
            .nav-link:hover {
                background: white;
                color: var(--navy);
            }
            
            .nav-link:hover::after {
                transform: translateX(-50%) scaleX(1);
            }
            
            .nav-link i.fa-chevron-down {
                font-size: 11px;
                margin-left: 4px;
                transition: transform 0.3s;
            }
            
            .nav-item:hover .nav-link i.fa-chevron-down {
                transform: rotate(180deg);
            }
            
            /* ==================== MEGA MENU ==================== */
            .mega-menu {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: white;
                border-radius: 16px;
                box-shadow: var(--shadow-xl);
                padding: 40px;
                min-width: 900px;
                display: none;
                z-index: 1000;
                opacity: 0;
                margin-top: 20px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid var(--border);
            }
            
            .nav-item:hover .mega-menu {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 40px;
                opacity: 1;
                margin-top: 10px;
            }
            
            .mega-menu-column h4 {
                color: var(--navy);
                font-size: 16px;
                font-weight: 800;
                margin-bottom: 20px;
                padding-bottom: 12px;
                border-bottom: 3px solid var(--gold);
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .mega-menu-column h4 i {
                color: var(--gold);
            }
            
            .mega-menu-column ul {
                list-style: none;
                padding: 0;
            }
            
            .mega-menu-column li {
                margin-bottom: 12px;
            }
            
            .mega-menu-column a {
                color: var(--text);
                text-decoration: none;
                font-size: 14px;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 14px;
                border-radius: 8px;
                font-weight: 500;
            }
            
            .mega-menu-column a i {
                color: var(--gold);
                font-size: 12px;
                transition: all 0.3s;
            }
            
            .mega-menu-column a:hover {
                background: var(--light-gray);
                color: var(--navy);
                padding-left: 20px;
            }
            
            .mega-menu-column a:hover i {
                transform: translateX(3px);
            }
            
            /* ==================== HERO SECTION ==================== */
            .hero-section {
                position: relative;
                overflow: hidden;
                height: 700px;
                background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
            }
            
            .hero-slide {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                opacity: 0;
                transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
                padding: 100px 0;
            }
            
            .hero-slide.active {
                opacity: 1;
                z-index: 1;
            }
            
            .hero-slide::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 30% 50%, rgba(255,193,7,0.1) 0%, transparent 60%);
                animation: pulse 8s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
            }
            
            .hero-content {
                max-width: 700px;
                color: white;
                z-index: 2;
                position: relative;
                animation: slideInLeft 1s ease-out;
            }
            
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .hero-badge {
                display: inline-block;
                background: rgba(255,193,7,0.2);
                color: var(--gold);
                padding: 10px 20px;
                border-radius: 30px;
                font-size: 14px;
                font-weight: 700;
                margin-bottom: 24px;
                border: 2px solid rgba(255,193,7,0.3);
                backdrop-filter: blur(10px);
            }
            
            .hero-content h1 {
                font-size: 58px;
                font-weight: 900;
                margin-bottom: 24px;
                line-height: 1.1;
                text-shadow: 0 4px 20px rgba(0,0,0,0.3);
            }
            
            .hero-highlight {
                background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .hero-content p {
                font-size: 20px;
                margin-bottom: 36px;
                opacity: 0.95;
                line-height: 1.7;
                text-shadow: 0 2px 10px rgba(0,0,0,0.2);
            }
            
            .hero-cta-group {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
            }
            
            .hero-cta {
                background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
                color: var(--navy);
                padding: 18px 40px;
                border-radius: 35px;
                text-decoration: none;
                font-weight: 800;
                font-size: 17px;
                display: inline-flex;
                align-items: center;
                gap: 12px;
                transition: all 0.3s;
                box-shadow: 0 8px 24px rgba(255,193,7,0.4);
                position: relative;
                overflow: hidden;
            }
            
            .hero-cta::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: translate(-50%, -50%);
                transition: width 0.6s, height 0.6s;
            }
            
            .hero-cta:hover::before {
                width: 300px;
                height: 300px;
            }
            
            .hero-cta:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 36px rgba(255,193,7,0.5);
            }
            
            .hero-cta-secondary {
                background: rgba(255,255,255,0.15);
                color: white;
                border: 2px solid rgba(255,255,255,0.3);
                backdrop-filter: blur(10px);
            }
            
            .hero-cta-secondary:hover {
                background: rgba(255,255,255,0.25);
                border-color: rgba(255,255,255,0.5);
            }
            
            .hero-dots {
                position: absolute;
                bottom: 40px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 12px;
                z-index: 10;
            }
            
            .hero-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                cursor: pointer;
                transition: all 0.3s;
                border: 2px solid transparent;
            }
            
            .hero-dot.active {
                background: var(--gold);
                width: 40px;
                border-radius: 6px;
                border-color: rgba(255,255,255,0.5);
            }
            
            /* ==================== TRUST BAR ==================== */
            .trust-bar {
                background: white;
                padding: 40px 0;
                border-bottom: 1px solid var(--border);
                box-shadow: var(--shadow-sm);
            }
            
            .trust-items {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                gap: 40px;
            }
            
            .trust-item {
                display: flex;
                align-items: center;
                gap: 18px;
                transition: all 0.3s;
                padding: 20px;
                border-radius: 12px;
            }
            
            .trust-item:hover {
                transform: translateY(-5px);
                background: var(--light-gray);
            }
            
            .trust-icon {
                width: 70px;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: linear-gradient(135deg, rgba(0,31,63,0.05) 0%, rgba(0,31,63,0.1) 100%);
                flex-shrink: 0;
            }
            
            .trust-item i {
                font-size: 36px;
                background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .trust-item-text h4 {
                font-size: 17px;
                font-weight: 800;
                color: var(--navy);
                margin-bottom: 6px;
            }
            
            .trust-item-text p {
                font-size: 14px;
                color: var(--text-light);
                margin: 0;
            }
            
            /* ==================== PRODUCT SECTION ==================== */
            .product-section {
                padding: 100px 0;
                background: linear-gradient(180deg, white 0%, var(--light-gray) 100%);
            }
            
            .section-header {
                text-align: center;
                margin-bottom: 60px;
                position: relative;
            }
            
            .section-badge {
                display: inline-block;
                background: rgba(255,193,7,0.1);
                color: var(--gold-dark);
                padding: 8px 20px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 700;
                margin-bottom: 16px;
                border: 2px solid rgba(255,193,7,0.2);
            }
            
            .section-header h2 {
                font-size: 44px;
                font-weight: 900;
                color: var(--navy);
                margin-bottom: 16px;
                position: relative;
                display: inline-block;
            }
            
            .section-header h2::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 4px;
                background: linear-gradient(90deg, var(--gold) 0%, var(--gold-dark) 100%);
                border-radius: 2px;
            }
            
            .section-header p {
                font-size: 18px;
                color: var(--text-light);
                max-width: 600px;
                margin: 30px auto 0;
            }
            
            .products-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 30px;
            }
            
            .product-card {
                background: white;
                border: 2px solid var(--border);
                border-radius: 16px;
                padding: 28px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }
            
            .product-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, var(--gold) 0%, var(--gold-dark) 100%);
                transform: scaleX(0);
                transition: transform 0.4s;
            }
            
            .product-card:hover::before {
                transform: scaleX(1);
            }
            
            .product-card:hover {
                transform: translateY(-10px);
                box-shadow: var(--shadow-xl);
                border-color: var(--navy);
            }
            
            .product-card img {
                width: 100%;
                height: 220px;
                object-fit: contain;
                margin-bottom: 24px;
                transition: transform 0.4s;
            }
            
            .product-card:hover img {
                transform: scale(1.05);
            }
            
            .product-category {
                display: inline-block;
                background: linear-gradient(135deg, rgba(0,31,63,0.05) 0%, rgba(0,31,63,0.1) 100%);
                color: var(--navy);
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 700;
                margin-bottom: 16px;
                border: 1px solid rgba(0,31,63,0.1);
            }
            
            .product-name {
                font-size: 18px;
                font-weight: 800;
                color: var(--navy);
                margin-bottom: 12px;
                line-height: 1.4;
            }
            
            .product-features {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 20px;
            }
            
            .product-feature {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 13px;
                color: var(--text-light);
            }
            
            .product-feature i {
                color: var(--success);
                font-size: 12px;
            }
            
            .product-rating {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 16px;
            }
            
            .stars {
                color: var(--gold);
                font-size: 14px;
            }
            
            .rating-count {
                font-size: 13px;
                color: var(--text-light);
            }
            
            .product-price-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding: 16px 0;
                border-top: 1px solid var(--border);
                border-bottom: 1px solid var(--border);
            }
            
            .product-price {
                font-size: 32px;
                font-weight: 900;
                color: var(--navy);
                display: flex;
                align-items: baseline;
                gap: 6px;
            }
            
            .price-prefix {
                font-size: 15px;
                font-weight: 500;
                color: var(--text-light);
            }
            
            .old-price {
                font-size: 18px;
                color: var(--text-light);
                text-decoration: line-through;
            }
            
            .discount-badge {
                background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
                color: white;
                padding: 6px 12px;
                border-radius: 8px;
                font-size: 13px;
                font-weight: 800;
            }
            
            .add-to-cart-btn {
                width: 100%;
                background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
                color: var(--navy);
                padding: 16px;
                border: none;
                border-radius: 12px;
                font-weight: 800;
                font-size: 15px;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                box-shadow: 0 4px 12px rgba(255,193,7,0.3);
            }
            
            .add-to-cart-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(255,193,7,0.4);
            }
            
            /* ==================== FOOTER ==================== */
            .footer {
                background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
                color: white;
                padding: 80px 0 30px;
                position: relative;
                overflow: hidden;
            }
            
            .footer::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 200px;
                background: radial-gradient(circle at 50% 0%, rgba(255,193,7,0.1) 0%, transparent 70%);
            }
            
            .footer-content {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 50px;
                margin-bottom: 50px;
                position: relative;
                z-index: 1;
            }
            
            .footer-section h3 {
                color: var(--gold);
                margin-bottom: 24px;
                font-size: 19px;
                font-weight: 800;
            }
            
            .footer-section ul {
                list-style: none;
                padding: 0;
            }
            
            .footer-section li {
                margin-bottom: 14px;
            }
            
            .footer-section a {
                color: rgba(255,255,255,0.85);
                text-decoration: none;
                transition: all 0.3s;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 15px;
            }
            
            .footer-section a:hover {
                color: var(--gold);
                padding-left: 8px;
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 40px;
                border-top: 1px solid rgba(255,255,255,0.1);
                color: rgba(255,255,255,0.7);
                position: relative;
                z-index: 1;
            }
            
            .payment-icons {
                display: flex;
                justify-content: center;
                gap: 16px;
                margin-bottom: 24px;
            }
            
            .payment-icon {
                width: 50px;
                height: 32px;
                background: white;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            }
            
            .payment-icon:hover {
                transform: translateY(-3px);
            }
            
            /* ==================== RESPONSIVE ==================== */
            @media (max-width: 1024px) {
                .mega-menu {
                    grid-template-columns: repeat(2, 1fr);
                    min-width: 600px;
                }
            }
            
            @media (max-width: 768px) {
                .header-content {
                    flex-direction: column;
                    gap: 20px;
                }
                
                .search-container {
                    max-width: 100%;
                }
                
                .nav-menu {
                    flex-direction: column;
                    width: 100%;
                }
                
                .mega-menu {
                    grid-template-columns: 1fr;
                    min-width: 300px;
                }
                
                .hero-content h1 {
                    font-size: 36px;
                }
                
                .products-grid {
                    grid-template-columns: 1fr;
                }
                
                .section-header h2 {
                    font-size: 32px;
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
                            <button class="lang-btn active">DE</button>
                            <button class="lang-btn">EN</button>
                        </div>
                        <div class="top-bar-item">
                            <i class="fas fa-phone-alt"></i>
                            <span>+49 (0) 123 456 789</span>
                        </div>
                        <div class="top-bar-item">
                            <i class="fas fa-envelope"></i>
                            <span>info@softwareking24.de</span>
                        </div>
                    </div>
                    <div>
                        <a href="/login" class="top-bar-item" style="color: white; text-decoration: none;">
                            <i class="fas fa-user"></i>
                            <span>Mein Konto</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Header -->
        <div class="main-header" id="main-header">
            <div class="container">
                <div class="header-content">
                    <div class="logo-wrapper">
                        <a href="/">
                            <img src="/static/logo.png" alt="SoftwareKing24" class="logo" />
                        </a>
                    </div>
                    
                    <div class="search-container">
                        <div class="search-wrapper">
                            <input type="text" id="search-input" class="search-box" placeholder="Software suchen... (z.B. Windows 11 Pro, Office 2024)" />
                            <button class="search-btn" id="search-btn">
                                <i class="fas fa-search"></i>
                                <span>Suchen</span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="header-actions">
                        <a href="/produkte" class="header-link">
                            <i class="fas fa-th"></i>
                            <span>Produkte</span>
                        </a>
                        <a href="/warenkorb" class="cart-btn">
                            <i class="fas fa-shopping-cart"></i>
                            <span>Warenkorb</span>
                            <span class="cart-count" id="cart-count">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Navigation (Dynamic) -->
        <nav class="navigation">
            <div class="container">
                <div class="nav-container">
                    <ul class="nav-menu" id="main-navigation">
                        <!-- Navigation will be loaded dynamically -->
                    </ul>
                </div>
            </div>
        </nav>
        
        <!-- Hero Section (Dynamic) -->
        <section class="hero-section" id="hero-section">
            <!-- Hero slides will be loaded dynamically -->
        </section>
        
        <!-- Trust Bar (Dynamic) -->
        <section class="trust-bar">
            <div class="container">
                <div class="trust-items" id="trust-badges">
                    <!-- Trust badges will be loaded dynamically -->
                </div>
            </div>
        </section>
        
        <!-- Product Sections (Dynamic) -->
        <div id="product-sections">
            <!-- Product sections will be loaded dynamically -->
        </div>
        
        <!-- Static Sections -->
        ${FAQSection()}
        ${BekanntAusSection()}
        ${B2BSection()}
        ${PartnerLogosSection()}
        ${ProcessStepsSection()}
        ${CategoryGridSection()}
        ${NewsletterSection()}
        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3><i class="fas fa-info-circle"></i> Über uns</h3>
                        <ul>
                            <li><a href="/about"><i class="fas fa-angle-right"></i> Über Softwareking24</a></li>
                            <li><a href="/kontakt"><i class="fas fa-angle-right"></i> Kontakt</a></li>
                            <li><a href="/impressum"><i class="fas fa-angle-right"></i> Impressum</a></li>
                            <li><a href="/datenschutz"><i class="fas fa-angle-right"></i> Datenschutz</a></li>
                            <li><a href="/agb"><i class="fas fa-angle-right"></i> AGB</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3><i class="fas fa-box-open"></i> Produkte</h3>
                        <ul>
                            <li><a href="/produkte?category=Windows"><i class="fas fa-angle-right"></i> Windows</a></li>
                            <li><a href="/produkte?category=Office"><i class="fas fa-angle-right"></i> Microsoft Office</a></li>
                            <li><a href="/produkte?category=Server"><i class="fas fa-angle-right"></i> Server</a></li>
                            <li><a href="/produkte?category=Antivirus"><i class="fas fa-angle-right"></i> Antivirus</a></li>
                            <li><a href="/produkte"><i class="fas fa-angle-right"></i> Alle Produkte</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3><i class="fas fa-user"></i> Mein Konto</h3>
                        <ul>
                            <li><a href="/login"><i class="fas fa-angle-right"></i> Login</a></li>
                            <li><a href="/register"><i class="fas fa-angle-right"></i> Registrieren</a></li>
                            <li><a href="/dashboard"><i class="fas fa-angle-right"></i> Dashboard</a></li>
                            <li><a href="/dashboard/orders"><i class="fas fa-angle-right"></i> Meine Bestellungen</a></li>
                            <li><a href="/warenkorb"><i class="fas fa-angle-right"></i> Warenkorb</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3><i class="fas fa-headset"></i> Kontakt & Support</h3>
                        <p><i class="fas fa-phone"></i> +49 (0) 123 456 789</p>
                        <p><i class="fas fa-envelope"></i> info@softwareking24.de</p>
                        <p><i class="fas fa-clock"></i> Mo-Fr: 9:00-18:00 Uhr</p>
                        <div style="margin-top: 20px; display: flex; gap: 12px;">
                            <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none;">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none;">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none;">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none;">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="payment-icons">
                    <div class="payment-icon" title="Visa"><i class="fab fa-cc-visa" style="font-size: 24px; color: #1A1F71;"></i></div>
                    <div class="payment-icon" title="Mastercard"><i class="fab fa-cc-mastercard" style="font-size: 24px; color: #EB001B;"></i></div>
                    <div class="payment-icon" title="PayPal"><i class="fab fa-cc-paypal" style="font-size: 24px; color: #003087;"></i></div>
                    <div class="payment-icon" title="American Express"><i class="fab fa-cc-amex" style="font-size: 24px; color: #006FCF;"></i></div>
                    <div class="payment-icon" title="SOFORT"><i class="fas fa-money-check-alt" style="font-size: 20px; color: #ED2939;"></i></div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 SoftwareKing24. Alle Rechte vorbehalten. | Made with <i class="fas fa-heart" style="color: #dc3545;"></i> in Germany</p>
                </div>
            </div>
        </footer>
        
        <script>
            // Initialize cart count
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            document.getElementById('cart-count').textContent = cart.length;
            
            // Update cart count on storage change
            window.addEventListener('storage', function(e) {
                if (e.key === 'cart') {
                    const cart = JSON.parse(e.newValue || '[]');
                    document.getElementById('cart-count').textContent = cart.length;
                }
            });
            
            // Sticky header effect
            window.addEventListener('scroll', function() {
                const header = document.getElementById('main-header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Search functionality
            document.getElementById('search-btn').addEventListener('click', function() {
                const query = document.getElementById('search-input').value;
                if (query) {
                    window.location.href = '/produkte?search=' + encodeURIComponent(query);
                }
            });
            
            document.getElementById('search-input').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const query = this.value;
                    if (query) {
                        window.location.href = '/produkte?search=' + encodeURIComponent(query);
                    }
                }
            });
            
            // Load Dynamic Navigation
            async function loadNavigation() {
                try {
                    const response = await axios.get('/api/homepage/navigation');
                    const menuItems = response.data.data;
                    
                    const navMenu = document.getElementById('main-navigation');
                    navMenu.innerHTML = menuItems.map(item => {
                        let submenu = '';
                        if (item.is_mega_menu && item.children && item.children.length > 0) {
                            submenu = \`
                                <div class="mega-menu">
                                    <div class="mega-menu-column">
                                        <h4><i class="fas fa-bolt"></i> \${item.title}</h4>
                                        <ul>
                                            \${item.children.slice(0, Math.ceil(item.children.length/4)).map(child => \`
                                                <li><a href="\${child.url}"><i class="fas fa-check"></i> \${child.title}</a></li>
                                            \`).join('')}
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column">
                                        <h4><i class="fas fa-fire"></i> Beliebt</h4>
                                        <ul>
                                            \${item.children.slice(Math.ceil(item.children.length/4), Math.ceil(item.children.length/2)).map(child => \`
                                                <li><a href="\${child.url}"><i class="fas fa-check"></i> \${child.title}</a></li>
                                            \`).join('')}
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column">
                                        <h4><i class="fas fa-star"></i> Empfohlen</h4>
                                        <ul>
                                            \${item.children.slice(Math.ceil(item.children.length/2), Math.ceil(3*item.children.length/4)).map(child => \`
                                                <li><a href="\${child.url}"><i class="fas fa-check"></i> \${child.title}</a></li>
                                            \`).join('')}
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column">
                                        <h4><i class="fas fa-crown"></i> Premium</h4>
                                        <ul>
                                            \${item.children.slice(Math.ceil(3*item.children.length/4)).map(child => \`
                                                <li><a href="\${child.url}"><i class="fas fa-check"></i> \${child.title}</a></li>
                                            \`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            \`;
                        }
                        
                        return \`
                            <li class="nav-item">
                                <a href="\${item.url}" class="nav-link">
                                    \${item.icon ? \`<i class="\${item.icon}"></i>\` : ''}
                                    \${item.title}
                                    \${item.is_mega_menu ? '<i class="fas fa-chevron-down"></i>' : ''}
                                </a>
                                \${submenu}
                            </li>
                        \`;
                    }).join('');
                } catch (error) {
                    console.error('Failed to load navigation:', error);
                }
            }
            
            // Load Dynamic Hero Slides
            let currentSlideIndex = 0;
            let heroSlides = [];
            let heroInterval;
            
            async function loadHeroSlides() {
                try {
                    const response = await axios.get('/api/homepage/hero');
                    heroSlides = response.data.data;
                    
                    const heroSection = document.getElementById('hero-section');
                    
                    // Render slides
                    heroSection.innerHTML = heroSlides.map((slide, index) => \`
                        <div class="hero-slide \${index === 0 ? 'active' : ''}" style="background: linear-gradient(135deg, \${slide.background_color} 0%, rgba(0,0,0,0.8) 100%);">
                            <div class="container">
                                <div class="hero-content" style="color: \${slide.text_color};">
                                    <div class="hero-badge">
                                        <i class="fas fa-certificate"></i> 100% Original Lizenzen
                                    </div>
                                    <h1>\${slide.title.split(' ').map((word, i) => 
                                        i % 3 === 0 ? \`<span class="hero-highlight">\${word}</span>\` : word
                                    ).join(' ')}</h1>
                                    <p>\${slide.description}</p>
                                    <div class="hero-cta-group">
                                        <a href="\${slide.cta_link}" class="hero-cta">
                                            <span>\${slide.cta_text}</span>
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                        <a href="/produkte" class="hero-cta hero-cta-secondary">
                                            <i class="fas fa-th"></i>
                                            <span>Alle Produkte</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    \`).join('');
                    
                    // Add dots
                    if (heroSlides.length > 1) {
                        const dotsHTML = \`
                            <div class="hero-dots">
                                \${heroSlides.map((_, index) => \`
                                    <div class="hero-dot \${index === 0 ? 'active' : ''}" onclick="goToSlide(\${index})"></div>
                                \`).join('')}
                            </div>
                        \`;
                        heroSection.insertAdjacentHTML('beforeend', dotsHTML);
                        
                        // Auto-rotate
                        startHeroRotation();
                    }
                } catch (error) {
                    console.error('Failed to load hero slides:', error);
                }
            }
            
            function startHeroRotation() {
                heroInterval = setInterval(() => {
                    currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
                    updateHeroSlide();
                }, 6000);
            }
            
            function goToSlide(index) {
                currentSlideIndex = index;
                updateHeroSlide();
                clearInterval(heroInterval);
                startHeroRotation();
            }
            
            function updateHeroSlide() {
                const allSlides = document.querySelectorAll('.hero-slide');
                const allDots = document.querySelectorAll('.hero-dot');
                
                allSlides.forEach((slide, index) => {
                    slide.classList.toggle('active', index === currentSlideIndex);
                });
                
                allDots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlideIndex);
                });
            }
            
            // Load Dynamic Trust Badges
            async function loadTrustBadges() {
                try {
                    const response = await axios.get('/api/homepage/trust-badges');
                    const badges = response.data.data;
                    
                    const trustBadges = document.getElementById('trust-badges');
                    trustBadges.innerHTML = badges.map(badge => \`
                        <div class="trust-item">
                            <div class="trust-icon">
                                <i class="\${badge.icon}"></i>
                            </div>
                            <div class="trust-item-text">
                                <h4>\${badge.title}</h4>
                                <p>\${badge.description}</p>
                            </div>
                        </div>
                    \`).join('');
                } catch (error) {
                    console.error('Failed to load trust badges:', error);
                }
            }
            
            // Load Dynamic Product Sections
            async function loadProductSections() {
                try {
                    // Load featured products for homepage
                    const categories = ['Windows', 'Office', 'Server', 'Antivirus'];
                    const container = document.getElementById('product-sections');
                    
                    for (const category of categories) {
                        const productsResponse = await axios.get(\`/api/products?category=\${category}&limit=4\`);
                        const products = productsResponse.data.data;
                        
                        if (products && products.length > 0) {
                            const sectionHTML = \`
                                <section class="product-section">
                                    <div class="container">
                                        <div class="section-header">
                                            <div class="section-badge"><i class="fas fa-star"></i> Top Angebote</div>
                                            <h2>\${category === 'Windows' ? 'Windows Betriebssysteme' : 
                                                  category === 'Office' ? 'Microsoft Office Pakete' :
                                                  category === 'Server' ? 'Server & CAL Lizenzen' :
                                                  'Antivirus & Sicherheit'}</h2>
                                            <p>Original-Lizenzen zum besten Preis – sofort verfügbar</p>
                                        </div>
                                        <div class="products-grid">
                                            \${products.map(product => \`
                                                <div class="product-card" onclick="window.location.href='/produkt/\${product.id}'">
                                                    <span class="product-category">\${category}</span>
                                                    <img src="\${product.image_url || 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(product.name)}" alt="\${product.name}" />
                                                    <h3 class="product-name">\${product.name}</h3>
                                                    <div class="product-rating">
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span class="rating-count">(4.8 / 127 Bewertungen)</span>
                                                    </div>
                                                    <div class="product-features">
                                                        <div class="product-feature">
                                                            <i class="fas fa-check"></i>
                                                            <span>Sofortiger Download</span>
                                                        </div>
                                                        <div class="product-feature">
                                                            <i class="fas fa-check"></i>
                                                            <span>100% Original Lizenz</span>
                                                        </div>
                                                        <div class="product-feature">
                                                            <i class="fas fa-check"></i>
                                                            <span>Lebenslanger Support</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price-row">
                                                        <div>
                                                            <div class="product-price">
                                                                <span class="price-prefix">ab</span>
                                                                €\${product.price ? product.price.toFixed(2) : '0.00'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(\${product.id})">
                                                        <i class="fas fa-shopping-cart"></i>
                                                        <span>In den Warenkorb</span>
                                                    </button>
                                                </div>
                                            \`).join('')}
                                        </div>
                                    </div>
                                </section>
                            \`;
                            
                            container.insertAdjacentHTML('beforeend', sectionHTML);
                        }
                    }
                } catch (error) {
                    console.error('Failed to load product sections:', error);
                }
            }
            
            // Add to cart function
            function addToCart(productId) {
                console.log('Adding product to cart:', productId);
                // Cart logic handled by cart-manager-enhanced.js
                const event = new CustomEvent('productAdded', { detail: { productId } });
                window.dispatchEvent(event);
            }
            
            // Initialize page
            document.addEventListener('DOMContentLoaded', function() {
                loadNavigation();
                loadHeroSlides();
                loadTrustBadges();
                loadProductSections();
            });
        </script>
    </body>
    </html>
  `;
}
