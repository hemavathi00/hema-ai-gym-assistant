import React from 'react';

function IoTPage() {
  const equipment = [
    { id: 'treadmill_1', name: 'Treadmill 1', status: 'In Use', metric: '10.5 km/h' },
    { id: 'bench_1', name: 'Bench Press', status: 'Available', metric: '0 kg' },
    { id: 'dumbbells', name: 'Smart Dumbbells', status: 'In Use', metric: '8 Reps' }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Smart Gym (IoT)</h1>
        <p style={{ color: 'var(--text-muted)' }}>Real-time MQTT equipment monitoring and resistance control.</p>
      </div>
      
      <div className="grid-3">
        {equipment.map(eq => (
          <div key={eq.id} className="card">
            <h3 style={{ marginBottom: '0.5rem' }}>{eq.name}</h3>
            <span className="status-badge" style={{ 
              backgroundColor: eq.status === 'Available' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)',
              color: eq.status === 'Available' ? 'var(--secondary)' : '#F59E0B',
              marginBottom: '1rem'
            }}>
              {eq.status}
            </span>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '1rem 0' }}>
              {eq.metric}
            </div>
            {eq.status === 'In Use' && (
              <button style={{ width: '100%', fontSize: '0.875rem', padding: '0.5rem' }}>
                Adjust Resistance
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IoTPage;
