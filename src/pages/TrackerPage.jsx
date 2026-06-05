import React from 'react';

function TrackerPage() {
  return (
    <div>
      <div className="page-header">
        <h1>Fitness Habit Tracker</h1>
        <p style={{ color: 'var(--text-muted)' }}>Log your workouts and receive behavioral reminders.</p>
      </div>
      
      <div className="grid-2">
        <div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Log a Workout</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <select style={{ marginBottom: 0 }}>
                <option>Cardio</option>
                <option>Weightlifting</option>
                <option>Yoga</option>
              </select>
              <input type="number" placeholder="Duration (mins)" style={{ marginBottom: 0 }} />
              <button>Log Workout</button>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>Recent History & Reminders</h3>
            <div style={{ padding: '1rem', background: 'rgba(79,70,229,0.1)', borderRadius: '0.5rem', borderLeft: '4px solid var(--primary)', marginBottom: '1.5rem' }}>
              <strong>AI Reminder:</strong> "Great job staying consistent! You've logged 3 workouts this week. Keep it up."
            </div>
            
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem 0' }}>Date</th>
                  <th>Type</th>
                  <th>Mins</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.75rem 0' }}>Today</td>
                  <td>Cardio</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0' }}>Yesterday</td>
                  <td>Weights</td>
                  <td>60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Motivational Side Panel */}
        <div className="card" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center',
            backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9)), url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
            "Discipline is doing what needs to be done, even if you don't want to do it."
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>— Stay on Track</p>
        </div>
      </div>
    </div>
  );
}

export default TrackerPage;
