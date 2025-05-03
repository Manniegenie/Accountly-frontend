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
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found in localStorage');
      return;
    }

    // Fetch crypto balance from Binance
    async function fetchCryptoBalance() {
      try {
        const response = await axios.get('https://priscaai.onrender.com/binance-balance/portfolio/latest', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data } = response.data;

        setDashboardData(prevData => ({
          ...prevData,
          cryptoBalance: data.totalValueUSD,
        }));
      } catch (error) {
        console.error('Error fetching crypto balance:', error.response?.data || error.message);
      }
    }

    // Fetch fiat balance from Mono
    async function fetchFiatBalance() {
      try {
        const response = await axios.get('https://priscaai.onrender.com/bank-balance/webhook', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data } = response.data;

        setDashboardData(prevData => ({
          ...prevData,
          fiatBalance: data.balance,
        }));
      } catch (error) {
        console.error('Error fetching bank balance:', error.response?.data || error.message);
      }
    }

    // Initial fetch
    fetchCryptoBalance();
    fetchFiatBalance();

    // Refresh every 5 minutes
    const intervalId = setInterval(() => {
      fetchCryptoBalance();
      fetchFiatBalance();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId); // Cleanup
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
