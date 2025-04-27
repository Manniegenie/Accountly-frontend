import React from 'react';
import '../styles/dashboardcards.css';

function DashboardCards() {
  return (
    <div className="dashboard-cards">
      <div className="card">
        <h3>FIAT BALANCE</h3>
        <p className="number">5,423</p>
        <p className="positive">+16% this month</p>
      </div>
      <div className="card">
        <h3>CRYPTO BALANCE</h3>
        <p className="number">1,893</p>
        <p className="negative">-1% this month</p>
      </div>
      <div className="card">
        <h3>TOTAL TRADES</h3>
        <p className="number">189</p>
      </div>
    </div>
  );
}

export default DashboardCards;
