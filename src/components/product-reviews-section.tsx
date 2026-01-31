export function ProductReviewsSection(productId: number) {
  return `
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8" id="reviews-section">
      <!-- Reviews Header -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-900">
          <i class="fas fa-star text-yellow-400 mr-2"></i>
          Kundenbewertungen
        </h2>
        <button 
          onclick="openReviewModal()"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <i class="fas fa-plus mr-2"></i>
          Bewertung schreiben
        </button>
      </div>

      <!-- Rating Summary -->
      <div id="rating-summary" class="bg-gray-50 rounded-lg p-6 mb-8">
        <div class="flex items-center gap-8">
          <!-- Average Rating -->
          <div class="text-center">
            <div class="text-5xl font-bold text-gray-900" id="avg-rating">-</div>
            <div class="flex items-center justify-center mt-2" id="avg-stars">
              <!-- Stars will be inserted here -->
            </div>
            <div class="text-sm text-gray-600 mt-1" id="total-reviews">0 Bewertungen</div>
          </div>

          <!-- Rating Distribution -->
          <div class="flex-1">
            <div id="rating-distribution">
              <!-- Distribution bars will be inserted here -->
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews List -->
      <div id="reviews-list" class="space-y-6">
        <!-- Reviews will be inserted here -->
      </div>

      <!-- Pagination -->
      <div id="reviews-pagination" class="flex justify-center items-center gap-2 mt-8">
        <!-- Pagination will be inserted here -->
      </div>

      <!-- Loading Indicator -->
      <div id="reviews-loading" class="text-center py-8 hidden">
        <i class="fas fa-spinner fa-spin text-4xl text-blue-600"></i>
        <p class="text-gray-600 mt-2">Laden...</p>
      </div>

      <!-- No Reviews Message -->
      <div id="no-reviews" class="text-center py-8 hidden">
        <i class="fas fa-comment-slash text-4xl text-gray-400 mb-4"></i>
        <p class="text-gray-600">Noch keine Bewertungen vorhanden.</p>
        <p class="text-sm text-gray-500 mt-2">Seien Sie der Erste, der dieses Produkt bewertet!</p>
      </div>
    </div>

    <!-- Review Modal -->
    <div id="review-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Bewertung schreiben</h3>
            <button onclick="closeReviewModal()" class="text-gray-400 hover:text-gray-600">
              <i class="fas fa-times text-2xl"></i>
            </button>
          </div>

          <form id="review-form" class="space-y-6">
            <!-- Rating Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bewertung *</label>
              <div class="flex items-center gap-2">
                <div class="flex gap-1" id="rating-stars">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <button type="button" onclick="selectRating(${star})" class="rating-star text-3xl text-gray-300 hover:text-yellow-400 transition-colors">
                      <i class="far fa-star"></i>
                    </button>
                  `).join('')}
                </div>
                <span id="rating-text" class="text-sm text-gray-600 ml-2">Bitte wählen Sie eine Bewertung</span>
              </div>
              <input type="hidden" id="rating-value" name="rating" required>
            </div>

            <!-- Title -->
            <div>
              <label for="review-title" class="block text-sm font-medium text-gray-700 mb-2">Titel *</label>
              <input 
                type="text" 
                id="review-title" 
                name="title" 
                required
                maxlength="200"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Fassen Sie Ihre Bewertung zusammen"
              >
            </div>

            <!-- Comment -->
            <div>
              <label for="review-comment" class="block text-sm font-medium text-gray-700 mb-2">Bewertung *</label>
              <textarea 
                id="review-comment" 
                name="comment" 
                required
                rows="5"
                maxlength="2000"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Teilen Sie Ihre Erfahrungen mit diesem Produkt..."
              ></textarea>
              <p class="text-xs text-gray-500 mt-1">
                <span id="char-count">0</span> / 2000 Zeichen
              </p>
            </div>

            <!-- Name (for guests) -->
            <div id="reviewer-name-field">
              <label for="reviewer-name" class="block text-sm font-medium text-gray-700 mb-2">Ihr Name *</label>
              <input 
                type="text" 
                id="reviewer-name" 
                name="name" 
                required
                maxlength="100"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Max Mustermann"
              >
            </div>

            <!-- Submit Buttons -->
            <div class="flex gap-3 pt-4">
              <button 
                type="submit"
                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                <i class="fas fa-paper-plane mr-2"></i>
                Bewertung absenden
              </button>
              <button 
                type="button"
                onclick="closeReviewModal()"
                class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Abbrechen
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div id="review-success" class="hidden bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <div class="flex items-center gap-3">
              <i class="fas fa-check-circle text-green-600 text-2xl"></i>
              <div>
                <h4 class="font-semibold text-green-900">Vielen Dank für Ihre Bewertung!</h4>
                <p class="text-sm text-green-700 mt-1">Ihre Bewertung wurde erfolgreich eingereicht.</p>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div id="review-error" class="hidden bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <div class="flex items-center gap-3">
              <i class="fas fa-exclamation-circle text-red-600 text-2xl"></i>
              <div>
                <h4 class="font-semibold text-red-900">Fehler</h4>
                <p class="text-sm text-red-700 mt-1" id="review-error-message"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Initialize reviews when page loads
      (function() {
        const productId = ${productId};
        let currentPage = 1;
        let currentSort = 'newest';

        // Load reviews on page load
        loadReviews();

        // Character counter for review comment
        const commentTextarea = document.getElementById('review-comment');
        if (commentTextarea) {
          commentTextarea.addEventListener('input', function() {
            document.getElementById('char-count').textContent = this.value.length;
          });
        }

        // Review form submission
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) {
          reviewForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            await submitReview();
          });
        }

        // Load reviews function
        async function loadReviews() {
          const listEl = document.getElementById('reviews-list');
          const loadingEl = document.getElementById('reviews-loading');
          const noReviewsEl = document.getElementById('no-reviews');

          // Show loading
          loadingEl?.classList.remove('hidden');
          listEl.innerHTML = '';
          noReviewsEl?.classList.add('hidden');

          try {
            const response = await fetch(\`/api/reviews/\${productId}?page=\${currentPage}&sort=\${currentSort}\`);
            const data = await response.json();

            if (data.success) {
              // Update rating summary
              updateRatingSummary(data.statistics, data.pagination.total);

              // Display reviews
              if (data.reviews.length > 0) {
                listEl.innerHTML = data.reviews.map(review => renderReview(review)).join('');
                renderPagination(data.pagination);
                noReviewsEl?.classList.add('hidden');
              } else {
                noReviewsEl?.classList.remove('hidden');
              }
            }
          } catch (error) {
            console.error('Error loading reviews:', error);
          } finally {
            loadingEl?.classList.add('hidden');
          }
        }

        // Update rating summary
        function updateRatingSummary(stats, total) {
          const avgRatingEl = document.getElementById('avg-rating');
          const avgStarsEl = document.getElementById('avg-stars');
          const totalReviewsEl = document.getElementById('total-reviews');
          const distributionEl = document.getElementById('rating-distribution');

          if (avgRatingEl) avgRatingEl.textContent = stats.averageRating.toFixed(1);
          if (totalReviewsEl) totalReviewsEl.textContent = \`\${total} Bewertung\${total !== 1 ? 'en' : ''}\`;

          if (avgStarsEl) {
            avgStarsEl.innerHTML = renderStars(stats.averageRating);
          }

          if (distributionEl && stats.distribution) {
            distributionEl.innerHTML = [5, 4, 3, 2, 1].map(rating => {
              const count = stats.distribution[rating - 1] || 0;
              const percentage = total > 0 ? (count / total) * 100 : 0;
              return \`
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-sm text-gray-600 w-12">\${rating} Stern\${rating !== 1 ? 'e' : ''}</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400 transition-all" style="width: \${percentage}%"></div>
                  </div>
                  <span class="text-sm text-gray-600 w-12 text-right">\${count}</span>
                </div>
              \`;
            }).join('');
          }
        }

        // Render single review
        function renderReview(review) {
          const createdDate = new Date(review.created_at).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return \`
            <div class="border-b border-gray-200 pb-6">
              <div class="flex items-start justify-between mb-3">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <div class="flex">\${renderStars(review.rating)}</div>
                    \${review.is_verified_purchase ? '<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verifizierter Kauf</span>' : ''}
                  </div>
                  <h4 class="font-semibold text-gray-900">\${escapeHtml(review.title)}</h4>
                  <p class="text-sm text-gray-600">von \${escapeHtml(review.reviewer_name)} am \${createdDate}</p>
                </div>
              </div>
              <p class="text-gray-700 mb-4">\${escapeHtml(review.comment)}</p>
              <div class="flex items-center gap-4 text-sm">
                <button onclick="voteReview(\${review.id}, 'helpful')" class="text-gray-600 hover:text-blue-600 transition-colors">
                  <i class="far fa-thumbs-up mr-1"></i>
                  Hilfreich (\${review.helpful_count || 0})
                </button>
                <button onclick="voteReview(\${review.id}, 'not_helpful')" class="text-gray-600 hover:text-gray-800 transition-colors">
                  <i class="far fa-thumbs-down mr-1"></i>
                  Nicht hilfreich (\${review.not_helpful_count || 0})
                </button>
              </div>
            </div>
          \`;
        }

        // Render stars
        function renderStars(rating) {
          const fullStars = Math.floor(rating);
          const hasHalfStar = rating % 1 >= 0.5;
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

          let stars = '';
          for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star text-yellow-400"></i>';
          }
          if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
          }
          for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star text-yellow-400"></i>';
          }
          return stars;
        }

        // Render pagination
        function renderPagination(pagination) {
          const paginationEl = document.getElementById('reviews-pagination');
          if (!paginationEl || pagination.totalPages <= 1) {
            paginationEl.innerHTML = '';
            return;
          }

          let html = '';
          
          // Previous button
          if (pagination.page > 1) {
            html += \`<button onclick="changePage(\${pagination.page - 1})" class="px-3 py-1 border rounded hover:bg-gray-50">Zurück</button>\`;
          }

          // Page numbers
          for (let i = 1; i <= pagination.totalPages; i++) {
            if (i === pagination.page) {
              html += \`<button class="px-3 py-1 bg-blue-600 text-white rounded">\${i}</button>\`;
            } else {
              html += \`<button onclick="changePage(\${i})" class="px-3 py-1 border rounded hover:bg-gray-50">\${i}</button>\`;
            }
          }

          // Next button
          if (pagination.page < pagination.totalPages) {
            html += \`<button onclick="changePage(\${pagination.page + 1})" class="px-3 py-1 border rounded hover:bg-gray-50">Weiter</button>\`;
          }

          paginationEl.innerHTML = html;
        }

        // Change page
        window.changePage = function(page) {
          currentPage = page;
          loadReviews();
          document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
        };

        // Submit review
        async function submitReview() {
          const form = document.getElementById('review-form');
          const successEl = document.getElementById('review-success');
          const errorEl = document.getElementById('review-error');

          successEl?.classList.add('hidden');
          errorEl?.classList.add('hidden');

          const formData = {
            product_id: productId,
            rating: parseInt(document.getElementById('rating-value').value),
            title: document.getElementById('review-title').value,
            comment: document.getElementById('review-comment').value,
            reviewer_name: document.getElementById('reviewer-name').value
          };

          try {
            const response = await fetch('/api/reviews', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
              successEl?.classList.remove('hidden');
              form.reset();
              document.getElementById('rating-value').value = '';
              resetRatingStars();
              setTimeout(() => {
                closeReviewModal();
                loadReviews();
              }, 2000);
            } else {
              throw new Error(data.error || 'Fehler beim Einreichen der Bewertung');
            }
          } catch (error) {
            errorEl?.classList.remove('hidden');
            const errorMsgEl = document.getElementById('review-error-message');
            if (errorMsgEl) errorMsgEl.textContent = error.message;
          }
        }

        // Vote on review
        window.voteReview = async function(reviewId, voteType) {
          try {
            const response = await fetch(\`/api/reviews/\${reviewId}/vote\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ vote_type: voteType })
            });

            const data = await response.json();
            if (data.success) {
              loadReviews(); // Reload to show updated counts
            }
          } catch (error) {
            console.error('Error voting:', error);
          }
        };

        // Modal functions
        window.openReviewModal = function() {
          document.getElementById('review-modal')?.classList.remove('hidden');
        };

        window.closeReviewModal = function() {
          document.getElementById('review-modal')?.classList.add('hidden');
          document.getElementById('review-form')?.reset();
          document.getElementById('review-success')?.classList.add('hidden');
          document.getElementById('review-error')?.classList.add('hidden');
          resetRatingStars();
        };

        // Rating selection
        window.selectRating = function(rating) {
          document.getElementById('rating-value').value = rating;
          const stars = document.querySelectorAll('.rating-star');
          const ratingText = document.getElementById('rating-text');
          
          const labels = ['Sehr schlecht', 'Schlecht', 'Durchschnittlich', 'Gut', 'Ausgezeichnet'];
          ratingText.textContent = labels[rating - 1];

          stars.forEach((star, index) => {
            const icon = star.querySelector('i');
            if (index < rating) {
              icon.classList.remove('far', 'text-gray-300');
              icon.classList.add('fas', 'text-yellow-400');
            } else {
              icon.classList.remove('fas', 'text-yellow-400');
              icon.classList.add('far', 'text-gray-300');
            }
          });
        };

        function resetRatingStars() {
          const stars = document.querySelectorAll('.rating-star');
          stars.forEach(star => {
            const icon = star.querySelector('i');
            icon.classList.remove('fas', 'text-yellow-400');
            icon.classList.add('far', 'text-gray-300');
          });
          document.getElementById('rating-text').textContent = 'Bitte wählen Sie eine Bewertung';
        }

        // Utility function
        function escapeHtml(text) {
          const div = document.createElement('div');
          div.textContent = text;
          return div.innerHTML;
        }
      })();
    </script>
  `;
}
