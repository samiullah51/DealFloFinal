import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UpperDashboard from "../../components/UpperDashboard/UpperDashboard";
import MiddleDashboard from "../../components/MiddleDashboard/MiddleDashboard";
import LowerDashboard from "../../components/LowerDashboard/LowerDashboard";
function Dashboard() {
  return (
    <div className="dashboard">
      {/* sidebar */}
      <Sidebar status="dashboardActive" />
      {/* main contents */}
      <div className="contents">
        {/* navbar */}
        <Navbar />
        {/* contents goes here
        {/* dashboard upper */}
        <UpperDashboard />
        {/* middle dashboard */}
        <MiddleDashboard />
        {/* lower dashboard */}
        <LowerDashboard />
      </div>
    </div>
  );
}

export default Dashboard;
