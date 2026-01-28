// Product Listing Component with Pagination, Filtering, and Performance Optimization
import type { FC } from 'hono/jsx'

interface ProductListingProps {
  category?: string
  lang?: 'de' | 'en'
}

export const ProductListing: FC<ProductListingProps> = ({ 
  category = 'all',
  lang = 'de'
}) => {
  const texts = {
    de: {
      title: 'Alle Produkte',
      filter: 'Filtern',
      sort: 'Sortieren',
      sortOptions: {
        popular: 'Beliebteste',
        newest: 'Neueste',
        priceLowHigh: 'Preis: Niedrig nach Hoch',
        priceHighLow: 'Preis: Hoch nach Niedrig',
        nameAZ: 'Name: A-Z',
      },
      filterCategories: 'Kategorien',
      filterBrands: 'Marken',
      filterPrice: 'Preis',
      results: 'Ergebnisse',
      showing: 'Zeige',
      of: 'von',
      products: 'Produkten',
      noResults: 'Keine Produkte gefunden',
      clearFilters: 'Filter zurücksetzen',
      loadMore: 'Mehr laden',
      viewGrid: 'Rasteransicht',
      viewList: 'Listenansicht',
    },
    en: {
      title: 'All Products',
      filter: 'Filter',
      sort: 'Sort',
      sortOptions: {
        popular: 'Most Popular',
        newest: 'Newest',
        priceLowHigh: 'Price: Low to High',
        priceHighLow: 'Price: High to Low',
        nameAZ: 'Name: A-Z',
      },
      filterCategories: 'Categories',
      filterBrands: 'Brands',
      filterPrice: 'Price',
      results: 'Results',
      showing: 'Showing',
      of: 'of',
      products: 'products',
      noResults: 'No products found',
      clearFilters: 'Clear filters',
      loadMore: 'Load More',
      viewGrid: 'Grid View',
      viewList: 'List View',
    },
  };

  const t = texts[lang];

  return (
    <div class="product-listing-page bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <a href={lang === 'de' ? '/' : '/en'} class="hover:text-blue-600">
              {lang === 'de' ? 'Startseite' : 'Home'}
            </a>
            <i class="fas fa-chevron-right text-xs"></i>
            <span class="text-gray-900">{t.title}</span>
          </div>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-md p-6 sticky top-6">
              {/* Filter Header */}
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <i class="fas fa-filter text-blue-600"></i>
                  {t.filter}
                </h2>
                <button id="clear-filters" class="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  {t.clearFilters}
                </button>
              </div>

              {/* Categories Filter */}
              <div class="mb-6 pb-6 border-b border-gray-200">
                <h3 class="font-semibold text-gray-900 mb-3">{t.filterCategories}</h3>
                <div class="space-y-2">
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="category" data-filter-value="office" />
                    <span class="text-sm text-gray-700">Office Software</span>
                    <span class="ml-auto text-xs text-gray-500">(45)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="category" data-filter-value="creative" />
                    <span class="text-sm text-gray-700">{lang === 'de' ? 'Kreativ-Software' : 'Creative Software'}</span>
                    <span class="ml-auto text-xs text-gray-500">(32)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="category" data-filter-value="os" />
                    <span class="text-sm text-gray-700">{lang === 'de' ? 'Betriebssysteme' : 'Operating Systems'}</span>
                    <span class="ml-auto text-xs text-gray-500">(18)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="category" data-filter-value="security" />
                    <span class="text-sm text-gray-700">{lang === 'de' ? 'Sicherheit' : 'Security'}</span>
                    <span class="ml-auto text-xs text-gray-500">(28)</span>
                  </label>
                </div>
              </div>

              {/* Brands Filter */}
              <div class="mb-6 pb-6 border-b border-gray-200">
                <h3 class="font-semibold text-gray-900 mb-3">{t.filterBrands}</h3>
                <div class="space-y-2">
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="brand" data-filter-value="microsoft" />
                    <span class="text-sm text-gray-700">Microsoft</span>
                    <span class="ml-auto text-xs text-gray-500">(38)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="brand" data-filter-value="adobe" />
                    <span class="text-sm text-gray-700">Adobe</span>
                    <span class="ml-auto text-xs text-gray-500">(25)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="brand" data-filter-value="corel" />
                    <span class="text-sm text-gray-700">Corel</span>
                    <span class="ml-auto text-xs text-gray-500">(12)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" class="filter-checkbox" data-filter-type="brand" data-filter-value="kaspersky" />
                    <span class="text-sm text-gray-700">Kaspersky</span>
                    <span class="ml-auto text-xs text-gray-500">(15)</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div class="mb-6">
                <h3 class="font-semibold text-gray-900 mb-3">{t.filterPrice}</h3>
                <div class="space-y-2">
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="radio" name="price" class="filter-radio" data-filter-type="price" data-filter-value="0-50" />
                    <span class="text-sm text-gray-700">€0 - €50</span>
                    <span class="ml-auto text-xs text-gray-500">(45)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="radio" name="price" class="filter-radio" data-filter-type="price" data-filter-value="50-100" />
                    <span class="text-sm text-gray-700">€50 - €100</span>
                    <span class="ml-auto text-xs text-gray-500">(58)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="radio" name="price" class="filter-radio" data-filter-type="price" data-filter-value="100-200" />
                    <span class="text-sm text-gray-700">€100 - €200</span>
                    <span class="ml-auto text-xs text-gray-500">(32)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="radio" name="price" class="filter-radio" data-filter-type="price" data-filter-value="200+" />
                    <span class="text-sm text-gray-700">€200+</span>
                    <span class="ml-auto text-xs text-gray-500">(18)</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main class="lg:col-span-3">
            {/* Toolbar */}
            <div class="bg-white rounded-lg shadow-md p-4 mb-6">
              <div class="flex items-center justify-between flex-wrap gap-4">
                {/* Results Count */}
                <div class="text-sm text-gray-600">
                  <span id="results-info">
                    {t.showing} <strong id="current-count">24</strong> {t.of} <strong id="total-count">250</strong> {t.products}
                  </span>
                </div>

                {/* Sort & View Options */}
                <div class="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <div class="flex items-center gap-2">
                    <label class="text-sm text-gray-600">{t.sort}:</label>
                    <select id="sort-select" class="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-sm">
                      <option value="popular">{t.sortOptions.popular}</option>
                      <option value="newest">{t.sortOptions.newest}</option>
                      <option value="price-low">{t.sortOptions.priceLowHigh}</option>
                      <option value="price-high">{t.sortOptions.priceHighLow}</option>
                      <option value="name-az">{t.sortOptions.nameAZ}</option>
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div class="flex items-center gap-1 border border-gray-300 rounded-lg overflow-hidden">
                    <button id="view-grid" class="px-3 py-2 bg-blue-600 text-white" title={t.viewGrid}>
                      <i class="fas fa-th"></i>
                    </button>
                    <button id="view-list" class="px-3 py-2 hover:bg-gray-50" title={t.viewList}>
                      <i class="fas fa-list"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid Container */}
            <div id="products-container" class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {/* Products will be loaded dynamically */}
            </div>

            {/* Loading Indicator */}
            <div id="loading-indicator" class="hidden text-center py-8">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p class="text-gray-600 mt-4">{lang === 'de' ? 'Wird geladen...' : 'Loading...'}</p>
            </div>

            {/* No Results */}
            <div id="no-results" class="hidden text-center py-16">
              <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 class="text-2xl font-semibold text-gray-700 mb-2">{t.noResults}</h3>
              <p class="text-gray-500 mb-6">{lang === 'de' ? 'Versuchen Sie andere Filter oder Suchbegriffe' : 'Try different filters or search terms'}</p>
              <button id="clear-filters-btn" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                {t.clearFilters}
              </button>
            </div>

            {/* Pagination */}
            <div id="pagination" class="flex items-center justify-center gap-2 mt-8">
              {/* Pagination will be generated dynamically */}
            </div>

            {/* Load More Button (Infinite Scroll Alternative) */}
            <div id="load-more-container" class="hidden text-center mt-8">
              <button id="load-more-btn" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                {t.loadMore}
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Product Card Template */}
      <template id="product-card-template">
        <div class="product-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
          {/* Product Image */}
          <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden">
            <img 
              data-src="" 
              alt="" 
              class="product-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 lazy-load"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E"
            />
            {/* Badges */}
            <div class="absolute top-3 left-3 flex flex-col gap-2">
              <span class="discount-badge hidden bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold"></span>
              <span class="new-badge hidden bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">NEU</span>
            </div>
            {/* Quick Actions */}
            <div class="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button class="wishlist-btn w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                <i class="far fa-heart text-gray-700 hover:text-red-600"></i>
              </button>
              <button class="compare-btn w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                <i class="fas fa-balance-scale text-gray-700 hover:text-blue-600"></i>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div class="p-4">
            <div class="text-xs text-gray-500 mb-1 product-category">Office Software</div>
            <h3 class="product-name font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
              <a href="#" class="product-link"></a>
            </h3>
            
            {/* Rating */}
            <div class="flex items-center gap-2 mb-3">
              <div class="flex text-yellow-400 text-sm product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="text-xs text-gray-500 product-reviews">(0)</span>
            </div>

            {/* Price */}
            <div class="flex items-baseline gap-2 mb-4">
              <span class="product-price text-2xl font-bold text-gray-900">€0,00</span>
              <span class="product-original-price hidden text-sm text-gray-400 line-through">€0,00</span>
            </div>

            {/* Add to Cart Button */}
            <button class="add-to-cart-btn w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
              <i class="fas fa-shopping-cart"></i>
              {lang === 'de' ? 'In den Warenkorb' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </template>

      {/* JavaScript for Product Listing */}
      <script dangerouslySetInnerHTML={{__html: `
        // Configuration
        const ITEMS_PER_PAGE = 24;
        const ENABLE_INFINITE_SCROLL = false;
        const LAZY_LOAD_OFFSET = 200;

        // State
        let currentPage = 1;
        let totalProducts = 0;
        let allProducts = [];
        let filteredProducts = [];
        let activeFilters = {
          categories: [],
          brands: [],
          price: null,
          sort: 'popular'
        };

        // Initialize
        function init() {
          loadProducts();
          setupFilters();
          setupPagination();
          setupLazyLoading();
          setupViewToggle();
        }

        // Load products (demo data)
        function loadProducts() {
          // Generate 250 demo products
          allProducts = Array.from({ length: 250 }, (_, i) => ({
            id: i + 1,
            name: 'Microsoft Office 2024 Professional Plus ' + (i + 1),
            category: ['office', 'creative', 'os', 'security'][i % 4],
            brand: ['microsoft', 'adobe', 'corel', 'kaspersky'][i % 4],
            price: Math.floor(Math.random() * 400) + 20,
            originalPrice: Math.floor(Math.random() * 600) + 100,
            rating: 4 + Math.random(),
            reviews: Math.floor(Math.random() * 5000),
            image: 'https://via.placeholder.com/400x300?text=Product+' + (i + 1),
            isNew: i < 20,
            discount: Math.floor((1 - (Math.floor(Math.random() * 400) + 20) / (Math.floor(Math.random() * 600) + 100)) * 100)
          }));

          filteredProducts = [...allProducts];
          totalProducts = filteredProducts.length;
          renderProducts();
        }

        // Setup filters
        function setupFilters() {
          // Category and brand checkboxes
          document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
              const type = checkbox.dataset.filterType;
              const value = checkbox.dataset.filterValue;

              if (checkbox.checked) {
                activeFilters[type + 's'].push(value);
              } else {
                activeFilters[type + 's'] = activeFilters[type + 's'].filter(v => v !== value);
              }

              applyFilters();
            });
          });

          // Price range radios
          document.querySelectorAll('.filter-radio').forEach(radio => {
            radio.addEventListener('change', () => {
              activeFilters.price = radio.dataset.filterValue;
              applyFilters();
            });
          });

          // Sort dropdown
          document.getElementById('sort-select').addEventListener('change', (e) => {
            activeFilters.sort = e.target.value;
            applyFilters();
          });

          // Clear filters
          document.getElementById('clear-filters').addEventListener('click', clearFilters);
          document.getElementById('clear-filters-btn')?.addEventListener('click', clearFilters);
        }

        // Apply filters
        function applyFilters() {
          filteredProducts = allProducts.filter(product => {
            // Category filter
            if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
              return false;
            }

            // Brand filter
            if (activeFilters.brands.length > 0 && !activeFilters.brands.includes(product.brand)) {
              return false;
            }

            // Price filter
            if (activeFilters.price) {
              const [min, max] = activeFilters.price.split('-').map(v => v === '+' ? Infinity : parseInt(v));
              if (product.price < min || product.price > (max || Infinity)) {
                return false;
              }
            }

            return true;
          });

          // Apply sort
          sortProducts();

          totalProducts = filteredProducts.length;
          currentPage = 1;
          renderProducts();
        }

        // Sort products
        function sortProducts() {
          switch (activeFilters.sort) {
            case 'popular':
              filteredProducts.sort((a, b) => b.reviews - a.reviews);
              break;
            case 'newest':
              filteredProducts.sort((a, b) => b.id - a.id);
              break;
            case 'price-low':
              filteredProducts.sort((a, b) => a.price - b.price);
              break;
            case 'price-high':
              filteredProducts.sort((a, b) => b.price - a.price);
              break;
            case 'name-az':
              filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
              break;
          }
        }

        // Clear filters
        function clearFilters() {
          activeFilters = {
            categories: [],
            brands: [],
            price: null,
            sort: 'popular'
          };

          document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
          document.querySelectorAll('.filter-radio').forEach(rb => rb.checked = false);
          document.getElementById('sort-select').value = 'popular';

          applyFilters();
        }

        // Render products
        function renderProducts() {
          const container = document.getElementById('products-container');
          const template = document.getElementById('product-card-template');
          const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
          const endIndex = startIndex + ITEMS_PER_PAGE;
          const pageProducts = filteredProducts.slice(startIndex, endIndex);

          // Clear container
          container.innerHTML = '';

          // Show no results if needed
          if (filteredProducts.length === 0) {
            document.getElementById('no-results').classList.remove('hidden');
            document.getElementById('pagination').classList.add('hidden');
            return;
          }

          document.getElementById('no-results').classList.add('hidden');

          // Render products
          pageProducts.forEach(product => {
            const card = template.content.cloneNode(true);

            // Set product data
            card.querySelector('.product-image').dataset.src = product.image;
            card.querySelector('.product-image').alt = product.name;
            card.querySelector('.product-link').href = '/produkt/' + product.id;
            card.querySelector('.product-link').textContent = product.name;
            card.querySelector('.product-name').querySelector('a').textContent = product.name;
            card.querySelector('.product-category').textContent = getCategoryName(product.category);
            card.querySelector('.product-price').textContent = '€' + product.price.toFixed(2).replace('.', ',');
            card.querySelector('.product-reviews').textContent = '(' + product.reviews + ')';

            // Show badges
            if (product.discount > 10) {
              const badge = card.querySelector('.discount-badge');
              badge.classList.remove('hidden');
              badge.textContent = '-' + product.discount + '%';

              const originalPrice = card.querySelector('.product-original-price');
              originalPrice.classList.remove('hidden');
              originalPrice.textContent = '€' + product.originalPrice.toFixed(2).replace('.', ',');
            }

            if (product.isNew) {
              card.querySelector('.new-badge').classList.remove('hidden');
            }

            container.appendChild(card);
          });

          // Update counts
          document.getElementById('current-count').textContent = Math.min(endIndex, filteredProducts.length);
          document.getElementById('total-count').textContent = filteredProducts.length;

          // Render pagination
          renderPagination();

          // Trigger lazy loading
          lazyLoadImages();
        }

        // Render pagination
        function renderPagination() {
          const paginationContainer = document.getElementById('pagination');
          const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

          if (totalPages <= 1) {
            paginationContainer.classList.add('hidden');
            return;
          }

          paginationContainer.classList.remove('hidden');
          paginationContainer.innerHTML = '';

          // Previous button
          const prevBtn = createPaginationButton('‹', currentPage > 1, () => {
            if (currentPage > 1) {
              currentPage--;
              renderProducts();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
          paginationContainer.appendChild(prevBtn);

          // Page numbers
          const maxVisiblePages = 7;
          let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
          let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

          if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }

          if (startPage > 1) {
            paginationContainer.appendChild(createPaginationButton('1', true, () => goToPage(1)));
            if (startPage > 2) {
              paginationContainer.appendChild(createPaginationButton('...', false));
            }
          }

          for (let i = startPage; i <= endPage; i++) {
            paginationContainer.appendChild(createPaginationButton(i, true, () => goToPage(i), i === currentPage));
          }

          if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
              paginationContainer.appendChild(createPaginationButton('...', false));
            }
            paginationContainer.appendChild(createPaginationButton(totalPages, true, () => goToPage(totalPages)));
          }

          // Next button
          const nextBtn = createPaginationButton('›', currentPage < totalPages, () => {
            if (currentPage < totalPages) {
              currentPage++;
              renderProducts();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
          paginationContainer.appendChild(nextBtn);
        }

        // Create pagination button
        function createPaginationButton(text, enabled, onClick, active = false) {
          const btn = document.createElement('button');
          btn.textContent = text;
          btn.className = \`px-4 py-2 rounded-lg font-semibold transition-colors \${
            active ? 'bg-blue-600 text-white' :
            enabled ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300' :
            'bg-gray-100 text-gray-400 cursor-not-allowed'
          }\`;

          if (enabled && onClick) {
            btn.addEventListener('click', onClick);
          } else {
            btn.disabled = true;
          }

          return btn;
        }

        // Go to page
        function goToPage(page) {
          currentPage = page;
          renderProducts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Setup lazy loading
        function setupLazyLoading() {
          const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                observer.unobserve(img);
              }
            });
          }, {
            rootMargin: LAZY_LOAD_OFFSET + 'px'
          });

          window.imageObserver = imageObserver;
        }

        // Lazy load images
        function lazyLoadImages() {
          document.querySelectorAll('.lazy-load').forEach(img => {
            window.imageObserver.observe(img);
          });
        }

        // Setup view toggle
        function setupViewToggle() {
          const gridBtn = document.getElementById('view-grid');
          const listBtn = document.getElementById('view-list');
          const container = document.getElementById('products-container');

          gridBtn.addEventListener('click', () => {
            container.className = 'grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8';
            gridBtn.className = 'px-3 py-2 bg-blue-600 text-white';
            listBtn.className = 'px-3 py-2 hover:bg-gray-50';
          });

          listBtn.addEventListener('click', () => {
            container.className = 'grid grid-cols-1 gap-4 mb-8';
            listBtn.className = 'px-3 py-2 bg-blue-600 text-white';
            gridBtn.className = 'px-3 py-2 hover:bg-gray-50';
          });
        }

        // Get category name
        function getCategoryName(category) {
          const names = {
            office: 'Office Software',
            creative: ${lang === 'de' ? "'Kreativ-Software'" : "'Creative Software'"},
            os: ${lang === 'de' ? "'Betriebssysteme'" : "'Operating Systems'"},
            security: ${lang === 'de' ? "'Sicherheit'" : "'Security'"}
          };
          return names[category] || category;
        }

        // Initialize on page load
        init();
      `}} />
    </div>
  )
}
