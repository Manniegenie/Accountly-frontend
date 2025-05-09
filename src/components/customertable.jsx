import React from 'react';
import '../styles/customertable.css';

function CustomerTable() {
  return (
    <div className="customer-table">
      <div className="table-header">
        <h2>Deals</h2>
        <input type="text" placeholder="Search..." />
        <select>
          <option>Sort by: Newest</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Source</th>
            <th>Amount</th>
            <th>Transaction id</th>
            <th>Beneficiary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Debit</td>
            <td>Binance</td>
            <td>$10,465</td>
            <td>ctry66588dbbbd88r9nnd99db8</td>
            <td>yeubu884888497bbu8hls89b99</td>
            <td><span className="status active">Active</span></td>
          </tr>
          {/* Add other rows */}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
