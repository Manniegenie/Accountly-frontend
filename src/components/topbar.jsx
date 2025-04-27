import React from 'react';
import '../styles/topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <h1>Hello Jerome 👋🏼</h1>
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  );
}

export default Topbar;
