export const HomepagePrestaShop = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Günstige Software Lizenzen kaufen – Original & Sofort verfügbar | SoftwareKing24</title>
        <meta name="description" content="Bei SoftwareKing24 finden Sie hochwertige digitale Softwarelösungen für Arbeit, Sicherheit und Produktivität. Windows 11, Office 2024, Antivirus, Server – sofort verfügbar und rechtssicher."/>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <style>
            :root {
                --navy-dark: #0f172a;
                --navy-medium: #1e293b;
                --navy-light: #334155;
                --gold: #fbbf24;
                --gold-light: #fcd34d;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .bg-navy-dark { background-color: var(--navy-dark); }
            .bg-navy-medium { background-color: var(--navy-medium); }
            .bg-navy-light { background-color: var(--navy-light); }
            .text-gold { color: var(--gold); }
            .bg-gold { background-color: var(--gold); }
            .border-gold { border-color: var(--gold); }
            
            .hover-lift {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-lift:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
            }
            
            .gradient-gold {
                background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            }
            
            @keyframes pulse-gold {
                0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7); }
                50% { box-shadow: 0 0 0 10px rgba(251, 191, 36, 0); }
            }
            
            .pulse-gold {
                animation: pulse-gold 2s infinite;
            }
            
            .sidebar-deals {
                background: linear-gradient(180deg, var(--navy-medium) 0%, var(--navy-dark) 100%);
                border: 2px solid var(--gold);
            }
            
            .ultimate-bundle {
                background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 50%, var(--navy-dark) 100%);
                border: 3px solid var(--gold);
                box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
            }
        </style>
    </head>
    <body class="bg-gray-100">
        
        <!-- Top Info Bar -->
        <div class="bg-navy-dark text-white py-2 text-xs">
            <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <div class="flex items-center space-x-6">
                    <span><i class="fas fa-phone-alt mr-2 text-gold"></i>+49 (0) 123 456789</span>
                    <span><i class="fas fa-envelope mr-2 text-gold"></i>[email protected]</span>
                </div>
                <div class="flex items-center space-x-4">
                    <span class="bg-gold text-navy-dark px-3 py-1 rounded-full font-bold">
                        <i class="fas fa-download mr-1"></i>Kostenloser Sofort-Download
                    </span>
                    <span><i class="fas fa-shield-check mr-1 text-gold"></i>100% Original</span>
                    <span><i class="fas fa-headset mr-1 text-gold"></i>24/7 Support</span>
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <header class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <a href="/" class="flex items-center">
                        <img src="/static/logo.png" alt="SoftwareKing24" class="h-16" />
                    </a>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-8">
                        <div class="relative">
                            <input 
                                type="text" 
                                id="global-search"
                                placeholder="Suchen Sie nach Windows, Office, Server..." 
                                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                            />
                            <button onclick="performSearch()" class="absolute right-2 top-1/2 transform -translate-y-1/2 gradient-gold text-navy-dark px-6 py-2 rounded-md hover:opacity-90 font-semibold">
                                <i class="fas fa-search mr-2"></i>Suchen
                            </button>
                        </div>
                    </div>

                    <!-- Cart & Account -->
                    <div class="flex items-center space-x-6">
                        <a href="/warenkorb" class="relative">
                            <i class="fas fa-shopping-cart text-3xl text-navy-dark hover:text-gold transition"></i>
                            <span class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold" data-cart-count>0</span>
                        </a>
                        <div class="text-right">
                            <div class="text-xs text-gray-600">Mein Konto</div>
                            <a href="/login" class="text-sm font-semibold text-navy-dark hover:text-gold transition">Anmelden</a>
                        </div>
                        <button class="flex items-center space-x-1 text-sm text-navy-dark hover:text-gold transition">
                            <i class="fas fa-globe"></i>
                            <span>DE / EN</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Navigation Menu -->
            <nav class="bg-navy-dark">
                <div class="max-w-7xl mx-auto px-4">
                    <ul class="flex items-center justify-center space-x-1 text-sm">
                        <li class="relative group">
                            <a href="/produkte" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition font-semibold">
                                <i class="fas fa-th mr-2"></i>Alle Produkte
                            </a>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=Windows" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fab fa-windows mr-2"></i>Windows
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute left-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Windows 11" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows 11 Professional</a>
                                    <a href="/produkte?search=Windows 11 Home" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows 11 Home</a>
                                    <a href="/produkte?search=Windows 10" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows 10 Professional</a>
                                    <a href="/produkte?search=Windows 2000" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows 2000</a>
                                    <a href="/produkte?search=Windows Server" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows Server</a>
                                </div>
                            </div>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=Office" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-file-word mr-2"></i>Office
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute left-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Office 365" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft 365</a>
                                    <a href="/produkte?search=Office 2024" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Office 2024</a>
                                    <a href="/produkte?search=Office 2021" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Office 2021</a>
                                    <a href="/produkte?search=Office 2019" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Office 2019</a>
                                    <a href="/produkte?search=Office 2016" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Office 2016</a>
                                    <a href="/produkte?search=Office 2013" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Office 2013</a>
                                </div>
                            </div>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=Server" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-server mr-2"></i>Server & CAL
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute left-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Server 2025" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows Server 2025</a>
                                    <a href="/produkte?search=Server 2022" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows Server 2022</a>
                                    <a href="/produkte?search=Server 2019" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows Server 2019</a>
                                    <a href="/produkte?search=Server 2016" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Windows Server 2016</a>
                                    <a href="/produkte?search=SQL Server" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">SQL Server</a>
                                    <a href="/produkte?search=Business Software" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Business Software</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/produkte?category=Bundles" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-box-open mr-2"></i>Bundles
                            </a>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=Games" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-gamepad mr-2"></i>Games | GameCards
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute left-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Steam" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Steam</a>
                                    <a href="/produkte?search=Origin" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Origin</a>
                                    <a href="/produkte?search=Microsoft Store" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Store</a>
                                </div>
                            </div>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=Entwicklung" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-code mr-2"></i>Entwicklung
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute left-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Visual Studio 2026" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Visual Studio 2026</a>
                                    <a href="/produkte?search=Visual Studio 2022" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Visual Studio 2022</a>
                                    <a href="/produkte?search=Visual Studio 2019" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Visual Studio 2019</a>
                                    <a href="/produkte?search=Visual Studio 2017" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Microsoft Visual Studio 2017</a>
                                </div>
                            </div>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=Antivirus" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-shield-virus mr-2"></i>Antivirus
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute left-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Norton" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Norton</a>
                                    <a href="/produkte?search=Avira" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Avira</a>
                                    <a href="/produkte?search=ESET" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">ESET</a>
                                    <a href="/produkte?search=Bitdefender" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Bitdefender</a>
                                    <a href="/produkte?search=Kaspersky" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Kaspersky</a>
                                    <a href="/produkte?search=McAfee" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">McAfee</a>
                                    <a href="/produkte?search=Avast Premium" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Avast Premium</a>
                                    <a href="/produkte?search=Malwarebytes" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">Malwarebytes</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/produkte?category=Retro" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-history mr-2"></i>Retro Software
                            </a>
                        </li>
                        <li class="relative group">
                            <a href="/produkte?category=PC" class="flex items-center px-4 py-3 text-white hover:bg-navy-light hover:text-gold transition">
                                <i class="fas fa-desktop mr-2"></i>PC Software
                                <i class="fas fa-caret-down ml-2"></i>
                            </a>
                            <div class="absolute right-0 top-full mt-0 w-64 bg-navy-medium shadow-xl hidden group-hover:block z-50 border-2 border-gold rounded-lg">
                                <div class="p-3 space-y-1">
                                    <a href="/produkte?search=Adblocker" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">ADBLOCKER</a>
                                    <a href="/produkte?search=CAD" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">CAD-SOFTWARE</a>
                                    <a href="/produkte?search=Backup" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">BACKUP/ANWENDUNGEN</a>
                                    <a href="/produkte?search=PC Tuning" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">PC-TUNING</a>
                                    <a href="/produkte?search=Audio" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">AUDIOSOFTWARE</a>
                                    <a href="/produkte?search=CD/DVD" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">CD/DVDSOFTWARE</a>
                                    <a href="/produkte?search=Brennen" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">BRENNSOFTWARE</a>
                                    <a href="/produkte?search=System" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">SYSTEMSOFTWARE</a>
                                    <a href="/produkte?search=PC Cleaner" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">PC-CLEANER</a>
                                    <a href="/produkte?search=Video" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">VIDEOSOFTWARE</a>
                                    <a href="/produkte?search=Virtualisierung" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">VIRTUALISIERUNG</a>
                                    <a href="/produkte?search=VPN" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded">VPN</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <!-- Main Content Area with Sidebar -->
        <div class="max-w-7xl mx-auto px-4 py-6">
            <div class="grid grid-cols-12 gap-6">
                
                <!-- Left Sidebar - Software Deals -->
                <aside class="col-span-3">
                    <div class="sidebar-deals rounded-lg p-4 sticky top-24">
                        <h3 class="text-gold font-bold text-lg mb-4 pb-2 border-b-2 border-gold">
                            <i class="fas fa-tags mr-2"></i>Software Deals
                        </h3>
                        <nav class="space-y-2">
                            <a href="/produkte?filter=neuheiten" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-star mr-2 text-gold"></i>Neuheiten
                            </a>
                            <a href="/produkte?filter=sonderangebote" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-fire mr-2 text-gold"></i>Sonderangebote
                            </a>
                            <a href="/produkte?filter=tagesangebote" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-clock mr-2 text-gold"></i>Tägliche Angebote
                            </a>
                            <a href="/produkte?filter=wochenangebote" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-calendar-week mr-2 text-gold"></i>Wöchentliche Angebote
                            </a>
                            <a href="/produkte?filter=topseller" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-trophy mr-2 text-gold"></i>Top-Seller
                            </a>
                            <a href="/produkte?category=Server" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-server mr-2 text-gold"></i>Windows Server
                            </a>
                            <a href="/produkte?filter=premium" class="block px-3 py-2 text-white hover:bg-navy-light hover:text-gold rounded transition">
                                <i class="fas fa-crown mr-2 text-gold"></i>Premium Software
                            </a>
                        </nav>

                        <!-- Trust Seals -->
                        <div class="mt-6 pt-6 border-t-2 border-gold">
                            <h4 class="text-white text-sm font-semibold mb-3">Vertrauenswürdiger Partner</h4>
                            <div class="space-y-3">
                                <div class="bg-white rounded p-2 text-center">
                                    <i class="fab fa-microsoft text-blue-600 text-2xl"></i>
                                    <div class="text-xs text-navy-dark font-semibold mt-1">Microsoft<br/>Partner</div>
                                </div>
                                <div class="bg-white rounded p-2 text-center">
                                    <i class="fab fa-amazon text-orange-500 text-2xl"></i>
                                    <div class="text-xs text-navy-dark font-semibold mt-1">Amazon Pay<br/>Store</div>
                                </div>
                                <div class="bg-white rounded p-2 text-center">
                                    <i class="fas fa-shield-alt text-green-600 text-2xl"></i>
                                    <div class="text-xs text-navy-dark font-semibold mt-1">Kaspersky<br/>Partner</div>
                                </div>
                                <div class="bg-white rounded p-2 text-center">
                                    <i class="fab fa-google text-red-600 text-2xl"></i>
                                    <div class="text-xs text-navy-dark font-semibold mt-1">Google<br/>Partner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- Main Content -->
                <main class="col-span-9">
                    
                    <!-- Ultimate Bundle Hero -->
                    <section class="ultimate-bundle rounded-xl p-8 mb-8 relative overflow-hidden">
                        <div class="absolute top-4 right-4 bg-gold text-navy-dark px-4 py-2 rounded-full font-bold pulse-gold">
                            <i class="fas fa-bolt mr-1"></i>MEGA SALE
                        </div>
                        <div class="grid grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 class="text-5xl font-bold text-gold mb-4" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                                    ULTIMATE<br/>BUNDLE
                                </h2>
                                <p class="text-white text-xl mb-6">
                                    Office + Windows + Games + Security
                                </p>
                                <div class="flex items-center space-x-4 mb-6">
                                    <div class="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <i class="fab fa-microsoft text-blue-400 text-3xl"></i>
                                        <div class="text-white text-xs mt-1">Microsoft<br/>Partner</div>
                                    </div>
                                    <div class="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <i class="fab fa-amazon text-orange-400 text-3xl"></i>
                                        <div class="text-white text-xs mt-1">Amazon<br/>Pay Store</div>
                                    </div>
                                    <div class="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <i class="fas fa-shield-alt text-green-400 text-3xl"></i>
                                        <div class="text-white text-xs mt-1">Kaspersky<br/>Partner</div>
                                    </div>
                                    <div class="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <i class="fab fa-google text-red-400 text-3xl"></i>
                                        <div class="text-white text-xs mt-1">Google<br/>Partner</div>
                                    </div>
                                </div>
                                <a href="/produkte?category=Bundles" class="inline-block gradient-gold text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
                                    <i class="fas fa-shopping-cart mr-2"></i>Jetzt kaufen
                                </a>
                            </div>
                            <div class="relative">
                                <img src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop" alt="Ultimate Bundle" class="rounded-lg shadow-2xl" />
                                <div class="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-2xl pulse-gold">
                                    -70%
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Introduction Section -->
                    <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h1 class="text-4xl font-bold text-navy-dark mb-4">
                            Günstige Software Lizenzen kaufen – Original & Sofort verfügbar
                        </h1>
                        <div class="prose max-w-none text-gray-700">
                            <p class="text-lg leading-relaxed mb-4">
                                Bei <strong>Softwareking24.de</strong> finden Sie hochwertige digitale Softwarelösungen für Arbeit, Sicherheit und Produktivität – sofort verfügbar und rechtssicher. Ob <strong>Windows 11</strong>, <strong>Microsoft Office 2024</strong>, <strong>Antivirus-Programme</strong>, <strong>Windows Server</strong> oder <strong>Retro-Software</strong>: Wir bieten geprüfte Lizenzen zu Top-Preisen – direkt per E-Mail geliefert.
                            </p>
                            <p class="text-lg leading-relaxed mb-4">
                                Unsere <strong>ESD-Lizenzen</strong> (Electronic Software Delivery) ermöglichen einen schnellen, umweltfreundlichen und sicheren Erwerb Ihrer Wunschsoftware – ganz ohne Versand. Sie erhalten den Lizenzschlüssel sofort nach dem Kauf, inklusive Anleitung zur einfachen Aktivierung. Profitieren Sie von unserer langjährigen Erfahrung, persönlichem Support und zertifiziertem Shopsystem nach IT-Recht Kanzlei. Unsere digitalen Produkte eignen sich ideal für Privatpersonen, Unternehmen und Bildungseinrichtungen.
                            </p>
                        </div>
                    </section>

                    <!-- Trust Badges -->
                    <section class="grid grid-cols-4 gap-4 mb-8">
                        <div class="bg-white rounded-lg shadow p-6 text-center hover-lift">
                            <i class="fas fa-download text-gold text-4xl mb-3"></i>
                            <h3 class="font-bold text-navy-dark mb-2">Sofort-Download</h3>
                            <p class="text-sm text-gray-600">Lizenz per E-Mail in Minuten</p>
                        </div>
                        <div class="bg-white rounded-lg shadow p-6 text-center hover-lift">
                            <i class="fas fa-certificate text-gold text-4xl mb-3"></i>
                            <h3 class="font-bold text-navy-dark mb-2">100% Original</h3>
                            <p class="text-sm text-gray-600">Geprüfte Originallizenzen</p>
                        </div>
                        <div class="bg-white rounded-lg shadow p-6 text-center hover-lift">
                            <i class="fas fa-shield-check text-gold text-4xl mb-3"></i>
                            <h3 class="font-bold text-navy-dark mb-2">SSL-Verschlüsselt</h3>
                            <p class="text-sm text-gray-600">Sichere Bezahlung</p>
                        </div>
                        <div class="bg-white rounded-lg shadow p-6 text-center hover-lift">
                            <i class="fas fa-headset text-gold text-4xl mb-3"></i>
                            <h3 class="font-bold text-navy-dark mb-2">24/7 Support</h3>
                            <p class="text-sm text-gray-600">Persönlicher Kundenservice</p>
                        </div>
                    </section>

                    <!-- Featured Products -->
                    <section class="mb-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-3xl font-bold text-navy-dark">
                                <i class="fas fa-star text-gold mr-3"></i>Top Angebote
                            </h2>
                            <a href="/produkte" class="text-gold hover:text-yellow-600 font-semibold">
                                Alle anzeigen <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                        <div id="flash-deals" class="grid grid-cols-3 gap-6">
                            <!-- Products loaded via JavaScript -->
                            <div class="bg-white rounded-lg shadow p-6 text-center">
                                <i class="fas fa-spinner fa-spin text-4xl text-gold mb-4"></i>
                                <p class="text-gray-600">Lade Produkte...</p>
                            </div>
                        </div>
                    </section>

                    <!-- About Section -->
                    <section class="bg-gradient-to-r from-navy-dark to-navy-medium rounded-xl shadow-lg p-8 mb-8 text-white">
                        <h2 class="text-3xl font-bold text-gold mb-6">
                            <i class="fas fa-info-circle mr-3"></i>Wer wir sind und was wir machen
                        </h2>
                        <div class="prose max-w-none text-white">
                            <p class="text-lg leading-relaxed mb-4">
                                Unsere Mission besteht darin, Kunden aus ganz Deutschland mit <strong class="text-gold">günstiger Software</strong> zu versorgen. Einen unserer Schwerpunkte stellt der Verkauf von <strong class="text-gold">Betriebssystemen</strong> dar – sowohl für PCs als auch für Unternehmensserver. Darüber hinaus bieten wir vielfältige <strong class="text-gold">Office-Programme</strong> an. Damit erledigen Sie Ihre Büroarbeiten sehr effizient.
                            </p>
                            <p class="text-lg leading-relaxed mb-4">
                                Antivirus-Software und Programme für das Erstellen von Grafiken runden unser Sortiment ab. Dabei führen wir ausschließlich die Produkte namhafter Hersteller, die sich sowohl für professionelle Anwender als auch für anspruchsvolle private Nutzer hervorragend eignen.
                            </p>
                            <p class="text-lg leading-relaxed">
                                Das herausragende Merkmal unserer Angebote sind unsere <strong class="text-gold">günstigen Preise</strong>. Unsere Einkaufsstrategie besteht darin, überschüssige Lizenzen von Großhändlern und Distributoren in großer Stückzahl aufzukaufen. Daher sind die Kosten hierfür deutlich niedriger als beim Einkauf direkt beim Hersteller. Diese Kostenvorteile geben wir an unsere Kunden weiter.
                            </p>
                        </div>
                    </section>

                    <!-- FAQ Section -->
                    <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 class="text-3xl font-bold text-navy-dark mb-6">
                            <i class="fas fa-question-circle text-gold mr-3"></i>Häufig gestellte Fragen
                        </h2>
                        <div class="space-y-4">
                            <details class="group border-b border-gray-200 pb-4">
                                <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-navy-dark py-3">
                                    <span><i class="fas fa-shopping-cart text-gold mr-3"></i>Warum Software online kaufen?</span>
                                    <i class="fas fa-chevron-down group-open:rotate-180 transition-transform text-gold"></i>
                                </summary>
                                <div class="mt-3 text-gray-700 leading-relaxed">
                                    Der Online-Kauf von Software bietet zahlreiche Vorteile: Sofortiger Download ohne Wartezeit, keine Versandkosten, umweltfreundlich ohne physische Medien, günstigere Preise durch digitale Distribution und bequeme Bezahlung von zu Hause aus. Sie erhalten Ihre Lizenz innerhalb von Minuten per E-Mail.
                                </div>
                            </details>

                            <details class="group border-b border-gray-200 pb-4">
                                <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-navy-dark py-3">
                                    <span><i class="fas fa-credit-card text-gold mr-3"></i>Welche Bezahlmöglichkeiten gibt es?</span>
                                    <i class="fas fa-chevron-down group-open:rotate-180 transition-transform text-gold"></i>
                                </summary>
                                <div class="mt-3 text-gray-700 leading-relaxed">
                                    Wir akzeptieren alle gängigen Zahlungsmethoden: Kreditkarte (Visa, Mastercard), PayPal, Amazon Pay, Sofortüberweisung, Giropay und Vorkasse per Banküberweisung. Alle Zahlungen sind SSL-verschlüsselt und absolut sicher.
                                </div>
                            </details>

                            <details class="group border-b border-gray-200 pb-4">
                                <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-navy-dark py-3">
                                    <span><i class="fas fa-tools text-gold mr-3"></i>Was passiert, wenn ich beim Installieren Probleme bekomme?</span>
                                    <i class="fas fa-chevron-down group-open:rotate-180 transition-transform text-gold"></i>
                                </summary>
                                <div class="mt-3 text-gray-700 leading-relaxed">
                                    Unser Kundenservice steht Ihnen 24/7 zur Verfügung. Bei Installationsproblemen helfen wir Ihnen gerne per E-Mail, Telefon oder Live-Chat. Jede Lizenz wird mit einer detaillierten Installationsanleitung geliefert. In den meisten Fällen können Probleme innerhalb weniger Minuten gelöst werden.
                                </div>
                            </details>

                            <details class="group border-b border-gray-200 pb-4">
                                <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-navy-dark py-3">
                                    <span><i class="fas fa-building text-gold mr-3"></i>Besondere Vorteile für Geschäftskunden</span>
                                    <i class="fas fa-chevron-down group-open:rotate-180 transition-transform text-gold"></i>
                                </summary>
                                <div class="mt-3 text-gray-700 leading-relaxed">
                                    Geschäftskunden profitieren von Mengenrabatten, Rechnungskauf, individuellen Angeboten, Volumenlizenzen und einem dedizierten Account Manager. Kontaktieren Sie uns für ein maßgeschneidertes Angebot für Ihr Unternehmen.
                                </div>
                            </details>

                            <details class="group pb-4">
                                <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-navy-dark py-3">
                                    <span><i class="fab fa-windows text-gold mr-3"></i>Lohnt sich für mich ein Wechsel zu Windows 11?</span>
                                    <i class="fas fa-chevron-down group-open:rotate-180 transition-transform text-gold"></i>
                                </summary>
                                <div class="mt-3 text-gray-700 leading-relaxed">
                                    <strong>Vorteile:</strong> Moderne Benutzeroberfläche, bessere Performance, erhöhte Sicherheit, DirectX 12 Ultimate für Gaming, Android-App-Unterstützung, kostenlose Updates.
                                    <br/><br/>
                                    <strong>Nachteile:</strong> Höhere Systemanforderungen (TPM 2.0, UEFI), manche ältere Programme funktionieren möglicherweise nicht.
                                    <br/><br/>
                                    <strong>Systemvoraussetzungen:</strong> 64-Bit Prozessor mit mindestens 1 GHz, 4 GB RAM, 64 GB Speicher, TPM 2.0, UEFI-fähig, DirectX 12-kompatible Grafikkarte.
                                </div>
                            </details>
                        </div>
                    </section>

                    <!-- Product Categories Section -->
                    <section class="space-y-8 mb-8">
                        
                        <!-- Operating Systems -->
                        <div class="bg-white rounded-xl shadow-lg p-8">
                            <h2 class="text-3xl font-bold text-navy-dark mb-4 flex items-center">
                                <i class="fab fa-windows text-gold text-4xl mr-4"></i>
                                Betriebssysteme – Die Grundlage für Ihren PC
                            </h2>
                            <div class="prose max-w-none text-gray-700">
                                <p class="text-lg leading-relaxed mb-4">
                                    Ein stabiles Betriebssystem ist entscheidend dafür, dass Ihr Computer zuverlässig läuft. Es verwaltet Ihre Programme, steuert die Hardware und sorgt dafür, dass alles schnell und flüssig funktioniert.
                                </p>
                                <p class="text-lg leading-relaxed mb-6">
                                    Bei Softwareking24 finden Sie moderne Windows-Versionen, die eine einfache Bedienung bieten und durch hohe Sicherheit überzeugen. Ob privat oder beruflich – mit dem passenden Betriebssystem schaffen Sie eine solide Basis für Ihren Alltag am PC.
                                </p>
                                <div class="grid grid-cols-2 gap-4">
                                    <a href="/produkte?search=Windows 11" class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition">
                                        <i class="fab fa-windows text-3xl mb-2"></i>
                                        <h3 class="font-bold text-lg">Windows 11</h3>
                                        <p class="text-sm opacity-90">Neueste Version mit modernem Design</p>
                                    </a>
                                    <a href="/produkte?search=Windows 10" class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
                                        <i class="fab fa-windows text-3xl mb-2"></i>
                                        <h3 class="font-bold text-lg">Windows 10</h3>
                                        <p class="text-sm opacity-90">Bewährt und stabil</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Server Solutions -->
                        <div class="bg-gradient-to-r from-navy-dark to-navy-medium rounded-xl shadow-lg p-8 text-white">
                            <h2 class="text-3xl font-bold text-gold mb-4 flex items-center">
                                <i class="fas fa-server text-4xl mr-4"></i>
                                Serverbetriebssysteme für Ihr Unternehmen
                            </h2>
                            <div class="prose max-w-none text-white">
                                <p class="text-lg leading-relaxed mb-4">
                                    Unternehmen benötigen zuverlässige Serverlösungen, die Sicherheit, Leistung und Skalierbarkeit verbinden. Genau das bieten unsere Serverbetriebssysteme. Wir führen verschiedene Versionen von <strong class="text-gold">Microsoft Windows Server</strong>, ergänzt durch beliebte Dienste wie <strong class="text-gold">SQL Server</strong>, <strong class="text-gold">Exchange</strong> oder <strong class="text-gold">SharePoint</strong>.
                                </p>
                                <p class="text-lg leading-relaxed mb-6">
                                    So können Sie Ihr Netzwerk flexibel aufbauen und für zukünftige Anforderungen problemlos erweitern.
                                </p>
                                <a href="/produkte?category=Server" class="inline-block gradient-gold text-navy-dark px-6 py-3 rounded-lg font-bold hover:opacity-90 transition">
                                    <i class="fas fa-server mr-2"></i>Server-Lösungen ansehen
                                </a>
                            </div>
                        </div>

                        <!-- Microsoft Office -->
                        <div class="bg-white rounded-xl shadow-lg p-8">
                            <h2 class="text-3xl font-bold text-navy-dark mb-4 flex items-center">
                                <i class="fas fa-file-word text-gold text-4xl mr-4"></i>
                                Microsoft Office – Produktivität auf höchstem Niveau
                            </h2>
                            <div class="prose max-w-none text-gray-700">
                                <p class="text-lg leading-relaxed mb-4">
                                    Ob im Homeoffice, im Studium oder im Unternehmen: Microsoft Office gehört zu den beliebtesten Programmpaketen weltweit. <strong>Word</strong>, <strong>Excel</strong>, <strong>PowerPoint</strong> und <strong>Outlook</strong> erleichtern den Arbeitsalltag und machen viele Aufgaben schneller und übersichtlicher.
                                </p>
                                <p class="text-lg leading-relaxed mb-6">
                                    Bei Softwareking24 erhalten Sie Office-Lizenzen, die sofort einsatzbereit sind. Zudem profitieren Sie von einer großen Auswahl an Versionen – für jedes Gerät und jedes Budget.
                                </p>
                                <div class="grid grid-cols-3 gap-4">
                                    <a href="/produkte?search=Office 2024" class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition text-center">
                                        <i class="fas fa-file-alt text-3xl mb-2"></i>
                                        <h3 class="font-bold">Office 2024</h3>
                                    </a>
                                    <a href="/produkte?search=Office 2021" class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition text-center">
                                        <i class="fas fa-file-excel text-3xl mb-2"></i>
                                        <h3 class="font-bold">Office 2021</h3>
                                    </a>
                                    <a href="/produkte?search=Office 365" class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition text-center">
                                        <i class="fas fa-cloud text-3xl mb-2"></i>
                                        <h3 class="font-bold">Microsoft 365</h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- CAD Software -->
                        <div class="bg-white rounded-xl shadow-lg p-8">
                            <h2 class="text-3xl font-bold text-navy-dark mb-4 flex items-center">
                                <i class="fas fa-drafting-compass text-gold text-4xl mr-4"></i>
                                CAD Software – Effizientes Arbeiten für Profis
                            </h2>
                            <div class="prose max-w-none text-gray-700">
                                <p class="text-lg leading-relaxed mb-4">
                                    Architekten, Ingenieure und Designer finden bei Softwareking24.de leistungsstarke CAD-Programme, die präzises und effizientes Arbeiten ermöglichen. Unsere CAD-Software bietet durchdachte Werkzeuge, die auch komplexe Projekte übersichtlich und kontrollierbar machen.
                                </p>
                                <p class="text-lg leading-relaxed">
                                    Außerdem profitieren Sie von klar strukturierten Funktionen, hoher Kompatibilität und einer einfachen Bedienung. So arbeiten Sie produktiv, ohne sich lange einarbeiten zu müssen.
                                </p>
                            </div>
                        </div>

                        <!-- Antivirus -->
                        <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-8 text-white">
                            <h2 class="text-3xl font-bold mb-4 flex items-center">
                                <i class="fas fa-shield-virus text-4xl mr-4"></i>
                                Antivirus Software – Sicherheit für Ihre Daten
                            </h2>
                            <div class="prose max-w-none text-white">
                                <p class="text-lg leading-relaxed mb-4">
                                    Cyberangriffe, Viren und Malware sind heute eine ständige Gefahr. Mit unserer Antivirus-Software schützen Sie Ihr System zuverlässig und dauerhaft. Wir bieten Lösungen namhafter Sicherheitsanbieter, die Ihre Daten vor Bedrohungen abschirmen und gefährliche Inhalte rechtzeitig blockieren.
                                </p>
                                <p class="text-lg leading-relaxed mb-6">
                                    So bleibt Ihr Computer geschützt – egal, ob Sie privat surfen oder beruflich arbeiten.
                                </p>
                                <div class="grid grid-cols-4 gap-3">
                                    <a href="/produkte?search=Norton" class="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition text-center font-semibold">Norton</a>
                                    <a href="/produkte?search=Kaspersky" class="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition text-center font-semibold">Kaspersky</a>
                                    <a href="/produkte?search=Bitdefender" class="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition text-center font-semibold">Bitdefender</a>
                                    <a href="/produkte?search=McAfee" class="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition text-center font-semibold">McAfee</a>
                                </div>
                            </div>
                        </div>

                    </section>

                    <!-- Advantages Section -->
                    <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 class="text-3xl font-bold text-navy-dark mb-6 flex items-center">
                            <i class="fas fa-crown text-gold text-4xl mr-4"></i>
                            Softwareking24 Vorteile – Top-Preise & persönlicher Service
                        </h2>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="flex items-start space-x-4">
                                <div class="bg-gold rounded-full p-3 flex-shrink-0">
                                    <i class="fas fa-euro-sign text-navy-dark text-2xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg text-navy-dark mb-2">Faire Preise</h3>
                                    <p class="text-gray-700">Direkter Einkauf bei geprüften Distributoren für beste Konditionen</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-gold rounded-full p-3 flex-shrink-0">
                                    <i class="fas fa-certificate text-navy-dark text-2xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg text-navy-dark mb-2">Original-Lizenzen</h3>
                                    <p class="text-gray-700">100% legale und sichere Software direkt vom Hersteller</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-gold rounded-full p-3 flex-shrink-0">
                                    <i class="fas fa-headset text-navy-dark text-2xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg text-navy-dark mb-2">Persönlicher Support</h3>
                                    <p class="text-gray-700">Hilfe bei Installation, Aktivierung und allen Fragen rund um Ihr Produkt</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-gold rounded-full p-3 flex-shrink-0">
                                    <i class="fas fa-bolt text-navy-dark text-2xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg text-navy-dark mb-2">Sofortiger Versand</h3>
                                    <p class="text-gray-700">Lizenz oft schon innerhalb weniger Minuten per E-Mail</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Bestsellers Section -->
                    <section class="mb-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-3xl font-bold text-navy-dark">
                                <i class="fas fa-fire text-gold mr-3"></i>Bestseller
                            </h2>
                            <a href="/produkte?sort=bestsellers" class="text-gold hover:text-yellow-600 font-semibold">
                                Alle Bestseller <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                        <div id="bestsellers-products" class="grid grid-cols-4 gap-4">
                            <!-- Products loaded via JavaScript -->
                        </div>
                    </section>

                    <!-- New Arrivals -->
                    <section class="mb-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-3xl font-bold text-navy-dark">
                                <i class="fas fa-sparkles text-gold mr-3"></i>Neuheiten
                            </h2>
                            <a href="/produkte?sort=newest" class="text-gold hover:text-yellow-600 font-semibold">
                                Alle Neuheiten <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                        <div id="new-arrivals" class="grid grid-cols-4 gap-4">
                            <!-- Products loaded via JavaScript -->
                        </div>
                    </section>

                    <!-- CTA Banner -->
                    <section class="bg-gradient-to-r from-navy-dark to-navy-medium rounded-xl shadow-lg p-12 text-center text-white mb-8">
                        <i class="fas fa-gift text-gold text-6xl mb-4"></i>
                        <h2 class="text-4xl font-bold mb-4">Sparen Sie bis zu 70% auf Original-Software!</h2>
                        <p class="text-xl mb-8 opacity-90">Profitieren Sie jetzt von unseren exklusiven Angeboten</p>
                        <div class="flex items-center justify-center space-x-4">
                            <a href="/produkte" class="gradient-gold text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
                                <i class="fas fa-shopping-cart mr-2"></i>Jetzt einkaufen
                            </a>
                            <a href="/kontakt" class="border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-navy-dark transition">
                                <i class="fas fa-phone mr-2"></i>Kontakt aufnehmen
                            </a>
                        </div>
                    </section>

                </main>

            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-navy-dark text-white py-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <img src="/static/logo.png" alt="SoftwareKing24" class="h-12 mb-4 brightness-0 invert" />
                        <p class="text-gray-400 mb-4">Ihr vertrauenswürdiger Partner für Original-Software zu günstigen Preisen.</p>
                        <div class="flex space-x-3">
                            <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition">
                                <i class="fab fa-facebook-f text-navy-dark"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition">
                                <i class="fab fa-twitter text-navy-dark"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition">
                                <i class="fab fa-instagram text-navy-dark"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-4 text-gold">Kategorien</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="/produkte?category=Windows" class="hover:text-gold transition">Windows</a></li>
                            <li><a href="/produkte?category=Office" class="hover:text-gold transition">Microsoft Office</a></li>
                            <li><a href="/produkte?category=Server" class="hover:text-gold transition">Server</a></li>
                            <li><a href="/produkte?category=Antivirus" class="hover:text-gold transition">Antivirus</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-4 text-gold">Kundenservice</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="/kontakt" class="hover:text-gold transition">Kontakt</a></li>
                            <li><a href="/hilfe" class="hover:text-gold transition">Hilfe & Support</a></li>
                            <li><a href="/versand" class="hover:text-gold transition">Versand & Lieferung</a></li>
                            <li><a href="/retoure" class="hover:text-gold transition">Rückgabe</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-4 text-gold">Rechtliches</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="/agb" class="hover:text-gold transition">AGB</a></li>
                            <li><a href="/datenschutz" class="hover:text-gold transition">Datenschutz</a></li>
                            <li><a href="/impressum" class="hover:text-gold transition">Impressum</a></li>
                            <li><a href="/widerruf" class="hover:text-gold transition">Widerrufsrecht</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 SoftwareKing24. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>

        <script>
            // Initialize cart counter
            document.addEventListener('DOMContentLoaded', () => {
                if (typeof CartManager !== 'undefined') {
                    CartManager.updateCartCount();
                    loadProducts();
                }
            });

            // Load products
            async function loadProducts() {
                try {
                    // Load flash deals
                    const flashResponse = await axios.get('/api/products?limit=3&sort=price-asc');
                    if (flashResponse.data.success) {
                        renderFlashDeals(flashResponse.data.data);
                    }

                    // Load bestsellers
                    const bestResponse = await axios.get('/api/products/featured');
                    if (bestResponse.data.success) {
                        renderBestsellers(bestResponse.data.data);
                    }

                    // Load new arrivals
                    const newResponse = await axios.get('/api/products?limit=4&sort=newest');
                    if (newResponse.data.success) {
                        renderNewArrivals(newResponse.data.data);
                    }
                } catch (error) {
                    console.error('Error loading products:', error);
                }
            }

            function renderFlashDeals(products) {
                const container = document.getElementById('flash-deals');
                container.innerHTML = products.slice(0, 3).map(product => {
                    const discount = product.sale_price ? Math.round(((product.price - product.sale_price) / product.price) * 100) : 0;
                    const displayPrice = (product.sale_price || product.price) / 100;
                    const originalPrice = product.price / 100;
                    
                    return \`
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300">
                            <div class="relative cursor-pointer" onclick="window.location.href='/produkt/\${product.id}'">
                                <img src="\${product.image_url || 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop'}" alt="\${product.name}" class="w-full h-48 object-cover" />
                                \${discount > 0 ? \`<div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">-\${discount}%</div>\` : ''}
                            </div>
                            <div class="p-6">
                                <a href="/produkt/\${product.id}" class="font-bold text-navy-dark mb-2 hover:text-gold transition cursor-pointer block">\${product.name}</a>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-2">\${product.description || 'Original Software-Lizenz zum Bestpreis'}</p>
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        \${product.sale_price ? \`
                                            <span class="text-2xl font-bold text-red-600">€\${displayPrice.toFixed(2)}</span>
                                            <span class="text-sm text-gray-500 line-through ml-2">€\${originalPrice.toFixed(2)}</span>
                                        \` : \`
                                            <span class="text-2xl font-bold text-navy-dark">€\${displayPrice.toFixed(2)}</span>
                                        \`}
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <a href="/produkt/\${product.id}" class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition text-center">
                                        <i class="fas fa-eye mr-2"></i>Ansehen
                                    </a>
                                    <button onclick="event.stopPropagation(); addToCart(\${product.id})" class="gradient-gold text-navy-dark py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
                                        <i class="fas fa-cart-plus mr-2"></i>Kaufen
                                    </button>
                                </div>
                            </div>
                        </div>
                    \`;
                }).join('');
            }

            function renderBestsellers(products) {
                const container = document.getElementById('bestsellers-products');
                container.innerHTML = products.slice(0, 4).map(product => {
                    const displayPrice = (product.sale_price || product.price) / 100;
                    
                    return \`
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover-lift transition-all duration-300">
                            <div class="relative cursor-pointer" onclick="window.location.href='/produkt/\${product.id}'">
                                <img src="\${product.image_url || 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop'}" alt="\${product.name}" class="w-full h-32 object-cover" />
                                <div class="absolute top-2 left-2 bg-gold text-navy-dark px-2 py-1 rounded-full font-bold text-xs">
                                    <i class="fas fa-star mr-1"></i>Bestseller
                                </div>
                            </div>
                            <div class="p-4">
                                <a href="/produkt/\${product.id}" class="font-bold text-sm text-navy-dark mb-2 hover:text-gold transition cursor-pointer block line-clamp-2">\${product.name}</a>
                                <div class="flex items-center mb-2">
                                    <div class="flex text-gold text-xs">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="text-xs text-gray-600 ml-1">(4.9)</span>
                                </div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-xl font-bold text-navy-dark">€\${displayPrice.toFixed(2)}</span>
                                </div>
                                <button onclick="event.stopPropagation(); addToCart(\${product.id})" class="w-full bg-navy-dark text-white py-2 rounded-lg hover:bg-navy-light transition text-sm font-semibold">
                                    <i class="fas fa-cart-plus mr-1"></i>In den Warenkorb
                                </button>
                            </div>
                        </div>
                    \`;
                }).join('');
            }

            function renderNewArrivals(products) {
                const container = document.getElementById('new-arrivals');
                container.innerHTML = products.slice(0, 4).map(product => {
                    const displayPrice = (product.sale_price || product.price) / 100;
                    
                    return \`
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover-lift transition-all duration-300">
                            <div class="relative cursor-pointer" onclick="window.location.href='/produkt/\${product.id}'">
                                <img src="\${product.image_url || 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop'}" alt="\${product.name}" class="w-full h-32 object-cover" />
                                <div class="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded-full font-bold text-xs">
                                    <i class="fas fa-sparkles mr-1"></i>Neu
                                </div>
                            </div>
                            <div class="p-4">
                                <a href="/produkt/\${product.id}" class="font-bold text-sm text-navy-dark mb-2 hover:text-purple-600 transition cursor-pointer block line-clamp-2">\${product.name}</a>
                                <p class="text-gray-600 text-xs mb-2 line-clamp-1">\${product.description || 'Neu eingetroffen!'}</p>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-xl font-bold text-purple-600">€\${displayPrice.toFixed(2)}</span>
                                </div>
                                <button onclick="event.stopPropagation(); addToCart(\${product.id})" class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-semibold">
                                    <i class="fas fa-cart-plus mr-1"></i>In den Warenkorb
                                </button>
                            </div>
                        </div>
                    \`;
                }).join('');
            }

            async function addToCart(productId) {
                if (typeof CartManager !== 'undefined') {
                    await CartManager.addToCart(productId);
                }
            }

            function performSearch() {
                const query = document.getElementById('global-search').value;
                if (query) {
                    window.location.href = \`/produkte?search=\${encodeURIComponent(query)}\`;
                }
            }

            // Enable Enter key for search
            document.getElementById('global-search').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        </script>
    </body>
    </html>
  `;
};
