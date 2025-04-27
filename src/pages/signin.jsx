import React, { useState } from 'react';
import '../styles/signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://your-backend-api.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data);
        // You can now store token, redirect user, etc.
      } else {
        console.error('Login failed:', data.message || 'Unknown error');
        // Optionally show an error message on the form
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Optionally show a connection error
    }
  };
  

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Sign In</h2>
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
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
