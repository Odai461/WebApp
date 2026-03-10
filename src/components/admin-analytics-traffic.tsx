import type { FC } from 'hono/jsx'

export const AdminAnalyticsTraffic: FC = () => {
  return (
    <div class="admin-analytics-traffic">
      <div class="admin-header">
        <h2><i class="fas fa-chart-area"></i> Traffic Analytics</h2>
        <select id="range-filter" class="form-control" style="width: 200px;" onchange="loadData()">
          <option value="7">Letzte 7 Tage</option>
          <option value="30">Letzte 30 Tage</option>
          <option value="90">Letzte 90 Tage</option>
        </select>
      </div>

      {/* Traffic Sources */}
      <div class="admin-card">
        <h3><i class="fas fa-share-alt"></i> Traffic-Quellen</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Quelle</th>
                <th>Sitzungen</th>
                <th>Ø Dauer</th>
                <th>Conversions</th>
                <th>Umsatz</th>
              </tr>
            </thead>
            <tbody id="sources-tbody">
              <tr><td colspan="5" style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin"></i> Lade Daten...</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaigns */}
      <div class="admin-card">
        <h3><i class="fas fa-bullhorn"></i> Kampagnen Performance</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Kampagne</th>
                <th>Sitzungen</th>
                <th>Conversions</th>
                <th>Conv. Rate</th>
                <th>Umsatz</th>
              </tr>
            </thead>
            <tbody id="campaigns-tbody"></tbody>
          </table>
        </div>
      </div>

      {/* Top Referrers */}
      <div class="admin-card">
        <h3><i class="fas fa-external-link-alt"></i> Top Referrer</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Referrer</th>
                <th>Sitzungen</th>
              </tr>
            </thead>
            <tbody id="referrers-tbody"></tbody>
          </table>
        </div>
      </div>

      <style>{`
        .admin-analytics-traffic { padding: 20px; }
        .source-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .source-search { background: #dbeafe; color: #1e40af; }
        .source-social { background: #fce7f3; color: #be123c; }
        .source-direct { background: #e0e7ff; color: #4338ca; }
        .source-email { background: #d1fae5; color: #065f46; }
        .source-referral { background: #fef3c7; color: #92400e; }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
        async function loadData() {
          const range = document.getElementById('range-filter').value;
          try {
            const response = await fetch('/api/analytics/traffic?range=' + range);
            const data = await response.json();
            if (data.success) {
              // Traffic sources
              const sourceIcons = { search: 'fa-search', social: 'fa-share-alt', direct: 'fa-compass', email: 'fa-envelope', referral: 'fa-link' };
              document.getElementById('sources-tbody').innerHTML = (data.trafficSources || []).map(s => \`
                <tr>
                  <td>
                    <i class="fas \${sourceIcons[s.traffic_source] || 'fa-question'}"></i>
                    <span class="source-badge source-\${s.traffic_source}">\${s.traffic_source}</span>
                  </td>
                  <td>\${s.sessions}</td>
                  <td>\${Math.round(s.avg_duration || 0)}s</td>
                  <td>\${s.conversions || 0}</td>
                  <td>€\${(s.revenue || 0).toFixed(2)}</td>
                </tr>
              \`).join('') || '<tr><td colspan="5" style="text-align: center; padding: 20px;">Keine Daten</td></tr>';
              
              // Campaigns
              document.getElementById('campaigns-tbody').innerHTML = (data.campaigns || []).map(c => {
                const convRate = c.sessions > 0 ? ((c.conversions / c.sessions) * 100).toFixed(2) : 0;
                return \`
                  <tr>
                    <td><strong>\${c.traffic_campaign}</strong></td>
                    <td>\${c.sessions}</td>
                    <td>\${c.conversions || 0}</td>
                    <td><strong>\${convRate}%</strong></td>
                    <td><strong>€\${(c.revenue || 0).toFixed(2)}</strong></td>
                  </tr>
                \`;
              }).join('') || '<tr><td colspan="5" style="text-align: center; padding: 20px;">Keine Kampagnen</td></tr>';
              
              // Top referrers
              document.getElementById('referrers-tbody').innerHTML = (data.topReferrers || []).map(r => \`
                <tr>
                  <td><a href="\${r.referrer_url}" target="_blank" rel="noopener">\${r.referrer_url}</a></td>
                  <td>\${r.sessions}</td>
                </tr>
              \`).join('') || '<tr><td colspan="2" style="text-align: center; padding: 20px;">Keine Referrer</td></tr>';
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
