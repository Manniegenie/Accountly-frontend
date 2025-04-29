import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Signin from './pages/signin.jsx';
import Dashboard from './pages/dashboard.jsx';
import ConnectBank from './pages/connectbank.jsx'; 
import UpdateBinance from './pages/binanceconnect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connect-bank" element={<ConnectBank />} />
        <Route path="/update-binance" element={<UpdateBinance />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
