import type { FC } from 'hono/jsx'

export const AdminAnalyticsBehavior: FC = () => {
  return (
    <div class="admin-analytics-behavior">
      <div class="admin-header">
        <h2><i class="fas fa-chart-line"></i> Nutzerverhalten Analytics</h2>
        <select id="range-filter" class="form-control" style="width: 200px;" onchange="loadData()">
          <option value="7">Letzte 7 Tage</option>
          <option value="30">Letzte 30 Tage</option>
          <option value="90">Letzte 90 Tage</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-percentage"></i></div>
          <div class="stat-content">
            <div class="stat-label">Absprungrate</div>
            <div class="stat-value" id="bounce-rate">0%</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-clock"></i></div>
          <div class="stat-content">
            <div class="stat-label">Ø Sitzungsdauer</div>
            <div class="stat-value" id="avg-duration">0s</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
          <div class="stat-content">
            <div class="stat-label">Ø Seiten/Sitzung</div>
            <div class="stat-value" id="avg-pages">0</div>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div class="admin-card">
        <h3><i class="fas fa-chart-bar"></i> Beliebteste Seiten</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Seite</th>
                <th>Aufrufe</th>
                <th>Ø Verweildauer</th>
              </tr>
            </thead>
            <tbody id="top-pages-tbody">
              <tr><td colspan="3" style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin"></i> Lade Daten...</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .admin-analytics-behavior { padding: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; gap: 20px; align-items: center; }
        .stat-icon { width: 60px; height: 60px; border-radius: 12px; background: linear-gradient(135deg, #1a2a4e, #d4af37); display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; }
        .stat-content { flex: 1; }
        .stat-label { font-size: 14px; color: #666; margin-bottom: 8px; }
        .stat-value { font-size: 32px; font-weight: bold; color: #1a2a4e; }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
        async function loadData() {
          const range = document.getElementById('range-filter').value;
          try {
            const response = await fetch('/api/analytics/behavior?range=' + range);
            const data = await response.json();
            if (data.success) {
              document.getElementById('bounce-rate').textContent = data.bounceRate + '%';
              document.getElementById('avg-duration').textContent = Math.round(data.avgSessionDuration) + 's';
              document.getElementById('avg-pages').textContent = data.avgPagesPerSession.toFixed(1);
              
              const tbody = document.getElementById('top-pages-tbody');
              tbody.innerHTML = (data.topPages || []).map(p => \`
                <tr>
                  <td><strong>\${p.page_title || p.page_url}</strong><br/><small>\${p.page_url}</small></td>
                  <td>\${p.views}</td>
                  <td>\${Math.round(p.avg_duration)}s</td>
                </tr>
              \`).join('') || '<tr><td colspan="3" style="text-align: center; padding: 20px;">Keine Daten</td></tr>';
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
