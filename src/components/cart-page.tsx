export const CartPage = () => {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Warenkorb - SoftwareKing24</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
      </head>
      <body class="bg-gray-50">
        {/* Header */}
        <header class="bg-white shadow-sm">
          <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <a href="/" class="flex items-center space-x-3">
                <img src="/static/logo.png" alt="SoftwareKing24" class="h-16" />
              </a>
              <div class="flex items-center space-x-4">
                <a href="/produkte" class="text-gray-600 hover:text-blue-600">
                  <i class="fas fa-arrow-left mr-2"></i>Weiter einkaufen
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main class="container mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-8">
            <i class="fas fa-shopping-cart mr-3"></i>Ihr Warenkorb
          </h1>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div class="lg:col-span-2">
              <div id="cart-items" class="space-y-4">
                {/* Loading */}
                <div class="bg-white rounded-lg shadow-sm p-8 text-center">
                  <i class="fas fa-spinner fa-spin text-3xl text-blue-600 mb-4"></i>
                  <p class="text-gray-600">Lade Warenkorb...</p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div class="lg:col-span-1">
              <div class="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Bestellübersicht</h2>
                
                {/* Coupon Input */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Gutscheincode
                  </label>
                  <div class="flex space-x-2">
                    <input 
                      type="text" 
                      id="coupon-input"
                      placeholder="z.B. SAVE10"
                      class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      onclick="applyCoupon()"
                      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                      Anwenden
                    </button>
                  </div>
                  <div id="coupon-message" class="mt-2 text-sm"></div>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <button onclick="quickCoupon('SAVE10')" class="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">SAVE10</button>
                    <button onclick="quickCoupon('SAVE20')" class="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">SAVE20</button>
                    <button onclick="quickCoupon('WELCOME')" class="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">WELCOME</button>
                  </div>
                </div>

                <div id="order-summary" class="space-y-3">
                  {/* Summary will be populated by JS */}
                </div>

                <button 
                  onclick="proceedToCheckout()"
                  id="checkout-button"
                  class="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  <i class="fas fa-lock mr-2"></i>Zur Kasse
                </button>

                {/* Trust Badges */}
                <div class="mt-6 pt-6 border-t border-gray-200">
                  <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-center">
                      <i class="fas fa-shield-alt text-green-600 mr-2"></i>
                      <span>Sichere SSL-Verschlüsselung</span>
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-download text-blue-600 mr-2"></i>
                      <span>Sofortiger Download</span>
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-certificate text-yellow-600 mr-2"></i>
                      <span>100% Original-Lizenzen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          <div class="mt-16">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              <i class="fas fa-star text-yellow-500 mr-2"></i>Das könnte Ihnen auch gefallen
            </h2>
            <div id="recommended-products" class="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Will be loaded dynamically */}
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
          let cart = { items: [], subtotal: 0, vat: 0, total: 0, discount: 0, coupon: null };
          const VAT_RATE = 0.19;

          // Format price
          function formatPrice(cents) {
            return (cents / 100).toFixed(2).replace('.', ',') + ' €';
          }

          // Get session ID (from cookie or generate)
          function getSessionId() {
            let sessionId = localStorage.getItem('session_id');
            if (!sessionId) {
              sessionId = 'guest_' + Date.now() + '_' + Math.random().toString(36).substring(7);
              localStorage.setItem('session_id', sessionId);
            }
            return sessionId;
          }

          // Load cart from localStorage
          function loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
              try {
                cart = JSON.parse(savedCart);
                renderCart();
                updateSummary();
              } catch (e) {
                console.error('Error loading cart:', e);
                cart = { items: [], subtotal: 0, vat: 0, total: 0, discount: 0, coupon: null };
              }
            } else {
              cart = { items: [], subtotal: 0, vat: 0, total: 0, discount: 0, coupon: null };
              renderCart();
            }
          }

          // Save cart to localStorage
          function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
            // Update cart counter in header
            const cartCountElements = document.querySelectorAll('#cart-count, #cart-badge');
            cartCountElements.forEach(el => {
              if (el) el.textContent = cart.items.reduce((sum, item) => sum + item.quantity, 0);
            });
          }

          // Calculate totals
          function calculateTotals() {
            cart.subtotal = cart.items.reduce((sum, item) => {
              const price = item.product.sale_price || item.product.price;
              return sum + (price * item.quantity);
            }, 0);

            // Apply discount
            if (cart.coupon) {
              cart.discount = Math.round((cart.subtotal * cart.coupon.discount) / 100);
            } else {
              cart.discount = 0;
            }

            const afterDiscount = cart.subtotal - cart.discount;
            cart.vat = Math.round(afterDiscount * VAT_RATE);
            cart.total = afterDiscount + cart.vat;
          }

          // Render cart items
          function renderCart() {
            const container = document.getElementById('cart-items');
            
            if (cart.items.length === 0) {
              container.innerHTML = \`
                <div class="bg-white rounded-lg shadow-sm p-12 text-center">
                  <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                  <h2 class="text-2xl font-bold text-gray-800 mb-2">Ihr Warenkorb ist leer</h2>
                  <p class="text-gray-600 mb-6">Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen</p>
                  <a href="/produkte" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    <i class="fas fa-shopping-bag mr-2"></i>Produkte entdecken
                  </a>
                </div>
              \`;
              document.getElementById('checkout-button').disabled = true;
              return;
            }

            container.innerHTML = cart.items.map((item, index) => {
              const price = item.product.sale_price || item.product.price;
              const subtotal = price * item.quantity;
              const savings = item.product.sale_price ? 
                Math.round(((item.product.price - item.product.sale_price) / item.product.price) * 100) : 0;

              return \`
                <div class="bg-white rounded-lg shadow-sm p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-box text-3xl text-gray-300"></i>
                    </div>
                    
                    <div class="flex-1">
                      <div class="flex justify-between items-start">
                        <div>
                          <h3 class="font-semibold text-lg text-gray-800 mb-1">\${item.product.name}</h3>
                          <p class="text-sm text-gray-500">\${item.product.category}</p>
                          \${savings > 0 ? \`
                            <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mt-2">
                              -\${savings}% Rabatt
                            </span>
                          \` : ''}
                        </div>
                        <button 
                          onclick="removeItem(\${index})"
                          class="text-red-600 hover:text-red-800 transition"
                          title="Entfernen"
                        >
                          <i class="fas fa-trash text-lg"></i>
                        </button>
                      </div>

                      <div class="mt-4 flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                          <label class="text-sm text-gray-600">Menge:</label>
                          <div class="flex items-center border border-gray-300 rounded-lg">
                            <button 
                              onclick="updateQuantity(\${index}, \${item.quantity - 1})"
                              class="px-3 py-1 hover:bg-gray-100 transition"
                              \${item.quantity <= 1 ? 'disabled' : ''}
                            >
                              <i class="fas fa-minus text-sm"></i>
                            </button>
                            <span class="px-4 py-1 border-x border-gray-300 font-semibold">\${item.quantity}</span>
                            <button 
                              onclick="updateQuantity(\${index}, \${item.quantity + 1})"
                              class="px-3 py-1 hover:bg-gray-100 transition"
                            >
                              <i class="fas fa-plus text-sm"></i>
                            </button>
                          </div>
                        </div>

                        <div class="text-right">
                          \${item.product.sale_price ? \`
                            <div>
                              <span class="text-2xl font-bold text-red-600">\${formatPrice(price)}</span>
                              <span class="text-sm text-gray-400 line-through ml-2">\${formatPrice(item.product.price)}</span>
                            </div>
                          \` : \`
                            <span class="text-2xl font-bold text-gray-800">\${formatPrice(price)}</span>
                          \`}
                          <div class="text-sm text-gray-600 mt-1">
                            Zwischensumme: <span class="font-semibold">\${formatPrice(subtotal)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              \`;
            }).join('');

            document.getElementById('checkout-button').disabled = false;
          }

          // Update summary
          function updateSummary() {
            calculateTotals();
            
            const container = document.getElementById('order-summary');
            container.innerHTML = \`
              <div class="space-y-3">
                <div class="flex justify-between text-gray-700">
                  <span>Zwischensumme</span>
                  <span class="font-semibold">\${formatPrice(cart.subtotal)}</span>
                </div>
                
                \${cart.discount > 0 ? \`
                  <div class="flex justify-between text-green-600">
                    <span>Rabatt (\${cart.coupon.code})</span>
                    <span class="font-semibold">-\${formatPrice(cart.discount)}</span>
                  </div>
                \` : ''}
                
                <div class="flex justify-between text-gray-700">
                  <span>MwSt. (19%)</span>
                  <span class="font-semibold">\${formatPrice(cart.vat)}</span>
                </div>
                
                <div class="border-t border-gray-200 pt-3 flex justify-between text-xl font-bold text-gray-800">
                  <span>Gesamt</span>
                  <span>\${formatPrice(cart.total)}</span>
                </div>
              </div>
              
              \${cart.discount > 0 ? \`
                <div class="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-green-800">
                      <i class="fas fa-check-circle mr-1"></i>Gutschein angewendet
                    </span>
                    <button onclick="removeCoupon()" class="text-xs text-red-600 hover:text-red-800">
                      Entfernen
                    </button>
                  </div>
                </div>
              \` : ''}
            \`;
          }

          // Update quantity
          function updateQuantity(index, newQuantity) {
            if (newQuantity < 1) {
              removeItem(index);
              return;
            }

            cart.items[index].quantity = newQuantity;
            saveCart();
            renderCart();
            updateSummary();
          }

          // Remove item
          function removeItem(index) {
            if (confirm('Möchten Sie dieses Produkt wirklich entfernen?')) {
              cart.items.splice(index, 1);
              saveCart();
              renderCart();
              updateSummary();
              loadRecommendedProducts();
            }
          }

          // Apply coupon
          async function applyCoupon() {
            const code = document.getElementById('coupon-input').value.trim().toUpperCase();
            if (!code) return;

            const messageEl = document.getElementById('coupon-message');
            
            // Validate coupon
            const validCoupons = {
              'SAVE10': { code: 'SAVE10', discount: 10 },
              'SAVE20': { code: 'SAVE20', discount: 20 },
              'WELCOME': { code: 'WELCOME', discount: 15 }
            };

            if (validCoupons[code]) {
              cart.coupon = validCoupons[code];
              saveCart();
              updateSummary();
              messageEl.innerHTML = \`
                <span class="text-green-600">
                  <i class="fas fa-check-circle mr-1"></i>Gutschein erfolgreich angewendet!
                </span>
              \`;
              document.getElementById('coupon-input').value = '';
            } else {
              messageEl.innerHTML = \`
                <span class="text-red-600">
                  <i class="fas fa-exclamation-circle mr-1"></i>Ungültiger Gutscheincode
                </span>
              \`;
            }
          }

          // Quick coupon
          function quickCoupon(code) {
            document.getElementById('coupon-input').value = code;
            applyCoupon();
          }

          // Remove coupon
          function removeCoupon() {
            cart.coupon = null;
            cart.discount = 0;
            saveCart();
            updateSummary();
            document.getElementById('coupon-message').innerHTML = '';
          }

          // Proceed to checkout
          function proceedToCheckout() {
            if (cart.items.length === 0) {
              alert('Ihr Warenkorb ist leer');
              return;
            }
            
            // Save cart and redirect to checkout
            saveCart();
            window.location.href = '/kasse';
          }

          // Load recommended products
          async function loadRecommendedProducts() {
            try {
              const response = await axios.get('/api/products/featured');
              const products = response.data.data.slice(0, 4);

              const container = document.getElementById('recommended-products');
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
              console.error('Error loading recommended products:', error);
            }
          }

          // Initialize
          loadCart();
          loadRecommendedProducts();
        `}} />
      </body>
    </html>
  );
};
