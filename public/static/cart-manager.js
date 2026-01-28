// Enhanced Cart Management - Add this to all pages with Add to Cart buttons

// Add to cart with localStorage
async function addToCart(productId) {
  try {
    // First, fetch product details
    const response = await axios.get('/api/products/' + productId);
    if (!response.data.success) {
      showNotification('Fehler beim Laden des Produkts', 'error');
      return;
    }

    const product = response.data.data;

    // Load existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '{"items":[],"subtotal":0,"vat":0,"total":0,"discount":0,"coupon":null}');

    // Check if product already in cart
    const existingIndex = cart.items.findIndex(item => item.product.id === productId);
    
    if (existingIndex >= 0) {
      // Increase quantity
      cart.items[existingIndex].quantity += 1;
    } else {
      // Add new item
      cart.items.push({
        product: product,
        quantity: 1,
        licenseType: 'single'
      });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart counter in header
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const countElements = document.querySelectorAll('#cart-count, #cart-badge');
    countElements.forEach(el => {
      if (el) el.textContent = totalItems;
    });

    // Show success notification
    showNotification('Produkt wurde zum Warenkorb hinzugefügt!', 'success');

  } catch (error) {
    console.error('Error adding to cart:', error);
    showNotification('Fehler beim Hinzufügen zum Warenkorb', 'error');
  }
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `fixed top-20 right-4 px-6 py-4 rounded-lg shadow-xl text-white z-50 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
  notification.innerHTML = `
    <div class="flex items-center space-x-3">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} text-xl"></i>
      <div>
        <p class="font-bold">${type === 'success' ? 'Erfolg!' : 'Fehler'}</p>
        <p class="text-sm">${message}</p>
      </div>
    </div>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Initialize cart counter on page load
function initCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart') || '{"items":[]}');
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const countElements = document.querySelectorAll('#cart-count, #cart-badge');
  countElements.forEach(el => {
    if (el) el.textContent = totalItems;
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', initCartCounter);
