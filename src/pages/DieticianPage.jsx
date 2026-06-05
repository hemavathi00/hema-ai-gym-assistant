import React, { useState } from 'react';

function DieticianPage() {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API call to backend
    setTimeout(() => {
      setPlan({
        bmi: 24.5,
        suggestions: ["Focus on high protein", "Ensure caloric surplus with complex carbs"],
        grocery_list: ["Chicken Breast", "Rice", "Broccoli", "Greek Yogurt", "Eggs"]
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="page-header">
        <h1>AI Dietician</h1>
        <p style={{ color: 'var(--text-muted)' }}>Get personalized diet plans and grocery lists based on your goals.</p>
      </div>
      
      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Your Details</h3>
          <form onSubmit={handleGenerate}>
            <label>Weight (kg)</label>
            <input type="number" placeholder="e.g., 75" required />
            
            <label>Height (cm)</label>
            <input type="number" placeholder="e.g., 180" required />
            
            <label>Fitness Goal</label>
            <select required>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="maintenance">Maintenance</option>
            </select>
            
            <button type="submit" style={{ width: '100%' }} disabled={loading}>
              {loading ? 'Analyzing...' : 'Generate Plan'}
            </button>
          </form>

          {/* Motivational Quote Image for Diet */}
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            borderRadius: '1rem',
            backgroundImage: 'linear-gradient(to right, rgba(16, 185, 129, 0.8), rgba(15, 23, 42, 0.9)), url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#fff', fontSize: '1.25rem', fontStyle: 'italic' }}>"Let food be thy medicine and medicine be thy food."</h4>
          </div>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Your AI Diet Plan</h3>
          {plan ? (
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span className="status-badge">BMI: {plan.bmi}</span>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>AI Suggestions</h4>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {plan.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Grocery List</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {plan.grocery_list.map((item, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '4rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.2 }}>🥗</div>
              Fill out your details to get a personalized plan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DieticianPage;
