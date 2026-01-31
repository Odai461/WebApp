// Simple Product Card with Add to Cart
// Can be embedded anywhere in product listings

export const ProductCardWithCart = (product: any) => `
<div class="product-card bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
  <div class="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
    <i class="fas fa-box text-gray-300 text-4xl"></i>
  </div>
  
  <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
    ${product.name || 'Product Name'}
  </h3>
  
  <div class="flex items-center justify-between mb-3">
    ${product.discount_price && product.discount_price < product.base_price ? `
      <div>
        <div class="text-sm text-gray-500 line-through">€${product.base_price}</div>
        <div class="text-xl font-bold text-blue-600">€${product.discount_price}</div>
      </div>
      <div class="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
        -${Math.round(((product.base_price - product.discount_price) / product.base_price) * 100)}%
      </div>
    ` : `
      <div class="text-xl font-bold text-blue-600">€${product.base_price || product.price || '0.00'}</div>
    `}
  </div>
  
  ${product.rating ? `
    <div class="flex items-center mb-3 text-sm">
      <div class="flex text-yellow-400">
        ${Array(5).fill(0).map((_, i) => 
          i < Math.floor(product.rating) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'
        ).join('')}
      </div>
      <span class="text-gray-600 ml-2">(${product.review_count || 0})</span>
    </div>
  ` : ''}
  
  <button 
    onclick="addToCart(${product.id}, 1)"
    class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
    <i class="fas fa-shopping-cart mr-2"></i>
    In den Warenkorb
  </button>
</div>
`

// Header Cart Icon with Count
export const CartIconHeader = () => `
<a href="/cart" class="relative text-gray-700 hover:text-blue-600">
  <i class="fas fa-shopping-cart text-xl"></i>
  <span class="cart-count hidden absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
</a>
`
