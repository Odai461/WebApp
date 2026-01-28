export const HomepageEnhanced = () => {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SoftwareKing24 - Das Original Einfach günstig gut</title>
        <meta name="description" content="Original Microsoft Software zu unschlagbaren Preisen. Windows, Office, Server - Sofortiger Download und lebenslange Lizenz." />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .mega-menu {
            display: none;
            animation: slideDown 0.3s ease-out;
          }
          
          .mega-menu.show {
            display: block;
          }
          
          .product-card {
            transition: all 0.3s ease;
          }
          
          .product-card:hover {
            transform: translateY(-5px);
          }
          
          .badge-shimmer {
            animation: shimmer 2s infinite;
          }
          
          @keyframes shimmer {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          
          .countdown-timer {
            font-variant-numeric: tabular-nums;
          }
        `}} />
      </head>
      <body class="bg-gray-50">
        {/* Header */}
        <header class="bg-white shadow-sm sticky top-0 z-50">
          <div class="container mx-auto px-4">
            {/* Top Bar */}
            <div class="border-b border-gray-200 py-2 text-sm">
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <span class="text-gray-600"><i class="fas fa-phone mr-2"></i>+49 123 456789</span>
                  <span class="text-gray-600"><i class="fas fa-envelope mr-2"></i>[email protected]</span>
                  <span class="text-green-600 font-semibold"><i class="fas fa-truck mr-2"></i>Kostenloser Sofort-Download</span>
                </div>
                <div class="flex items-center space-x-4">
                  <a href="/warenkorb" class="text-gray-600 hover:text-blue-600 transition">
                    <i class="fas fa-shopping-cart mr-1"></i>Warenkorb <span class="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs ml-1" id="cart-count">0</span>
                  </a>
                  <button class="text-gray-600 hover:text-blue-600">
                    <i class="fas fa-globe mr-1"></i>DE / EN
                  </button>
                </div>
              </div>
            </div>

            {/* Main Navigation */}
            <div class="flex items-center justify-between py-4">
              <a href="/" class="flex items-center space-x-3">
                <img src="/static/logo.png" alt="SoftwareKing24" class="h-16" />
              </a>

              {/* Search Bar */}
              <div class="flex-1 max-w-2xl mx-8">
                <div class="relative">
                  <input 
                    type="text" 
                    id="global-search"
                    placeholder="Suchen Sie nach Windows, Office, Server..." 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  />
                  <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                    <i class="fas fa-search text-lg"></i>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div class="flex items-center space-x-4">
                <a href="/warenkorb" class="px-4 py-2 text-gray-700 hover:text-blue-600 transition relative">
                  <i class="fas fa-shopping-cart text-2xl"></i>
                  <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" id="cart-badge">0</span>
                </a>
                <a href="/konto" class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                  <i class="fas fa-user mr-2"></i>Anmelden
                </a>
              </div>
            </div>

            {/* Advanced Mega Menu Navigation */}
            <nav class="border-t border-gray-200 py-3">
              <ul class="flex space-x-8 text-sm font-medium">
                <li class="relative group">
                  <a href="/produkte" class="text-gray-700 hover:text-blue-600 transition flex items-center">
                    <i class="fas fa-th mr-2"></i>Alle Produkte
                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  {/* Mega Menu Dropdown */}
                  <div class="absolute left-0 top-full mt-3 w-screen max-w-4xl bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div class="grid grid-cols-4 gap-6">
                      <div>
                        <h3 class="font-bold text-gray-800 mb-3 flex items-center">
                          <i class="fab fa-windows text-blue-600 mr-2"></i>Windows
                        </h3>
                        <ul class="space-y-2">
                          <li><a href="/produkte?category=Microsoft Windows" class="text-gray-600 hover:text-blue-600 transition text-sm">Windows 11 Professional</a></li>
                          <li><a href="/produkte?category=Microsoft Windows" class="text-gray-600 hover:text-blue-600 transition text-sm">Windows 11 Home</a></li>
                          <li><a href="/produkte?category=Microsoft Windows" class="text-gray-600 hover:text-blue-600 transition text-sm">Windows 10 Professional</a></li>
                          <li><a href="/produkte?category=Microsoft Windows" class="text-red-600 hover:text-red-700 transition text-sm font-semibold">🔥 Alle Windows</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-3 flex items-center">
                          <i class="fas fa-file-word text-orange-600 mr-2"></i>Office
                        </h3>
                        <ul class="space-y-2">
                          <li><a href="/produkte?category=Microsoft Office 2024" class="text-gray-600 hover:text-blue-600 transition text-sm">Office 2024</a></li>
                          <li><a href="/produkte?category=Microsoft Office 2021" class="text-gray-600 hover:text-blue-600 transition text-sm">Office 2021</a></li>
                          <li><a href="/produkte?category=Microsoft Office 2019" class="text-gray-600 hover:text-blue-600 transition text-sm">Office 2019</a></li>
                          <li><a href="/produkte?category=Microsoft Office" class="text-red-600 hover:text-red-700 transition text-sm font-semibold">🔥 Alle Office</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-3 flex items-center">
                          <i class="fas fa-server text-green-600 mr-2"></i>Server & Business
                        </h3>
                        <ul class="space-y-2">
                          <li><a href="/produkte?category=Microsoft Server" class="text-gray-600 hover:text-blue-600 transition text-sm">Windows Server 2022</a></li>
                          <li><a href="/produkte?category=Microsoft Server" class="text-gray-600 hover:text-blue-600 transition text-sm">Windows Server 2019</a></li>
                          <li><a href="/produkte?category=Microsoft Project" class="text-gray-600 hover:text-blue-600 transition text-sm">Microsoft Project</a></li>
                          <li><a href="/produkte?category=Microsoft Visio" class="text-gray-600 hover:text-blue-600 transition text-sm">Microsoft Visio</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-3 flex items-center">
                          <i class="fab fa-apple text-gray-600 mr-2"></i>Mac Software
                        </h3>
                        <ul class="space-y-2">
                          <li><a href="/produkte?category=Microsoft Office Mac" class="text-gray-600 hover:text-blue-600 transition text-sm">Office 2024 Mac</a></li>
                          <li><a href="/produkte?category=Microsoft Office Mac" class="text-gray-600 hover:text-blue-600 transition text-sm">Office 2021 Mac</a></li>
                          <li><a href="#" class="text-gray-400 text-sm">Weitere folgen...</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="/produkte?category=Microsoft Windows" class="text-gray-700 hover:text-blue-600 transition flex items-center"><i class="fab fa-windows mr-2"></i>Windows</a></li>
                <li><a href="/produkte?category=Microsoft Office" class="text-gray-700 hover:text-blue-600 transition flex items-center"><i class="fas fa-file-alt mr-2"></i>Office</a></li>
                <li><a href="/produkte?category=Microsoft Server" class="text-gray-700 hover:text-blue-600 transition flex items-center"><i class="fas fa-server mr-2"></i>Server</a></li>
                <li><a href="#deals" class="text-red-600 hover:text-red-700 transition flex items-center badge-shimmer"><i class="fas fa-fire mr-2"></i>Top Angebote</a></li>
                <li><a href="#" class="text-gray-700 hover:text-blue-600 transition flex items-center"><i class="fas fa-question-circle mr-2"></i>Hilfe</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section with Enhanced Animation */}
        <section class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 relative overflow-hidden">
          {/* Animated Background */}
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
          </div>

          <div class="container mx-auto px-4 relative z-10">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <div class="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
                  <i class="fas fa-fire mr-2"></i>Bis zu 70% sparen - Limitierte Zeit!
                </div>
                <h1 class="text-5xl font-bold mb-6 leading-tight">
                  Original Microsoft<br />
                  Software zu<br />
                  <span class="text-yellow-300">unschlagbaren Preisen</span>
                </h1>
                <p class="text-xl mb-8 text-blue-100">
                  ✓ Sofortiger Download • ✓ Lebenslange Lizenz • ✓ 100% Original • ✓ Deutscher Support
                </p>
                <div class="flex space-x-4">
                  <a href="/produkte" class="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition text-lg shadow-xl">
                    <i class="fas fa-shopping-bag mr-2"></i>Jetzt einkaufen
                  </a>
                  <a href="#deals" class="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition text-lg">
                    <i class="fas fa-fire mr-2"></i>Top Deals ansehen
                  </a>
                </div>
                
                {/* Enhanced Trust Badges */}
                <div class="grid grid-cols-3 gap-6 mt-12">
                  <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i class="fas fa-shield-alt text-gray-900 text-xl"></i>
                      </div>
                      <div>
                        <p class="font-bold text-lg">100% Sicher</p>
                        <p class="text-sm text-blue-200">SSL Verschlüsselt</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i class="fas fa-bolt text-gray-900 text-xl"></i>
                      </div>
                      <div>
                        <p class="font-bold text-lg">Sofort-Download</p>
                        <p class="text-sm text-blue-200">In 5 Minuten</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i class="fas fa-headset text-gray-900 text-xl"></i>
                      </div>
                      <div>
                        <p class="font-bold text-lg">24/7 Support</p>
                        <p class="text-sm text-blue-200">Deutschsprachig</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-1 flex justify-center">
                <div class="relative">
                  <div class="w-96 h-96 bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <h3 class="text-2xl font-bold mb-6">Beliebteste Produkte</h3>
                    <div class="flex flex-col space-y-4">
                      <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between hover:bg-white/30 transition cursor-pointer">
                        <div class="flex items-center space-x-4">
                          <i class="fab fa-windows text-4xl"></i>
                          <div>
                            <p class="font-semibold">Windows 11 Pro</p>
                            <p class="text-sm text-blue-200">Vollversion</p>
                          </div>
                        </div>
                        <div class="text-right">
                          <p class="text-2xl font-bold text-yellow-300">19,99 €</p>
                          <p class="text-xs line-through text-blue-200">99,99 €</p>
                        </div>
                      </div>
                      <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between hover:bg-white/30 transition cursor-pointer">
                        <div class="flex items-center space-x-4">
                          <i class="fas fa-file-word text-4xl"></i>
                          <div>
                            <p class="font-semibold">Office 2024 Pro</p>
                            <p class="text-sm text-blue-200">Vollversion</p>
                          </div>
                        </div>
                        <div class="text-right">
                          <p class="text-2xl font-bold text-yellow-300">24,99 €</p>
                          <p class="text-xs line-through text-blue-200">149,99 €</p>
                        </div>
                      </div>
                      <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between hover:bg-white/30 transition cursor-pointer">
                        <div class="flex items-center space-x-4">
                          <i class="fas fa-server text-4xl"></i>
                          <div>
                            <p class="font-semibold">Server 2022</p>
                            <p class="text-sm text-blue-200">Standard</p>
                          </div>
                        </div>
                        <div class="text-right">
                          <p class="text-2xl font-bold text-yellow-300">39,99 €</p>
                          <p class="text-xs line-through text-blue-200">399,99 €</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deals Section with Countdown */}
        <section id="deals" class="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <div class="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
                <i class="fas fa-fire mr-2"></i>Flash Sale - Nur heute!
              </div>
              <h2 class="text-4xl font-bold mb-4">
                Top Angebote - Bis zu 70% sparen!
              </h2>
              <div class="flex justify-center items-center space-x-8 text-2xl font-bold countdown-timer">
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div id="hours" class="text-4xl">23</div>
                  <div class="text-sm font-normal">Stunden</div>
                </div>
                <div class="text-4xl">:</div>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div id="minutes" class="text-4xl">59</div>
                  <div class="text-sm font-normal">Minuten</div>
                </div>
                <div class="text-4xl">:</div>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div id="seconds" class="text-4xl">59</div>
                  <div class="text-sm font-normal">Sekunden</div>
                </div>
              </div>
            </div>

            <div id="deals-products" class="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Deals will load dynamically */}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="featured" class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-12">
              <div>
                <h2 class="text-4xl font-bold text-gray-800 mb-2">
                  <i class="fas fa-star text-yellow-500 mr-3"></i>
                  Meistverkaufte Produkte
                </h2>
                <p class="text-gray-600 text-lg">Die beliebtesten Produkte unserer Kunden</p>
              </div>
              <a href="/produkte" class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Alle Produkte <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div id="featured-products" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Products will be loaded dynamically */}
            </div>
          </div>
        </section>

        {/* Categories with Enhanced Design */}
        <section class="py-16 bg-gray-50">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-800 mb-4">Produktkategorien</h2>
              <p class="text-gray-600 text-lg">Finden Sie die perfekte Software für Ihre Bedürfnisse</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="/produkte?category=Microsoft Windows" class="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-8 text-center relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  3 Produkte
                </div>
                <div class="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                  <i class="fab fa-windows text-5xl text-blue-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Windows</h3>
                <p class="text-gray-600 mb-4">Betriebssysteme für Privat und Business</p>
                <ul class="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Windows 11 Professional</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Windows 11 Home</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Windows 10 Professional</li>
                </ul>
                <span class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold group-hover:bg-blue-700 transition">
                  Jetzt entdecken <i class="fas fa-arrow-right ml-2"></i>
                </span>
              </a>

              <a href="/produkte?category=Microsoft Office" class="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-8 text-center relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  7 Produkte
                </div>
                <div class="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                  <i class="fas fa-file-alt text-5xl text-orange-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Office</h3>
                <p class="text-gray-600 mb-4">Produktivitätssoftware für jeden Einsatz</p>
                <ul class="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Office 2024 Vollversion</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Office 2021 Vollversion</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Office 2019 Vollversion</li>
                </ul>
                <span class="inline-block px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold group-hover:bg-orange-700 transition">
                  Jetzt entdecken <i class="fas fa-arrow-right ml-2"></i>
                </span>
              </a>

              <a href="/produkte?category=Microsoft Server" class="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-8 text-center relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  5 Produkte
                </div>
                <div class="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                  <i class="fas fa-server text-5xl text-green-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Server & Business</h3>
                <p class="text-gray-600 mb-4">Enterprise Lösungen für Unternehmen</p>
                <ul class="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Windows Server 2022</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Microsoft Project</li>
                  <li><i class="fas fa-check text-green-600 mr-2"></i>Microsoft Visio</li>
                </ul>
                <span class="inline-block px-6 py-2 bg-green-600 text-white rounded-lg font-semibold group-hover:bg-green-700 transition">
                  Jetzt entdecken <i class="fas fa-arrow-right ml-2"></i>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-800 mb-4">Warum SoftwareKing24?</h2>
              <p class="text-gray-600 text-lg">Über 10.000 zufriedene Kunden vertrauen uns</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <i class="fas fa-certificate text-4xl text-blue-600"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">100% Original</h3>
                <p class="text-gray-600 text-sm">Alle Lizenzen sind echt, legal und direkt von Microsoft</p>
              </div>

              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <i class="fas fa-bolt text-4xl text-green-600"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">Sofortiger Download</h3>
                <p class="text-gray-600 text-sm">Lizenzkey per E-Mail innerhalb von 5 Minuten</p>
              </div>

              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <i class="fas fa-shield-alt text-4xl text-yellow-600"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">100% Sichere Zahlung</h3>
                <p class="text-gray-600 text-sm">SSL verschlüsselt mit PayPal, Stripe & Kreditkarte</p>
              </div>

              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <i class="fas fa-headset text-4xl text-purple-600"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">Deutscher Support</h3>
                <p class="text-gray-600 text-sm">24/7 deutschsprachiger Kundensupport für Sie da</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section class="py-16 bg-gray-50">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-800 mb-4">Was unsere Kunden sagen</h2>
              <div class="flex justify-center items-center space-x-2 text-yellow-500 text-2xl mb-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span class="text-gray-600 text-lg ml-3">4.9 von 5.0 (10.234 Bewertungen)</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div class="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6">
                <div class="flex items-center mb-4">
                  <div class="flex text-yellow-500 text-lg">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="ml-3 text-sm text-gray-500">vor 2 Tagen</span>
                </div>
                <p class="text-gray-700 mb-4 italic">"Schnelle Lieferung, originale Software und super Preis. Aktivierung funktionierte problemlos. Kann ich nur empfehlen!"</p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3">
                    <i class="fas fa-user text-blue-600"></i>
                  </div>
                  <div>
                    <p class="font-semibold">Michael Schmidt</p>
                    <p class="text-sm text-gray-500">Windows 11 Pro Käufer</p>
                  </div>
                  <div class="ml-auto">
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verifiziert</span>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6">
                <div class="flex items-center mb-4">
                  <div class="flex text-yellow-500 text-lg">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="ml-3 text-sm text-gray-500">vor 1 Woche</span>
                </div>
                <p class="text-gray-700 mb-4 italic">"Top Service! Lizenz kam innerhalb von 5 Minuten per E-Mail. Office 2024 läuft einwandfrei. Absolut zufrieden!"</p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mr-3">
                    <i class="fas fa-user text-orange-600"></i>
                  </div>
                  <div>
                    <p class="font-semibold">Anna Müller</p>
                    <p class="text-sm text-gray-500">Office 2024 Käuferin</p>
                  </div>
                  <div class="ml-auto">
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verifiziert</span>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6">
                <div class="flex items-center mb-4">
                  <div class="flex text-yellow-500 text-lg">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="ml-3 text-sm text-gray-500">vor 3 Tagen</span>
                </div>
                <p class="text-gray-700 mb-4 italic">"Beste Preise im Vergleich, schnelle Abwicklung und super Support. Habe schon mehrfach hier gekauft. Top!"</p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-3">
                    <i class="fas fa-user text-green-600"></i>
                  </div>
                  <div>
                    <p class="font-semibold">Thomas Krause</p>
                    <p class="text-sm text-gray-500">Stammkunde</p>
                  </div>
                  <div class="ml-auto">
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verifiziert</span>
                  </div>
                </div>
              </div>
            </div>

            {/* More Reviews */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center mb-3">
                  <div class="flex text-yellow-500">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="ml-3 text-sm text-gray-500">vor 5 Tagen</span>
                </div>
                <p class="text-gray-700 text-sm mb-3">"Professionelle Abwicklung. Server 2022 Lizenz funktioniert perfekt für unser Unternehmen."</p>
                <div class="flex items-center text-sm">
                  <span class="font-semibold">Petra Weber</span>
                  <span class="mx-2">•</span>
                  <span class="text-gray-500">Server 2022 Käuferin</span>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center mb-3">
                  <div class="flex text-yellow-500">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="ml-3 text-sm text-gray-500">vor 1 Woche</span>
                </div>
                <p class="text-gray-700 text-sm mb-3">"Sehr zufrieden! Gute Preise, schnelle Lieferung und authentische Lizenzschlüssel."</p>
                <div class="flex items-center text-sm">
                  <span class="font-semibold">Markus Hoffmann</span>
                  <span class="mx-2">•</span>
                  <span class="text-gray-500">Windows 10 Käufer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Bereit für Original-Software?</h2>
            <p class="text-xl mb-8 text-blue-100">Starten Sie jetzt und sparen Sie bis zu 70% gegenüber UVP</p>
            <div class="flex justify-center space-x-4">
              <a href="/produkte" class="inline-block px-10 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition text-lg shadow-xl">
                <i class="fas fa-shopping-bag mr-2"></i>Jetzt einkaufen
              </a>
              <a href="#" class="inline-block px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition text-lg">
                <i class="fas fa-phone mr-2"></i>Beratung anfordern
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="bg-gray-900 text-white py-12">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <img src="/static/logo.png" alt="SoftwareKing24" class="h-16 mb-4 brightness-0 invert" />
                <p class="text-gray-400 text-sm mb-4">
                  Ihre vertrauenswürdige Quelle für Original-Software zu fairen Preisen. Das Original - Einfach günstig gut.
                </p>
                <div class="flex space-x-3">
                  <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div>
                <h4 class="font-bold mb-4">Produkte</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                  <li><a href="/produkte?category=Microsoft Windows" class="hover:text-white transition">Windows</a></li>
                  <li><a href="/produkte?category=Microsoft Office" class="hover:text-white transition">Office</a></li>
                  <li><a href="/produkte?category=Microsoft Server" class="hover:text-white transition">Server</a></li>
                  <li><a href="/produkte" class="hover:text-white transition">Alle Produkte</a></li>
                </ul>
              </div>

              <div>
                <h4 class="font-bold mb-4">Kundenservice</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                  <li><a href="#" class="hover:text-white transition">FAQ</a></li>
                  <li><a href="#" class="hover:text-white transition">Versand & Lieferung</a></li>
                  <li><a href="#" class="hover:text-white transition">Zahlungsarten</a></li>
                  <li><a href="#" class="hover:text-white transition">Kontakt</a></li>
                </ul>
              </div>

              <div>
                <h4 class="font-bold mb-4">Rechtliches</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                  <li><a href="#" class="hover:text-white transition">AGB</a></li>
                  <li><a href="#" class="hover:text-white transition">Datenschutz</a></li>
                  <li><a href="#" class="hover:text-white transition">Impressum</a></li>
                  <li><a href="#" class="hover:text-white transition">Widerrufsrecht</a></li>
                </ul>
              </div>
            </div>

            <div class="border-t border-gray-800 pt-8">
              <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="text-sm text-gray-400 mb-4 md:mb-0">
                  <p>&copy; 2026 SoftwareKing24. Alle Rechte vorbehalten.</p>
                </div>
                <div>
                  <h4 class="font-bold mb-2 text-sm">Sichere Zahlungsarten</h4>
                  <div class="flex space-x-4 text-3xl text-gray-400">
                    <i class="fab fa-cc-paypal hover:text-white transition"></i>
                    <i class="fab fa-cc-visa hover:text-white transition"></i>
                    <i class="fab fa-cc-mastercard hover:text-white transition"></i>
                    <i class="fab fa-cc-stripe hover:text-white transition"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* JavaScript */}
        <script dangerouslySetInnerHTML={{__html: `
          // Format price
          function formatPrice(cents) {
            return (cents / 100).toFixed(2).replace('.', ',') + ' €';
          }

          // Render product card with View button
          function renderProductCard(product) {
            const price = formatPrice(product.price);
            const salePrice = product.sale_price ? formatPrice(product.sale_price) : null;
            const savings = salePrice ? Math.round(((product.price - product.sale_price) / product.price) * 100) : 0;

            return \`
              <div class="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all product-card overflow-hidden">
                <div class="relative">
                  <div class="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-6">
                    <i class="fas fa-box text-6xl text-gray-300 group-hover:text-blue-400 transition"></i>
                  </div>
                  \${savings > 0 ? \`
                    <div class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold badge-shimmer">
                      -\${savings}%
                    </div>
                  \` : ''}
                  \${product.is_featured ? \`
                    <div class="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                      <i class="fas fa-star mr-1"></i>Bestseller
                    </div>
                  \` : ''}
                </div>
                
                <div class="p-5">
                  <div class="mb-2">
                    <span class="text-xs text-gray-500 font-medium">\${product.category}</span>
                  </div>
                  <h3 class="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition">
                    \${product.name}
                  </h3>
                  
                  <div class="flex items-baseline justify-between mb-4">
                    <div>
                      \${salePrice ? \`
                        <div class="flex items-center space-x-2">
                          <span class="text-2xl font-bold text-red-600">\${salePrice}</span>
                          <span class="text-sm text-gray-400 line-through">\${price}</span>
                        </div>
                      \` : \`
                        <span class="text-2xl font-bold text-gray-800">\${price}</span>
                      \`}
                    </div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <button 
                      onclick="viewProduct(\${product.id})" 
                      class="flex-1 bg-gray-100 text-gray-800 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition font-semibold text-sm"
                    >
                      <i class="fas fa-eye mr-2"></i>Ansehen
                    </button>
                    <button 
                      onclick="addToCart(\${product.id})" 
                      class="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
                    >
                      <i class="fas fa-cart-plus mr-2"></i>In den Warenkorb
                    </button>
                  </div>
                  
                  <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span><i class="fas fa-download mr-1"></i>Sofort-Download</span>
                    <span><i class="fas fa-shield-alt mr-1"></i>100% Original</span>
                  </div>
                </div>
              </div>
            \`;
          }

          // Load featured products
          async function loadFeaturedProducts() {
            try {
              const response = await axios.get('/api/products/featured');
              const products = response.data.data;

              const container = document.getElementById('featured-products');
              container.innerHTML = products.slice(0, 8).map(renderProductCard).join('');
            } catch (error) {
              console.error('Error loading featured products:', error);
            }
          }

          // Load deals products
          async function loadDealsProducts() {
            try {
              const response = await axios.get('/api/products?sort=price-asc');
              const products = response.data.data.filter(p => p.sale_price);

              const container = document.getElementById('deals-products');
              container.innerHTML = products.slice(0, 4).map(renderProductCard).join('');
            } catch (error) {
              console.error('Error loading deals:', error);
            }
          }

          // Countdown timer
          function startCountdown() {
            const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
            
            setInterval(() => {
              const now = new Date().getTime();
              const distance = endTime - now;
              
              const hours = Math.floor(distance / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
              document.getElementById('hours').textContent = String(hours).padStart(2, '0');
              document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
              document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            }, 1000);
          }

          // View product
          function viewProduct(productId) {
            window.location.href = '/produkt/' + productId;
          }

          // Add to cart
          async function addToCart(productId) {
            try {
              const response = await axios.post('/api/cart/add', {
                productId,
                quantity: 1,
                licenseType: 'single'
              });

              if (response.data.success) {
                // Update cart count
                const countElements = document.querySelectorAll('#cart-count, #cart-badge');
                countElements.forEach(el => {
                  el.textContent = parseInt(el.textContent) + 1;
                });
                
                // Show success message
                showNotification('Produkt wurde zum Warenkorb hinzugefügt!', 'success');
              }
            } catch (error) {
              console.error('Error adding to cart:', error);
              showNotification('Fehler beim Hinzufügen zum Warenkorb', 'error');
            }
          }

          // Show notification
          function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = \`fixed top-20 right-4 px-6 py-4 rounded-lg shadow-xl text-white z-50 \${type === 'success' ? 'bg-green-500' : 'bg-red-500'}\`;
            notification.innerHTML = \`
              <div class="flex items-center space-x-3">
                <i class="fas fa-\${type === 'success' ? 'check-circle' : 'exclamation-circle'} text-xl"></i>
                <span>\${message}</span>
              </div>
            \`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
              notification.remove();
            }, 3000);
          }

          // Search
          document.getElementById('global-search').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
              const query = e.target.value;
              window.location.href = '/produkte?search=' + encodeURIComponent(query);
            }
          });

          // Initialize
          loadFeaturedProducts();
          loadDealsProducts();
          startCountdown();
        `}} />
      </body>
    </html>
  );
};
