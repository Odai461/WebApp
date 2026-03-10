import type { FC } from 'hono/jsx'

export const AdminAnalyticsConversion: FC = () => {
  return (
    <div class="admin-analytics-conversion">
      <div class="admin-header">
        <h2><i class="fas fa-funnel-dollar"></i> Conversion Analytics</h2>
        <select id="range-filter" class="form-control" style="width: 200px;" onchange="loadData()">
          <option value="7">Letzte 7 Tage</option>
          <option value="30">Letzte 30 Tage</option>
          <option value="90">Letzte 90 Tage</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
          <div class="stat-content">
            <div class="stat-label">Conversion Rate</div>
            <div class="stat-value" id="conversion-rate">0%</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-shopping-cart"></i></div>
          <div class="stat-content">
            <div class="stat-label">Warenkorbabbruch</div>
            <div class="stat-value" id="cart-abandonment">0%</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-clock"></i></div>
          <div class="stat-content">
            <div class="stat-label">Ø Zeit bis Kauf</div>
            <div class="stat-value" id="avg-time">0s</div>
          </div>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div class="admin-card">
        <h3><i class="fas fa-filter"></i> Conversion Funnel</h3>
        <div id="funnel-container" style="padding: 20px;">
          <i class="fas fa-spinner fa-spin"></i> Lade Funnel...
        </div>
      </div>

      <style>{`
        .admin-analytics-conversion { padding: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; gap: 20px; align-items: center; }
        .stat-icon { width: 60px; height: 60px; border-radius: 12px; background: linear-gradient(135deg, #1a2a4e, #d4af37); display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; }
        .stat-content { flex: 1; }
        .stat-label { font-size: 14px; color: #666; margin-bottom: 8px; }
        .stat-value { font-size: 32px; font-weight: bold; color: #1a2a4e; }
        .funnel-step { background: #f8f9fa; border-left: 4px solid #1a2a4e; padding: 20px; margin-bottom: 15px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
        .funnel-step-name { font-weight: 600; font-size: 18px; color: #1a2a4e; }
        .funnel-step-stats { display: flex; gap: 30px; }
        .funnel-stat { text-align: center; }
        .funnel-stat-value { font-size: 24px; font-weight: bold; color: #1a2a4e; }
        .funnel-stat-label { font-size: 12px; color: #666; margin-top: 4px; }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
        async function loadData() {
          const range = document.getElementById('range-filter').value;
          try {
            const response = await fetch('/api/analytics/conversion?range=' + range);
            const data = await response.json();
            if (data.success) {
              document.getElementById('conversion-rate').textContent = data.conversionRate + '%';
              document.getElementById('cart-abandonment').textContent = data.cartAbandonment + '%';
              document.getElementById('avg-time').textContent = Math.round(data.avgTimeToConvert) + 's';
              
              const container = document.getElementById('funnel-container');
              const stepNames = { home: 'Homepage', product_view: 'Produktansicht', cart: 'Warenkorb', checkout: 'Checkout', purchase: 'Kauf' };
              container.innerHTML = (data.funnelSteps || []).map(s => \`
                <div class="funnel-step">
                  <div class="funnel-step-name">\${stepNames[s.step] || s.step}</div>
                  <div class="funnel-step-stats">
                    <div class="funnel-stat">
                      <div class="funnel-stat-value">\${s.sessions}</div>
                      <div class="funnel-stat-label">Sitzungen</div>
                    </div>
                    <div class="funnel-stat">
                      <div class="funnel-stat-value">\${s.conversionRate}%</div>
                      <div class="funnel-stat-label">Conversion</div>
                    </div>
                    \${s.dropOffRate ? \`
                      <div class="funnel-stat">
                        <div class="funnel-stat-value" style="color: #dc3545;">\${s.dropOffRate}%</div>
                        <div class="funnel-stat-label">Absprung</div>
                      </div>
                    \` : ''}
                  </div>
                </div>
              \`).join('');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }
        loadData();
      ` }} ></script>
    </div>
  )
}
