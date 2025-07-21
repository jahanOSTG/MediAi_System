import React from 'react';
import './App.css';

function App() {
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
          <div className="card">🔐 Login/Register</div>
        </div>
      </section>

      {/* Scroll-Triggered Ad Section */}
      <section className="ad-section">
        <h2>📢 Health Tips</h2>
        <p>Eat healthy, stay active, and monitor your vitals regularly.</p>
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
    </div>
  );
}

export default App;
