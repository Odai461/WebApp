// Admin Homepage Sections Management Component
import type { FC } from 'hono/jsx'

export const AdminHomepageSections: FC = () => {
  return (
    <div>
      {/* Header */}
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Homepage Sections</h2>
          <p class="text-gray-600">Manage product sections displayed on homepage</p>
        </div>
        <button onclick="showAddSectionModal()" class="btn-gold">
          <i class="fas fa-plus mr-2"></i> Add New Section
        </button>
      </div>

      {/* Sections List */}
      <div class="admin-card">
        <table class="table" id="sections-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Title</th>
              <th>Type</th>
              <th>Layout</th>
              <th>Limit</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7" class="text-center py-8">
                <i class="fas fa-spinner fa-spin text-3xl text-gray-400 mb-3"></i>
                <p class="text-gray-500">Loading sections...</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add/Edit Section Modal */}
      <div id="section-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-gray-200">
            <h3 class="text-xl font-bold text-gray-800" id="modal-title">Add New Section</h3>
          </div>
          
          <form id="section-form" class="p-6 space-y-4">
            <input type="hidden" id="section-id" />
            
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Section Key *
                </label>
                <input 
                  type="text" 
                  id="section-key" 
                  class="form-control" 
                  placeholder="e.g., featured_products"
                  required 
                />
                <p class="text-xs text-gray-500 mt-1">Unique identifier (lowercase, underscores only)</p>
              </div>

              <div class="col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Title (German) *
                </label>
                <input 
                  type="text" 
                  id="title-de" 
                  class="form-control" 
                  placeholder="e.g., Beliebte Produkte"
                  required 
                />
              </div>

              <div class="col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle (German)
                </label>
                <input 
                  type="text" 
                  id="subtitle-de" 
                  class="form-control" 
                  placeholder="e.g., Unsere meistverkauften Software-Lizenzen" 
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Section Type *
                </label>
                <select id="section-type" class="form-control" required>
                  <option value="featured">Featured Products</option>
                  <option value="bestsellers">Bestsellers</option>
                  <option value="new">New Products</option>
                  <option value="categories">Categories</option>
                  <option value="brands">Brands</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Layout
                </label>
                <select id="layout" class="form-control">
                  <option value="grid">Grid</option>
                  <option value="slider">Slider</option>
                  <option value="list">List</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Items Limit
                </label>
                <input 
                  type="number" 
                  id="limit-items" 
                  class="form-control" 
                  value="8" 
                  min="1" 
                  max="50" 
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Display Order
                </label>
                <input 
                  type="number" 
                  id="display-order" 
                  class="form-control" 
                  value="0" 
                  min="0" 
                />
              </div>

              <div class="col-span-2 flex items-center">
                <label class="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    id="is-active" 
                    class="form-checkbox h-5 w-5 text-blue-600" 
                    checked 
                  />
                  <span class="ml-2 text-sm font-medium text-gray-700">Active on Homepage</span>
                </label>
              </div>
            </div>

            <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button type="button" onclick="closeSectionModal()" class="btn-secondary">
                Cancel
              </button>
              <button type="submit" class="btn-primary">
                <i class="fas fa-save mr-2"></i> Save Section
              </button>
            </div>
          </form>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        let sections = [];

        async function loadSections() {
          try {
            const response = await fetch('/api/admin/homepage-sections');
            const data = await response.json();
            
            if (data.success && data.data) {
              sections = data.data;
              renderSections();
            }
          } catch (error) {
            console.error('Error loading sections:', error);
          }
        }

        function renderSections() {
          const tbody = document.querySelector('#sections-table tbody');
          
          if (sections.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" class="text-center py-8 text-gray-500">No sections found.</td></tr>';
            return;
          }

          tbody.innerHTML = sections.map(section => \`
            <tr>
              <td>
                <input 
                  type="number" 
                  value="\${section.display_order}" 
                  class="form-control w-20" 
                  onchange="updateSectionOrder(\${section.id}, this.value)"
                />
              </td>
              <td>
                <div class="font-medium">\${section.title}</div>
                <div class="text-sm text-gray-500">\${section.subtitle || ''}</div>
              </td>
              <td>
                <span class="badge badge-info">\${section.section_type}</span>
              </td>
              <td>
                <span class="text-sm text-gray-600">\${section.layout}</span>
              </td>
              <td>
                <span class="text-sm text-gray-600">\${section.limit_items} items</span>
              </td>
              <td>
                <span class="badge \${section.is_active ? 'badge-success' : 'badge-danger'}">
                  \${section.is_active ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>
                <div class="flex gap-2">
                  <button 
                    onclick="editSection(\${section.id})" 
                    class="text-blue-600 hover:text-blue-700"
                    title="Edit"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button 
                    onclick="deleteSection(\${section.id})" 
                    class="text-red-600 hover:text-red-700"
                    title="Delete"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          \`).join('');
        }

        function showAddSectionModal() {
          document.getElementById('modal-title').textContent = 'Add New Section';
          document.getElementById('section-form').reset();
          document.getElementById('section-id').value = '';
          document.getElementById('section-modal').classList.remove('hidden');
        }

        function closeSectionModal() {
          document.getElementById('section-modal').classList.add('hidden');
        }

        async function editSection(id) {
          const section = sections.find(s => s.id === id);
          if (!section) return;

          document.getElementById('modal-title').textContent = 'Edit Section';
          document.getElementById('section-id').value = section.id;
          document.getElementById('section-key').value = section.section_key;
          document.getElementById('title-de').value = section.title;
          document.getElementById('subtitle-de').value = section.subtitle || '';
          document.getElementById('section-type').value = section.section_type;
          document.getElementById('layout').value = section.layout;
          document.getElementById('limit-items').value = section.limit_items;
          document.getElementById('display-order').value = section.display_order;
          document.getElementById('is-active').checked = section.is_active;
          
          document.getElementById('section-modal').classList.remove('hidden');
        }

        async function deleteSection(id) {
          if (!confirm('Are you sure you want to delete this section?')) return;

          try {
            const response = await fetch(\`/api/admin/homepage-sections/\${id}\`, {
              method: 'DELETE'
            });

            const data = await response.json();
            if (data.success) {
              alert('Section deleted successfully!');
              loadSections();
            } else {
              alert('Error deleting section: ' + (data.error || 'Unknown error'));
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error deleting section');
          }
        }

        async function updateSectionOrder(id, order) {
          try {
            await fetch(\`/api/admin/homepage-sections/\${id}\`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ display_order: parseInt(order) })
            });
            loadSections();
          } catch (error) {
            console.error('Error updating order:', error);
          }
        }

        document.getElementById('section-form').addEventListener('submit', async (e) => {
          e.preventDefault();

          const sectionId = document.getElementById('section-id').value;
          const sectionData = {
            section_key: document.getElementById('section-key').value,
            title: document.getElementById('title-de').value,
            subtitle: document.getElementById('subtitle-de').value,
            section_type: document.getElementById('section-type').value,
            layout: document.getElementById('layout').value,
            limit_items: parseInt(document.getElementById('limit-items').value),
            display_order: parseInt(document.getElementById('display-order').value),
            is_active: document.getElementById('is-active').checked ? 1 : 0
          };

          try {
            const url = sectionId ? \`/api/admin/homepage-sections/\${sectionId}\` : '/api/admin/homepage-sections';
            const method = sectionId ? 'PUT' : 'POST';

            const response = await fetch(url, {
              method,
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(sectionData)
            });

            const data = await response.json();
            if (data.success) {
              alert(sectionId ? 'Section updated successfully!' : 'Section created successfully!');
              closeSectionModal();
              loadSections();
            } else {
              alert('Error saving section: ' + (data.error || 'Unknown error'));
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error saving section');
          }
        });

        // Load sections on page load
        loadSections();
      `}}>
      </script>
    </div>
  )
}
