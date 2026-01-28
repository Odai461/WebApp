export const ProductDetailPage = ({ productSlug }: { productSlug: string }) => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title id="page-title">Produktdetails - SoftwareKing24</title>
        <meta name="description" id="page-description" content="Kaufen Sie originale Software Lizenzen bei SoftwareKing24. Sofort verfügbar, 100% legal, günstige Preise.">
        <meta name="keywords" id="page-keywords" content="Software kaufen, Windows Lizenz, Office Lizenz, Antivirus">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="product">
        <meta property="og:site_name" content="SoftwareKing24">
        <meta property="og:title" id="og-title" content="Produktdetails - SoftwareKing24">
        <meta property="og:description" id="og-description" content="">
        <meta property="og:image" id="og-image" content="">
        <meta property="og:url" id="og-url" content="">
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" id="twitter-title" content="">
        <meta name="twitter:description" id="twitter-description" content="">
        <meta name="twitter:image" id="twitter-image" content="">
        
        <!-- Canonical URL -->
        <link rel="canonical" id="canonical-url" href="">
        
        <!-- Schema.org structured data will be injected here -->
        <script type="application/ld+json" id="product-schema"></script>
        <script type="application/ld+json" id="breadcrumb-schema"></script>
        <script type="application/ld+json" id="organization-schema">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SoftwareKing24",
          "url": "https://softwareking24.de",
          "logo": "https://softwareking24.de/static/logo.png",
          "description": "Führender Anbieter für Software-Lizenzen in Deutschland",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "DE"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "8580"
          }
        }
        </script>
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        
        <style>
            :root {
                --navy-dark: #1a2a4e;
                --navy-medium: #2d3e6f;
                --gold: #d4af37;
                --gold-light: #e8c966;
            }
            
            .bg-navy-dark { background-color: var(--navy-dark); }
            .bg-navy-medium { background-color: var(--navy-medium); }
            .text-navy-dark { color: var(--navy-dark); }
            .text-gold { color: var(--gold); }
            .bg-gold { background-color: var(--gold); }
            .border-gold { border-color: var(--gold); }
            
            .product-tabs button.active {
                border-bottom: 3px solid var(--gold);
                color: var(--navy-dark);
                font-weight: bold;
            }
            
            .hover-lift {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-lift:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
            }
            
            .review-stars i {
                color: var(--gold);
            }
            
            .feature-check {
                color: var(--gold);
                margin-right: 0.5rem;
            }
            
            .sticky-add-to-cart {
                position: sticky;
                top: 80px;
                z-index: 40;
            }
            
            .image-gallery img {
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .image-gallery img:hover {
                transform: scale(1.05);
                border-color: var(--gold);
            }
            
            .breadcrumb a:hover {
                color: var(--gold);
            }
            
            .gradient-gold {
                background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
            }
            
            .pulse-gold {
                animation: pulse-gold 2s infinite;
            }
            
            @keyframes pulse-gold {
                0%, 100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
                50% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-lg sticky top-0 z-50">
            <div class="w-full px-8 py-3">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="/static/logo.png" alt="SoftwareKing24" class="h-16" />
                    </a>
                    
                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-8">
                        <div class="relative">
                            <input type="text" 
                                   placeholder="Suchen Sie nach Windows, Office, Server, Antivirus..." 
                                   class="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition-all">
                            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold hover:bg-gold-light text-navy-dark px-6 py-2 rounded-lg font-bold transition-all">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Header Actions -->
                    <div class="flex items-center space-x-4">
                        <a href="/login" class="flex items-center text-navy-dark hover:text-gold transition-colors">
                            <i class="fas fa-user text-2xl"></i>
                            <div class="ml-2">
                                <div class="text-xs text-gray-600">Anmelden</div>
                                <div class="font-semibold">Mein Konto</div>
                            </div>
                        </a>
                        
                        <a href="/warenkorb" class="relative flex items-center bg-navy-dark hover:bg-navy-medium text-white px-4 py-3 rounded-lg transition-all hover-lift">
                            <i class="fas fa-shopping-cart text-xl"></i>
                            <span class="ml-2 font-semibold">Warenkorb</span>
                            <span class="absolute -top-2 -right-2 bg-gold text-navy-dark w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" id="cart-badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Product Detail Container -->
        <main class="w-full px-8 py-8">
            <div id="product-detail-container">
                <div class="text-center py-20">
                    <i class="fas fa-spinner fa-spin text-4xl text-gold mb-4"></i>
                    <p class="text-gray-600 text-lg">Lade Produktdetails...</p>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-navy-dark text-white py-12 mt-16">
            <div class="w-full px-8">
                <div class="grid grid-cols-4 gap-8 mb-8">
                    <div>
                        <img src="/static/logo.png" alt="SoftwareKing24" class="h-12 mb-4 brightness-0 invert" />
                        <p class="text-gray-300 text-sm mb-4">
                            Ihr vertrauenswürdiger Partner für originale Software-Lizenzen. 
                            Sofort verfügbar, 100% legal, günstige Preise.
                        </p>
                        <div class="review-stars text-xl">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ml-2 text-sm text-gray-300">4.9/5 (8.580 Bewertungen)</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-gold font-bold mb-4">Produkte</h3>
                        <ul class="space-y-2 text-gray-300 text-sm">
                            <li><a href="/produkte?category=Windows" class="hover:text-gold transition-colors">Windows</a></li>
                            <li><a href="/produkte?category=Microsoft Office" class="hover:text-gold transition-colors">Microsoft Office</a></li>
                            <li><a href="/produkte?category=Server" class="hover:text-gold transition-colors">Server & CAL</a></li>
                            <li><a href="/produkte?category=Antivirus" class="hover:text-gold transition-colors">Antivirus</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-gold font-bold mb-4">Kundenservice</h3>
                        <ul class="space-y-2 text-gray-300 text-sm">
                            <li><a href="/kontakt" class="hover:text-gold transition-colors">Kontakt</a></li>
                            <li><a href="/faq" class="hover:text-gold transition-colors">FAQ</a></li>
                            <li><a href="/versand" class="hover:text-gold transition-colors">Versand & Lieferung</a></li>
                            <li><a href="/garantie" class="hover:text-gold transition-colors">Garantie</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-gold font-bold mb-4">Rechtliches</h3>
                        <ul class="space-y-2 text-gray-300 text-sm">
                            <li><a href="/impressum" class="hover:text-gold transition-colors">Impressum</a></li>
                            <li><a href="/datenschutz" class="hover:text-gold transition-colors">Datenschutz</a></li>
                            <li><a href="/agb" class="hover:text-gold transition-colors">AGB</a></li>
                            <li><a href="/widerruf" class="hover:text-gold transition-colors">Widerrufsrecht</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2026 SoftwareKing24. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>

        <script>
          const productSlug = '${productSlug}';

          function formatPrice(cents) {
            if (!cents) return '0,00 €';
            return (cents / 100).toFixed(2).replace('.', ',') + ' €';
          }

          function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            let html = '';
            
            for (let i = 0; i < fullStars; i++) {
              html += '<i class="fas fa-star"></i>';
            }
            if (hasHalfStar) {
              html += '<i class="fas fa-star-half-alt"></i>';
            }
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
              html += '<i class="far fa-star"></i>';
            }
            
            return html;
          }

          function updateSEO(product) {
            // Update page title and meta tags
            const fullTitle = product.name + ' kaufen - Original Lizenz | SoftwareKing24';
            document.title = fullTitle;
            document.getElementById('page-title').textContent = fullTitle;
            
            const description = product.shortDescription || product.description?.substring(0, 160);
            document.getElementById('page-description').content = description;
            
            const keywords = [product.name, product.category, product.brand, 'kaufen', 'Lizenz', 'Original'].join(', ');
            document.getElementById('page-keywords').content = keywords;
            
            // Open Graph
            document.getElementById('og-title').content = fullTitle;
            document.getElementById('og-description').content = description;
            document.getElementById('og-image').content = window.location.origin + product.image;
            document.getElementById('og-url').content = window.location.href;
            
            // Twitter Card
            document.getElementById('twitter-title').content = fullTitle;
            document.getElementById('twitter-description').content = description;
            document.getElementById('twitter-image').content = window.location.origin + product.image;
            
            // Canonical URL
            document.getElementById('canonical-url').href = window.location.href;
            
            // Product Schema
            const productSchema = {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": product.name,
              "description": description,
              "image": window.location.origin + product.image,
              "sku": product.sku,
              "brand": {
                "@type": "Brand",
                "name": product.brand
              },
              "offers": {
                "@type": "Offer",
                "url": window.location.href,
                "priceCurrency": "EUR",
                "price": (product.sale_price || product.price) / 100,
                "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                "availability": product.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                "seller": {
                  "@type": "Organization",
                  "name": "SoftwareKing24"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": product.rating || 4.8,
                "reviewCount": product.reviewCount || 100
              }
            };
            document.getElementById('product-schema').textContent = JSON.stringify(productSchema);
            
            // Breadcrumb Schema
            const breadcrumbSchema = {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": window.location.origin
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Produkte",
                  "item": window.location.origin + "/produkte"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": product.category,
                  "item": window.location.origin + "/produkte?category=" + encodeURIComponent(product.category)
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": product.name,
                  "item": window.location.href
                }
              ]
            };
            document.getElementById('breadcrumb-schema').textContent = JSON.stringify(breadcrumbSchema);
          }

          async function loadProduct() {
            try {
              const response = await axios.get('/api/products/' + productSlug);
              const product = response.data.data;

              // Update SEO
              updateSEO(product);

              const price = formatPrice(product.price);
              const salePrice = product.sale_price ? formatPrice(product.sale_price) : null;
              const savings = salePrice ? Math.round(((product.price - product.sale_price) / product.price) * 100) : 0;
              const finalPrice = salePrice || price;
              
              const features = product.features || [];
              const rating = product.rating || 4.8;
              const reviewCount = product.reviewCount || 100;

              document.getElementById('product-detail-container').innerHTML = \`
                <!-- Breadcrumb -->
                <nav class="breadcrumb text-sm text-gray-600 mb-6">
                  <a href="/" class="hover:text-gold transition-colors">
                    <i class="fas fa-home mr-1"></i>Home
                  </a>
                  <span class="mx-2">/</span>
                  <a href="/produkte" class="hover:text-gold transition-colors">Produkte</a>
                  <span class="mx-2">/</span>
                  <a href="/produkte?category=\${encodeURIComponent(product.category)}" class="hover:text-gold transition-colors">\${product.category}</a>
                  <span class="mx-2">/</span>
                  <span class="text-navy-dark font-semibold">\${product.name}</span>
                </nav>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <!-- Left Column - Images -->
                  <div class="lg:col-span-1">
                    <div class="sticky-add-to-cart">
                      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <div class="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                          <img src="\${product.image}" alt="\${product.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                          <div style="display:none;" class="w-full h-full flex items-center justify-center">
                            <i class="fas fa-box text-9xl text-gray-300"></i>
                          </div>
                        </div>
                        \${savings > 0 ? \`
                          <div class="bg-red-500 text-white px-4 py-2 rounded-lg inline-flex items-center mb-4 pulse-gold">
                            <i class="fas fa-fire mr-2"></i>
                            <span class="font-bold">-\${savings}% Rabatt!</span>
                          </div>
                        \` : ''}
                        <div class="flex items-center text-sm text-gray-600 mb-2">
                          <i class="fas fa-shield-alt text-gold mr-2"></i>
                          <span>100% Original & Legal</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-600 mb-2">
                          <i class="fas fa-bolt text-gold mr-2"></i>
                          <span>Sofortiger Download</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-600">
                          <i class="fas fa-headset text-gold mr-2"></i>
                          <span>24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Middle Column - Product Info -->
                  <div class="lg:col-span-2">
                    <div class="bg-white rounded-xl shadow-lg p-8">
                      <!-- Product Header -->
                      <div class="mb-6">
                        <div class="flex items-center space-x-2 mb-3">
                          <span class="bg-navy-dark text-gold px-3 py-1 rounded-full text-xs font-bold uppercase">
                            \${product.category}
                          </span>
                          \${product.isBestseller ? '<span class="bg-gold text-navy-dark px-3 py-1 rounded-full text-xs font-bold">BESTSELLER</span>' : ''}
                          \${product.isNew ? '<span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEU</span>' : ''}
                        </div>
                        
                        <h1 class="text-4xl font-bold text-navy-dark mb-4">\${product.name}</h1>
                        
                        <!-- Rating & Reviews -->
                        <div class="flex items-center space-x-4 mb-6">
                          <div class="review-stars text-xl">
                            \${generateStars(rating)}
                          </div>
                          <span class="text-gray-600 font-semibold">\${rating}/5</span>
                          <a href="#reviews" class="text-gold hover:underline">(\${reviewCount} Bewertungen)</a>
                        </div>
                        
                        <!-- Price -->
                        <div class="bg-gray-50 rounded-lg p-6 border-2 border-gold">
                          <div class="flex items-baseline space-x-4 mb-2">
                            \${salePrice ? \`
                              <span class="text-5xl font-bold text-red-600">\${salePrice}</span>
                              <span class="text-2xl text-gray-400 line-through">\${price}</span>
                            \` : \`
                              <span class="text-5xl font-bold text-navy-dark">\${price}</span>
                            \`}
                          </div>
                          <div class="text-sm text-gray-600 mb-4">inkl. 19% MwSt.</div>
                          
                          <!-- Add to Cart Button -->
                          <button onclick="addToCart(\${product.id}, '\${product.name.replace(/'/g, "\\\\'")}', \${product.sale_price || product.price}, '\${product.image}')" 
                                  class="w-full gradient-gold text-navy-dark font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all text-xl hover-lift mb-3">
                            <i class="fas fa-shopping-cart mr-3"></i>
                            In den Warenkorb
                          </button>
                          
                          <button class="w-full bg-navy-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-navy-medium transition-all">
                            <i class="fas fa-bolt mr-2"></i>
                            Jetzt kaufen
                          </button>
                        </div>
                      </div>
                      
                      <!-- Short Description -->
                      <div class="mb-8 pb-8 border-b border-gray-200">
                        <p class="text-lg text-gray-700 leading-relaxed">
                          \${product.shortDescription || product.description}
                        </p>
                      </div>
                      
                      <!-- Key Features -->
                      <div class="mb-8">
                        <h2 class="text-2xl font-bold text-navy-dark mb-4">
                          <i class="fas fa-check-circle text-gold mr-2"></i>
                          Hauptmerkmale
                        </h2>
                        <div class="grid grid-cols-2 gap-3">
                          \${features.map(feature => \`
                            <div class="flex items-start">
                              <i class="fas fa-check feature-check mt-1"></i>
                              <span class="text-gray-700">\${feature}</span>
                            </div>
                          \`).join('')}
                        </div>
                      </div>
                      
                      <!-- Tabs -->
                      <div class="mb-8">
                        <div class="product-tabs border-b border-gray-200 mb-6">
                          <button class="px-6 py-3 active" onclick="showTab('description', event)">
                            <i class="fas fa-file-alt mr-2"></i>Beschreibung
                          </button>
                          <button class="px-6 py-3" onclick="showTab('details', event)">
                            <i class="fas fa-info-circle mr-2"></i>Details
                          </button>
                          <button class="px-6 py-3" onclick="showTab('delivery', event)">
                            <i class="fas fa-shipping-fast mr-2"></i>Lieferung
                          </button>
                        </div>
                        
                        <div id="tab-description" class="tab-content">
                          <div class="prose max-w-none text-gray-700">
                            \${product.description || '<p>Keine Beschreibung verfügbar.</p>'}
                          </div>
                        </div>
                        
                        <div id="tab-details" class="tab-content" style="display:none;">
                          <div class="grid grid-cols-2 gap-4">
                            <div><span class="font-bold">SKU:</span> \${product.sku}</div>
                            <div><span class="font-bold">Kategorie:</span> \${product.category}</div>
                            <div><span class="font-bold">Marke:</span> \${product.brand}</div>
                            <div><span class="font-bold">Lagerbestand:</span> <span class="text-green-600 font-bold">Auf Lager</span></div>
                            <div><span class="font-bold">Lieferzeit:</span> Sofort verfügbar</div>
                            <div><span class="font-bold">Lizenztyp:</span> Dauerlizenz</div>
                          </div>
                        </div>
                        
                        <div id="tab-delivery" class="tab-content" style="display:none;">
                          <div class="space-y-4">
                            <div class="flex items-start">
                              <i class="fas fa-envelope text-gold text-2xl mr-4 mt-1"></i>
                              <div>
                                <h3 class="font-bold text-navy-dark mb-2">E-Mail Versand</h3>
                                <p class="text-gray-700">Sie erhalten Ihren Lizenzschlüssel sofort nach Zahlungseingang per E-Mail. Kein Versand, keine Wartezeit!</p>
                              </div>
                            </div>
                            <div class="flex items-start">
                              <i class="fas fa-download text-gold text-2xl mr-4 mt-1"></i>
                              <div>
                                <h3 class="font-bold text-navy-dark mb-2">Download-Links inklusive</h3>
                                <p class="text-gray-700">Alle notwendigen Download-Links für die Software sind in der E-Mail enthalten. Sofort einsatzbereit!</p>
                              </div>
                            </div>
                            <div class="flex items-start">
                              <i class="fas fa-life-ring text-gold text-2xl mr-4 mt-1"></i>
                              <div>
                                <h3 class="font-bold text-navy-dark mb-2">Support inklusive</h3>
                                <p class="text-gray-700">Kostenloser E-Mail-Support bei Fragen zur Installation oder Aktivierung. Wir helfen Ihnen gerne!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Trust Badges -->
                      <div class="grid grid-cols-4 gap-4 mb-6 p-6 bg-gray-50 rounded-lg">
                        <div class="text-center">
                          <i class="fas fa-shield-check text-gold text-3xl mb-2"></i>
                          <div class="text-xs font-semibold text-navy-dark">Sichere Zahlung</div>
                        </div>
                        <div class="text-center">
                          <i class="fas fa-certificate text-gold text-3xl mb-2"></i>
                          <div class="text-xs font-semibold text-navy-dark">100% Original</div>
                        </div>
                        <div class="text-center">
                          <i class="fas fa-undo text-gold text-3xl mb-2"></i>
                          <div class="text-xs font-semibold text-navy-dark">14 Tage Rückgabe</div>
                        </div>
                        <div class="text-center">
                          <i class="fas fa-headset text-gold text-3xl mb-2"></i>
                          <div class="text-xs font-semibold text-navy-dark">24/7 Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              \`;
              
              // Update cart badge
              if (window.CartManager) {
                const cartCount = window.CartManager.getCartCount();
                document.getElementById('cart-badge').textContent = cartCount;
              }
            } catch (error) {
              console.error('Error loading product:', error);
              document.getElementById('product-detail-container').innerHTML = \`
                <div class="bg-red-50 border-2 border-red-500 rounded-xl p-8 text-center">
                  <i class="fas fa-exclamation-triangle text-red-500 text-5xl mb-4"></i>
                  <h2 class="text-2xl font-bold text-red-700 mb-2">Produkt nicht gefunden</h2>
                  <p class="text-red-600 mb-6">Das angeforderte Produkt konnte nicht geladen werden.</p>
                  <a href="/produkte" class="inline-block bg-navy-dark text-white px-8 py-3 rounded-lg hover:bg-navy-medium transition-all">
                    <i class="fas fa-arrow-left mr-2"></i>Zurück zu den Produkten
                  </a>
                </div>
              \`;
            }
          }
          
          function showTab(tabName, event) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
              tab.style.display = 'none';
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.product-tabs button').forEach(btn => {
              btn.classList.remove('active');
            });
            
            // Show selected tab
            document.getElementById('tab-' + tabName).style.display = 'block';
            
            // Add active class to clicked button
            event.target.classList.add('active');
          }
          
          function addToCart(id, name, price, image) {
            if (window.CartManager) {
              window.CartManager.addToCart({
                id: id,
                name: name,
                price: price,
                image: image,
                quantity: 1
              });
              
              // Update cart badge
              const cartCount = window.CartManager.getCartCount();
              document.getElementById('cart-badge').textContent = cartCount;
              
              // Show success message
              alert('✅ Produkt wurde zum Warenkorb hinzugefügt!');
            }
          }

          // Load product on page load
          document.addEventListener('DOMContentLoaded', loadProduct);
        </script>
    </body>
    </html>
  `;
};
