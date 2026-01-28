export const HomepagePrestaShop = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SoftwareKing24 - Original Microsoft Software günstig kaufen</title>
        <meta name="description" content="Original Microsoft Software zu Top-Preisen. Windows, Office, Server - Sofortiger Download, lebenslange Lizenz, deutscher Support."/>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <style>
            .hero-gradient {
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
            }
            .feature-card {
                transition: all 0.3s ease;
            }
            .feature-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
            .product-card {
                transition: all 0.3s ease;
                border: 1px solid #e5e7eb;
            }
            .product-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                border-color: #3b82f6;
            }
            .category-badge {
                transition: all 0.3s ease;
            }
            .category-badge:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
            }
            .pulse-animation {
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }
            .slide-in {
                animation: slideIn 0.5s ease-out;
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .banner-text {
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
        </style>
    </head>
    <body class="bg-gray-50">
        
        <!-- Top Bar -->
        <div class="bg-blue-900 text-white text-sm py-2">
            <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div class="flex items-center space-x-6">
                    <span><i class="fas fa-phone mr-2"></i>+49 (0) 123 456789</span>
                    <span><i class="fas fa-envelope mr-2"></i>[email protected]</span>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="/konto" class="hover:text-blue-200 transition"><i class="fas fa-user mr-1"></i>Mein Konto</a>
                    <a href="/warenkorb" class="hover:text-blue-200 transition relative">
                        <i class="fas fa-shopping-cart mr-1"></i>Warenkorb
                        <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ml-1" data-cart-count>0</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <header class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <a href="/" class="flex items-center">
                        <img src="/static/logo.png" alt="SoftwareKing24" class="h-16"/>
                    </a>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-8">
                        <form class="relative" onsubmit="performSearch(); return false;">
                            <input 
                                type="text" 
                                id="global-search"
                                placeholder="Windows, Office, Antivirus suchen..." 
                                class="w-full px-6 py-3 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 pr-12"
                            />
                            <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex items-center space-x-4">
                        <a href="/warenkorb" class="relative">
                            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                                <i class="fas fa-shopping-cart text-xl"></i>
                                <span class="font-semibold">Warenkorb</span>
                                <span class="bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center" data-cart-count>0</span>
                            </button>
                        </a>
                    </div>
                </div>

                <!-- Navigation Menu -->
                <nav class="mt-4 border-t border-gray-200 pt-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-6">
                            <a href="/produkte" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition">
                                <i class="fas fa-th-large"></i>
                                <span>Alle Produkte</span>
                            </a>
                            <a href="/produkte?category=Microsoft%20Windows" class="text-gray-700 hover:text-blue-600 transition">Windows</a>
                            <a href="/produkte?category=Microsoft%20Office" class="text-gray-700 hover:text-blue-600 transition">Office</a>
                            <a href="/produkte?category=Server" class="text-gray-700 hover:text-blue-600 transition">Server</a>
                            <a href="/produkte?category=Antivirus" class="text-gray-700 hover:text-blue-600 transition">Antivirus</a>
                            <a href="/deals" class="text-red-600 hover:text-red-700 font-bold transition">
                                <i class="fas fa-fire mr-1"></i>Top Deals
                            </a>
                        </div>
                        <div class="flex items-center space-x-4 text-sm text-gray-600">
                            <span><i class="fas fa-truck text-green-600 mr-1"></i>Sofort-Download</span>
                            <span><i class="fas fa-shield-alt text-blue-600 mr-1"></i>100% Sicher</span>
                            <span><i class="fas fa-certificate text-yellow-600 mr-1"></i>Original</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Hero Banner -->
        <section class="hero-gradient py-16">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-white slide-in">
                        <div class="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 pulse-animation">
                            <i class="fas fa-fire mr-2"></i>MEGA SALE - Bis zu 70% Rabatt!
                        </div>
                        <h1 class="text-5xl font-bold mb-6 banner-text leading-tight">
                            Original Microsoft Software zum Bestpreis
                        </h1>
                        <p class="text-xl mb-8 text-blue-100">
                            Sofortiger Download • Lebenslange Lizenz • Deutscher Support
                        </p>
                        <div class="flex space-x-4">
                            <a href="/produkte" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                                <i class="fas fa-shopping-bag mr-2"></i>Jetzt einkaufen
                            </a>
                            <a href="#bestsellers" class="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition border-2 border-white">
                                <i class="fas fa-star mr-2"></i>Bestseller
                            </a>
                        </div>
                        <div class="mt-8 flex items-center space-x-8">
                            <div class="text-center">
                                <div class="text-3xl font-bold">10.000+</div>
                                <div class="text-blue-200 text-sm">Zufriedene Kunden</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold">4.9/5.0</div>
                                <div class="text-blue-200 text-sm">
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold">100%</div>
                                <div class="text-blue-200 text-sm">Original-Lizenzen</div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop" alt="Software" class="rounded-2xl shadow-2xl"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trust Badges -->
        <section class="bg-white py-8 border-b">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="flex items-center justify-center space-x-3 feature-card p-4">
                        <i class="fas fa-download text-4xl text-blue-600"></i>
                        <div>
                            <div class="font-bold text-gray-800">Sofort-Download</div>
                            <div class="text-sm text-gray-600">Innerhalb von Sekunden</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-3 feature-card p-4">
                        <i class="fas fa-certificate text-4xl text-green-600"></i>
                        <div>
                            <div class="font-bold text-gray-800">100% Original</div>
                            <div class="text-sm text-gray-600">Direkt von Microsoft</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-3 feature-card p-4">
                        <i class="fas fa-shield-alt text-4xl text-purple-600"></i>
                        <div>
                            <div class="font-bold text-gray-800">SSL-Verschlüsselt</div>
                            <div class="text-sm text-gray-600">Sichere Zahlung</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-3 feature-card p-4">
                        <i class="fas fa-headset text-4xl text-red-600"></i>
                        <div>
                            <div class="font-bold text-gray-800">24/7 Support</div>
                            <div class="text-sm text-gray-600">Deutscher Kundenservice</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">
                        <i class="fas fa-th-large text-blue-600 mr-3"></i>Kategorien
                    </h2>
                    <p class="text-gray-600">Finden Sie die perfekte Software für Ihre Bedürfnisse</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <a href="/produkte?category=Microsoft%20Windows" class="category-badge bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                        <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <i class="fab fa-windows text-4xl text-blue-600"></i>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Windows</h3>
                        <p class="text-sm text-gray-600">Betriebssysteme</p>
                        <div class="mt-3 text-blue-600 font-semibold">Ab €19.99 →</div>
                    </a>
                    <a href="/produkte?category=Microsoft%20Office" class="category-badge bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                        <div class="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-file-alt text-4xl text-orange-600"></i>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Office</h3>
                        <p class="text-sm text-gray-600">Produktivität</p>
                        <div class="mt-3 text-blue-600 font-semibold">Ab €29.99 →</div>
                    </a>
                    <a href="/produkte?category=Server" class="category-badge bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                        <div class="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-server text-4xl text-purple-600"></i>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Server</h3>
                        <p class="text-sm text-gray-600">Enterprise Lösungen</p>
                        <div class="mt-3 text-blue-600 font-semibold">Ab €39.99 →</div>
                    </a>
                    <a href="/produkte?category=Antivirus" class="category-badge bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                        <div class="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-shield-virus text-4xl text-green-600"></i>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Antivirus</h3>
                        <p class="text-sm text-gray-600">Sicherheit</p>
                        <div class="mt-3 text-blue-600 font-semibold">Ab €14.99 →</div>
                    </a>
                </div>
            </div>
        </section>

        <!-- Flash Deals Banner -->
        <section class="bg-gradient-to-r from-red-600 to-orange-600 py-8">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between text-white">
                    <div class="flex items-center space-x-4">
                        <i class="fas fa-bolt text-5xl pulse-animation"></i>
                        <div>
                            <h3 class="text-2xl font-bold">FLASH SALE!</h3>
                            <p class="text-lg">Nur noch heute: Bis zu 70% Rabatt auf ausgewählte Produkte</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-6">
                        <div class="text-center bg-white text-red-600 px-4 py-2 rounded-lg">
                            <div class="text-2xl font-bold" id="hours">12</div>
                            <div class="text-xs">Stunden</div>
                        </div>
                        <div class="text-center bg-white text-red-600 px-4 py-2 rounded-lg">
                            <div class="text-2xl font-bold" id="minutes">34</div>
                            <div class="text-xs">Minuten</div>
                        </div>
                        <div class="text-center bg-white text-red-600 px-4 py-2 rounded-lg">
                            <div class="text-2xl font-bold" id="seconds">56</div>
                            <div class="text-xs">Sekunden</div>
                        </div>
                        <a href="/deals" class="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                            Jetzt zugreifen!
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bestsellers -->
        <section id="bestsellers" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between mb-10">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-800 mb-2">
                            <i class="fas fa-star text-yellow-500 mr-3"></i>Bestseller
                        </h2>
                        <p class="text-gray-600">Unsere meistverkauften Produkte</p>
                    </div>
                    <a href="/produkte" class="text-blue-600 font-semibold hover:text-blue-700">
                        Alle anzeigen <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
                <div id="bestsellers-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Products will be loaded here -->
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">
                        Warum SoftwareKing24?
                    </h2>
                    <p class="text-gray-600 text-lg">Ihr vertrauensvoller Partner für Original-Software</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="feature-card bg-white rounded-xl p-8 shadow-lg">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <i class="fas fa-money-bill-wave text-3xl text-blue-600"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Unschlagbare Preise</h3>
                        <p class="text-gray-600 mb-4">Sparen Sie bis zu 70% gegenüber den UVP-Preisen. Original-Lizenzen zum Bestpreis!</p>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Keine versteckten Kosten</li>
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Regelmäßige Sonderangebote</li>
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Mengenrabatte verfügbar</li>
                        </ul>
                    </div>
                    <div class="feature-card bg-white rounded-xl p-8 shadow-lg">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <i class="fas fa-bolt text-3xl text-green-600"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Sofort-Lieferung</h3>
                        <p class="text-gray-600 mb-4">Erhalten Sie Ihren Lizenzschlüssel innerhalb von Sekunden per E-Mail.</p>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Automatischer Versand</li>
                            <li><i class="fas fa-check text-green-600 mr-2"></i>24/7 verfügbar</li>
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Keine Wartezeiten</li>
                        </ul>
                    </div>
                    <div class="feature-card bg-white rounded-xl p-8 shadow-lg">
                        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <i class="fas fa-life-ring text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Erstklassiger Support</h3>
                        <p class="text-gray-600 mb-4">Unser deutscher Kundenservice hilft Ihnen bei allen Fragen weiter.</p>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Deutscher Support</li>
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Schnelle Antwortzeiten</li>
                            <li><i class="fas fa-check text-green-600 mr-2"></i>Kompetente Beratung</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- New Arrivals -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between mb-10">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-800 mb-2">
                            <i class="fas fa-sparkles text-purple-600 mr-3"></i>Neu eingetroffen
                        </h2>
                        <p class="text-gray-600">Die neuesten Software-Releases</p>
                    </div>
                    <a href="/produkte?sort=newest" class="text-blue-600 font-semibold hover:text-blue-700">
                        Alle neuen Produkte <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
                <div id="new-arrivals-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Products will be loaded here -->
                </div>
            </div>
        </section>

        <!-- Promotional Banner -->
        <section class="bg-gradient-to-r from-purple-600 to-blue-600 py-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="text-white">
                        <h3 class="text-3xl font-bold mb-4">Newsletter abonnieren & 10€ Gutschein sichern!</h3>
                        <p class="text-lg mb-6 text-blue-100">Erhalten Sie exklusive Angebote und Updates direkt in Ihr Postfach.</p>
                        <form class="flex space-x-3">
                            <input 
                                type="email" 
                                placeholder="Ihre E-Mail-Adresse" 
                                class="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button type="submit" class="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                                Anmelden
                            </button>
                        </form>
                        <p class="text-xs text-blue-100 mt-3">
                            <i class="fas fa-lock mr-1"></i>Ihre Daten sind bei uns sicher. Kein Spam.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <div class="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition">
                            <div class="text-center">
                                <div class="text-6xl font-bold text-purple-600 mb-2">10€</div>
                                <div class="text-xl font-semibold text-gray-800 mb-4">Willkommens-Gutschein</div>
                                <div class="text-gray-600 text-sm">Bei Ihrer ersten Bestellung</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Customer Reviews -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">
                        <i class="fas fa-comments text-green-600 mr-3"></i>Was unsere Kunden sagen
                    </h2>
                    <div class="flex items-center justify-center space-x-2 mb-2">
                        <i class="fas fa-star text-yellow-500 text-xl"></i>
                        <i class="fas fa-star text-yellow-500 text-xl"></i>
                        <i class="fas fa-star text-yellow-500 text-xl"></i>
                        <i class="fas fa-star text-yellow-500 text-xl"></i>
                        <i class="fas fa-star text-yellow-500 text-xl"></i>
                        <span class="ml-3 text-lg font-semibold">4.9/5.0</span>
                    </div>
                    <p class="text-gray-600">Basierend auf 10.234 Bewertungen</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="feature-card bg-white rounded-xl p-6 shadow-lg">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-500">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">"Schnelle Lieferung, original Lizenzschlüssel und super Preis! Absolut empfehlenswert!"</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <i class="fas fa-user text-blue-600"></i>
                            </div>
                            <div>
                                <div class="font-semibold">Michael S.</div>
                                <div class="text-sm text-gray-600">Windows 11 Pro</div>
                            </div>
                        </div>
                    </div>
                    <div class="feature-card bg-white rounded-xl p-6 shadow-lg">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-500">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">"Bestelle hier regelmäßig für meine Firma. Immer zuverlässig und günstig!"</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <i class="fas fa-user text-purple-600"></i>
                            </div>
                            <div>
                                <div class="font-semibold">Julia K.</div>
                                <div class="text-sm text-gray-600">Office 2024</div>
                            </div>
                        </div>
                    </div>
                    <div class="feature-card bg-white rounded-xl p-6 shadow-lg">
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-500">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">"Top Service! Hatte eine Frage und bekam sofort kompetente Hilfe."</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <i class="fas fa-user text-green-600"></i>
                            </div>
                            <div>
                                <div class="font-semibold">Thomas B.</div>
                                <div class="text-sm text-gray-600">Windows Server 2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-16 bg-white">
            <div class="max-w-4xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">
                        <i class="fas fa-question-circle text-blue-600 mr-3"></i>Häufig gestellte Fragen
                    </h2>
                    <p class="text-gray-600">Alles, was Sie wissen müssen</p>
                </div>
                <div class="space-y-4">
                    <details class="bg-gray-50 rounded-lg p-6 group">
                        <summary class="font-semibold text-lg cursor-pointer flex items-center justify-between">
                            <span>Sind die Lizenzen original?</span>
                            <i class="fas fa-chevron-down group-open:rotate-180 transition"></i>
                        </summary>
                        <p class="mt-4 text-gray-600">Ja, alle unsere Lizenzen sind 100% original und stammen direkt von Microsoft. Sie erhalten echte Produktschlüssel, die Sie aktivieren und ein Leben lang nutzen können.</p>
                    </details>
                    <details class="bg-gray-50 rounded-lg p-6 group">
                        <summary class="font-semibold text-lg cursor-pointer flex items-center justify-between">
                            <span>Wie schnell erhalte ich meine Lizenz?</span>
                            <i class="fas fa-chevron-down group-open:rotate-180 transition"></i>
                        </summary>
                        <p class="mt-4 text-gray-600">Nach erfolgreicher Bestellung erhalten Sie Ihren Lizenzschlüssel innerhalb weniger Sekunden per E-Mail. Der Versand erfolgt vollautomatisch.</p>
                    </details>
                    <details class="bg-gray-50 rounded-lg p-6 group">
                        <summary class="font-semibold text-lg cursor-pointer flex items-center justify-between">
                            <span>Welche Zahlungsmethoden akzeptieren Sie?</span>
                            <i class="fas fa-chevron-down group-open:rotate-180 transition"></i>
                        </summary>
                        <p class="mt-4 text-gray-600">Wir akzeptieren alle gängigen Zahlungsmethoden inkl. Kreditkarte, PayPal, Sofortüberweisung und mehr. Alle Zahlungen werden SSL-verschlüsselt verarbeitet.</p>
                    </details>
                    <details class="bg-gray-50 rounded-lg p-6 group">
                        <summary class="font-semibold text-lg cursor-pointer flex items-center justify-between">
                            <span>Gibt es eine Geld-zurück-Garantie?</span>
                            <i class="fas fa-chevron-down group-open:rotate-180 transition"></i>
                        </summary>
                        <p class="mt-4 text-gray-600">Ja, wir bieten eine 14-Tage-Geld-zurück-Garantie. Sollten Sie nicht zufrieden sein, erstatten wir Ihnen den vollen Kaufpreis.</p>
                    </details>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
            <div class="max-w-4xl mx-auto px-4 text-center text-white">
                <h2 class="text-4xl font-bold mb-4">Bereit, loszulegen?</h2>
                <p class="text-xl mb-8 text-blue-100">Finden Sie die perfekte Software für Ihre Bedürfnisse – zum besten Preis!</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/produkte" class="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
                        <i class="fas fa-shopping-bag mr-2"></i>Jetzt einkaufen
                    </a>
                    <a href="/kontakt" class="bg-blue-800 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition border-2 border-white">
                        <i class="fas fa-phone mr-2"></i>Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 class="text-white font-bold mb-4">Über uns</h4>
                        <p class="text-sm">SoftwareKing24 ist Ihr vertrauensvoller Partner für Original-Software zu unschlagbaren Preisen.</p>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4">Kategorien</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/produkte?category=Microsoft%20Windows" class="hover:text-white transition">Windows</a></li>
                            <li><a href="/produkte?category=Microsoft%20Office" class="hover:text-white transition">Office</a></li>
                            <li><a href="/produkte?category=Server" class="hover:text-white transition">Server</a></li>
                            <li><a href="/produkte?category=Antivirus" class="hover:text-white transition">Antivirus</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4">Kundenservice</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/kontakt" class="hover:text-white transition">Kontakt</a></li>
                            <li><a href="/faq" class="hover:text-white transition">FAQ</a></li>
                            <li><a href="/versand" class="hover:text-white transition">Versand</a></li>
                            <li><a href="/rueckgabe" class="hover:text-white transition">Rückgabe</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4">Rechtliches</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/agb" class="hover:text-white transition">AGB</a></li>
                            <li><a href="/datenschutz" class="hover:text-white transition">Datenschutz</a></li>
                            <li><a href="/impressum" class="hover:text-white transition">Impressum</a></li>
                            <li><a href="/widerruf" class="hover:text-white transition">Widerrufsrecht</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-sm">&copy; 2026 SoftwareKing24. Alle Rechte vorbehalten.</p>
                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" class="text-2xl hover:text-white transition"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-2xl hover:text-white transition"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-2xl hover:text-white transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-2xl hover:text-white transition"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>

        <script>
            // Initialize cart count
            document.addEventListener('DOMContentLoaded', () => {
                updateCartCount();
                loadBestsellers();
                loadNewArrivals();
                startCountdown();
            });

            function updateCartCount() {
                const cart = CartManager.getCart();
                const cartCountElements = document.querySelectorAll('[data-cart-count]');
                cartCountElements.forEach(el => {
                    el.textContent = cart.items.length;
                });
            }

            async function loadBestsellers() {
                try {
                    const response = await axios.get('/api/products?limit=4&sort=popular');
                    const products = response.data.data;
                    const container = document.getElementById('bestsellers-grid');
                    container.innerHTML = products.map(product => createProductCard(product)).join('');
                } catch (error) {
                    console.error('Error loading bestsellers:', error);
                }
            }

            async function loadNewArrivals() {
                try {
                    const response = await axios.get('/api/products?limit=4&sort=newest');
                    const products = response.data.data;
                    const container = document.getElementById('new-arrivals-grid');
                    container.innerHTML = products.map(product => createProductCard(product)).join('');
                } catch (error) {
                    console.error('Error loading new arrivals:', error);
                }
            }

            function createProductCard(product) {
                const hasDiscount = product.sale_price && product.sale_price < product.price;
                const displayPrice = hasDiscount ? product.sale_price : product.price;
                const savings = hasDiscount ? Math.round(((product.price - product.sale_price) / product.price) * 100) : 0;

                return \`
                    <div class="product-card bg-white rounded-xl p-6 shadow-md">
                        <div class="relative mb-4">
                            \${hasDiscount ? \`<div class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-\${savings}%</div>\` : ''}
                            <div class="w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-box text-6xl text-blue-200"></i>
                            </div>
                        </div>
                        <div class="text-sm text-blue-600 mb-2">\${product.category || 'Software'}</div>
                        <h3 class="font-bold text-lg mb-3 h-12 line-clamp-2">\${product.name}</h3>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-500 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-sm text-gray-600 ml-2">(4.9)</span>
                        </div>
                        <div class="mb-4">
                            \${hasDiscount ? \`
                                <div class="flex items-center space-x-2">
                                    <span class="text-2xl font-bold text-red-600">€\${displayPrice.toFixed(2)}</span>
                                    <span class="text-lg text-gray-500 line-through">€\${product.price.toFixed(2)}</span>
                                </div>
                            \` : \`
                                <span class="text-2xl font-bold text-blue-600">€\${displayPrice.toFixed(2)}</span>
                            \`}
                        </div>
                        <div class="flex space-x-2">
                            <button 
                                onclick="CartManager.addItem(\${product.id}, '\${product.name.replace(/'/g, "\\'")}', \${displayPrice}, '/images/product.jpg', 1); updateCartCount(); alert('Produkt zum Warenkorb hinzugefügt!');"
                                class="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                <i class="fas fa-shopping-cart mr-2"></i>In den Warenkorb
                            </button>
                            <a href="/produkt/\${product.id}" class="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition">
                                <i class="fas fa-eye"></i>
                            </a>
                        </div>
                    </div>
                \`;
            }

            function performSearch() {
                const query = document.getElementById('global-search').value;
                if (query) {
                    window.location.href = \`/produkte?search=\${encodeURIComponent(query)}\`;
                }
            }

            function startCountdown() {
                const endTime = new Date().getTime() + (12 * 60 * 60 * 1000 + 34 * 60 * 1000 + 56 * 1000);
                
                setInterval(() => {
                    const now = new Date().getTime();
                    const distance = endTime - now;
                    
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
                }, 1000);
            }
        </script>
    </body>
    </html>
  `;
};
