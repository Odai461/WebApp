export const RegisterPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registrieren - SoftwareKing24</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/cart-manager-enhanced.js"></script>
    </head>
    <body class="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        
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
        
        <!-- Registration Form -->
        <div class="max-w-md mx-auto px-4 py-12">
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <div class="text-center mb-8">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-user-plus text-white text-2xl"></i>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-800">Konto erstellen</h1>
                    <p class="text-gray-600 mt-2">Erstellen Sie Ihr SoftwareKing24-Konto</p>
                </div>

                <form id="registerForm" class="space-y-6">
                    <!-- Name -->
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-user mr-2"></i>Vollständiger Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Max Mustermann"
                        />
                    </div>

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
                                minlength="8"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
                                placeholder="Mindestens 8 Zeichen"
                            />
                            <button 
                                type="button" 
                                onclick="togglePassword('password')"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                <i id="password-icon" class="fas fa-eye"></i>
                            </button>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Mindestens 8 Zeichen, Groß- und Kleinbuchstaben</p>
                    </div>

                    <!-- Confirm Password -->
                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-lock mr-2"></i>Passwort bestätigen
                        </label>
                        <div class="relative">
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
                                placeholder="Passwort wiederholen"
                            />
                            <button 
                                type="button" 
                                onclick="togglePassword('confirmPassword')"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                <i id="confirmPassword-icon" class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Terms -->
                    <div class="flex items-start">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            name="terms" 
                            required
                            class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label for="terms" class="ml-2 text-sm text-gray-600">
                            Ich akzeptiere die <a href="/agb" class="text-blue-600 hover:underline">AGB</a> und 
                            <a href="/datenschutz" class="text-blue-600 hover:underline">Datenschutzbestimmungen</a>
                        </label>
                    </div>

                    <!-- Error Message -->
                    <div id="errorMessage" class="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        <span id="errorText"></span>
                    </div>

                    <!-- Success Message -->
                    <div id="successMessage" class="hidden bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                        <i class="fas fa-check-circle mr-2"></i>
                        <span id="successText"></span>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit"
                        id="submitBtn"
                        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
                    >
                        <i class="fas fa-user-plus mr-2"></i>Konto erstellen
                    </button>
                </form>

                <!-- Login Link -->
                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Bereits ein Konto? 
                        <a href="/login" class="text-blue-600 hover:underline font-semibold">Jetzt anmelden</a>
                    </p>
                </div>

                <!-- Social Login (Future) -->
                <div class="mt-8">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">Oder registrieren mit</span>
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

            <!-- Trust Badges -->
            <div class="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                <div>
                    <i class="fas fa-shield-alt text-green-600 text-2xl mb-2"></i>
                    <p>Sichere<br/>Registrierung</p>
                </div>
                <div>
                    <i class="fas fa-lock text-blue-600 text-2xl mb-2"></i>
                    <p>Daten<br/>verschlüsselt</p>
                </div>
                <div>
                    <i class="fas fa-check-circle text-purple-600 text-2xl mb-2"></i>
                    <p>DSGVO<br/>konform</p>
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
            // Toggle password visibility
            function togglePassword(fieldId) {
                const field = document.getElementById(fieldId);
                const icon = document.getElementById(fieldId + '-icon');
                
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
            document.getElementById('registerForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const submitBtn = document.getElementById('submitBtn');
                const errorMessage = document.getElementById('errorMessage');
                const successMessage = document.getElementById('successMessage');
                const errorText = document.getElementById('errorText');
                const successText = document.getElementById('successText');
                
                // Hide messages
                errorMessage.classList.add('hidden');
                successMessage.classList.add('hidden');
                
                // Get form data
                const formData = new FormData(e.target);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    confirmPassword: formData.get('confirmPassword')
                };
                
                // Validate passwords match
                if (data.password !== data.confirmPassword) {
                    errorText.textContent = 'Passwörter stimmen nicht überein';
                    errorMessage.classList.remove('hidden');
                    return;
                }
                
                // Validate password strength
                if (data.password.length < 8) {
                    errorText.textContent = 'Passwort muss mindestens 8 Zeichen lang sein';
                    errorMessage.classList.remove('hidden');
                    return;
                }
                
                // Disable button
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Registrieren...';
                
                try {
                    const response = await axios.post('/api/auth/register', data);
                    
                    if (response.data.success) {
                        successText.textContent = 'Konto erfolgreich erstellt! Weiterleitung zum Login...';
                        successMessage.classList.remove('hidden');
                        
                        // Redirect to login after 2 seconds
                        setTimeout(() => {
                            window.location.href = '/login?registered=true';
                        }, 2000);
                    } else {
                        throw new Error(response.data.error || 'Registrierung fehlgeschlagen');
                    }
                } catch (error) {
                    console.error('Registration error:', error);
                    errorText.textContent = error.response?.data?.error || error.message || 'Registrierung fehlgeschlagen';
                    errorMessage.classList.remove('hidden');
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-user-plus mr-2"></i>Konto erstellen';
                }
            });
        </script>
    </body>
    </html>
  `;
};
