// src/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Signin from './pages/signin.jsx';
import Dashboard from './pages/dashboard.jsx';
import ConnectBank from './pages/connectbank.jsx';
import UpdateBinance from './pages/binanceconnect.jsx';

// React component for routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connect-bank" element={<ConnectBank />} />
        <Route path="/update-binance" element={<UpdateBinance />} />
      </Routes>
    </BrowserRouter>
  );
}

// Mount the App to DOM (this makes App.jsx an entry file)
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
