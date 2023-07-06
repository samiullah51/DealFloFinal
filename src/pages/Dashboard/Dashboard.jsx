import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UpperDashboard from "../../components/UpperDashboard/UpperDashboard";
function Dashboard() {
  return (
    <div className="dashboard">
      {/* sidebar */}
      <Sidebar />
      {/* main contents */}
      <div className="contents">
        {/* navbar */}
        <Navbar />
        {/* contents goes here */}
        {/* dashboard upper */}
        <UpperDashboard />
      </div>
    </div>
  );
}

export default Dashboard;
