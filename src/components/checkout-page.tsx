export const CheckoutPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kasse - SoftwareKing24</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
        <script src="https://js.stripe.com/v3/"></script>
    </head>
    <body class="bg-gradient-to-br from-gray-50 to-blue-50">
        
        <!-- Header -->
        <header class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between py-4">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="/static/logo.png" alt="SoftwareKing24" class="h-12" />
                    </a>
                    <nav class="flex items-center space-x-6">
                        <a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="/produkte" class="text-gray-700 hover:text-blue-600">Produkte</a>
                        <a href="/warenkorb" class="text-gray-700 hover:text-blue-600 relative">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" data-cart-count>0</span>
                        </a>
                        <a href="/login" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</a>
                    </nav>
                </div>
            </div>
        </header>
        
        <!-- Checkout Process -->
        <div class="max-w-7xl mx-auto px-4 py-8">
            <!-- Progress Steps -->
            <div class="mb-8">
                <div class="flex items-center justify-center space-x-4">
                    <div class="flex-1 max-w-xs">
                        <div class="flex items-center">
                            <div id="step1-icon" class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                                1
                            </div>
                            <div class="flex-1 h-1 bg-gray-300 mx-2" id="line1"></div>
                        </div>
                        <p id="step1-text" class="text-sm mt-2 font-semibold text-blue-600">Warenkorb</p>
                    </div>
                    
                    <div class="flex-1 max-w-xs">
                        <div class="flex items-center">
                            <div id="step2-icon" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-600 font-bold">
                                2
                            </div>
                            <div class="flex-1 h-1 bg-gray-300 mx-2" id="line2"></div>
                        </div>
                        <p id="step2-text" class="text-sm mt-2 text-gray-600">Kundendaten</p>
                    </div>
                    
                    <div class="flex-1 max-w-xs">
                        <div class="flex items-center">
                            <div id="step3-icon" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-600 font-bold">
                                3
                            </div>
                            <div class="flex-1 h-1 bg-gray-300 mx-2" id="line3"></div>
                        </div>
                        <p id="step3-text" class="text-sm mt-2 text-gray-600">Zahlung</p>
                    </div>
                    
                    <div class="flex-1 max-w-xs">
                        <div class="flex items-center">
                            <div id="step4-icon" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-600 font-bold">
                                <i class="fas fa-check"></i>
                            </div>
                        </div>
                        <p id="step4-text" class="text-sm mt-2 text-gray-600">Bestätigung</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    <!-- Step 1: Cart Review -->
                    <div id="step1-content" class="bg-white rounded-2xl shadow-lg p-6">
                        <h2 class="text-2xl font-bold mb-6">
                            <i class="fas fa-shopping-cart mr-2"></i>Ihr Warenkorb
                        </h2>
                        <div id="cart-items-checkout" class="space-y-4">
                            <!-- Cart items will be loaded here -->
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button 
                                onclick="nextStep(2)"
                                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                            >
                                Weiter zur Kasse <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Step 2: Customer Information -->
                    <div id="step2-content" class="hidden bg-white rounded-2xl shadow-lg p-6">
                        <h2 class="text-2xl font-bold mb-6">
                            <i class="fas fa-user mr-2"></i>Kundendaten
                        </h2>
                        <form id="customerForm" class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Vorname *</label>
                                    <input type="text" name="firstName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Nachname *</label>
                                    <input type="text" name="lastName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail-Adresse *</label>
                                <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Telefon (optional)</label>
                                <input type="tel" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Straße & Hausnummer *</label>
                                <input type="text" name="address" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">PLZ *</label>
                                    <input type="text" name="zip" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div class="md:col-span-2">
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Stadt *</label>
                                    <input type="text" name="city" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Land *</label>
                                <select name="country" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="DE" selected>Deutschland</option>
                                    <option value="AT">Österreich</option>
                                    <option value="CH">Schweiz</option>
                                </select>
                            </div>
                            <div class="flex items-start">
                                <input type="checkbox" id="agb" name="agb" required class="mt-1 w-4 h-4" />
                                <label for="agb" class="ml-2 text-sm text-gray-600">
                                    Ich akzeptiere die <a href="/agb" class="text-blue-600 hover:underline">AGB</a> und 
                                    <a href="/datenschutz" class="text-blue-600 hover:underline">Datenschutzbestimmungen</a> *
                                </label>
                            </div>
                            <div class="flex justify-between mt-6">
                                <button type="button" onclick="previousStep(1)" class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                                    <i class="fas fa-arrow-left mr-2"></i>Zurück
                                </button>
                                <button type="submit" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition">
                                    Weiter zur Zahlung <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Step 3: Payment -->
                    <div id="step3-content" class="hidden bg-white rounded-2xl shadow-lg p-6">
                        <h2 class="text-2xl font-bold mb-6">
                            <i class="fas fa-credit-card mr-2"></i>Zahlungsmethode
                        </h2>
                        
                        <!-- Payment Methods -->
                        <div class="space-y-4 mb-6">
                            <div class="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition" onclick="selectPayment('stripe')">
                                <label class="flex items-center cursor-pointer">
                                    <input type="radio" name="paymentMethod" value="stripe" checked class="w-4 h-4" />
                                    <div class="ml-3 flex-1">
                                        <div class="font-semibold">Kreditkarte / Debitkarte</div>
                                        <div class="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                                    </div>
                                    <div class="flex space-x-2">
                                        <i class="fab fa-cc-visa text-3xl text-blue-600"></i>
                                        <i class="fab fa-cc-mastercard text-3xl text-red-600"></i>
                                    </div>
                                </label>
                            </div>
                            
                            <div class="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition opacity-50" onclick="alert('PayPal kommt bald')">
                                <label class="flex items-center cursor-pointer">
                                    <input type="radio" name="paymentMethod" value="paypal" disabled class="w-4 h-4" />
                                    <div class="ml-3 flex-1">
                                        <div class="font-semibold">PayPal</div>
                                        <div class="text-sm text-gray-600">Sicher mit PayPal bezahlen</div>
                                    </div>
                                    <i class="fab fa-paypal text-3xl text-blue-600"></i>
                                </label>
                            </div>
                        </div>

                        <!-- Stripe Payment Element -->
                        <div id="stripe-payment-element" class="mb-6">
                            <!-- Stripe elements will be mounted here -->
                        </div>

                        <div id="payment-error" class="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                            <i class="fas fa-exclamation-triangle mr-2"></i>
                            <span id="payment-error-text"></span>
                        </div>

                        <div class="flex justify-between">
                            <button type="button" onclick="previousStep(2)" class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                                <i class="fas fa-arrow-left mr-2"></i>Zurück
                            </button>
                            <button 
                                id="pay-button"
                                onclick="processPayment()"
                                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                            >
                                <i class="fas fa-lock mr-2"></i>Jetzt bezahlen
                            </button>
                        </div>
                    </div>

                    <!-- Step 4: Confirmation -->
                    <div id="step4-content" class="hidden bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-check-circle text-green-600 text-4xl"></i>
                        </div>
                        <h2 class="text-3xl font-bold mb-4">Bestellung erfolgreich!</h2>
                        <p class="text-gray-600 mb-6">Vielen Dank für Ihre Bestellung.</p>
                        
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <div class="text-sm text-gray-600 mb-2">Bestellnummer</div>
                            <div id="order-number" class="text-2xl font-bold text-blue-600"></div>
                        </div>

                        <div class="space-y-3 text-left mb-6">
                            <div class="flex items-start">
                                <i class="fas fa-envelope text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <strong>Bestätigungs-E-Mail</strong>
                                    <p class="text-sm text-gray-600">Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-key text-blue-600 mt-1 mr-3"></i>
                                <div>
                                    <strong>Lizenzschlüssel</strong>
                                    <p class="text-sm text-gray-600">Ihre Lizenzschlüssel finden Sie in Ihrem Konto.</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/konto/bestellungen" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition inline-block">
                                <i class="fas fa-list mr-2"></i>Meine Bestellungen
                            </a>
                            <a href="/" class="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition inline-block">
                                <i class="fas fa-home mr-2"></i>Zur Startseite
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Order Summary Sidebar -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                        <h3 class="text-xl font-bold mb-4">Bestellübersicht</h3>
                        <div id="order-summary" class="space-y-3">
                            <!-- Order summary will be loaded here -->
                        </div>
                        <div class="border-t border-gray-200 mt-4 pt-4">
                            <div class="flex justify-between text-sm mb-2">
                                <span>Zwischensumme:</span>
                                <span id="summary-subtotal">€0.00</span>
                            </div>
                            <div class="flex justify-between text-sm mb-2 text-green-600" id="summary-discount-row" style="display:none">
                                <span>Rabatt:</span>
                                <span id="summary-discount">-€0.00</span>
                            </div>
                            <div class="flex justify-between text-sm mb-2">
                                <span>MwSt. (19%):</span>
                                <span id="summary-vat">€0.00</span>
                            </div>
                            <div class="flex justify-between text-lg font-bold mt-4">
                                <span>Gesamt:</span>
                                <span id="summary-total" class="text-blue-600">€0.00</span>
                            </div>
                        </div>

                        <!-- Trust Badges -->
                        <div class="mt-6 space-y-3 text-sm text-gray-600">
                            <div class="flex items-center">
                                <i class="fas fa-shield-alt text-green-600 mr-2"></i>
                                SSL-verschlüsselte Zahlung
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-truck text-blue-600 mr-2"></i>
                                Sofortiger Download
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-undo text-purple-600 mr-2"></i>
                                14 Tage Geld-zurück-Garantie
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-8 mt-12">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <p class="text-gray-400">&copy; 2026 SoftwareKing24. Alle Rechte vorbehalten.</p>
            </div>
        </footer>

        <script>
            let currentStep = 1;
            let customerData = {};
            let stripe = null;
            let elements = null;

            // Initialize
            document.addEventListener('DOMContentLoaded', () => {
                loadCartForCheckout();
                loadOrderSummary();
                initializeStripe();
            });

            // Step Navigation
            function nextStep(step) {
                if (step === 2 && !validateCart()) return;
                
                currentStep = step;
                updateStepUI();
            }

            function previousStep(step) {
                currentStep = step;
                updateStepUI();
            }

            function updateStepUI() {
                // Hide all steps
                for (let i = 1; i <= 4; i++) {
                    document.getElementById(\`step\${i}-content\`).classList.add('hidden');
                    document.getElementById(\`step\${i}-icon\`).classList.remove('bg-blue-600', 'text-white');
                    document.getElementById(\`step\${i}-icon\`).classList.add('bg-gray-300', 'text-gray-600');
                    document.getElementById(\`step\${i}-text\`).classList.remove('font-semibold', 'text-blue-600');
                    document.getElementById(\`step\${i}-text\`).classList.add('text-gray-600');
                }

                // Show current step
                document.getElementById(\`step\${currentStep}-content\`).classList.remove('hidden');
                document.getElementById(\`step\${currentStep}-icon\`).classList.add('bg-blue-600', 'text-white');
                document.getElementById(\`step\${currentStep}-icon\`).classList.remove('bg-gray-300', 'text-gray-600');
                document.getElementById(\`step\${currentStep}-text\`).classList.add('font-semibold', 'text-blue-600');
                document.getElementById(\`step\${currentStep}-text\`).classList.remove('text-gray-600');

                // Update progress lines
                for (let i = 1; i <= 3; i++) {
                    const line = document.getElementById(\`line\${i}\`);
                    if (i < currentStep) {
                        line.classList.remove('bg-gray-300');
                        line.classList.add('bg-blue-600');
                    } else {
                        line.classList.add('bg-gray-300');
                        line.classList.remove('bg-blue-600');
                    }
                }
            }

            function validateCart() {
                const cart = CartManager.getCart();
                if (cart.items.length === 0) {
                    alert('Ihr Warenkorb ist leer');
                    return false;
                }
                return true;
            }

            // Load cart for checkout
            function loadCartForCheckout() {
                const cart = CartManager.getCart();
                const container = document.getElementById('cart-items-checkout');
                
                if (cart.items.length === 0) {
                    container.innerHTML = \`
                        <div class="text-center py-8 text-gray-600">
                            <i class="fas fa-shopping-cart text-4xl mb-4"></i>
                            <p>Ihr Warenkorb ist leer</p>
                            <a href="/produkte" class="text-blue-600 hover:underline mt-2 inline-block">Produkte ansehen</a>
                        </div>
                    \`;
                    return;
                }

                container.innerHTML = cart.items.map(item => \`
                    <div class="flex items-center space-x-4 border-b border-gray-200 pb-4">
                        <img src="\${item.image}" alt="\${item.name}" class="w-16 h-16 object-cover rounded-lg" />
                        <div class="flex-1">
                            <h4 class="font-semibold">\${item.name}</h4>
                            <p class="text-sm text-gray-600">Menge: \${item.quantity}</p>
                        </div>
                        <div class="text-right">
                            <p class="font-bold text-blue-600">€\${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                \`).join('');
            }

            // Load order summary
            function loadOrderSummary() {
                const cart = CartManager.getCart();
                const container = document.getElementById('order-summary');
                
                container.innerHTML = cart.items.map(item => \`
                    <div class="flex justify-between text-sm">
                        <span>\${item.name} × \${item.quantity}</span>
                        <span>€\${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                \`).join('');

                document.getElementById('summary-subtotal').textContent = \`€\${cart.subtotal.toFixed(2)}\`;
                document.getElementById('summary-vat').textContent = \`€\${cart.VAT.toFixed(2)}\`;
                document.getElementById('summary-total').textContent = \`€\${cart.total.toFixed(2)}\`;

                if (cart.discount > 0) {
                    document.getElementById('summary-discount-row').style.display = 'flex';
                    document.getElementById('summary-discount').textContent = \`-€\${cart.discount.toFixed(2)}\`;
                }
            }

            // Customer form submission
            document.getElementById('customerForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                customerData = {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    address: formData.get('address'),
                    zip: formData.get('zip'),
                    city: formData.get('city'),
                    country: formData.get('country')
                };
                nextStep(3);
            });

            // Initialize Stripe
            async function initializeStripe() {
                // Stripe public key - will be configured
                const publicKey = 'pk_test_placeholder'; // Replace with actual key
                stripe = Stripe(publicKey);

                const appearance = {
                    theme: 'stripe',
                    variables: {
                        colorPrimary: '#2563eb',
                    }
                };

                // Note: This is a placeholder - actual implementation would create payment intent
                // and mount Stripe Elements here
            }

            // Process payment
            async function processPayment() {
                const payButton = document.getElementById('pay-button');
                const errorDiv = document.getElementById('payment-error');
                const errorText = document.getElementById('payment-error-text');

                payButton.disabled = true;
                payButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Zahlung wird verarbeitet...';
                errorDiv.classList.add('hidden');

                try {
                    // Get cart
                    const cart = CartManager.getCart();

                    // Create order
                    const orderData = {
                        customer: customerData,
                        items: cart.items,
                        subtotal: cart.subtotal,
                        vat: cart.VAT,
                        discount: cart.discount,
                        total: cart.total,
                        coupon: cart.coupon
                    };

                    const response = await axios.post('/api/checkout', orderData);

                    if (response.data.success) {
                        // Clear cart
                        CartManager.clearCart();

                        // Show confirmation
                        document.getElementById('order-number').textContent = response.data.orderNumber;
                        nextStep(4);
                    } else {
                        throw new Error(response.data.error || 'Zahlung fehlgeschlagen');
                    }
                } catch (error) {
                    console.error('Payment error:', error);
                    errorText.textContent = error.response?.data?.error || error.message || 'Zahlung fehlgeschlagen';
                    errorDiv.classList.remove('hidden');

                    payButton.disabled = false;
                    payButton.innerHTML = '<i class="fas fa-lock mr-2"></i>Jetzt bezahlen';
                }
            }

            function selectPayment(method) {
                // Handle payment method selection
                console.log('Selected payment method:', method);
            }
        </script>
    </body>
    </html>
  `;
};
