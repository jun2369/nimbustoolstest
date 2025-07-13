
import { useState } from 'react';

function App() {
  const [activeSubItem, setActiveSubItem] = useState('');

  const subItems = [
    { key: 'netchb', label: 'NETCHB Converter' },
    { key: 'track', label: 'T01 Track Query' },
    { key: 'magaya', label: 'Magaya' },
    { key: 'Download', label: 'T01PGA' }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '260px', backgroundColor: '#f3f3f3', padding: '1rem', borderRight: '1px solid #ccc' }}>
        <h2 style={{ marginBottom: '1rem' }}>Nimbus Tools</h2>
        <div style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#6b21a8' }}>Nimbus</div>
        <div style={{ marginLeft: '1rem' }}>
          <div style={{ fontWeight: 600 }}>T01</div>
          <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '0.5rem' }}>
            {subItems.map((item) => (
              <li
                key={item.key}
                onClick={() => setActiveSubItem(item.key)}
                style={{
                  padding: '6px 12px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  backgroundColor: activeSubItem === item.key ? '#ddd6fe' : 'transparent',
                  fontWeight: activeSubItem === item.key ? 'bold' : 'normal'
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main style={{ flex: 1, padding: '2rem' }}>
        {activeSubItem === 'netchb' && <div>NETCHB Converter Content Placeholder</div>}
        {activeSubItem === 'track' && <div>T01 Track Query Content Placeholder</div>}
        {activeSubItem === 'magaya' && <div>Magaya Content Placeholder</div>}
        {activeSubItem === 'Download' && <div>T01PGA Content Placeholder</div>}
        {!activeSubItem && <div>Please select an item from the sidebar.</div>}
      </main>
    </div>
  );
}

export default App;
