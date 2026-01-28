export const LoginPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Anmelden - SoftwareKing24</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
    </head>
    <body class="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        
        <!-- Header -->
        ${require('./site-header').SiteHeader()}
        
        <!-- Login Form -->
        <div class="max-w-md mx-auto px-4 py-12">
            <!-- Registration Success Message -->
            <div id="registeredMessage" class="hidden bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                <i class="fas fa-check-circle mr-2"></i>
                Registrierung erfolgreich! Bitte melden Sie sich an.
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8">
                <div class="text-center mb-8">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-sign-in-alt text-white text-2xl"></i>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-800">Willkommen zurück</h1>
                    <p class="text-gray-600 mt-2">Melden Sie sich bei Ihrem Konto an</p>
                </div>

                <form id="loginForm" class="space-y-6">
                    <!-- Email -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-envelope mr-2"></i>E-Mail-Adresse
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            autofocus
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="ihre@email.de"
                        />
                    </div>

                    <!-- Password -->
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-lock mr-2"></i>Passwort
                        </label>
                        <div class="relative">
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
                                placeholder="Ihr Passwort"
                            />
                            <button 
                                type="button" 
                                onclick="togglePassword()"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                <i id="password-icon" class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Remember & Forgot -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center">
                            <input 
                                type="checkbox" 
                                id="remember" 
                                name="remember" 
                                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span class="ml-2 text-sm text-gray-600">Angemeldet bleiben</span>
                        </label>
                        <a href="/passwort-vergessen" class="text-sm text-blue-600 hover:underline">
                            Passwort vergessen?
                        </a>
                    </div>

                    <!-- Error Message -->
                    <div id="errorMessage" class="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        <span id="errorText"></span>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit"
                        id="submitBtn"
                        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
                    >
                        <i class="fas fa-sign-in-alt mr-2"></i>Anmelden
                    </button>
                </form>

                <!-- Register Link -->
                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Noch kein Konto? 
                        <a href="/registrieren" class="text-blue-600 hover:underline font-semibold">Jetzt registrieren</a>
                    </p>
                </div>

                <!-- Social Login (Future) -->
                <div class="mt-8">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">Oder anmelden mit</span>
                        </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                        <button class="border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition opacity-50 cursor-not-allowed" disabled>
                            <i class="fab fa-google mr-2"></i>Google
                        </button>
                        <button class="border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition opacity-50 cursor-not-allowed" disabled>
                            <i class="fab fa-facebook mr-2"></i>Facebook
                        </button>
                    </div>
                    <p class="text-xs text-center text-gray-500 mt-2">Social Login kommt bald</p>
                </div>
            </div>

            <!-- Security Info -->
            <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div class="flex items-start">
                    <i class="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
                    <div class="text-sm text-blue-800">
                        <strong>Ihre Sicherheit ist uns wichtig:</strong>
                        <ul class="list-disc list-inside mt-2 space-y-1">
                            <li>SSL-verschlüsselte Verbindung</li>
                            <li>Passwörter werden verschlüsselt gespeichert</li>
                            <li>2-Faktor-Authentifizierung (kommt bald)</li>
                        </ul>
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
            // Check for registration success
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('registered') === 'true') {
                document.getElementById('registeredMessage').classList.remove('hidden');
            }

            // Toggle password visibility
            function togglePassword() {
                const field = document.getElementById('password');
                const icon = document.getElementById('password-icon');
                
                if (field.type === 'password') {
                    field.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    field.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }

            // Form submission
            document.getElementById('loginForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const submitBtn = document.getElementById('submitBtn');
                const errorMessage = document.getElementById('errorMessage');
                const errorText = document.getElementById('errorText');
                
                // Hide error message
                errorMessage.classList.add('hidden');
                
                // Get form data
                const formData = new FormData(e.target);
                const data = {
                    email: formData.get('email'),
                    password: formData.get('password'),
                    remember: formData.get('remember') === 'on'
                };
                
                // Disable button
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Anmelden...';
                
                try {
                    const response = await axios.post('/api/auth/login', data);
                    
                    if (response.data.success) {
                        // Store token
                        localStorage.setItem('authToken', response.data.token);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        
                        // Redirect to dashboard or previous page
                        const redirectTo = urlParams.get('redirect') || '/konto';
                        window.location.href = redirectTo;
                    } else {
                        throw new Error(response.data.error || 'Login fehlgeschlagen');
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    errorText.textContent = error.response?.data?.error || error.message || 'E-Mail oder Passwort falsch';
                    errorMessage.classList.remove('hidden');
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-sign-in-alt mr-2"></i>Anmelden';
                }
            });
        </script>
    </body>
    </html>
  `;
};
