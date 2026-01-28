# Complete E-Commerce Flow Test Plan

## Test Date: 2026-01-28

## Test Cases

### 1. Homepage Add to Cart
- [ ] Featured products section has Add to Cart buttons
- [ ] Bestsellers section has Add to Cart buttons  
- [ ] New products section has Add to Cart buttons
- [ ] Clicking Add to Cart shows success notification
- [ ] Cart counter updates correctly

### 2. Products Page
- [ ] All product cards display properly
- [ ] Each card has full product information (name, price, image, description)
- [ ] Add to Cart button is visible on each card
- [ ] Add to Cart functionality works for all products
- [ ] Cart counter updates correctly

### 3. Product Detail Page
- [ ] Product information displays correctly
- [ ] Images load properly
- [ ] Price and discount are shown correctly
- [ ] SKU and product details visible
- [ ] Quantity selector works
- [ ] Add to Cart button functions properly
- [ ] Success notification appears

### 4. Cart Page
- [ ] Cart items display with full product information
- [ ] Product images show correctly
- [ ] Prices calculate correctly (including discounts)
- [ ] Quantity controls work (increase/decrease)
- [ ] Remove item functionality works
- [ ] Cart totals calculate correctly:
  - Subtotal
  - Discount (if coupon applied)
  - VAT (19%)
  - Total
- [ ] Coupon codes can be applied
- [ ] "Zur Kasse gehen" button is enabled when cart has items

### 5. Checkout Flow
- [ ] Step 1: Customer Information
  - Email validation
  - Name fields (first, last)
  - Company (optional)
  - VAT number (optional, for EU business)
- [ ] Step 2: Billing Address
  - Street, house number
  - Postal code, city
  - Country selection
- [ ] Step 3: Payment & Review
  - Order summary shows correctly
  - Payment method selection (Stripe/PayPal)
  - Terms acceptance checkbox
  - Place order button

### 6. Order Submission
- [ ] POST /api/orders endpoint works
- [ ] Order is created in database
- [ ] License keys are assigned automatically
- [ ] Order confirmation is shown
- [ ] User receives email with license key

### 7. End-to-End Flow
1. Browse homepage → Click product
2. View product details → Add to cart
3. Go to cart page → Verify items
4. Proceed to checkout
5. Fill in customer information
6. Select payment method
7. Submit order
8. Receive confirmation
9. Verify license key delivery

## Current Status

### ✅ Completed
- Cart manager integration
- Add to Cart buttons on all pages
- Cart page with full product information
- Quantity controls
- Price calculations
- Coupon functionality
- API endpoint: GET /api/products/id/:id

### 🔄 In Progress
- Checkout flow validation
- Order submission testing

### ⏳ Pending
- Payment gateway integration (Stripe test mode)
- Email delivery testing
- License key auto-assignment verification

## Test URLs

- Homepage: http://localhost:3000/
- Products: http://localhost:3000/produkte
- Product Detail: http://localhost:3000/produkt/windows-11-professional-oem-retail
- Cart: http://localhost:3000/warenkorb
- Checkout: http://localhost:3000/kasse

## API Endpoints

- GET /api/products - List all products
- GET /api/products/id/:id - Get product by ID
- GET /api/products/:slug - Get product by slug
- GET /api/products/featured - Featured products
- GET /api/products/bestsellers - Bestseller products
- GET /api/products/new - New products
- POST /api/orders - Create order
- GET /api/orders/:orderNumber - Get order details

## Notes

- All prices are in EUR
- VAT rate: 19%
- Cart data stored in localStorage
- Session management uses JWT tokens
- Sandbox URL: https://3000-iiy5dmdkef8bwxqrgjvk8-b237eb32.sandbox.novita.ai
