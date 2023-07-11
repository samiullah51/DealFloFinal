import React, { useState } from "react";
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
import investorActive from "../../assets/investorActive.svg";
import second from "../../assets/res/second.svg";
import third from "../../assets/res/third.svg";
import fourth from "../../assets/res/fourth.svg";
import fifth from "../../assets/res/fifth.svg";
import sixth from "../../assets/res/sixth.svg";
import seventh from "../../assets/res/seventh.svg";
import eight from "../../assets/res/eight.svg";
import { useDispatch, useSelector } from "react-redux";
import { HIDE__SIDEBAR } from "../../redux/type";
function Sidebar({ status }) {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  // hide sidebar

  const hideSidebar = () => {
    dispatch({ type: HIDE__SIDEBAR });
  };
  return (
    <>
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
            <a className="single__item">
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
            <a className="single__item active">
              {/* <img src={workicon} alt="" /> */}
              <img src={investorActive} alt="" />
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

      {/* responsive sidebar */}
      <div
        className="res__sidebar"
        style={{ transform: !sidebar ? `translateX(-100%)` : `translateX(0%)` }}
      >
        <div className="main__res">
          <div className="res__navbar__left">
            <div className="res__side__info">
              <span style={{ color: "#8A8A8A" }}>Welcome 👋</span>
              <p className="username">Aqib Javid</p>
            </div>
            {/* items */}
            <div className="res__single__item active">
              <img src={dashboardActive} alt="" />
              Dashboard
            </div>
            <div className="res__single__item">
              <img src={second} alt="" />
              Investment funds
            </div>
            <div className="res__single__item">
              <img src={third} alt="" />
              Invest opportunities
            </div>
            <div className="res__single__item">
              <img src={fourth} alt="" />
              Investor Management
            </div>
            <div className="res__single__item">
              <img src={fifth} alt="" />
              Portfolio
            </div>
          </div>

          {/* bottom */}
          <div className="res__navbar__left">
            {/* items */}

            <div className="res__single__item" style={{ marginTop: "28vh" }}>
              <img src={sixth} alt="" />
              Support & help
            </div>
            <div className="res__single__item">
              <img src={seventh} alt="" />
              My account
            </div>
            <div className="res__single__item">
              <img src={eight} alt="" />
              Logout
            </div>
          </div>
        </div>
        {/* hider */}
        <div className="hider" onClick={hideSidebar}></div>
      </div>
    </>
  );
}

export default Sidebar;
