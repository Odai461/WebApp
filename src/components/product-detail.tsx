export const ProductDetailPage = ({ productId }: { productId: string }) => {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Produktdetails - SoftwareKing24</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
      </head>
      <body class="bg-gray-50">
        {/* Header - same as homepage */}
        <header class="bg-white shadow-sm sticky top-0 z-50">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-4">
              <a href="/" class="flex items-center space-x-3">
                <img src="/static/logo.png" alt="SoftwareKing24" class="h-16" />
              </a>
              <a href="/warenkorb" class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                <i class="fas fa-shopping-cart mr-2"></i>Warenkorb
              </a>
            </div>
          </div>
        </header>

        {/* Product Detail Container */}
        <main class="container mx-auto px-4 py-8">
          <div id="product-detail">
            <div class="text-center py-20">
              <i class="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
              <p class="text-gray-600">Lade Produktdetails...</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer class="bg-gray-900 text-white py-8 mt-16">
          <div class="container mx-auto px-4 text-center">
            <img src="/static/logo.png" alt="SoftwareKing24" class="h-12 mx-auto mb-4 brightness-0 invert" />
            <p class="text-gray-400 text-sm">&copy; 2026 SoftwareKing24. Alle Rechte vorbehalten.</p>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{__html: `
          const productId = ${productId};

          function formatPrice(cents) {
            return (cents / 100).toFixed(2).replace('.', ',') + ' €';
          }

          async function loadProduct() {
            try {
              const response = await axios.get('/api/products/' + productId);
              const product = response.data.data;

              const price = formatPrice(product.price);
              const salePrice = product.sale_price ? formatPrice(product.sale_price) : null;
              const savings = salePrice ? Math.round(((product.price - product.sale_price) / product.price) * 100) : 0;

              document.getElementById('product-detail').innerHTML = \`
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div class="bg-white rounded-xl shadow-lg p-8">
                      <div class="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-box text-9xl text-gray-300"></i>
                      </div>
                      \${savings > 0 ? \`
                        <div class="bg-red-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
                          <i class="fas fa-fire mr-2"></i>-\${savings}% Rabatt!
                        </div>
                      \` : ''}
                    </div>
                  </div>

                  <div>
                    <nav class="text-sm text-gray-500 mb-4">
                      <a href="/" class="hover:text-blue-600">Home</a>
                      <span class="mx-2">/</span>
                      <a href="/produkte" class="hover:text-blue-600">Produkte</a>
                      <span class="mx-2">/</span>
                      <span class="text-gray-800">\${product.name}</span>
                    </nav>

                    <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block text-sm font-semibold mb-4">
                      \${product.category}
                    </div>

                    <h1 class="text-4xl font-bold text-gray-800 mb-4">\${product.name}</h1>

                    <div class="flex items-baseline space-x-4 mb-6">
                      \${salePrice ? \`
                        <span class="text-5xl font-bold text-red-600">\${salePrice}</span>
                        <span class="text-2xl text-gray-400 line-through">\${price}</span>
                        <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Spare \${savings}%
                        </span>
                      \` : \`
                        <span class="text-5xl font-bold text-gray-800">\${price}</span>
                      \`}
                    </div>

                    <div class="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 class="font-bold text-lg mb-4">Produktbeschreibung</h3>
                      <p class="text-gray-700 leading-relaxed">\${product.description}</p>
                    </div>

                    <div class="grid grid-cols-3 gap-4 mb-6">
                      <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                        <i class="fas fa-download text-2xl text-blue-600 mb-2"></i>
                        <p class="text-sm font-semibold">Sofort-Download</p>
                      </div>
                      <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                        <i class="fas fa-shield-alt text-2xl text-green-600 mb-2"></i>
                        <p class="text-sm font-semibold">100% Original</p>
                      </div>
                      <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                        <i class="fas fa-headset text-2xl text-purple-600 mb-2"></i>
                        <p class="text-sm font-semibold">24/7 Support</p>
                      </div>
                    </div>

                    <div class="flex space-x-4 mb-6">
                      <button 
                        onclick="addToCart()" 
                        class="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg"
                      >
                        <i class="fas fa-cart-plus mr-2"></i>In den Warenkorb
                      </button>
                      <button class="w-16 h-16 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
                        <i class="fas fa-heart text-xl"></i>
                      </button>
                    </div>

                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div class="flex items-center">
                        <i class="fas fa-info-circle text-yellow-600 mr-3 text-xl"></i>
                        <div>
                          <p class="font-semibold text-gray-800">Lieferung innerhalb von 5 Minuten</p>
                          <p class="text-sm text-gray-600">Lizenzschlüssel wird per E-Mail zugesendet</p>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 pt-6">
                      <h3 class="font-bold text-lg mb-4">Wichtige Informationen</h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                        <li class="flex items-start">
                          <i class="fas fa-check text-green-600 mr-2 mt-1"></i>
                          <span>Original Microsoft Lizenzschlüssel</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-check text-green-600 mr-2 mt-1"></i>
                          <span>Lebenslange Gültigkeit der Lizenz</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-check text-green-600 mr-2 mt-1"></i>
                          <span>Sofortiger Download nach Zahlungseingang</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-check text-green-600 mr-2 mt-1"></i>
                          <span>Deutschsprachiger 24/7 Support</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-check text-green-600 mr-2 mt-1"></i>
                          <span>Sichere Zahlung mit SSL-Verschlüsselung</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="mt-16">
                  <h2 class="text-3xl font-bold text-gray-800 mb-8">Ähnliche Produkte</h2>
                  <div id="similar-products" class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <!-- Will be loaded -->
                  </div>
                </div>
              \`;

              // Load similar products
              loadSimilarProducts(product.category);
            } catch (error) {
              console.error('Error loading product:', error);
              document.getElementById('product-detail').innerHTML = \`
                <div class="text-center py-20">
                  <i class="fas fa-exclamation-circle text-6xl text-red-600 mb-4"></i>
                  <h2 class="text-2xl font-bold text-gray-800 mb-2">Produkt nicht gefunden</h2>
                  <p class="text-gray-600 mb-6">Das gewünschte Produkt konnte nicht geladen werden.</p>
                  <a href="/produkte" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Zurück zur Produktübersicht
                  </a>
                </div>
              \`;
            }
          }

          async function loadSimilarProducts(category) {
            try {
              const response = await axios.get('/api/products?category=' + encodeURIComponent(category) + '&limit=4');
              const products = response.data.data.filter(p => p.id !== productId);

              const container = document.getElementById('similar-products');
              container.innerHTML = products.map(product => {
                const price = formatPrice(product.price);
                const salePrice = product.sale_price ? formatPrice(product.sale_price) : null;

                return \`
                  <a href="/produkt/\${product.id}" class="bg-white rounded-lg shadow-sm hover:shadow-lg transition p-4">
                    <div class="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg flex items-center justify-center mb-4">
                      <i class="fas fa-box text-4xl text-gray-300"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2 line-clamp-2">\${product.name}</h3>
                    <div class="flex items-baseline space-x-2">
                      \${salePrice ? \`
                        <span class="text-xl font-bold text-red-600">\${salePrice}</span>
                        <span class="text-sm text-gray-400 line-through">\${price}</span>
                      \` : \`
                        <span class="text-xl font-bold text-gray-800">\${price}</span>
                      \`}
                    </div>
                  </a>
                \`;
              }).join('');
            } catch (error) {
              console.error('Error loading similar products:', error);
            }
          }

          async function addToCart() {
            try {
              const response = await axios.post('/api/cart/add', {
                productId,
                quantity: 1,
                licenseType: 'single'
              });

              if (response.data.success) {
                // Show success notification
                const notification = document.createElement('div');
                notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50';
                notification.innerHTML = \`
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-check-circle text-2xl"></i>
                    <div>
                      <p class="font-bold">Erfolgreich hinzugefügt!</p>
                      <p class="text-sm">Produkt wurde zum Warenkorb hinzugefügt</p>
                    </div>
                  </div>
                \`;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                  notification.remove();
                }, 3000);
              }
            } catch (error) {
              console.error('Error adding to cart:', error);
              alert('Fehler beim Hinzufügen zum Warenkorb');
            }
          }

          // Load product on page load
          loadProduct();
        `}} />
      </body>
    </html>
  );
};
