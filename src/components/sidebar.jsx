import React from 'react';
import { FaTachometerAlt, FaBuilding, FaBitcoin, FaUserAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="sidebar-logo">
          Dashboard<span className="version"> v.01</span>
        </div>
        <nav className="sidebar-menu">
          <a href="#" className="active">
            <FaTachometerAlt className="sidebar-icon" /> Dashboard
          </a>
          <a href="/connect-bank">
            <FaBuilding className="sidebar-icon" /> Connect Bank
          </a>
          <a href="/Update-Binance">
            <FaBitcoin className="sidebar-icon" /> Connect Wallet
          </a>
          <a href="#">
            <FaUserAlt className="sidebar-icon" /> Add User
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;