import React from "react";
import "./Sidebar.css";
import dashboardicon from "../../assets/dashboardicon.svg";
import investicon from "../../assets/investicon.svg";
import investoppericon from "../../assets/investoppericon.svg";
import workicon from "../../assets/workicon.svg";
import chart from "../../assets/chart.svg";
import infoicon from "../../assets/infoicon.svg";
import settingicon from "../../assets/settingicon.svg";
import logouticon from "../../assets/logouticon.svg";
import walletActive from "../../assets/walletActive.svg";
import dashboardActive from "../../assets/dashboardActive.svg";
function Sidebar({ status }) {
  return (
    <div className="sidebar">
      <div className="upper__sidebar">
        {/* logo */}
        <h2>
          Deal<span style={{ fontWeight: "400" }}>Flo</span>
        </h2>
        {/* menu items */}
        <div className="menu__items">
          <a className="single__item">
            <img
              src={
                status === "dashboardActive" ? dashboardicon : dashboardActive
              }
              alt=""
            />
            <span>Dashboard</span>
          </a>
          <a className="single__item active">
            <img
              src={status === "walletActive" ? investicon : walletActive}
              alt=""
            />
            <span>Investments Funds</span>
          </a>
          <a className="single__item">
            <img src={investoppericon} alt="" />
            <span>Invest Oppertunities</span>
          </a>
          <a className="single__item">
            <img src={workicon} alt="" />
            <span>Investor Management</span>
          </a>
          <a className="single__item">
            <img src={chart} alt="" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      <div className="lower__sidebar">
        {/* menu items */}
        <div className="menu__items">
          <a className="single__item">
            <img src={infoicon} alt="" />
            <span>Support & help</span>
          </a>
          <a className="single__item">
            <img src={settingicon} alt="" />
            <span>My account</span>
          </a>
          <a className="single__item">
            <img src={logouticon} alt="" />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
