// Admin Blog Management Page
import { AdminSidebarAdvanced } from './admin-sidebar-advanced'

export function AdminBlog() {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog Management - Admin - SOFTWAREKING24</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <style>
            :root {
                --navy-dark: #132C46;
                --gold: #D9A50B;
            }
            body {
                background: #f8fafc;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .stat-card {
                background: white;
                border-radius: 12px;
                padding: 1.5rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            }
            .post-card {
                background: white;
                border-radius: 12px;
                padding: 1.5rem;
                margin-bottom: 1rem;
                box-shadow: 0 2px 4px rgba(0,0,0,0.06);
                transition: all 0.2s;
            }
            .post-card:hover {
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .badge {
                padding: 0.25rem 0.75rem;
                border-radius: 12px;
                font-size: 0.75rem;
                font-weight: 600;
            }
            .badge-published { background: #d1fae5; color: #065f46; }
            .badge-draft { background: #fee2e2; color: #991b1b; }
            .badge-ai { background: #dbeafe; color: #1e40af; }
            .btn-primary {
                background: var(--navy-dark);
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                transition: all 0.2s;
            }
            .btn-primary:hover {
                background: #0f1f33;
            }
        </style>
    </head>
    <body>
        ${AdminSidebarAdvanced('/admin/blog')}
        
        <div class="ml-64 p-8">
            <!-- Header -->
            <div class="mb-8">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-bold mb-2" style="color: var(--navy-dark);">
                            <i class="fas fa-blog mr-3"></i>Blog Management
                        </h1>
                        <p class="text-gray-600">Verwalten Sie Ihre Blog-Beiträge und AI-generierten Inhalte</p>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="location.href='/admin/blog/ai-settings'" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <i class="fas fa-robot mr-2"></i>AI Settings
                        </button>
                        <button onclick="generateAIPost()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            <i class="fas fa-magic mr-2"></i>AI Generieren
                        </button>
                        <button onclick="location.href='/admin/blog/posts/new'" class="btn-primary">
                            <i class="fas fa-plus mr-2"></i>Neuer Beitrag
                        </button>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-4 gap-6 mb-8">
                <div class="stat-card">
                    <div class="text-3xl font-bold mb-2" style="color: var(--navy-dark);" id="totalPosts">0</div>
                    <div class="text-sm text-gray-600">Gesamt Beiträge</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold mb-2 text-green-600" id="publishedPosts">0</div>
                    <div class="text-sm text-gray-600">Veröffentlicht</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold mb-2 text-blue-600" id="aiPosts">0</div>
                    <div class="text-sm text-gray-600">AI-Generiert</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold mb-2 text-purple-600" id="totalViews">0</div>
                    <div class="text-sm text-gray-600">Gesamt Aufrufe</div>
                </div>
            </div>

            <!-- Filters -->
            <div class="flex gap-4 mb-6">
                <select id="statusFilter" onchange="loadPosts()" class="px-4 py-2 border rounded-lg">
                    <option value="">Alle Status</option>
                    <option value="published">Veröffentlicht</option>
                    <option value="draft">Entwurf</option>
                </select>
                <select id="categoryFilter" onchange="loadPosts()" class="px-4 py-2 border rounded-lg">
                    <option value="">Alle Kategorien</option>
                </select>
                <input type="text" id="searchInput" placeholder="Suchen..." class="px-4 py-2 border rounded-lg flex-1" onkeyup="debounceSearch()">
            </div>

            <!-- Posts List -->
            <div id="postsList">
                <div class="text-center py-8">
                    <i class="fas fa-spinner fa-spin text-4xl text-gray-400"></i>
                    <p class="mt-4 text-gray-600">Lade Beiträge...</p>
                </div>
            </div>
        </div>

        <script>
            let posts = [];
            let categories = [];

            async function loadCategories() {
                try {
                    const response = await axios.get('/api/blog/categories');
                    if (response.data.success) {
                        categories = response.data.categories;
                        const select = document.getElementById('categoryFilter');
                        categories.forEach(cat => {
                            const option = document.createElement('option');
                            option.value = cat.id;
                            option.textContent = cat.name;
                            select.appendChild(option);
                        });
                    }
                } catch (error) {
                    console.error('Error loading categories:', error);
                }
            }

            async function loadPosts() {
                try {
                    const status = document.getElementById('statusFilter').value;
                    const category = document.getElementById('categoryFilter').value;
                    const search = document.getElementById('searchInput').value;
                    
                    let url = '/api/blog/posts?limit=100';
                    if (status) url += \`&status=\${status}\`;
                    if (category) url += \`&category=\${category}\`;
                    if (search) url += \`&search=\${encodeURIComponent(search)}\`;
                    
                    const response = await axios.get(url);
                    
                    if (response.data.success) {
                        posts = response.data.posts;
                        renderPosts();
                        updateStats();
                    }
                } catch (error) {
                    console.error('Error loading posts:', error);
                    document.getElementById('postsList').innerHTML = \`
                        <div class="text-center py-8 text-red-600">
                            <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
                            <p>Fehler beim Laden der Beiträge</p>
                        </div>
                    \`;
                }
            }

            function renderPosts() {
                const container = document.getElementById('postsList');
                
                if (posts.length === 0) {
                    container.innerHTML = \`
                        <div class="text-center py-12 bg-white rounded-lg">
                            <i class="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
                            <p class="text-gray-600 text-lg">Keine Beiträge gefunden</p>
                            <button onclick="location.href='/admin/blog/posts/new'" class="mt-4 btn-primary">
                                <i class="fas fa-plus mr-2"></i>Ersten Beitrag erstellen
                            </button>
                        </div>
                    \`;
                    return;
                }
                
                container.innerHTML = posts.map(post => \`
                    <div class="post-card">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex gap-2 mb-2">
                                    <span class="badge badge-\${post.status}">\${post.status === 'published' ? 'Veröffentlicht' : 'Entwurf'}</span>
                                    \${post.is_ai_generated ? '<span class="badge badge-ai"><i class="fas fa-robot mr-1"></i>AI</span>' : ''}
                                    \${post.category_name ? \`<span class="badge" style="background: #f3f4f6; color: #374151;">\${post.category_name}</span>\` : ''}
                                </div>
                                <h3 class="text-xl font-bold mb-2">\${post.title}</h3>
                                <p class="text-gray-600 text-sm mb-3">\${post.excerpt || 'Keine Beschreibung'}</p>
                                <div class="flex gap-4 text-sm text-gray-500">
                                    <span><i class="fas fa-eye mr-1"></i>\${post.view_count || 0} Aufrufe</span>
                                    <span><i class="fas fa-calendar mr-1"></i>\${new Date(post.created_at).toLocaleDateString('de-DE')}</span>
                                    \${post.published_at ? \`<span><i class="fas fa-check-circle mr-1"></i>\${new Date(post.published_at).toLocaleDateString('de-DE')}</span>\` : ''}
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <a href="/de/news/\${post.slug}" target="_blank" class="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                                <button onclick="editPost(\${post.id})" class="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button onclick="deletePost(\${post.id}, '\${post.title}')" class="px-3 py-2 text-red-600 hover:bg-red-50 rounded">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                \`).join('');
            }

            function updateStats() {
                document.getElementById('totalPosts').textContent = posts.length;
                document.getElementById('publishedPosts').textContent = posts.filter(p => p.status === 'published').length;
                document.getElementById('aiPosts').textContent = posts.filter(p => p.is_ai_generated).length;
                document.getElementById('totalViews').textContent = posts.reduce((sum, p) => sum + (p.view_count || 0), 0);
            }

            function editPost(id) {
                location.href = \`/admin/blog/posts/edit/\${id}\`;
            }

            async function deletePost(id, title) {
                if (!confirm(\`Beitrag "\${title}" wirklich löschen?\`)) return;
                
                try {
                    await axios.delete(\`/api/blog/posts/\${id}\`);
                    alert('✅ Beitrag gelöscht');
                    loadPosts();
                } catch (error) {
                    console.error('Error deleting post:', error);
                    alert('❌ Fehler beim Löschen');
                }
            }

            async function generateAIPost() {
                const topic = prompt('Thema für AI-Generierung (oder leer für automatisch):');
                if (topic === null) return;
                
                if (confirm('Beitrag direkt veröffentlichen?')) {
                    try {
                        const response = await axios.post('/api/blog/ai/generate', {
                            topic: topic || null,
                            auto_publish: true
                        });
                        
                        if (response.data.success) {
                            alert('✅ AI-Beitrag erfolgreich generiert und veröffentlicht!');
                            loadPosts();
                        }
                    } catch (error) {
                        console.error('Error generating post:', error);
                        alert('❌ Fehler bei der AI-Generierung');
                    }
                } else {
                    try {
                        const response = await axios.post('/api/blog/ai/generate', {
                            topic: topic || null,
                            auto_publish: false
                        });
                        
                        if (response.data.success) {
                            alert('✅ AI-Beitrag als Entwurf gespeichert!');
                            loadPosts();
                        }
                    } catch (error) {
                        console.error('Error generating post:', error);
                        alert('❌ Fehler bei der AI-Generierung');
                    }
                }
            }

            let searchTimeout;
            function debounceSearch() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => loadPosts(), 500);
            }

            // Load data on page load
            loadCategories();
            loadPosts();
        </script>
    </body>
    </html>
  `.trim();
}
