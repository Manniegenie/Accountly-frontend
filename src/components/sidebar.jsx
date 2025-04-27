import React from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="sidebar-logo">
          Dashboard<span className="version"> v.01</span>
        </div>
        <nav className="sidebar-menu">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Connect Bank</a>
          <a href="#">Connect Wallet</a>
          <a href="#">Add User</a>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
