import React, { useState } from 'react';
import './App.css';
import Form from './Form'; // import the Form component

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseForm = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">

      {/* Fixed Top Dashboard */}
      <header className="top-dashboard">
        <h1>🏥 MediAI Dashboard</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main-section" id="home">
        <h2>Welcome to MediAI</h2>
        <p>Your AI-powered solution for health prediction and hospital management.</p>
        <button>Explore Now</button>
      </section>

      {/* Feature Cards */}
      <section className="feature-section" id="features">
        <h2>🔍 Features</h2>
        <div className="card-grid">
          <div className="card">🧠 Diabetes Prediction</div>
          <div className="card">📝 Patient Management</div>
          <div className="card">👨‍⚕️ Doctor Panel</div>
          <div className="card">📊 Health Calculators</div>
          <div className="card" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
            🔐 Login/Register
          </div>
        </div>
      </section>

      <section className="ad-section">
        <div className="ad-image"></div>
        <div className="ad-text">
          <h2>📢 Health Tips</h2>
          <ul className="health-tips">
            <li>🥗 Eat balanced meals daily</li>
            <li>🚰 Stay hydrated with 8+ glasses of water</li>
            <li>🏃‍♀️ Exercise at least 30 mins a day</li>
            <li>🧘‍♂️ Practice stress-reducing activities</li>
            <li>🩺 Visit your doctor regularly</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About MediAI</h2>
        <p>We aim to bridge the gap between technology and healthcare through machine learning.</p>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>© 2025 MediAI. All rights reserved.</p>
        <p>Developed by Faria Janie | React + ML Project</p>
      </footer>

      {/* Show login form modal if showLogin is true */}
      {showLogin && <Form onClose={handleCloseForm} />}
    </div>
  );
}

export default App;
