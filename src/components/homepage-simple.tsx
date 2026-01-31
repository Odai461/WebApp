// Simplified Homepage Component - No nested template literals
// Uses external section-renderers.js file for all dynamic rendering

export function HomepageSimple() {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Lizenzen kaufen – Original & Sofort verfügbar | SOFTWAREKING24</title>
    <meta name="description" content="Günstige Software Lizenzen kaufen bei SOFTWAREKING24. Original Windows, Office, Antivirus & mehr. Sofort per E-Mail. Sichere Bezahlung. Top Support. ✓"/>
    <meta name="keywords" content="software lizenzen kaufen, windows 11, office 2024, esd lizenzen, microsoft lizenzen, server software, antivirus, original software"/>
    
    <!-- External Assets -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
    <!-- Local Assets -->
    <script src="/static/cart-manager-enhanced.js"></script>
    <link href="/static/search-autocomplete.css" rel="stylesheet">
    <script src="/static/search-autocomplete.js"></script>
    <script src="/static/section-renderers.js?v=3"></script>
    
    <style>
        :root {
            --navy: #001f3f;
            --navy-medium: #003366;
            --navy-light: #003d7a;
            --gold: #FFC107;
            --white: #ffffff;
            --light-gray: #f8f9fa;
            --border: #e0e0e0;
            --text: #333;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
            gap: 15px;
        }
        
        .top-bar-left {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .top-bar-link {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .top-bar-link:hover {
            color: var(--gold);
        }
        
        /* Header */
        .header {
            background: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--navy);
            text-decoration: none;
        }
        
        .search-bar {
            flex: 1;
            max-width: 500px;
            display: flex;
            gap: 10px;
        }
        
        .search-input {
            flex: 1;
            padding: 12px 20px;
            border: 2px solid var(--border);
            border-radius: 25px;
            font-size: 14px;
        }
        
        .search-btn {
            padding: 12px 30px;
            background: var(--navy);
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
        }
        
        .search-btn:hover {
            background: var(--navy-medium);
        }
        
        .header-actions {
            display: flex;
            gap: 15px;
            align-items: center;
        }
        
        .cart-btn {
            padding: 12px 24px;
            background: var(--navy);
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .cart-btn:hover {
            background: var(--navy-medium);
            transform: translateY(-2px);
        }
        
        .cart-count {
            background: var(--gold);
            color: var(--navy);
            border-radius: 50%;
            padding: 2px 8px;
            font-size: 13px;
            font-weight: bold;
        }
        
        /* Navigation */
        .navigation {
            background: var(--light-gray);
            border-bottom: 1px solid var(--border);
        }
        
        .nav-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        #main-navigation {
            display: flex;
            list-style: none;
            gap: 5px;
        }
        
        #main-navigation a {
            color: var(--navy);
            text-decoration: none;
            padding: 15px 20px;
            display: block;
            font-weight: 500;
            transition: all 0.3s;
        }
        
        #main-navigation a:hover {
            background: var(--navy);
            color: white;
        }
        
        /* Dynamic Sections Container */
        #dynamic-sections {
            min-height: 400px;
        }
        
        /* Footer */
        .footer {
            background: var(--navy);
            color: white;
            padding: 40px 0 20px;
            margin-top: 60px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 30px;
        }
        
        .footer h3 {
            color: var(--gold);
            margin-bottom: 20px;
            font-size: 1.2rem;
        }
        
        .footer ul {
            list-style: none;
        }
        
        .footer a {
            color: white;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
        }
        
        .footer a:hover {
            color: var(--gold);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 14px;
        }
        
        /* Shimmer animation for loading skeletons */
        @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
        }
        
        /* Slide in/out animations for notifications */
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    </style>
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="top-bar-left">
                    <a href="tel:+4912345678" class="top-bar-link">
                        <i class="fas fa-phone"></i>
                        +49 (0) 123 456 789
                    </a>
                    <a href="mailto:info@softwareking24.de" class="top-bar-link">
                        <i class="fas fa-envelope"></i>
                        info@softwareking24.de
                    </a>
                </div>
                <div class="top-bar-right">
                    <a href="/login" class="top-bar-link">
                        <i class="fas fa-user"></i>
                        Login
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">
                    <img src="/static/logo.png" alt="SOFTWAREKING24" style="height: 50px; width: auto;">
                </a>
                
                <div class="search-bar">
                    <input type="text" id="search-input" class="search-input" placeholder="Software suchen...">
                    <button id="search-btn" class="search-btn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                
                <div class="header-actions">
                    <a href="/warenkorb" class="cart-btn">
                        <i class="fas fa-shopping-cart"></i>
                        Warenkorb
                        <span id="cart-count" class="cart-count">0</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Navigation -->
    <nav class="navigation">
        <div class="container">
            <div class="nav-container">
                <ul id="main-navigation">
                    <!-- Will be loaded dynamically -->
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Dynamic Sections -->
    <div id="dynamic-sections">
        <!-- All sections will be loaded dynamically based on database order -->
    </div>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <h3>Über uns</h3>
                    <ul>
                        <li><a href="/ueber-uns">Über SOFTWAREKING24</a></li>
                        <li><a href="/kontakt">Kontakt</a></li>
                        <li><a href="/impressum">Impressum</a></li>
                        <li><a href="/datenschutz">Datenschutz</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Kundenservice</h3>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/agb">AGB</a></li>
                        <li><a href="/widerruf">Widerrufsrecht</a></li>
                        <li><a href="/versand">Versand & Zahlung</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Kontakt</h3>
                    <p><i class="fas fa-phone"></i> +49 (0) 123 456 789</p>
                    <p><i class="fas fa-envelope"></i> info@softwareking24.de</p>
                    <p><i class="fas fa-clock"></i> Mo-Fr: 9:00-18:00</p>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2024 SoftwareKing24. Alle Rechte vorbehalten.
            </div>
        </div>
    </footer>
    
    <script>
        // Initialize cart count from localStorage
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        document.getElementById('cart-count').textContent = cart.length;
        
        // Update cart count on storage events
        window.addEventListener('storage', (e) => {
            if (e.key === 'cart') {
                const cart = JSON.parse(e.newValue || '[]');
                document.getElementById('cart-count').textContent = cart.length;
            }
        });
        
        // Search functionality
        document.getElementById('search-btn').addEventListener('click', () => {
            const query = document.getElementById('search-input').value;
            if (query) {
                window.location.href = '/produkte?search=' + encodeURIComponent(query);
            }
        });
        
        document.getElementById('search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value;
                if (query) {
                    window.location.href = '/produkte?search=' + encodeURIComponent(query);
                }
            }
        });
        
        // Load navigation from API
        async function loadNavigation() {
            try {
                const response = await axios.get('/api/homepage/navigation');
                const menuItems = response.data.data || [];
                
                const nav = document.getElementById('main-navigation');
                nav.innerHTML = menuItems.map(item => \`
                    <li>
                        <a href="\${item.url}">\${item.title}</a>
                    </li>
                \`).join('');
            } catch (error) {
                console.error('Error loading navigation:', error);
            }
        }
        
        // Load all sections from API
        async function loadAllSections() {
            try {
                console.log('[SECTIONS] Loading sections...');
                const response = await axios.get('/api/homepage/sections');
                console.log('[SECTIONS] API response:', response.data);
                
                const sections = (response.data.data || []).filter(s => s.is_enabled);
                console.log('[SECTIONS] Enabled sections:', sections.length);
                
                const container = document.getElementById('dynamic-sections');
                if (!container) {
                    console.error('[SECTIONS] Container not found!');
                    return;
                }
                
                container.innerHTML = '';
                
                for (const section of sections) {
                    console.log('[SECTIONS] Rendering section:', section.section_key);
                    
                    const config = section.config ? JSON.parse(section.config) : {};
                    let html = '';
                    
                    // Route to appropriate renderer based on section type
                    switch (section.section_type) {
                        case 'hero':
                            html = renderHeroSlider(section, config);
                            break;
                        case 'trust_bar':
                            html = renderTrustBar(section, config);
                            break;
                        case 'product_slider':
                            html = renderProductSlider(section, config);
                            break;
                        case 'feature':
                            if (section.section_key === 'license_availability') {
                                html = renderLicenseAvailability(section, config);
                            } else if (section.section_key === 'price_comparison') {
                                html = renderPriceComparison(section, config);
                            } else {
                                html = renderFeatureSection(section, config);
                            }
                            break;
                        case 'static':
                            html = renderStaticSection(section, config);
                            break;
                        case 'widget':
                            html = renderWidgetSection(section, config);
                            break;
                        default:
                            html = renderPlaceholder(section);
                    }
                    
                    if (html) {
                        container.insertAdjacentHTML('beforeend', html);
                        console.log('[SECTIONS] Rendered section HTML length:', html.length);
                    } else {
                        console.warn('[SECTIONS] No HTML returned for section:', section.section_key);
                    }
                }
                
                console.log('[SECTIONS] All sections rendered successfully');
                console.log('[SECTIONS] Container innerHTML length:', container.innerHTML.length);
                
                // Initialize any interactive features
                initializeSectionInteractivity();
                
            } catch (error) {
                console.error('[SECTIONS] Error loading sections:', error);
            }
        }
        
        function initializeSectionInteractivity() {
            // Any additional interactivity initialization
            console.log('[SECTIONS] Initializing section interactivity');
        }
        
        // Load on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            loadNavigation();
            loadAllSections();
        });
    </script>
</body>
</html>
`;
}
