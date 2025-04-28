import React, { useState, useEffect } from 'react';
import '../styles/dashboardcards.css';

function DashboardCards() {
  // Example state for API data (replace with your actual API fetch logic)
  const [dashboardData, setDashboardData] = useState({
    fiatBalance: 5423000,
    cryptoBalance: 10893,
    totalTrades: 189,
    fiatChange: '+16% this month',
    cryptoChange: '-1% this month',
  });

  // Simulate API fetch (replace with your actual API call)
  useEffect(() => {
    // Example: fetch('/api/dashboard').then(res => res.json()).then(data => setDashboardData(data));
    // For now, using static data
  }, []);

  return (
    <div className="dashboard-cards">
      <div className="card">
        <h3>FIAT BALANCE</h3>
        <p className="number">₦{dashboardData.fiatBalance.toLocaleString()}</p>
        <p className="positive">{dashboardData.fiatChange}</p>
      </div>
      <div className="card">
        <h3>CRYPTO BALANCE</h3>
        <p className="number">${dashboardData.cryptoBalance.toLocaleString()}</p>
        <p className="negative">{dashboardData.cryptoChange}</p>
      </div>
      <div className="card">
        <h3>TOTAL TRADES</h3>
        <p className="number">{dashboardData.totalTrades}</p>
      </div>
    </div>
  );
}

export default DashboardCards;