import React from 'react';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import DashboardCards from '../components/dashboardcards';
import CustomerTable from '../components/customertable';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <DashboardCards />
        <CustomerTable />
      </div>
    </div>
  );
}

export default Dashboard;
