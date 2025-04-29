// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/signin.jsx';
import Dashboard from './pages/dashboard.jsx';
import ConnectBank from './pages/connectbank.jsx'; 
import UpdateBinance from './pages/binanceconnect.jsx';

export default function App() {
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
