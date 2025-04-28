import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Signin from './pages/signin.jsx';
import Dashboard from './pages/dashboard.jsx';
import ConnectBank from './pages/connectbank.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connect-bank" element={<ConnectBank />} /> {/* Add route for ConnectBank */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
