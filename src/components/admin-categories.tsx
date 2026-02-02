export function AdminCategories() {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categories - Admin - SOFTWAREKING24</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --navy: #132C46;
            --gold: #D9A50B;
        }
        body {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        .admin-header {
            background: linear-gradient(135deg, var(--navy) 0%, #1a3a54 100%);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .stat-card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            border-left: 4px solid var(--gold);
        }
    </style>
</head>
<body>
    <div class="admin-header text-white p-6 mb-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold mb-2">
                        <i class="fas fa-folder-open mr-3"></i>Categories
                    </h1>
                    <p class="text-blue-100">Produktkategorien verwalten</p>
                </div>
                <div class="flex gap-4">
                    <button onclick="addCategory()" class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                        <i class="fas fa-plus mr-2"></i>Neue Kategorie
                    </button>
                    <a href="/admin" class="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                        <i class="fas fa-arrow-left mr-2"></i>Zurück
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 pb-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="stat-card">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-600 text-sm">Gesamt</span>
                    <i class="fas fa-folder text-blue-600 text-xl"></i>
                </div>
                <div class="text-3xl font-bold text-gray-800" id="totalCategories">0</div>
            </div>
            <div class="stat-card">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-600 text-sm">Aktiv</span>
                    <i class="fas fa-check-circle text-green-600 text-xl"></i>
                </div>
                <div class="text-3xl font-bold text-gray-800" id="activeCategories">0</div>
            </div>
            <div class="stat-card">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-600 text-sm">Produkte</span>
                    <i class="fas fa-box" style="color: var(--gold)"></i>
                </div>
                <div class="text-3xl font-bold text-gray-800" id="totalProducts">0</div>
            </div>
            <div class="stat-card">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-600 text-sm">Ø Produkte</span>
                    <i class="fas fa-chart-bar text-purple-600 text-xl"></i>
                </div>
                <div class="text-3xl font-bold text-gray-800" id="avgProducts">0</div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-semibold mb-6">Alle Kategorien</h2>
            <div class="text-center py-12 text-gray-500">
                <i class="fas fa-info-circle text-4xl mb-4 text-gray-300"></i>
                <p>Kategorien-Verwaltung wird in Kürze verfügbar sein</p>
                <p class="text-sm mt-2">Momentan keine Kategorien vorhanden</p>
            </div>
        </div>
    </div>

    <script>
        async function loadCategories() {
            document.getElementById('totalCategories').textContent = '0';
            document.getElementById('activeCategories').textContent = '0';
            document.getElementById('totalProducts').textContent = '0';
            document.getElementById('avgProducts').textContent = '0';
        }

        function addCategory() {
            alert('Kategorie hinzufügen - Funktion wird bald verfügbar sein');
        }

        loadCategories();
    </script>
</body>
</html>
  `;
}
