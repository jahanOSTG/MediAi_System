import React, { useState } from 'react';
import './login.css';

const Form = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-overlay">
      <div className="login-box">
        <div className="form-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Create Account
          </button>
        </div>

        {isLogin ? (
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
        ) : (
          <form>
            <label>Full Name:</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password:</label>
            <input type="password" placeholder="Create a password" required />

            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" required />

            <button type="submit">Create Account</button>
          </form>
        )}

        <button className="close-btn" onClick={onClose}>✖ Close</button>
      </div>
    </div>
  );
};

export default Form;
