export function AdminSidebarMerged(currentPath: string = '/admin') {
  // MERGED SIDEBAR: All sections with working pages marked
  // ✅ = Fully functional with real DB queries
  // 🔨 = Placeholder (route exists, needs implementation)
  
  const menuStructure = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'tachometer-alt',
      children: [
        { path: '/admin', label: '✅ Übersicht', icon: 'chart-line', working: true },
        { path: '/admin/quick-actions', label: '🔨 Schnellaktionen', icon: 'bolt', working: false },
        { path: '/admin/system-status', label: '🔨 Systemstatus', icon: 'server', working: false },
        { path: '/admin/notifications', label: '🔨 Benachrichtigungen', icon: 'bell', working: false }
      ]
    },
    {
      id: 'products',
      label: 'Produkte',
      icon: 'box-open',
      children: [
        { path: '/admin/products', label: '🔨 Alle Produkte', icon: 'list', working: false },
        { path: '/admin/products/add', label: '🔨 Produkt hinzufügen', icon: 'plus-circle', working: false },
        { path: '/admin/categories', label: '🔨 Kategorien', icon: 'folder-open', working: false },
        { path: '/admin/brands', label: '🔨 Marken / Hersteller', icon: 'trademark', working: false },
        { path: '/admin/attributes', label: '🔨 Attribute & Varianten', icon: 'tags', working: false },
        { path: '/admin/bundles', label: '🔨 Bundles', icon: 'boxes', working: false },
        { path: '/admin/volume-products', label: '🔨 Volumenprodukte', icon: 'layer-group', working: false },
        { path: '/admin/products/import', label: '🔨 Bulk-Import (CSV)', icon: 'file-csv', working: false },
        { path: '/admin/inventory', label: '🔨 Lager & Verfügbarkeit', icon: 'warehouse', working: false },
        { path: '/admin/products/seo', label: '🔨 Produkt-SEO', icon: 'search', working: false }
      ]
    },
    {
      id: 'orders',
      label: 'Bestellungen',
      icon: 'shopping-cart',
      children: [
        { path: '/admin/orders', label: '🔨 Alle Bestellungen', icon: 'list', working: false },
        { path: '/admin/orders?status=pending', label: '🔨 Offen', icon: 'clock', working: false },
        { path: '/admin/orders?status=processing', label: '🔨 In Bearbeitung', icon: 'spinner', working: false },
        { path: '/admin/orders/completed', label: '✅ Abgeschlossen', icon: 'check-circle', working: true },
        { path: '/admin/orders/cancelled', label: '✅ Storniert', icon: 'times-circle', working: true },
        { path: '/admin/refunds', label: '🔨 Rückerstattungen', icon: 'undo', working: false },
        { path: '/admin/invoices', label: '🔨 Rechnungen', icon: 'file-invoice', working: false },
        { path: '/admin/shipping-status', label: '✅ Versandstatus (Digital)', icon: 'truck', working: true }
      ]
    },
    {
      id: 'licenses',
      label: 'Lizenzen',
      icon: 'key',
      children: [
        { path: '/admin/licenses', label: '🔨 Lizenzschlüssel', icon: 'key', working: false },
        { path: '/admin/volume-licenses', label: '🔨 Volumenlizenzen', icon: 'keys', working: false },
        { path: '/admin/license-assignments', label: '✅ Schlüssel-Zuweisung', icon: 'user-tag', working: true },
        { path: '/admin/license-usage', label: '🔨 Nutzung & Aktivierungen', icon: 'chart-bar', working: false },
        { path: '/admin/license-expiry', label: '🔨 Ablauf & Verlängerung', icon: 'calendar-alt', working: false },
        { path: '/admin/licenses/import-export', label: '🔨 CSV Import / Export', icon: 'file-csv', working: false },
        { path: '/admin/certificates', label: '🔨 Zertifikate', icon: 'certificate', working: false },
        { path: '/admin/certificate-settings', label: '🔨 Zertifikat-Einstellungen', icon: 'cog', working: false },
        { path: '/admin/license-security', label: '🔨 Sicherheitsstatus', icon: 'shield-alt', working: false }
      ]
    },
    {
      id: 'customers',
      label: 'Kunden',
      icon: 'users',
      children: [
        { path: '/admin/customers', label: '✅ Alle Kunden', icon: 'list', working: true },
        { path: '/admin/customer-profiles', label: '🔨 Kundenprofile', icon: 'user-circle', working: false },
        { path: '/admin/customer-orders', label: '🔨 Bestellhistorie', icon: 'history', working: false },
        { path: '/admin/customer-licenses', label: '🔨 Lizenzübersicht', icon: 'key', working: false },
        { path: '/admin/customer-roles', label: '🔨 Kundenrollen', icon: 'user-tag', working: false },
        { path: '/admin/support-history', label: '🔨 Support-Historie', icon: 'headset', working: false },
        { path: '/admin/gdpr-requests', label: '🔨 DSGVO-Anfragen', icon: 'user-shield', working: false }
      ]
    },
    {
      id: 'payments',
      label: 'Zahlungen',
      icon: 'credit-card',
      children: [
        { path: '/admin/payments', label: '✅ Zahlungsübersicht', icon: 'list', working: true },
        { path: '/admin/payment-providers', label: '✅ Zahlungsanbieter', icon: 'building', working: true },
        { path: '/admin/payment-methods', label: '✅ Zahlungsmethoden', icon: 'wallet', working: true },
        { path: '/admin/checkout-settings', label: '✅ Checkout-Einstellungen', icon: 'shopping-cart', working: true },
        { path: '/admin/currencies', label: '✅ Währungen', icon: 'money-bill-wave', working: true },
        { path: '/admin/subscriptions', label: '✅ Abonnements', icon: 'sync-alt', working: true },
        { path: '/admin/fraud-prevention', label: '✅ Betrugsprävention', icon: 'shield-alt', working: true },
        { path: '/admin/payment-logs', label: '🔨 Zahlungsprotokolle', icon: 'file-alt', working: false }
      ]
    },
    {
      id: 'vat',
      label: 'Steuern & VAT',
      icon: 'percent',
      children: [
        { path: '/admin/vat-id-validation', label: '✅ VAT-ID Prüfung', icon: 'id-card', working: true },
        { path: '/admin/taxes', label: '🔨 Steuersätze', icon: 'percentage', working: false },
        { path: '/admin/eu-countries', label: '🔨 EU-Länder', icon: 'flag', working: false },
        { path: '/admin/oss', label: '🔨 OSS (One-Stop-Shop)', icon: 'store', working: false }
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: 'life-ring',
      children: [
        { path: '/admin/tickets', label: '✅ Support-Tickets', icon: 'ticket-alt', working: true },
        { path: '/admin/knowledge-base', label: '🔨 Wissensdatenbank', icon: 'book', working: false },
        { path: '/admin/contact', label: '🔨 Kontaktanfragen', icon: 'envelope', working: false }
      ]
    },
    {
      id: 'design',
      label: 'Design & Content',
      icon: 'palette',
      children: [
        { path: '/admin/themes', label: '🔨 Themes', icon: 'paint-brush', working: false },
        { path: '/admin/pages', label: '🔨 Seiten', icon: 'file-alt', working: false },
        { path: '/admin/homepage', label: '🔨 Homepage Manager', icon: 'magic', working: false },
        { path: '/admin/sliders', label: '🔨 Slider', icon: 'images', working: false },
        { path: '/admin/menus', label: '🔨 Menüs', icon: 'bars', working: false },
        { path: '/admin/footer', label: '🔨 Footer', icon: 'shoe-prints', working: false }
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: 'bullhorn',
      children: [
        { path: '/admin/campaigns', label: '🔨 Kampagnen', icon: 'flag', working: false },
        { path: '/admin/coupons', label: '🔨 Gutscheine', icon: 'ticket-alt', working: false },
        { path: '/admin/newsletter', label: '🔨 Newsletter', icon: 'envelope-open-text', working: false },
        { path: '/admin/email-templates', label: '🔨 E-Mail-Vorlagen', icon: 'mail-bulk', working: false },
        { path: '/admin/seo', label: '🔨 SEO-Einstellungen', icon: 'search', working: false }
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics & Reports',
      icon: 'chart-line',
      children: [
        { path: '/admin/analytics', label: '🔨 Übersicht', icon: 'chart-bar', working: false },
        { path: '/admin/reports', label: '🔨 Berichte', icon: 'file-chart-line', working: false },
        { path: '/admin/sales-reports', label: '🔨 Verkaufsberichte', icon: 'chart-area', working: false }
      ]
    },
    {
      id: 'security',
      label: 'Sicherheit',
      icon: 'shield-alt',
      children: [
        { path: '/admin/security', label: '🔨 Security Dashboard', icon: 'shield-alt', working: false },
        { path: '/admin/security/sessions', label: '✅ Aktive Sessions', icon: 'users', working: true },
        { path: '/admin/security/2fa', label: '🔨 Two-Factor Auth', icon: 'mobile-alt', working: false },
        { path: '/admin/firewall', label: '🔨 Firewall', icon: 'fire', working: false },
        { path: '/admin/security-scans', label: '🔨 Security Scans', icon: 'radar', working: false }
      ]
    },
    {
      id: 'settings',
      label: 'Einstellungen',
      icon: 'cog',
      children: [
        { path: '/admin/settings', label: '🔨 Allgemein', icon: 'cog', working: false },
        { path: '/admin/store-settings', label: '🔨 Shop-Einstellungen', icon: 'store', working: false },
        { path: '/admin/email-settings', label: '🔨 E-Mail-Einstellungen', icon: 'envelope', working: false },
        { path: '/admin/api-settings', label: '🔨 API-Einstellungen', icon: 'plug', working: false }
      ]
    }
  ];

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/admin' && currentPath === '/admin') return true;
    if (path !== '/admin' && currentPath.startsWith(path)) return true;
    return false;
  };

  // Count working pages
  const workingCount = menuStructure.reduce((total, section) => {
    return total + (section.children?.filter((item: any) => item.working).length || 0);
  }, 0);

  // Generate menu items HTML
  const generateMenuItems = (items: any[], level = 0) => {
    return items.map(item => {
      const active = isActive(item.path);
      const hasChildren = item.children && item.children.length > 0;
      
      if (hasChildren) {
        const isAnyChildActive = item.children.some((child: any) => isActive(child.path));
        const workingChildren = item.children.filter((c: any) => c.working).length;
        const totalChildren = item.children.length;
        
        return `
          <div class="mb-2">
            <div class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded cursor-pointer" 
                 onclick="this.nextElementSibling.classList.toggle('hidden')">
              <i class="fas fa-${item.icon} w-5"></i>
              <span class="ml-3 flex-1">${item.label}</span>
              <span class="text-xs bg-gray-700 px-2 py-1 rounded">${workingChildren}/${totalChildren}</span>
              <i class="fas fa-chevron-down text-xs ml-2"></i>
            </div>
            <div class="${isAnyChildActive ? '' : 'hidden'} ml-4 mt-1">
              ${generateMenuItems(item.children, level + 1)}
            </div>
          </div>
        `;
      } else {
        const activeClass = active ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700';
        const workingBadge = item.working ? '' : '<span class="text-xs ml-2 opacity-50">🔨</span>';
        return `
          <a href="${item.path}" class="flex items-center px-4 py-2 ${activeClass} rounded mb-1">
            <i class="fas fa-${item.icon} w-5"></i>
            <span class="ml-3 text-sm">${item.label}</span>
            ${workingBadge}
            ${active ? '<i class="fas fa-check ml-auto text-sm"></i>' : ''}
          </a>
        `;
      }
    }).join('');
  };

  return `
    <div class="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white overflow-y-auto shadow-lg">
      <!-- Header -->
      <div class="p-6 border-b border-gray-700">
        <a href="/admin" class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-crown text-xl"></i>
          </div>
          <div>
            <h2 class="font-bold text-lg">SOFTWAREKING24</h2>
            <p class="text-xs text-gray-400">Admin Panel</p>
          </div>
        </a>
      </div>

      <!-- Working Pages Badge -->
      <div class="px-6 py-4 bg-green-900 border-b border-gray-700">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold">Status</span>
          <span class="px-3 py-1 bg-green-600 rounded-full text-xs font-bold">${workingCount} Funktional</span>
        </div>
        <p class="text-xs text-gray-300 mt-2">✅ = Funktional | 🔨 = In Entwicklung</p>
      </div>

      <!-- Menu -->
      <nav class="p-4">
        ${generateMenuItems(menuStructure)}
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-gray-700 mt-auto">
        <div class="text-xs text-gray-400">
          <p>Total Sections: ${menuStructure.length}</p>
          <p>Working Pages: ${workingCount}</p>
        </div>
      </div>
    </div>
  `;
}
