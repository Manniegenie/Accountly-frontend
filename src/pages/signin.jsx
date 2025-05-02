import React, { useState } from 'react';
import '../styles/signin.css';

function Toast({ message, type, onClose }) {
  return (
    <div className={`toast ${type}`}>
      {message}
      <button onClick={onClose} className="close-btn">&times;</button>
    </div>
  );
}

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast({ message: '', type: '' });

    try {
      const response = await fetch('https://priscaai.onrender.com/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        setToast({ message: 'Sign in successful!', type: 'success' });

        setTimeout(() => {
          window.location.href = '/dashboard'; // Redirect after 1.5 seconds
        }, 1500);
      } else {
        setToast({ message: data.message || 'Login failed.', type: 'error' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setToast({ message: 'Server error. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="signin-page">
      <div className="page-header">
        <h1>Sign In</h1>
      </div>

      <div className="signin-container">
        {toast.message && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ message: '', type: '' })}
          />
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="connect-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
