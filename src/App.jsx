import React, { useState, useEffect } from 'react';
import './index.css';

import TrainerPage from './pages/TrainerPage';
import DieticianPage from './pages/DieticianPage';
import IoTPage from './pages/IoTPage';
import TrackerPage from './pages/TrackerPage';
import BuddyPage from './pages/BuddyPage';

function App() {
  const [activeSection, setActiveSection] = useState('trainer');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer to update active nav link on scroll
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['trainer', 'dietician', 'iot', 'tracker', 'buddy'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Top Navigation Bar mimicking portfolio header */}
      <nav className={`top-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <h2>🏋️‍♂️ AI Gym</h2>
          </div>
          <ul className="nav-links">
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</li>
            <li className={activeSection === 'trainer' ? 'active' : ''} onClick={() => scrollToSection('trainer')}>AI Trainer</li>
            <li className={activeSection === 'dietician' ? 'active' : ''} onClick={() => scrollToSection('dietician')}>AI Dietician</li>
            <li className={activeSection === 'iot' ? 'active' : ''} onClick={() => scrollToSection('iot')}>Smart Gym</li>
            <li className={activeSection === 'tracker' ? 'active' : ''} onClick={() => scrollToSection('tracker')}>Tracker</li>
            <li className={activeSection === 'buddy' ? 'active' : ''} onClick={() => scrollToSection('buddy')}>Buddy</li>
          </ul>
        </div>
      </nav>
      
      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>"The only bad workout is the one that didn't happen."</h1>
            <p>Your AI-powered journey to a stronger, healthier you.</p>
            <button onClick={() => scrollToSection('trainer')} style={{ marginTop: '2rem', padding: '1rem 3rem', fontSize: '1.25rem' }}>
              Start Sweating
            </button>
          </div>
        </section>

        <section id="trainer" className="dashboard-section bg-alt">
          <div><TrainerPage /></div>
        </section>

        <section id="dietician" className="dashboard-section">
          <div><DieticianPage /></div>
        </section>

        <section id="iot" className="dashboard-section bg-alt">
          <div><IoTPage /></div>
        </section>

        <section id="tracker" className="dashboard-section">
          <div><TrackerPage /></div>
        </section>

        <section id="buddy" className="dashboard-section bg-alt">
          <div><BuddyPage /></div>
        </section>
      </main>

      <footer>
        <div className="container">
            <p>&copy; 2026 AI Gym & Fitness Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
