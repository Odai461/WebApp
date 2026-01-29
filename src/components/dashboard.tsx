import { Hono } from 'hono'

/**
 * User Dashboard Page
 * Shows user profile, order history, and account management
 */
export function DashboardPage() {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mein Konto - SoftwareKing24</title>
  <meta name="description" content="Verwalten Sie Ihr Konto, Bestellungen und Lizenzen bei SoftwareKing24">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  
  <!-- Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>

  <style>
    .dashboard-card {
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .dashboard-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  </style>
</head>
<body class="bg-gray-50">

  <!-- Navigation -->
  <nav class="bg-white shadow-sm sticky top-0 z-40">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="/" class="text-2xl font-bold text-blue-600">
          <i class="fas fa-shopping-cart mr-2"></i>SoftwareKing24
        </a>
        
        <div class="flex items-center space-x-4">
          <a href="/" class="text-gray-600 hover:text-blue-600">
            <i class="fas fa-home mr-1"></i> Home
          </a>
          <a href="/produkte" class="text-gray-600 hover:text-blue-600">
            <i class="fas fa-box mr-1"></i> Produkte
          </a>
          <button onclick="authManager.logout()" class="text-red-600 hover:text-red-700">
            <i class="fas fa-sign-out-alt mr-1"></i> Abmelden
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Dashboard Container -->
  <div class="container mx-auto px-4 py-8">
    
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">
        <i class="fas fa-user-circle mr-2"></i> Mein Konto
      </h1>
      <p class="text-gray-600">Willkommen zurück, <span id="user-name" class="font-semibold"></span>!</p>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="stat-card text-white p-6 rounded-lg shadow-lg">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-white text-opacity-80 text-sm mb-1">Bestellungen</p>
            <p class="text-3xl font-bold" id="total-orders">0</p>
          </div>
          <i class="fas fa-shopping-bag text-4xl opacity-50"></i>
        </div>
      </div>

      <div class="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg shadow-lg">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-white text-opacity-80 text-sm mb-1">Lizenzen</p>
            <p class="text-3xl font-bold" id="total-licenses">0</p>
          </div>
          <i class="fas fa-key text-4xl opacity-50"></i>
        </div>
      </div>

      <div class="bg-gradient-to-br from-orange-400 to-pink-500 text-white p-6 rounded-lg shadow-lg">
        <div>
          <p class="text-white text-opacity-80 text-sm mb-1">Gesamtausgaben</p>
          <p class="text-3xl font-bold" id="total-spent">€0</p>
        </div>
      </div>
    </div>

    <!-- Main Dashboard Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left Column: Profile & Settings -->
      <div class="lg:col-span-1 space-y-6">
        
        <!-- Profile Card -->
        <div class="bg-white rounded-lg shadow-md p-6 dashboard-card">
          <h2 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-user mr-2 text-blue-600"></i>
            Profil
          </h2>
          
          <div class="space-y-3">
            <div>
              <label class="text-sm text-gray-600">Name</label>
              <p class="font-semibold" id="profile-name">-</p>
            </div>
            
            <div>
              <label class="text-sm text-gray-600">E-Mail</label>
              <p class="font-semibold" id="profile-email">-</p>
            </div>
            
            <div>
              <label class="text-sm text-gray-600">Mitglied seit</label>
              <p class="font-semibold" id="profile-since">-</p>
            </div>
          </div>

          <button onclick="showEditProfile()" class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
            <i class="fas fa-edit mr-2"></i> Profil bearbeiten
          </button>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white rounded-lg shadow-md p-6 dashboard-card">
          <h2 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-bolt mr-2 text-yellow-500"></i>
            Schnellzugriff
          </h2>
          
          <div class="space-y-2">
            <a href="/produkte" class="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <i class="fas fa-shopping-cart mr-2 text-blue-600"></i> Produkte durchsuchen
            </a>
            <button onclick="showChangePassword()" class="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <i class="fas fa-lock mr-2 text-green-600"></i> Passwort ändern
            </button>
            <a href="/support" class="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <i class="fas fa-question-circle mr-2 text-purple-600"></i> Support kontaktieren
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Orders & Licenses -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- Recent Orders -->
        <div class="bg-white rounded-lg shadow-md p-6 dashboard-card">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold flex items-center">
              <i class="fas fa-history mr-2 text-blue-600"></i>
              Letzte Bestellungen
            </h2>
            <a href="#" onclick="loadAllOrders(); return false;" class="text-blue-600 hover:underline text-sm">
              Alle anzeigen →
            </a>
          </div>

          <div id="orders-list">
            <div class="text-center py-8 text-gray-500">
              <i class="fas fa-spinner fa-spin text-3xl mb-2"></i>
              <p>Bestellungen werden geladen...</p>
            </div>
          </div>
        </div>

        <!-- Active Licenses -->
        <div class="bg-white rounded-lg shadow-md p-6 dashboard-card">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold flex items-center">
              <i class="fas fa-key mr-2 text-green-600"></i>
              Meine Lizenzen
            </h2>
          </div>

          <div id="licenses-list">
            <div class="text-center py-8 text-gray-500">
              <i class="fas fa-spinner fa-spin text-3xl mb-2"></i>
              <p>Lizenzen werden geladen...</p>
            </div>
          </div>
        </div>

        <!-- Recent Reviews -->
        <div class="bg-white rounded-lg shadow-md p-6 dashboard-card">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold flex items-center">
              <i class="fas fa-star mr-2 text-yellow-500"></i>
              Meine Bewertungen
            </h2>
          </div>

          <div id="reviews-list">
            <div class="text-center py-8 text-gray-500">
              <p>Sie haben noch keine Bewertungen abgegeben.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="/static/auth.js"></script>
  <script>
    // Dashboard Manager
    class DashboardManager {
      constructor() {
        this.user = null;
        this.init();
      }

      async init() {
        // Check authentication
        if (!authManager.isLoggedIn()) {
          window.location.href = '/';
          return;
        }

        this.user = authManager.getCurrentUser();
        this.loadUserProfile();
        this.loadDashboardData();
      }

      loadUserProfile() {
        // Update profile information
        document.getElementById('user-name').textContent = 
          \`\${this.user.first_name} \${this.user.last_name}\`;
        document.getElementById('profile-name').textContent = 
          \`\${this.user.first_name} \${this.user.last_name}\`;
        document.getElementById('profile-email').textContent = this.user.email;
        
        // Calculate member since (mock for now)
        const memberSince = new Date();
        memberSince.setMonth(memberSince.getMonth() - 6); // Mock: 6 months ago
        document.getElementById('profile-since').textContent = 
          memberSince.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
      }

      async loadDashboardData() {
        try {
          await Promise.all([
            this.loadOrders(),
            this.loadLicenses(),
            this.loadReviews()
          ]);
        } catch (error) {
          console.error('Failed to load dashboard data:', error);
        }
      }

      async loadOrders() {
        const ordersList = document.getElementById('orders-list');
        
        try {
          // Mock data for now - replace with real API call
          const orders = [
            {
              id: 1001,
              date: '2026-01-25',
              total: 89.99,
              status: 'completed',
              items: [{ name: 'Windows 11 Pro' }]
            },
            {
              id: 1002,
              date: '2026-01-20',
              total: 49.99,
              status: 'completed',
              items: [{ name: 'Office 2021 Home' }]
            }
          ];

          document.getElementById('total-orders').textContent = orders.length;
          
          const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
          document.getElementById('total-spent').textContent = 
            \`€\${totalSpent.toFixed(2)}\`;

          if (orders.length === 0) {
            ordersList.innerHTML = \`
              <div class="text-center py-8 text-gray-500">
                <i class="fas fa-inbox text-4xl mb-2"></i>
                <p>Noch keine Bestellungen</p>
                <a href="/produkte" class="text-blue-600 hover:underline mt-2 inline-block">
                  Jetzt einkaufen
                </a>
              </div>
            \`;
            return;
          }

          ordersList.innerHTML = orders.map(order => \`
            <div class="border-b last:border-b-0 py-4">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="font-semibold">Bestellung #\${order.id}</span>
                  <span class="text-sm text-gray-500 ml-2">\${new Date(order.date).toLocaleDateString('de-DE')}</span>
                </div>
                <span class="text-green-600 font-semibold">
                  <i class="fas fa-check-circle mr-1"></i> Abgeschlossen
                </span>
              </div>
              <p class="text-gray-700 mb-2">\${order.items.map(item => item.name).join(', ')}</p>
              <div class="flex items-center justify-between">
                <span class="font-bold text-lg">€\${order.total.toFixed(2)}</span>
                <button onclick="viewOrderDetails(\${order.id})" class="text-blue-600 hover:underline text-sm">
                  Details anzeigen →
                </button>
              </div>
            </div>
          \`).join('');
        } catch (error) {
          console.error('Failed to load orders:', error);
          ordersList.innerHTML = \`
            <div class="text-center py-8 text-red-500">
              <i class="fas fa-exclamation-circle text-3xl mb-2"></i>
              <p>Fehler beim Laden der Bestellungen</p>
            </div>
          \`;
        }
      }

      async loadLicenses() {
        const licensesList = document.getElementById('licenses-list');
        
        try {
          // Mock data for now
          const licenses = [
            {
              id: 1,
              product: 'Windows 11 Pro',
              key: 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX',
              status: 'active',
              activations: '1/1'
            },
            {
              id: 2,
              product: 'Office 2021 Home',
              key: 'YYYYY-YYYYY-YYYYY-YYYYY-YYYYY',
              status: 'active',
              activations: '1/5'
            }
          ];

          document.getElementById('total-licenses').textContent = licenses.length;

          if (licenses.length === 0) {
            licensesList.innerHTML = \`
              <div class="text-center py-8 text-gray-500">
                <i class="fas fa-key text-4xl mb-2"></i>
                <p>Noch keine Lizenzen</p>
              </div>
            \`;
            return;
          }

          licensesList.innerHTML = licenses.map(license => \`
            <div class="border-b last:border-b-0 py-4">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold">\${license.product}</span>
                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  <i class="fas fa-check mr-1"></i> Aktiv
                </span>
              </div>
              <div class="bg-gray-50 px-4 py-2 rounded font-mono text-sm mb-2">
                \${license.key}
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Aktivierungen: \${license.activations}</span>
                <div class="space-x-2">
                  <button onclick="copyLicenseKey('\${license.key}')" class="text-blue-600 hover:underline">
                    <i class="fas fa-copy mr-1"></i> Kopieren
                  </button>
                  <button onclick="downloadLicense(\${license.id})" class="text-blue-600 hover:underline">
                    <i class="fas fa-download mr-1"></i> Download
                  </button>
                </div>
              </div>
            </div>
          \`).join('');
        } catch (error) {
          console.error('Failed to load licenses:', error);
          licensesList.innerHTML = \`
            <div class="text-center py-8 text-red-500">
              <i class="fas fa-exclamation-circle text-3xl mb-2"></i>
              <p>Fehler beim Laden der Lizenzen</p>
            </div>
          \`;
        }
      }

      async loadReviews() {
        // Mock - will implement later with actual reviews API
        const reviewsList = document.getElementById('reviews-list');
        reviewsList.innerHTML = \`
          <div class="text-center py-8 text-gray-500">
            <i class="fas fa-star text-4xl mb-2"></i>
            <p>Sie haben noch keine Bewertungen abgegeben.</p>
          </div>
        \`;
      }
    }

    // Utility functions
    function viewOrderDetails(orderId) {
      alert(\`Order details for #\${orderId} - Coming soon!\`);
    }

    function copyLicenseKey(key) {
      navigator.clipboard.writeText(key).then(() => {
        authManager.showNotification('Lizenzschlüssel kopiert!', 'success');
      });
    }

    function downloadLicense(licenseId) {
      alert(\`Download license #\${licenseId} - Coming soon!\`);
    }

    function loadAllOrders() {
      alert('View all orders - Coming soon!');
    }

    function showEditProfile() {
      alert('Edit profile modal - Coming soon!');
    }

    function showChangePassword() {
      alert('Change password modal - Coming soon!');
    }

    // Initialize dashboard
    const dashboard = new DashboardManager();
  </script>
</body>
</html>
  `;
}
