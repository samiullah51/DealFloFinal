import React from "react";
import "./AddfundPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FundForm from "../../components/FundForm/FundForm";
import FundForm2 from "../../components/FundForm/FundForm2";
function AddfundPage2() {
  return (
    <div className="add__fund__page">
      {/* sidebar */}
      <Sidebar />

      <div className="contents">
        {/* navbar */}
        <Navbar />

        {/* fund form */}
        <FundForm2 />
      </div>
    </div>
  );
}

export default AddfundPage2;
