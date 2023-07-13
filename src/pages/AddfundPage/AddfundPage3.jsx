import React from "react";
import "./AddfundPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FundForm from "../../components/FundForm/FundForm";
import FundForm2 from "../../components/FundForm/FundForm2";
import FundForm3 from "../../components/FundForm/FundForm3";
function AddfundPage3() {
  return (
    <div className="add__fund__page">
      {/* sidebar */}
      <Sidebar />

      <div className="contents">
        {/* navbar */}
        <Navbar />

        {/* fund form */}
        <FundForm3 />
      </div>
    </div>
  );
}

export default AddfundPage3;
