// Section Rendering Functions for Dynamic Homepage
// This file contains all the rendering functions for the 24 homepage sections

function renderHeroSlider(section, config) {
  // Default slides if none provided
  const defaultSlides = [
    {
      title: 'Original Software-Lizenzen',
      description: 'Günstige Windows, Office & mehr – Sofort per E-Mail',
      background_color: '#001f3f',
      text_color: 'white',
      cta_link: '/produkte',
      cta_text: 'Jetzt kaufen'
    },
    {
      title: 'Bis zu 70% sparen',
      description: 'Top-Marken zum besten Preis – 100% legal',
      background_color: '#003366',
      text_color: 'white',
      cta_link: '/angebote',
      cta_text: 'Angebote ansehen'
    },
    {
      title: '24/7 Sofort-Lieferung',
      description: 'Alle Lizenzen auf Lager – Per E-Mail in Minuten',
      background_color: '#001f3f',
      text_color: 'white',
      cta_link: '/kontakt',
      cta_text: 'Mehr erfahren'
    }
  ];
  
  const slides = config.slides || defaultSlides;
  if (slides.length === 0) return '';
  
  return `
    <section class="hero-slider" data-section-id="${section.id}" style="position:relative; height:600px; overflow:hidden;">
      <div class="slides-container" style="position:relative; height:100%; width:100%;">
        ${slides.map((slide, i) => `
          <div class="slide ${i === 0 ? 'active' : ''}" 
               style="position:absolute; top:0; left:0; width:100%; height:100%; 
                      background: linear-gradient(135deg, ${slide.background_color || '#001f3f'} 0%, #003366 100%);
                      color: ${slide.text_color || 'white'};
                      display: ${i === 0 ? 'flex' : 'none'};
                      align-items: center; justify-content: center; text-align: center; padding: 40px;">
            <div style="max-width: 800px;">
              <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 20px;">${slide.title}</h1>
              <p style="font-size: 1.5rem; margin-bottom: 30px;">${slide.description || ''}</p>
              ${slide.cta_link ? `<a href="${slide.cta_link}" class="cta-button" style="display:inline-block; background:#FFC107; color:#001f3f; padding:15px 40px; border-radius:25px; text-decoration:none; font-weight:bold;">${slide.cta_text || 'Mehr erfahren'}</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      
      ${slides.length > 1 ? `
        <div class="slider-dots" style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); display:flex; gap:10px;">
          ${slides.map((_, i) => `
            <button class="slider-dot ${i === 0 ? 'active' : ''}" 
                    onclick="goToSlide(${i})"
                    style="width:12px; height:12px; border-radius:50%; background:${i === 0 ? '#FFC107' : 'rgba(255,255,255,0.5)'}; border:none; cursor:pointer;"></button>
          `).join('')}
        </div>
        
        <button class="slider-prev" onclick="prevSlide()" style="position:absolute; left:20px; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; padding:15px 20px; cursor:pointer; border-radius:5px;">&#10094;</button>
        <button class="slider-next" onclick="nextSlide()" style="position:absolute; right:20px; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; padding:15px 20px; cursor:pointer; border-radius:5px;">&#10095;</button>
      ` : ''}
    </section>
  `;
}

function renderTrustBar(section, config) {
  const badges = config.badges || [
    { icon: 'shield-alt', title: 'Sichere Zahlung', description: 'SSL verschlüsselt' },
    { icon: 'shipping-fast', title: 'Sofortversand', description: 'Per E-Mail' },
    { icon: 'undo', title: '14 Tage Rückgabe', description: 'Geld-zurück-Garantie' },
    { icon: 'headset', title: 'Support', description: 'Mo-Fr 9-18 Uhr' }
  ];
  
  return `
    <section class="trust-bar" data-section-id="${section.id}" style="background:linear-gradient(135deg, #001f3f 0%, #003366 100%); color:white; padding:30px 20px;">
      <div style="max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:30px;">
        ${badges.map(badge => `
          <div style="text-align:center;">
            <i class="fas fa-${badge.icon}" style="font-size:32px; color:#FFC107; margin-bottom:10px;"></i>
            <h4 style="font-weight:bold; margin-bottom:5px;">${badge.title}</h4>
            <p style="font-size:14px; opacity:0.9;">${badge.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderProductSlider(section, config) {
  const containerId = `product-slider-${section.id}`;
  
  // Start loading products immediately after rendering
  setTimeout(() => loadProductsForSection(containerId, section, config), 100);
  
  return `
    <section class="product-slider" data-section-id="${section.id}" style="padding:60px 20px; background:#f8f9fa;">
      <div style="max-width:1200px; margin:0 auto;">
        <h2 style="text-align:center; font-size:2.5rem; color:#001f3f; margin-bottom:10px;">${section.title || '📦 Unsere Produkte'}</h2>
        ${section.subtitle ? `<p style="text-align:center; font-size:1.1rem; color:#666; margin-bottom:40px;">${section.subtitle}</p>` : ''}
        <div id="${containerId}" class="product-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:30px;">
          ${renderProductSkeletons(4)}
        </div>
      </div>
    </section>
  `;
}

// Skeleton loader for products
function renderProductSkeletons(count) {
  return Array(count).fill(0).map(() => `
    <div class="product-skeleton" style="background:white; border-radius:15px; padding:20px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
      <div style="width:100%; height:200px; background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:10px; margin-bottom:15px;"></div>
      <div style="width:70%; height:20px; background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:5px; margin-bottom:10px;"></div>
      <div style="width:50%; height:16px; background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:5px; margin-bottom:15px;"></div>
      <div style="width:40%; height:24px; background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:5px; margin-bottom:15px;"></div>
      <div style="width:100%; height:40px; background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:25px;"></div>
    </div>
  `).join('');
}

// Load products for a specific section
async function loadProductsForSection(containerId, section, config) {
  try {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Determine category from section key
    let category = '';
    if (section.section_key.includes('windows')) category = 'windows';
    else if (section.section_key.includes('office')) category = 'office';
    else if (section.section_key.includes('server')) category = 'server';
    else if (section.section_key.includes('antivirus')) category = 'antivirus';
    
    // Build API URL
    const params = new URLSearchParams({
      limit: config.limit || '8',
      sort: config.sort || 'bestseller'
    });
    
    if (category) params.append('category', category);
    if (config.featured) params.append('featured', 'true');
    if (config.onSale) params.append('onSale', 'true');
    
    const response = await fetch(`/api/products?${params.toString()}`);
    const data = await response.json();
    
    if (data.success && data.data && data.data.length > 0) {
      container.innerHTML = data.data.map(product => renderProductCard(product)).join('');
    } else {
      container.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:40px; color:#666;">
          <i class="fas fa-box-open" style="font-size:48px; margin-bottom:20px; opacity:0.5;"></i>
          <p style="font-size:1.1rem;">Keine Produkte gefunden</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Error loading products:', error);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:40px; color:#dc3545;">
          <i class="fas fa-exclamation-triangle" style="font-size:48px; margin-bottom:20px;"></i>
          <p style="font-size:1.1rem;">Fehler beim Laden der Produkte</p>
        </div>
      `;
    }
  }
}

// Render individual product card
function renderProductCard(product) {
  const finalPrice = product.discount_price || product.base_price;
  const hasDiscount = product.discount_price && product.discount_price < product.base_price;
  const savings = hasDiscount ? Math.round(((product.base_price - product.discount_price) / product.base_price) * 100) : 0;
  const imageUrl = product.image_url || getDefaultProductImage(product.category_name, product.brand_name);
  
  return `
    <div class="product-card" data-product-id="${product.id}" style="background:white; border-radius:15px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.1); transition:all 0.3s; cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'" onclick="window.location.href='/produkt/${product.slug}'">
      
      ${hasDiscount ? `<div class="discount-badge" style="position:absolute; top:10px; right:10px; background:#dc3545; color:white; padding:5px 15px; border-radius:20px; font-weight:bold; font-size:14px; z-index:10;">-${savings}%</div>` : ''}
      
      ${product.is_new ? `<div class="new-badge" style="position:absolute; top:10px; left:10px; background:#28a745; color:white; padding:5px 15px; border-radius:20px; font-weight:bold; font-size:12px; z-index:10;">NEU</div>` : ''}
      
      <div class="product-image" style="width:100%; height:200px; background:#f8f9fa; display:flex; align-items:center; justify-content:center; padding:20px; position:relative; overflow:hidden;">
        ${imageUrl.startsWith('http') ? 
          `<img src="${imageUrl}" alt="${product.name}" style="max-width:100%; max-height:100%; object-fit:contain;">` :
          `<div style="text-align:center;">
            <i class="${imageUrl}" style="font-size:80px; color:#001f3f; opacity:0.3;"></i>
            <p style="font-size:14px; color:#999; margin-top:10px;">${product.brand_name || 'Software'}</p>
          </div>`
        }
        <div class="stock-badge" style="position:absolute; bottom:10px; right:10px; background:rgba(40, 167, 69, 0.9); color:white; padding:5px 10px; border-radius:15px; font-size:11px; font-weight:bold;">
          <i class="fas fa-check-circle"></i> Auf Lager
        </div>
      </div>
      
      <div class="product-info" style="padding:20px;">
        ${product.brand_name ? `<div class="brand" style="font-size:12px; color:#666; text-transform:uppercase; margin-bottom:5px; font-weight:600;">${product.brand_name}</div>` : ''}
        
        <h3 class="product-name" style="font-size:16px; font-weight:600; color:#001f3f; margin-bottom:10px; min-height:40px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${product.name}</h3>
        
        ${product.category_name ? `<div class="category" style="font-size:12px; color:#999; margin-bottom:15px;"><i class="fas fa-tag"></i> ${product.category_name}</div>` : ''}
        
        ${product.rating > 0 ? `
          <div class="rating" style="margin-bottom:15px;">
            ${renderStars(product.rating)}
            <span style="font-size:12px; color:#666; margin-left:5px;">(${product.review_count || 0})</span>
          </div>
        ` : ''}
        
        <div class="price-section" style="margin-bottom:15px;">
          ${hasDiscount ? `
            <div style="display:flex; align-items:center; gap:10px;">
              <span class="old-price" style="font-size:16px; color:#999; text-decoration:line-through;">€${product.base_price.toFixed(2)}</span>
              <span class="new-price" style="font-size:24px; font-weight:bold; color:#dc3545;">€${finalPrice.toFixed(2)}</span>
            </div>
            <div style="font-size:12px; color:#28a745; font-weight:600; margin-top:5px;">Sie sparen €${(product.base_price - finalPrice).toFixed(2)}</div>
          ` : `
            <span class="price" style="font-size:24px; font-weight:bold; color:#001f3f;">€${finalPrice.toFixed(2)}</span>
          `}
        </div>
        
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id}, '${product.name}', ${finalPrice})" style="width:100%; background:linear-gradient(135deg, #FFC107 0%, #FFD54F 100%); color:#001f3f; border:none; padding:12px 20px; border-radius:25px; font-weight:bold; font-size:14px; cursor:pointer; transition:all 0.3s;" onmouseover="this.style.background='linear-gradient(135deg, #FFD54F 0%, #FFC107 100%)'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)'; this.style.transform='scale(1)'">
          <i class="fas fa-shopping-cart"></i> In den Warenkorb
        </button>
        
        <div style="text-align:center; margin-top:10px; font-size:12px; color:#28a745; font-weight:600;">
          <i class="fas fa-shipping-fast"></i> Sofort per E-Mail
        </div>
      </div>
    </div>
  `;
}

// Render star rating
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let stars = '';
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star" style="color:#FFC107; font-size:14px;"></i>';
  }
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt" style="color:#FFC107; font-size:14px;"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star" style="color:#FFC107; font-size:14px;"></i>';
  }
  return stars;
}

// Get default product image based on category/brand
function getDefaultProductImage(category, brand) {
  // Return Font Awesome icon classes
  if (brand) {
    if (brand.toLowerCase().includes('microsoft')) return 'fab fa-windows';
    if (brand.toLowerCase().includes('adobe')) return 'fas fa-file-pdf';
    if (brand.toLowerCase().includes('kaspersky')) return 'fas fa-shield-alt';
    if (brand.toLowerCase().includes('autodesk')) return 'fas fa-drafting-compass';
  }
  
  if (category) {
    const cat = category.toLowerCase();
    if (cat.includes('windows')) return 'fab fa-windows';
    if (cat.includes('office')) return 'fas fa-file-alt';
    if (cat.includes('server')) return 'fas fa-server';
    if (cat.includes('antivirus') || cat.includes('sicherheit')) return 'fas fa-shield-alt';
    if (cat.includes('cad') || cat.includes('design')) return 'fas fa-drafting-compass';
  }
  
  return 'fas fa-box';
}

// Add to cart function
function addToCart(productId, productName, price) {
  try {
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if product already in cart
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex >= 0) {
      // Increase quantity
      cart[existingIndex].quantity += 1;
      showNotification('Menge erhöht', `${productName} Menge wurde erhöht`, 'success');
    } else {
      // Add new item
      cart.push({
        id: productId,
        name: productName,
        price: price,
        quantity: 1,
        addedAt: Date.now()
      });
      showNotification('Zum Warenkorb hinzugefügt', `${productName} wurde hinzugefügt`, 'success');
    }
    
    // Save cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Trigger storage event for other tabs
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cart',
      newValue: JSON.stringify(cart)
    }));
    
  } catch (error) {
    console.error('Error adding to cart:', error);
    showNotification('Fehler', 'Produkt konnte nicht hinzugefügt werden', 'error');
  }
}

// Update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const countElement = document.getElementById('cart-count');
  if (countElement) {
    countElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// Show notification
function showNotification(title, message, type) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : '#dc3545'};
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;
  notification.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 5px;">${title}</div>
    <div style="font-size: 14px;">${message}</div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function renderLicenseAvailability(section, config) {
  return `
    <section class="feature-section license-availability" data-section-id="${section.id}" style="background:linear-gradient(135deg, #001f3f 0%, #003366 100%); color:white; padding:60px 20px;">
      <div style="max-width:1200px; margin:0 auto; text-align:center;">
        <h2 style="font-size:2.5rem; margin-bottom:10px;">${section.title || '🔑 Lizenzen sofort verfügbar'}</h2>
        <p style="font-size:1.2rem; margin-bottom:40px; opacity:0.9;">${section.subtitle || 'Alle Produkte auf Lager - Sofortige Lieferung'}</p>
        
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:30px; max-width:1000px; margin:0 auto;">
          <div class="license-card" style="background:rgba(255, 193, 7, 0.1); padding:30px; border-radius:15px; border:2px solid #FFC107; backdrop-filter:blur(10px);">
            <div class="counter" data-target="5000" style="font-size:3rem; font-weight:bold; color:#FFC107;">0</div>
            <div style="margin-top:10px; font-size:1.1rem;">Windows Lizenzen</div>
          </div>
          <div class="license-card" style="background:rgba(255, 193, 7, 0.1); padding:30px; border-radius:15px; border:2px solid #FFC107; backdrop-filter:blur(10px);">
            <div class="counter" data-target="3500" style="font-size:3rem; font-weight:bold; color:#FFC107;">0</div>
            <div style="margin-top:10px; font-size:1.1rem;">Office Lizenzen</div>
          </div>
          <div class="license-card" style="background:rgba(255, 193, 7, 0.1); padding:30px; border-radius:15px; border:2px solid #FFC107; backdrop-filter:blur(10px);">
            <div class="counter" data-target="2000" style="font-size:3rem; font-weight:bold; color:#FFC107;">0</div>
            <div style="margin-top:10px; font-size:1.1rem;">Server Lizenzen</div>
          </div>
          <div class="license-card" style="background:rgba(255, 193, 7, 0.1); padding:30px; border-radius:15px; border:2px solid #FFC107; backdrop-filter:blur(10px);">
            <div class="counter" data-target="1500" style="font-size:3rem; font-weight:bold; color:#FFC107;">0</div>
            <div style="margin-top:10px; font-size:1.1rem;">Antivirus Lizenzen</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPriceComparison(section, config) {
  return `
    <section class="feature-section price-comparison" data-section-id="${section.id}" style="padding:60px 20px; background:white;">
      <div style="max-width:1000px; margin:0 auto;">
        <h2 style="text-align:center; font-size:2.5rem; color:#001f3f; margin-bottom:40px;">${section.title || '💰 Preisvergleich - Bis zu 70% sparen'}</h2>
        
        <table style="width:100%; border-collapse:collapse; background:white; box-shadow:0 2px 10px rgba(0,0,0,0.1); border-radius:10px; overflow:hidden;">
          <thead>
            <tr style="background:#001f3f; color:white;">
              <th style="padding:20px; text-align:left;">Produkt</th>
              <th style="padding:20px; text-align:right;">Anderer Anbieter</th>
              <th style="padding:20px; text-align:right; color:#FFC107;">Unser Preis</th>
              <th style="padding:20px; text-align:right;">Ersparnis</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:20px;">Windows 11 Pro</td>
              <td style="padding:20px; text-align:right; text-decoration:line-through; color:#999;">€259.00</td>
              <td style="padding:20px; text-align:right; font-weight:bold; color:#001f3f; font-size:1.3rem;">€39.90</td>
              <td style="padding:20px; text-align:right; color:#00A859; font-weight:bold;">85%</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:20px;">Office 2024 Pro Plus</td>
              <td style="padding:20px; text-align:right; text-decoration:line-through; color:#999;">€439.00</td>
              <td style="padding:20px; text-align:right; font-weight:bold; color:#001f3f; font-size:1.3rem;">€59.90</td>
              <td style="padding:20px; text-align:right; color:#00A859; font-weight:bold;">86%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

// Placeholder renderers for remaining sections
function renderFeatureSection(section, config) {
  return `
    <section class="feature-section" data-section-id="${section.id}" style="padding:60px 20px; background:#f8f9fa;">
      <div style="max-width:1200px; margin:0 auto; text-align:center;">
        <h2 style="font-size:2.5rem; color:#001f3f; margin-bottom:20px;">${section.title || 'Feature Section'}</h2>
        <p style="font-size:1.2rem; color:#666;">${section.subtitle || ''}</p>
      </div>
    </section>
  `;
}

function renderStaticSection(section, config) {
  return `
    <section class="static-section" data-section-id="${section.id}" style="padding:60px 20px;">
      <div style="max-width:1200px; margin:0 auto;">
        <h2 style="text-align:center; font-size:2.5rem; color:#001f3f; margin-bottom:40px;">${section.title || 'Static Section'}</h2>
        <div style="text-align:center; color:#666;">${section.subtitle || ''}</div>
      </div>
    </section>
  `;
}

function renderWidgetSection(section, config) {
  return `
    <section class="widget-section" data-section-id="${section.id}" style="padding:40px 20px;">
      <div style="max-width:1200px; margin:0 auto;">
        <div style="text-align:center; color:#666;">Widget: ${section.title || 'Widget Section'}</div>
      </div>
    </section>
  `;
}

function renderPlaceholder(section) {
  return `
    <section class="placeholder-section" data-section-id="${section.id}" style="padding:40px 20px; background:#f0f0f0; border:2px dashed #ccc;">
      <div style="max-width:1200px; margin:0 auto; text-align:center; color:#999;">
        <p>Section: ${section.section_key} (ID: ${section.id})</p>
        <p>Title: ${section.title || 'No title'}</p>
      </div>
    </section>
  `;
}

// Slider functionality
let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.slider-dot');
  
  slides[currentSlide].style.display = 'none';
  dots[currentSlide].style.background = 'rgba(255,255,255,0.5)';
  dots[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].style.display = 'flex';
  dots[currentSlide].style.background = '#FFC107';
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startAutoRotate() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  if (slides.length > 1) {
    slideInterval = setInterval(nextSlide, 5000);
  }
}

function stopAutoRotate() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  });
}

// Initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    startAutoRotate();
    animateCounters();
  });
}
