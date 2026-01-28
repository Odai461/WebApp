// Product Detail Page (Produktdetails) - German First
import type { FC } from 'hono/jsx'

interface ProductDetailProps {
  productId?: string
}

export const ProductDetail: FC<ProductDetailProps> = ({ productId = '1' }) => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-4 py-3">
          <nav class="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" class="hover:text-blue-600">Startseite</a>
            <i class="fas fa-chevron-right text-xs"></i>
            <a href="/produkte" class="hover:text-blue-600">Produkte</a>
            <i class="fas fa-chevron-right text-xs"></i>
            <a href="/kategorie/office-software" class="hover:text-blue-600">Office Software</a>
            <i class="fas fa-chevron-right text-xs"></i>
            <span class="text-gray-900 font-medium" id="breadcrumb-product">Wird geladen...</span>
          </nav>
        </div>
      </div>

      <div class="container mx-auto px-4 py-8">
        <div class="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column: Image Gallery */}
          <div>
            {/* Main Image */}
            <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
              <div class="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4 group">
                <img 
                  id="main-image" 
                  src="https://via.placeholder.com/800x600?text=Microsoft+Office+2024" 
                  alt="Product"
                  class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <button class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                  <i class="fas fa-search-plus text-gray-700 text-lg"></i>
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div class="grid grid-cols-5 gap-3">
                <button class="thumbnail-btn aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-blue-600 hover:border-blue-700 transition-colors">
                  <img src="https://via.placeholder.com/200x200?text=1" alt="Thumbnail 1" class="w-full h-full object-cover" />
                </button>
                <button class="thumbnail-btn aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-colors">
                  <img src="https://via.placeholder.com/200x200?text=2" alt="Thumbnail 2" class="w-full h-full object-cover" />
                </button>
                <button class="thumbnail-btn aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-colors">
                  <img src="https://via.placeholder.com/200x200?text=3" alt="Thumbnail 3" class="w-full h-full object-cover" />
                </button>
                <button class="thumbnail-btn aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-colors">
                  <img src="https://via.placeholder.com/200x200?text=4" alt="Thumbnail 4" class="w-full h-full object-cover" />
                </button>
                <button class="thumbnail-btn aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-colors">
                  <img src="https://via.placeholder.com/200x200?text=5" alt="Thumbnail 5" class="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-white rounded-lg shadow p-4 text-center">
                <i class="fas fa-download text-3xl text-blue-600 mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">Sofortiger Download</p>
                <p class="text-xs text-gray-600 mt-1">Nach Zahlung</p>
              </div>
              <div class="bg-white rounded-lg shadow p-4 text-center">
                <i class="fas fa-shield-alt text-3xl text-green-600 mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">100% Original</p>
                <p class="text-xs text-gray-600 mt-1">Vom Hersteller</p>
              </div>
              <div class="bg-white rounded-lg shadow p-4 text-center">
                <i class="fas fa-undo text-3xl text-purple-600 mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">30 Tage</p>
                <p class="text-xs text-gray-600 mt-1">Widerrufsrecht</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div>
            {/* Product Header */}
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
              {/* Brand */}
              <div class="flex items-center gap-3 mb-3">
                <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" class="h-8" />
                <span class="text-sm text-gray-600">von <strong>Microsoft</strong></span>
              </div>

              {/* Title */}
              <h1 id="product-name" class="text-3xl font-bold text-gray-900 mb-3">
                Microsoft Office 2024 Professional Plus
              </h1>

              {/* Rating */}
              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center">
                  <div class="flex text-yellow-400 text-lg">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <span class="ml-2 text-sm text-gray-600">4.8 (2,547 Bewertungen)</span>
                </div>
                <div class="text-sm text-green-600 font-medium">
                  <i class="fas fa-check-circle mr-1"></i>
                  Auf Lager
                </div>
              </div>

              {/* Short Description */}
              <p class="text-gray-700 mb-6">
                Die professionelle Office-Suite mit Word, Excel, PowerPoint, Outlook, Access, Publisher und mehr. 
                Lebenslange Lizenz für 1 PC, ohne Abo.
              </p>

              {/* Price */}
              <div class="border-t border-b border-gray-200 py-6 mb-6">
                <div class="flex items-baseline gap-4 mb-2">
                  <span class="text-4xl font-bold text-gray-900" id="product-price">€89,99</span>
                  <span class="text-2xl text-gray-400 line-through">€439,99</span>
                  <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">-80%</span>
                </div>
                <p class="text-sm text-gray-600">inkl. 19% MwSt.</p>
              </div>

              {/* License Type Selection */}
              <div class="mb-6">
                <h3 class="font-semibold text-gray-900 mb-3">Lizenztyp wählen:</h3>
                <div class="space-y-3">
                  <label class="flex items-center justify-between p-4 border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <div class="flex items-center gap-3">
                      <input type="radio" name="license" value="single" checked class="w-5 h-5 text-blue-600" />
                      <div>
                        <p class="font-semibold text-gray-900">Einzellizenz (1 PC)</p>
                        <p class="text-sm text-gray-600">Ideal für Privatnutzer</p>
                      </div>
                    </div>
                    <span class="font-bold text-gray-900">€89,99</span>
                  </label>

                  <label class="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div class="flex items-center gap-3">
                      <input type="radio" name="license" value="multi" class="w-5 h-5 text-blue-600" />
                      <div>
                        <p class="font-semibold text-gray-900">Mehrfachlizenz (5 PCs)</p>
                        <p class="text-sm text-gray-600">Für kleine Unternehmen</p>
                        <span class="inline-block mt-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Sie sparen 30%</span>
                      </div>
                    </div>
                    <span class="font-bold text-gray-900">€299,99</span>
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div class="flex items-center gap-4 mb-6">
                <span class="font-semibold text-gray-900">Menge:</span>
                <div class="flex items-center border border-gray-300 rounded-lg">
                  <button id="qty-decrease" class="px-4 py-2 hover:bg-gray-50 transition-colors">
                    <i class="fas fa-minus text-gray-600"></i>
                  </button>
                  <input type="text" id="quantity" value="1" readonly class="w-16 text-center border-x border-gray-300 py-2 font-semibold" />
                  <button id="qty-increase" class="px-4 py-2 hover:bg-gray-50 transition-colors">
                    <i class="fas fa-plus text-gray-600"></i>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div class="space-y-3">
                <button id="add-to-cart-btn" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
                  <i class="fas fa-shopping-cart mr-2"></i>
                  In den Warenkorb
                </button>
                <button id="buy-now-btn" class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl">
                  <i class="fas fa-bolt mr-2"></i>
                  Jetzt kaufen
                </button>
                <button id="add-to-wishlist-btn" class="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  <i class="far fa-heart mr-2"></i>
                  Zur Wunschliste
                </button>
              </div>

              {/* Delivery Info */}
              <div class="mt-6 pt-6 border-t border-gray-200">
                <div class="space-y-3 text-sm">
                  <div class="flex items-center gap-3">
                    <i class="fas fa-clock text-blue-600 w-5"></i>
                    <span class="text-gray-700"><strong>Lieferzeit:</strong> Sofort per E-Mail nach Zahlungseingang</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <i class="fas fa-shipping-fast text-blue-600 w-5"></i>
                    <span class="text-gray-700"><strong>Versand:</strong> Kostenloser digitaler Download</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <i class="fas fa-language text-blue-600 w-5"></i>
                    <span class="text-gray-700"><strong>Sprache:</strong> Deutsch, Englisch, Mehrsprachig</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <i class="fas fa-infinity text-blue-600 w-5"></i>
                    <span class="text-gray-700"><strong>Laufzeit:</strong> Lebenslange Lizenz</span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-600 mb-3">Teilen:</p>
                <div class="flex gap-2">
                  <button class="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button class="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button class="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <i class="fab fa-whatsapp"></i>
                  </button>
                  <button class="p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <i class="fas fa-envelope"></i>
                  </button>
                  <button class="p-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <i class="fas fa-link"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div class="bg-white rounded-lg shadow-lg mb-12">
          {/* Tab Headers */}
          <div class="border-b border-gray-200">
            <div class="flex overflow-x-auto">
              <button class="tab-btn active px-8 py-4 font-semibold text-blue-600 border-b-2 border-blue-600 whitespace-nowrap" data-tab="description">
                <i class="fas fa-info-circle mr-2"></i>
                Beschreibung
              </button>
              <button class="tab-btn px-8 py-4 font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap" data-tab="features">
                <i class="fas fa-list mr-2"></i>
                Funktionen
              </button>
              <button class="tab-btn px-8 py-4 font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap" data-tab="requirements">
                <i class="fas fa-laptop mr-2"></i>
                Systemanforderungen
              </button>
              <button class="tab-btn px-8 py-4 font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap" data-tab="reviews">
                <i class="fas fa-star mr-2"></i>
                Bewertungen (2,547)
              </button>
              <button class="tab-btn px-8 py-4 font-semibold text-gray-600 hover:text-gray-900 border-b-2 border-transparent whitespace-nowrap" data-tab="faq">
                <i class="fas fa-question-circle mr-2"></i>
                FAQ
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div class="p-8">
            {/* Description Tab */}
            <div id="tab-description" class="tab-content">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Produktbeschreibung</h2>
              <div class="prose max-w-none text-gray-700 space-y-4">
                <p>
                  <strong>Microsoft Office 2024 Professional Plus</strong> ist die umfassendste Office-Suite von Microsoft 
                  und bietet alle professionellen Anwendungen für produktives Arbeiten im Büro, Home-Office oder Studium.
                </p>
                <p>
                  Diese Version enthält die neuesten Versionen von <strong>Word, Excel, PowerPoint, Outlook, Access, Publisher und OneNote</strong>. 
                  Mit der lebenslangen Lizenz zahlen Sie nur einmal und können die Software dauerhaft nutzen – ohne Abo-Gebühren.
                </p>
                <h3 class="text-xl font-semibold text-gray-900 mt-6">Highlights:</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li>Alle wichtigen Office-Anwendungen in einem Paket</li>
                  <li>Lebenslange Lizenz ohne Abo-Kosten</li>
                  <li>Sofortiger Download nach Kauf</li>
                  <li>Kostenlose Updates und Sicherheitspatches</li>
                  <li>Kompatibel mit Windows 10/11</li>
                  <li>Mehrsprachige Benutzeroberfläche</li>
                  <li>Original-Lizenzschlüssel vom Hersteller</li>
                </ul>
              </div>
            </div>

            {/* Features Tab */}
            <div id="tab-features" class="tab-content hidden">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Enthaltene Programme & Funktionen</h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="border border-gray-200 rounded-lg p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <i class="fas fa-file-word text-3xl text-blue-600"></i>
                    <h3 class="text-xl font-semibold text-gray-900">Microsoft Word 2024</h3>
                  </div>
                  <p class="text-gray-700 text-sm mb-3">Professionelle Textverarbeitung für Dokumente aller Art</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Erweiterte Formatierungsoptionen</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Echtzeit-Zusammenarbeit</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>KI-gestützte Editor-Funktion</li>
                  </ul>
                </div>

                <div class="border border-gray-200 rounded-lg p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <i class="fas fa-file-excel text-3xl text-green-600"></i>
                    <h3 class="text-xl font-semibold text-gray-900">Microsoft Excel 2024</h3>
                  </div>
                  <p class="text-gray-700 text-sm mb-3">Leistungsstarke Tabellenkalkulation und Datenanalyse</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Erweiterte Formeln und Funktionen</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Pivot-Tabellen und Diagramme</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Power Query Integration</li>
                  </ul>
                </div>

                <div class="border border-gray-200 rounded-lg p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <i class="fas fa-file-powerpoint text-3xl text-red-600"></i>
                    <h3 class="text-xl font-semibold text-gray-900">Microsoft PowerPoint 2024</h3>
                  </div>
                  <p class="text-gray-700 text-sm mb-3">Beeindruckende Präsentationen erstellen</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Designer-Vorlagen</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Animationen und Übergänge</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Präsentator-Ansicht</li>
                  </ul>
                </div>

                <div class="border border-gray-200 rounded-lg p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <i class="fas fa-envelope text-3xl text-blue-700"></i>
                    <h3 class="text-xl font-semibold text-gray-900">Microsoft Outlook 2024</h3>
                  </div>
                  <p class="text-gray-700 text-sm mb-3">E-Mail, Kalender und Kontaktverwaltung</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Intelligente Posteingang-Filter</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Kalenderintegration</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Aufgabenverwaltung</li>
                  </ul>
                </div>

                <div class="border border-gray-200 rounded-lg p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <i class="fas fa-database text-3xl text-purple-600"></i>
                    <h3 class="text-xl font-semibold text-gray-900">Microsoft Access 2024</h3>
                  </div>
                  <p class="text-gray-700 text-sm mb-3">Datenbankverwaltung für Profis</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Relationale Datenbanken</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Abfragen und Berichte</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Formulare erstellen</li>
                  </ul>
                </div>

                <div class="border border-gray-200 rounded-lg p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <i class="fas fa-book text-3xl text-pink-600"></i>
                    <h3 class="text-xl font-semibold text-gray-900">Microsoft Publisher 2024</h3>
                  </div>
                  <p class="text-gray-700 text-sm mb-3">Professionelle Publikationen und Marketing-Materialien</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Flyer und Broschüren</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Newsletter erstellen</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Visitenkarten-Designer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirements Tab */}
            <div id="tab-requirements" class="tab-content hidden">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Systemanforderungen</h2>
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    Mindestanforderungen
                  </h3>
                  <table class="w-full text-sm">
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Betriebssystem:</td>
                        <td class="py-3 text-gray-600">Windows 10 oder höher</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Prozessor:</td>
                        <td class="py-3 text-gray-600">1.6 GHz oder schneller, 2-Core</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">RAM:</td>
                        <td class="py-3 text-gray-600">4 GB (64-bit)</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Festplattenspeicher:</td>
                        <td class="py-3 text-gray-600">4 GB verfügbar</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Bildschirm:</td>
                        <td class="py-3 text-gray-600">1280 x 768 Auflösung</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Internet:</td>
                        <td class="py-3 text-gray-600">Erforderlich für Aktivierung</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <i class="fas fa-star text-yellow-500 mr-2"></i>
                    Empfohlene Anforderungen
                  </h3>
                  <table class="w-full text-sm">
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Betriebssystem:</td>
                        <td class="py-3 text-gray-600">Windows 11</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Prozessor:</td>
                        <td class="py-3 text-gray-600">2.0 GHz oder schneller, 4-Core</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">RAM:</td>
                        <td class="py-3 text-gray-600">8 GB oder mehr</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Festplattenspeicher:</td>
                        <td class="py-3 text-gray-600">10 GB verfügbar (SSD)</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Bildschirm:</td>
                        <td class="py-3 text-gray-600">1920 x 1080 oder höher</td>
                      </tr>
                      <tr>
                        <td class="py-3 font-medium text-gray-700">Grafikkarte:</td>
                        <td class="py-3 text-gray-600">DirectX 10 kompatibel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 class="font-semibold text-blue-900 mb-3">
                  <i class="fas fa-info-circle mr-2"></i>
                  Wichtige Hinweise
                </h3>
                <ul class="text-sm text-blue-800 space-y-2">
                  <li><i class="fas fa-check mr-2"></i>Eine Internetverbindung ist für die Aktivierung und Updates erforderlich</li>
                  <li><i class="fas fa-check mr-2"></i>Ein Microsoft-Konto wird für die Aktivierung benötigt</li>
                  <li><i class="fas fa-check mr-2"></i>Die Software kann nur auf einem PC gleichzeitig installiert werden</li>
                  <li><i class="fas fa-check mr-2"></i>Kompatibel mit Windows 10 (Build 19042 oder höher) und Windows 11</li>
                </ul>
              </div>
            </div>

            {/* Reviews Tab */}
            <div id="tab-reviews" class="tab-content hidden">
              <div class="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Rating Summary */}
                <div class="bg-gray-50 rounded-lg p-6">
                  <div class="text-center">
                    <div class="text-6xl font-bold text-gray-900 mb-2">4.8</div>
                    <div class="flex justify-center text-yellow-400 text-xl mb-2">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <p class="text-sm text-gray-600">Basierend auf 2,547 Bewertungen</p>
                  </div>

                  <div class="mt-6 space-y-2">
                    <div class="flex items-center gap-3">
                      <span class="text-sm text-gray-600 w-12">5 Sterne</span>
                      <div class="flex-1 bg-gray-200 rounded-full h-2">
                        <div class="bg-yellow-400 h-2 rounded-full" style="width: 75%"></div>
                      </div>
                      <span class="text-sm text-gray-600 w-12 text-right">75%</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-sm text-gray-600 w-12">4 Sterne</span>
                      <div class="flex-1 bg-gray-200 rounded-full h-2">
                        <div class="bg-yellow-400 h-2 rounded-full" style="width: 18%"></div>
                      </div>
                      <span class="text-sm text-gray-600 w-12 text-right">18%</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-sm text-gray-600 w-12">3 Sterne</span>
                      <div class="flex-1 bg-gray-200 rounded-full h-2">
                        <div class="bg-yellow-400 h-2 rounded-full" style="width: 5%"></div>
                      </div>
                      <span class="text-sm text-gray-600 w-12 text-right">5%</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-sm text-gray-600 w-12">2 Sterne</span>
                      <div class="flex-1 bg-gray-200 rounded-full h-2">
                        <div class="bg-yellow-400 h-2 rounded-full" style="width: 1%"></div>
                      </div>
                      <span class="text-sm text-gray-600 w-12 text-right">1%</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-sm text-gray-600 w-12">1 Stern</span>
                      <div class="flex-1 bg-gray-200 rounded-full h-2">
                        <div class="bg-yellow-400 h-2 rounded-full" style="width: 1%"></div>
                      </div>
                      <span class="text-sm text-gray-600 w-12 text-right">1%</span>
                    </div>
                  </div>
                </div>

                {/* Review List */}
                <div class="lg:col-span-2 space-y-6">
                  {/* Review 1 */}
                  <div class="border-b border-gray-200 pb-6">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                          MK
                        </div>
                        <div>
                          <p class="font-semibold text-gray-900">Max Krüger</p>
                          <p class="text-xs text-gray-500">Vor 2 Tagen</p>
                        </div>
                      </div>
                      <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p class="text-gray-700 mb-2">
                      Hervorragendes Produkt! Die Installation war super einfach und der Lizenzschlüssel wurde sofort geliefert. 
                      Office läuft einwandfrei und ist deutlich günstiger als direkt bei Microsoft.
                    </p>
                    <div class="flex items-center gap-4 text-sm">
                      <button class="text-gray-600 hover:text-blue-600">
                        <i class="far fa-thumbs-up mr-1"></i> Hilfreich (24)
                      </button>
                      <span class="text-green-600 font-medium">
                        <i class="fas fa-check-circle mr-1"></i> Verifizierter Kauf
                      </span>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div class="border-b border-gray-200 pb-6">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                          AS
                        </div>
                        <div>
                          <p class="font-semibold text-gray-900">Anna Schmidt</p>
                          <p class="text-xs text-gray-500">Vor 1 Woche</p>
                        </div>
                      </div>
                      <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p class="text-gray-700 mb-2">
                      Sehr zufrieden! Schnelle Lieferung, originale Microsoft-Lizenz. 
                      Perfekt für mein Home-Office. Der Preis ist unschlagbar!
                    </p>
                    <div class="flex items-center gap-4 text-sm">
                      <button class="text-gray-600 hover:text-blue-600">
                        <i class="far fa-thumbs-up mr-1"></i> Hilfreich (18)
                      </button>
                      <span class="text-green-600 font-medium">
                        <i class="fas fa-check-circle mr-1"></i> Verifizierter Kauf
                      </span>
                    </div>
                  </div>

                  {/* Review 3 */}
                  <div class="border-b border-gray-200 pb-6">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                          TM
                        </div>
                        <div>
                          <p class="font-semibold text-gray-900">Thomas Müller</p>
                          <p class="text-xs text-gray-500">Vor 2 Wochen</p>
                        </div>
                      </div>
                      <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                    <p class="text-gray-700 mb-2">
                      Gutes Preis-Leistungs-Verhältnis. Die Aktivierung hat auf Anhieb funktioniert. 
                      Einziger kleiner Kritikpunkt: Die Anleitung zur Installation könnte etwas ausführlicher sein.
                    </p>
                    <div class="flex items-center gap-4 text-sm">
                      <button class="text-gray-600 hover:text-blue-600">
                        <i class="far fa-thumbs-up mr-1"></i> Hilfreich (12)
                      </button>
                      <span class="text-green-600 font-medium">
                        <i class="fas fa-check-circle mr-1"></i> Verifizierter Kauf
                      </span>
                    </div>
                  </div>

                  <button class="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Alle Bewertungen anzeigen
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Tab */}
            <div id="tab-faq" class="tab-content hidden">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg">
                  <button class="faq-btn w-full text-left p-6 flex items-center justify-between hover:bg-gray-50">
                    <span class="font-semibold text-gray-900">Ist dies eine Original-Microsoft-Lizenz?</span>
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </button>
                  <div class="faq-answer hidden p-6 pt-0 text-gray-700">
                    Ja, wir verkaufen ausschließlich originale Microsoft-Lizenzschlüssel. Alle Lizenzen stammen direkt von Microsoft 
                    oder autorisierten Händlern und sind 100% legal und aktivierbar.
                  </div>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <button class="faq-btn w-full text-left p-6 flex items-center justify-between hover:bg-gray-50">
                    <span class="font-semibold text-gray-900">Wie erhalte ich meine Lizenz nach dem Kauf?</span>
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </button>
                  <div class="faq-answer hidden p-6 pt-0 text-gray-700">
                    Sofort nach Zahlungseingang erhalten Sie eine E-Mail mit Ihrem Lizenzschlüssel, Download-Link und 
                    detaillierter Installationsanleitung. Die Lieferung erfolgt in der Regel innerhalb von 5 Minuten.
                  </div>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <button class="faq-btn w-full text-left p-6 flex items-center justify-between hover:bg-gray-50">
                    <span class="font-semibold text-gray-900">Kann ich die Lizenz auf mehreren Computern verwenden?</span>
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </button>
                  <div class="faq-answer hidden p-6 pt-0 text-gray-700">
                    Die Einzellizenz kann nur auf einem PC gleichzeitig aktiviert sein. Für mehrere Computer empfehlen wir 
                    unsere Mehrfachlizenz (5 PCs). Sie können die Lizenz jedoch deaktivieren und auf einen anderen PC übertragen.
                  </div>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <button class="faq-btn w-full text-left p-6 flex items-center justify-between hover:bg-gray-50">
                    <span class="font-semibold text-gray-900">Erhalte ich Updates?</span>
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </button>
                  <div class="faq-answer hidden p-6 pt-0 text-gray-700">
                    Ja, Sie erhalten alle Sicherheitsupdates und Patches kostenlos über Windows Update. 
                    Große Versions-Upgrades (z.B. von Office 2024 auf 2027) sind jedoch nicht enthalten.
                  </div>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <button class="faq-btn w-full text-left p-6 flex items-center justify-between hover:bg-gray-50">
                    <span class="font-semibold text-gray-900">Was ist der Unterschied zu Office 365?</span>
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </button>
                  <div class="faq-answer hidden p-6 pt-0 text-gray-700">
                    Office 2024 ist eine einmalige Kaufversion ohne Abo-Gebühren. Office 365 (Microsoft 365) erfordert 
                    ein monatliches/jährliches Abo, bietet aber Cloud-Speicher und immer die neueste Version. Für die meisten 
                    Privatnutzer ist Office 2024 die günstigere Wahl.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div class="mb-12">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">
              <i class="fas fa-box-open mr-3 text-blue-600"></i>
              Ähnliche Produkte
            </h2>
            <a href="/produkte" class="text-blue-600 hover:text-blue-700 font-medium">
              Alle anzeigen <i class="fas fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div class="grid md:grid-cols-4 gap-6" id="related-products">
            {/* Related products will be loaded dynamically */}
          </div>
        </div>

        {/* Recently Viewed */}
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            <i class="fas fa-history mr-3 text-gray-600"></i>
            Kürzlich angesehen
          </h2>
          <div class="grid md:grid-cols-5 gap-4" id="recently-viewed">
            {/* Recently viewed products will be loaded from localStorage */}
          </div>
        </div>
      </div>

      {/* Floating Action Bar (Mobile) */}
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden shadow-lg z-50">
        <div class="flex items-center gap-3">
          <div class="flex-1">
            <p class="text-sm text-gray-600">Preis</p>
            <p class="text-2xl font-bold text-gray-900">€89,99</p>
          </div>
          <button class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
            <i class="fas fa-shopping-cart mr-2"></i>
            In den Warenkorb
          </button>
        </div>
      </div>

      {/* Product Detail JavaScript */}
      <script dangerouslySetInnerHTML={{__html: `
        // Demo product data
        const productData = {
          id: 1,
          name: 'Microsoft Office 2024 Professional Plus',
          category: 'Office Software',
          brand: 'Microsoft',
          price: 89.99,
          originalPrice: 439.99,
          rating: 4.8,
          reviews: 2547,
          images: [
            'https://via.placeholder.com/800x600?text=Microsoft+Office+2024',
            'https://via.placeholder.com/800x600?text=Word+2024',
            'https://via.placeholder.com/800x600?text=Excel+2024',
            'https://via.placeholder.com/800x600?text=PowerPoint+2024',
            'https://via.placeholder.com/800x600?text=Outlook+2024'
          ],
          inStock: true
        };

        let quantity = 1;
        let selectedLicense = 'single';

        // Initialize
        function init() {
          setupTabs();
          setupImageGallery();
          setupQuantityControls();
          setupActionButtons();
          setupFAQAccordion();
          loadRelatedProducts();
          addToRecentlyViewed();
        }

        // Setup tabs
        function setupTabs() {
          document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const tabName = btn.dataset.tab;
              
              // Update buttons
              document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active', 'text-blue-600', 'border-blue-600');
                b.classList.add('text-gray-600', 'border-transparent');
              });
              btn.classList.add('active', 'text-blue-600', 'border-blue-600');
              btn.classList.remove('text-gray-600', 'border-transparent');
              
              // Update content
              document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
              });
              document.getElementById('tab-' + tabName).classList.remove('hidden');
            });
          });
        }

        // Setup image gallery
        function setupImageGallery() {
          const mainImage = document.getElementById('main-image');
          const thumbnails = document.querySelectorAll('.thumbnail-btn');
          
          thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
              mainImage.src = productData.images[index];
              
              thumbnails.forEach(t => {
                t.classList.remove('border-blue-600');
                t.classList.add('border-gray-200');
              });
              thumb.classList.remove('border-gray-200');
              thumb.classList.add('border-blue-600');
            });
          });
        }

        // Setup quantity controls
        function setupQuantityControls() {
          const qtyInput = document.getElementById('quantity');
          
          document.getElementById('qty-decrease').addEventListener('click', () => {
            if (quantity > 1) {
              quantity--;
              qtyInput.value = quantity;
            }
          });
          
          document.getElementById('qty-increase').addEventListener('click', () => {
            if (quantity < 10) {
              quantity++;
              qtyInput.value = quantity;
            }
          });
        }

        // Setup action buttons
        function setupActionButtons() {
          document.getElementById('add-to-cart-btn').addEventListener('click', () => {
            addToCart();
          });
          
          document.getElementById('buy-now-btn').addEventListener('click', () => {
            addToCart();
            window.location.href = '/warenkorb';
          });
          
          document.getElementById('add-to-wishlist-btn').addEventListener('click', () => {
            alert('Zur Wunschliste hinzugefügt!');
          });
        }

        // Add to cart
        function addToCart() {
          const cart = JSON.parse(localStorage.getItem('cart') || '[]');
          
          const item = {
            id: productData.id,
            name: productData.name,
            category: productData.category,
            price: productData.price,
            quantity: quantity,
            image: productData.images[0],
            licenseType: selectedLicense === 'single' ? 'Einzellizenz (1 PC)' : 'Mehrfachlizenz (5 PCs)'
          };
          
          cart.push(item);
          localStorage.setItem('cart', JSON.stringify(cart));
          
          alert('Produkt wurde in den Warenkorb gelegt!');
        }

        // Setup FAQ accordion
        function setupFAQAccordion() {
          document.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const answer = btn.nextElementSibling;
              const icon = btn.querySelector('i');
              
              answer.classList.toggle('hidden');
              icon.classList.toggle('fa-chevron-down');
              icon.classList.toggle('fa-chevron-up');
            });
          });
        }

        // Load related products
        function loadRelatedProducts() {
          const container = document.getElementById('related-products');
          const relatedProducts = [
            { id: 2, name: 'Adobe Creative Cloud', price: 149.99, image: 'https://via.placeholder.com/300x200?text=Adobe+CC' },
            { id: 3, name: 'Windows 11 Pro', price: 59.99, image: 'https://via.placeholder.com/300x200?text=Windows+11' },
            { id: 4, name: 'Antivirus 2024', price: 29.99, image: 'https://via.placeholder.com/300x200?text=Antivirus' },
            { id: 5, name: 'PDF Editor Pro', price: 39.99, image: 'https://via.placeholder.com/300x200?text=PDF+Editor' }
          ];
          
          container.innerHTML = relatedProducts.map(product => \`
            <a href="/produkt/\${product.id}" class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 block">
              <img src="\${product.image}" alt="\${product.name}" class="w-full aspect-[3/2] object-cover rounded-lg mb-3" />
              <h3 class="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">\${product.name}</h3>
              <p class="text-lg font-bold text-blue-600">€\${product.price.toFixed(2).replace('.', ',')}</p>
            </a>
          \`).join('');
        }

        // Add to recently viewed
        function addToRecentlyViewed() {
          let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
          
          const product = {
            id: productData.id,
            name: productData.name,
            price: productData.price,
            image: productData.images[0]
          };
          
          recentlyViewed = recentlyViewed.filter(p => p.id !== product.id);
          recentlyViewed.unshift(product);
          recentlyViewed = recentlyViewed.slice(0, 5);
          
          localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
          displayRecentlyViewed();
        }

        // Display recently viewed
        function displayRecentlyViewed() {
          const container = document.getElementById('recently-viewed');
          const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
          
          if (recentlyViewed.length === 0) {
            container.innerHTML = '<p class="text-gray-500 col-span-full text-center py-8">Keine kürzlich angesehenen Produkte</p>';
            return;
          }
          
          container.innerHTML = recentlyViewed.map(product => \`
            <a href="/produkt/\${product.id}" class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-3 block">
              <img src="\${product.image}" alt="\${product.name}" class="w-full aspect-square object-cover rounded-lg mb-2" />
              <h3 class="font-semibold text-gray-900 text-xs mb-1 line-clamp-2">\${product.name}</h3>
              <p class="text-sm font-bold text-blue-600">€\${product.price.toFixed(2).replace('.', ',')}</p>
            </a>
          \`).join('');
        }

        // Initialize on page load
        init();
      `}} />
    </div>
  )
}
