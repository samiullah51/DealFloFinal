import React from "react";
import "./AddfundPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FundForm from "../../components/FundForm/FundForm";
function AddfundPage() {
  return (
    <div className="add__fund__page">
      {/* sidebar */}
      <Sidebar />

      <div className="contents">
        {/* navbar */}
        <Navbar />

        {/* fund form */}
        <FundForm />
      </div>
    </div>
  );
}

export default AddfundPage;
