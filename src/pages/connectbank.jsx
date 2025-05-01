import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/connectbank.css';

function ConnectBank() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleConnectBank = async () => {
    try {
      const jwt = localStorage.getItem('token');

      const res = await fetch('http://localhost:3000/monoconnect/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });

      const result = await res.json();

      if (result?.mono_url) {
        window.location.href = result.mono_url;
      } else {
        alert('Failed to get Mono URL from backend');
        console.error(result);
      }
    } catch (err) {
      console.error('Mono connection error:', err);
      alert('Something went wrong while connecting to Mono.');
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const codeFromURL = queryParams.get('code');

    const sendCodeToBackend = async (code) => {
      const jwt = localStorage.getItem('token');

      if (!jwt) {
        console.warn('JWT not found in localStorage');
        return;
      }

      try {
        await navigator.clipboard.writeText(code);
        console.log('Code copied to clipboard:', code);

        const res = await fetch('http://localhost:3000/monoconnect/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({ code }),
        });

        if (!res.ok) throw new Error('Failed to send code to backend');
        const result = await res.json();
        console.log('Code sent successfully:', result);
      } catch (err) {
        console.error('Failed to send code or copy to clipboard:', err);
      }
    };

    if (codeFromURL) {
      sendCodeToBackend(codeFromURL);
      navigate('/', { replace: true }); // Clean up ?code from URL
    } else {
      navigator.clipboard
        .readText()
        .then((text) => {
          if (text && (text.startsWith('mono_') || text.length === 24)) {
            console.log('Detected code in clipboard:', text);
            sendCodeToBackend(text);
          }
        })
        .catch((err) => {
          console.warn('Clipboard read failed:', err);
        });
    }
  }, [location, navigate]);

  return (
    <div className="connect-bank-page">
      <div className="page-header">
        <h1>Connect Bank</h1>
        <button onClick={handleConnectBank} className="connect-btn">
          Connect Bank
        </button>
      </div>
    </div>
  );
}

export default ConnectBank;
