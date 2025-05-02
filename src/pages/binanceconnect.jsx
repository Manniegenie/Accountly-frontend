import React, { useState } from 'react';
import '../styles/connectbank.css'; // Link the CSS we'll write

function UpdateBinance() {
  const [binanceKey, setBinanceKey] = useState('');
  const [binanceSecret, setBinanceSecret] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    try {
      const token = localStorage.getItem('token'); // Assumes user is authenticated
      const response = await fetch('https://priscaai.onrender.com/binance/update-binance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // ✅ Send token in Authorization header
        },
        body: JSON.stringify({ binanceKey, binanceSecret })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Binance credentials updated successfully.', type: 'success' });
        setBinanceKey('');
        setBinanceSecret('');
      } else {
        setMessage({ text: data.message || 'Failed to update Binance credentials.', type: 'error' });
      }
    } catch (error) {
      console.error('Error updating credentials:', error);
      setMessage({ text: 'Server error. Please try again later.', type: 'error' });
    }
  };

  return (
    <div className="update-binance-page">
      <div className="page-header">
        <h1>Update Binance Credentials</h1>
      </div>

      <div className="update-form-container">
        {message.text && (
          <div className={`alert ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Binance API Key</label>
            <input
              type="text"
              value={binanceKey}
              onChange={(e) => setBinanceKey(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Binance Secret Key</label>
            <input
              type="text"
              value={binanceSecret}
              onChange={(e) => setBinanceSecret(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Update Credentials
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBinance;
