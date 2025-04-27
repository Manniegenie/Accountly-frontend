import React, { useState } from 'react';
import '../styles/connectBank.css';

function ConnectBank() {
  const [banks, setBanks] = useState([
    { name: 'Chase Bank', account: '**** 1234', status: 'Active' },
    { name: 'Wells Fargo', account: '**** 5678', status: 'Active' },
  ]);

  const handleConnectBank = () => {
    // Logic to connect a bank would go here (e.g., open bank API integration)
    console.log('Connecting a new bank...');
    // For now, let's mock adding a new bank
    setBanks([...banks, { name: 'Bank of America', account: '**** 4321', status: 'Pending' }]);
  };

  return (
    <div className="connect-bank-page">
      <div className="page-header">
        <h1>Connect Bank</h1>
        <button onClick={handleConnectBank} className="connect-btn">
          Connect Bank
        </button>
      </div>
      
      <div className="bank-table">
        <h2>Connected Banks</h2>
        <table>
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank, index) => (
              <tr key={index}>
                <td>{bank.name}</td>
                <td>{bank.account}</td>
                <td>{bank.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConnectBank;
