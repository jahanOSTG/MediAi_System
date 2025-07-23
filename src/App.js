import React, { useState } from 'react';
import Form from './Form'; // your login/register form
import DiabeticForm from './DiabeticForm'; // diabetic prediction form
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDiabeticForm, setShowDiabeticForm] = useState(false);

  const handleLoginClick = () => setShowLogin(true);

  const handleCloseLogin = () => setShowLogin(false);

  const handleDiabeticClick = () => {
    setShowDiabeticForm((prev) => !prev); // toggle form visibility
  };

  return (
    <div className="App">
      {/* Top Dashboard */}
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
          <div
            className="card"
            onClick={handleDiabeticClick}
            style={{ cursor: 'pointer' }}
          >
            🧠 Diabetes Prediction
          </div>
          <div className="card">📝 Patient Management</div>
          <div className="card">👨‍⚕️ Doctor Panel</div>
          <div className="card">📊 Health Calculators</div>
          <div
            className="card"
            onClick={handleLoginClick}
            style={{ cursor: 'pointer' }}
            aria-label="Login or Register"
          >
            🔐 Login/Register
          </div>
        </div>
      </section>

      {/* Show diabetic form if toggled */}
      {showDiabeticForm && <DiabeticForm />}

      {/* Advertisement / Health Tips Section */}
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
        <div className="about-grid">
          {/* Left Column: Text + Table */}
          <div>
            <h2>About MediAI</h2>
            <p>
              MediAI bridges the gap between technology and healthcare by integrating intelligent
              systems powered by machine learning. Our mission is to make healthcare smarter,
              faster, and more accessible.
            </p>

            {/* Table of Features */}
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd-row">
                  <td>24/7 Bed Availability</td>
                  <td className="text-green">Available</td>
                </tr>
                <tr>
                  <td>AI Health Tips</td>
                  <td className="text-green">Active</td>
                </tr>
                <tr className="odd-row">
                  <td>Online Consultation</td>
                  <td className="text-yellow">Coming Soon</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Column: Image */}
          <div className="about-image-container">
            <img
              src="https://images.unsplash.com/photo-1588776814546-ec7e9b3473cc"
              alt="Hospital AI"
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>© 2025 MediAI. All rights reserved.</p>
        <p>Developed by Faria Janie | React + ML Project</p>
      </footer>

      {/* Login/Register Form Modal */}
      {showLogin && <Form onClose={handleCloseLogin} />}
    </div>
  );
}

export default App;
