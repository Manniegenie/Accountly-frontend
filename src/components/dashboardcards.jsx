import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dashboardcards.css';

function DashboardCards() {
  const [dashboardData, setDashboardData] = useState({
    fiatBalance: 0,
    cryptoBalance: 0,
    totalTrades: 0,
    fiatChange: '+0% this month',
    cryptoChange: '+0% this month',
  });

  useEffect(() => {
    async function fetchCryptoBalance() {
      try {
        const token = localStorage.getItem('token'); // Get JWT from localStorage

        if (!token) {
          console.error('No token found in localStorage');
          return;
        }

        const response = await axios.get('http://localhost:3000/binance-balance/portfolio/latest', {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Correct Bearer token
          }
        });

        const { data } = response.data; // ✅ Get data object from API response

        // Update the dashboardData
        setDashboardData(prevData => ({
          ...prevData,
          cryptoBalance: data.totalValueUSD, // ✅ Correct path
        }));

      } catch (error) {
        console.error('Error fetching crypto balances:', error.response?.data || error.message);
      }
    }

    fetchCryptoBalance(); // Call immediately when component mounts

    // ✅ Set up an interval to call every 5 minutes
    const intervalId = setInterval(fetchCryptoBalance, 5 * 60 * 1000);

    // ✅ Cleanup on component unmount
    return () => clearInterval(intervalId);
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
        <p className="number">
          ${parseFloat(dashboardData.cryptoBalance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
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
