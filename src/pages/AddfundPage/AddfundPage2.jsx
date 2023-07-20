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
<<<<<<< HEAD
      <Sidebar addFundStatus="yes" />
=======
      <Sidebar />
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a

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
