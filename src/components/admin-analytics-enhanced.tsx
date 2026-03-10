import type { FC } from 'hono/jsx'

export const AdminAnalyticsEnhanced: FC = () => {
  return (
    <div class="admin-analytics-enhanced">
      <div class="admin-header">
        <h2><i class="fas fa-chart-pie"></i> Analytics Dashboard</h2>
        <select id="range-filter" class="form-control" style="width: 200px;" onchange="loadData()">
          <option value="7">Letzte 7 Tage</option>
          <option value="30">Letzte 30 Tage</option>
          <option value="90">Letzte 90 Tage</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-users"></i></div>
          <div class="stat-content">
            <div class="stat-label">Sitzungen</div>
            <div class="stat-value" id="total-sessions">0</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-user"></i></div>
          <div class="stat-content">
            <div class="stat-label">Unique Users</div>
            <div class="stat-value" id="unique-users">0</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
          <div class="stat-content">
            <div class="stat-label">Seitenaufrufe</div>
            <div class="stat-value" id="total-pageviews">0</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-shopping-cart"></i></div>
          <div class="stat-content">
            <div class="stat-label">Conversions</div>
            <div class="stat-value" id="conversions">0</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-euro-sign"></i></div>
          <div class="stat-content">
            <div class="stat-label">Umsatz</div>
            <div class="stat-value" id="revenue">€0</div>
          </div>
        </div>
      </div>

      {/* Daily Trend Chart */}
      <div class="admin-card">
        <h3><i class="fas fa-chart-line"></i> Tagestrend</h3>
        <canvas id="daily-trend-chart" style="max-height: 300px;"></canvas>
      </div>

      {/* Geographic Distribution */}
      <div class="admin-card">
        <h3><i class="fas fa-globe"></i> Geografische Verteilung</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Land</th>
                <th>Sitzungen</th>
                <th>Conversions</th>
                <th>Conv. Rate</th>
              </tr>
            </thead>
            <tbody id="geo-tbody">
              <tr><td colspan="4" style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin"></i> Lade Daten...</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Events */}
      <div class="admin-card">
        <h3><i class="fas fa-mouse-pointer"></i> Top Events</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Event Typ</th>
                <th>Kategorie</th>
                <th>Anzahl</th>
              </tr>
            </thead>
            <tbody id="events-tbody"></tbody>
          </table>
        </div>
      </div>

      <style>{`
        .admin-analytics-enhanced { padding: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; gap: 15px; align-items: center; }
        .stat-icon { width: 50px; height: 50px; border-radius: 10px; background: linear-gradient(135deg, #1a2a4e, #d4af37); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; }
        .stat-content { flex: 1; }
        .stat-label { font-size: 13px; color: #666; margin-bottom: 6px; }
        .stat-value { font-size: 26px; font-weight: bold; color: #1a2a4e; }
      `}</style>

      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        let trendChart = null;
        
        async function loadData() {
          const range = document.getElementById('range-filter').value;
          try {
            const response = await fetch('/api/analytics/dashboard?range=' + range);
            const data = await response.json();
            if (data.success) {
              // Stats
              document.getElementById('total-sessions').textContent = data.stats.total_sessions || 0;
              document.getElementById('unique-users').textContent = data.stats.unique_users || 0;
              document.getElementById('total-pageviews').textContent = data.stats.total_pageviews || 0;
              document.getElementById('conversions').textContent = data.stats.conversions || 0;
              document.getElementById('revenue').textContent = '€' + (data.stats.revenue || 0).toFixed(2);
              
              // Daily trend chart
              const dailyData = data.dailyTrend || [];
              const ctx = document.getElementById('daily-trend-chart').getContext('2d');
              if (trendChart) trendChart.destroy();
              trendChart = new Chart(ctx, {
                type: 'line',
                data: {
                  labels: dailyData.map(d => d.date),
                  datasets: [{
                    label: 'Sitzungen',
                    data: dailyData.map(d => d.sessions),
                    borderColor: '#1a2a4e',
                    backgroundColor: 'rgba(26, 42, 78, 0.1)',
                    tension: 0.4
                  }, {
                    label: 'Conversions',
                    data: dailyData.map(d => d.conversions),
                    borderColor: '#d4af37',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    tension: 0.4
                  }]
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: true } }
                }
              });
              
              // Geographic distribution
              const countryNames = { DE: '🇩🇪 Deutschland', AT: '🇦🇹 Österreich', CH: '🇨🇭 Schweiz', US: '🇺🇸 USA', GB: '🇬🇧 UK' };
              document.getElementById('geo-tbody').innerHTML = (data.geographic || []).map(g => {
                const convRate = g.sessions > 0 ? ((g.conversions / g.sessions) * 100).toFixed(2) : 0;
                return \`
                  <tr>
                    <td><strong>\${countryNames[g.country] || g.country}</strong></td>
                    <td>\${g.sessions}</td>
                    <td>\${g.conversions || 0}</td>
                    <td><strong>\${convRate}%</strong></td>
                  </tr>
                \`;
              }).join('') || '<tr><td colspan="4" style="text-align: center; padding: 20px;">Keine Daten</td></tr>';
              
              // Top events
              document.getElementById('events-tbody').innerHTML = (data.topEvents || []).map(e => \`
                <tr>
                  <td><span class="badge badge-info">\${e.event_type}</span></td>
                  <td>\${e.event_category}</td>
                  <td><strong>\${e.count}</strong></td>
                </tr>
              \`).join('') || '<tr><td colspan="3" style="text-align: center; padding: 20px;">Keine Events</td></tr>';
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
