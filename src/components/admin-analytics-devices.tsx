import type { FC } from 'hono/jsx'

export const AdminAnalyticsDevices: FC = () => {
  return (
    <div class="admin-analytics-devices">
      <div class="admin-header">
        <h2><i class="fas fa-mobile-alt"></i> Geräte Analytics</h2>
        <select id="range-filter" class="form-control" style="width: 200px;" onchange="loadData()">
          <option value="7">Letzte 7 Tage</option>
          <option value="30">Letzte 30 Tage</option>
          <option value="90">Letzte 90 Tage</option>
        </select>
      </div>

      {/* Device Types */}
      <div class="admin-card">
        <h3><i class="fas fa-devices"></i> Gerätetypen</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Gerät</th>
                <th>Sitzungen</th>
                <th>Ø Dauer</th>
                <th>Conversions</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody id="devices-tbody">
              <tr><td colspan="5" style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin"></i> Lade Daten...</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Browsers */}
      <div class="admin-card">
        <h3><i class="fas fa-globe"></i> Browser</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Browser</th>
                <th>Sitzungen</th>
                <th>Anteil</th>
              </tr>
            </thead>
            <tbody id="browsers-tbody"></tbody>
          </table>
        </div>
      </div>

      {/* Operating Systems */}
      <div class="admin-card">
        <h3><i class="fas fa-desktop"></i> Betriebssysteme</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>OS</th>
                <th>Sitzungen</th>
                <th>Anteil</th>
              </tr>
            </thead>
            <tbody id="os-tbody"></tbody>
          </table>
        </div>
      </div>

      <style>{`
        .admin-analytics-devices { padding: 20px; }
        .progress-bar-container { width: 100%; height: 8px; background: #e9ecef; border-radius: 4px; overflow: hidden; }
        .progress-bar { height: 100%; background: linear-gradient(90deg, #1a2a4e, #d4af37); transition: width 0.3s ease; }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
        async function loadData() {
          const range = document.getElementById('range-filter').value;
          try {
            const response = await fetch('/api/analytics/devices?range=' + range);
            const data = await response.json();
            if (data.success) {
              // Device types
              const deviceIcons = { desktop: 'fa-desktop', mobile: 'fa-mobile-alt', tablet: 'fa-tablet-alt' };
              const devicesTotal = (data.deviceTypes || []).reduce((sum, d) => sum + d.sessions, 0);
              document.getElementById('devices-tbody').innerHTML = (data.deviceTypes || []).map(d => {
                const convRate = d.sessions > 0 ? ((d.conversions / d.sessions) * 100).toFixed(2) : 0;
                return \`
                  <tr>
                    <td><i class="fas \${deviceIcons[d.device_type] || 'fa-question'}"></i> \${d.device_type}</td>
                    <td>\${d.sessions}</td>
                    <td>\${Math.round(d.avg_duration)}s</td>
                    <td>\${d.conversions || 0}</td>
                    <td><strong>\${convRate}%</strong></td>
                  </tr>
                \`;
              }).join('') || '<tr><td colspan="5" style="text-align: center; padding: 20px;">Keine Daten</td></tr>';
              
              // Browsers
              const browsersTotal = (data.browsers || []).reduce((sum, b) => sum + b.sessions, 0);
              document.getElementById('browsers-tbody').innerHTML = (data.browsers || []).map(b => {
                const percentage = browsersTotal > 0 ? ((b.sessions / browsersTotal) * 100).toFixed(1) : 0;
                return \`
                  <tr>
                    <td><strong>\${b.browser}</strong></td>
                    <td>\${b.sessions}</td>
                    <td>
                      <div class="progress-bar-container">
                        <div class="progress-bar" style="width: \${percentage}%"></div>
                      </div>
                      <div style="margin-top: 5px; font-size: 12px;">\${percentage}%</div>
                    </td>
                  </tr>
                \`;
              }).join('');
              
              // OS
              const osTotal = (data.operatingSystems || []).reduce((sum, o) => sum + o.sessions, 0);
              document.getElementById('os-tbody').innerHTML = (data.operatingSystems || []).map(o => {
                const percentage = osTotal > 0 ? ((o.sessions / osTotal) * 100).toFixed(1) : 0;
                return \`
                  <tr>
                    <td><strong>\${o.os}</strong></td>
                    <td>\${o.sessions}</td>
                    <td>
                      <div class="progress-bar-container">
                        <div class="progress-bar" style="width: \${percentage}%"></div>
                      </div>
                      <div style="margin-top: 5px; font-size: 12px;">\${percentage}%</div>
                    </td>
                  </tr>
                \`;
              }).join('');
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
