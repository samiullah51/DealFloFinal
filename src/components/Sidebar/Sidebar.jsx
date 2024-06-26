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
import opper from "../../assets/opper.svg";
import opperActive from "../../assets/opperActive.svg";
import workActive from "../../assets/workActive.svg";
<<<<<<< HEAD
import ActivePortfolio from "../../assets/ActivePortfolio.svg";
import { useDispatch, useSelector } from "react-redux";
import { HIDE__SIDEBAR } from "../../redux/type";
import { NavLink } from "react-router-dom";

function Sidebar({
  status,
  activeStatus,
  activeManageStatus,
  activePortStatus,
  activeFundStatus,
  activePortDetails,
  addFundStatus,
}) {
=======
import { useDispatch, useSelector } from "react-redux";
import { HIDE__SIDEBAR } from "../../redux/type";
import { NavLink } from "react-router-dom";
function Sidebar({ status, activeStatus, activeManageStatus }) {
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
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
            <NavLink to="/dashboard" className="single__item">
              <img
                src={
                  status === "dashboardActive" ? dashboardicon : dashboardActive
                }
                alt=""
              />
              <span>Dashboard</span>
            </NavLink>
<<<<<<< HEAD
            <NavLink
              to="/investfund"
              className={
                activeFundStatus === "yes" || addFundStatus === "yes"
                  ? "single__item active"
                  : "single__item"
              }
            >
              <img
                src={
                  status === "walletActive" ||
                  activeFundStatus === "yes" ||
                  addFundStatus === "yes"
                    ? walletActive
                    : investicon
                }
=======
            <NavLink to="/investfund" className="single__item">
              <img
                src={status === "walletActive" ? walletActive : investicon}
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
                alt=""
              />
              <span>Investments Funds</span>
            </NavLink>
            <NavLink
              to="/investoppertunity"
              className={
                activeStatus === "yes" ? "single__item active" : "single__item"
              }
            >
              <img
                src={
                  status === "opperActive" || activeStatus === "yes"
                    ? opperActive
                    : opper
                }
                alt=""
              />
              <span>Invest Oppertunities</span>
            </NavLink>
            <NavLink
              to="/investmanage"
              className={
                activeManageStatus === "yes"
                  ? "single__item active"
                  : "single__item"
              }
            >
              {/* <img src={workicon} alt="" /> */}
              <img
                src={
                  status === "investActive" || activeManageStatus === "yes"
                    ? investorActive
                    : workActive
                }
                alt=""
              />
              <span>Investor Management</span>
            </NavLink>
<<<<<<< HEAD
            <NavLink
              to="/portfolio"
              className={
                status === "ActivePortfolio" || activePortDetails === "yes"
                  ? "single__item active"
                  : "single__item"
              }
            >
              <img
                src={
                  status === "ActivePortfolio" || activePortDetails === "yes"
                    ? ActivePortfolio
                    : chart
                }
                alt=""
              />
=======
            <NavLink to="/portfolio" className="single__item">
              <img src={chart} alt="" />
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
              <span>Portfolio</span>
            </NavLink>
          </div>
        </div>
<<<<<<< HEAD
=======

        <div className="lower__sidebar">
          {/* menu items */}
          <div className="menu__items">
            <NavLink to="/support" className="single__item">
              <img src={infoicon} alt="" />
              <span>Support & help</span>
            </NavLink>
            <NavLink to="/account" className="single__item">
              <img src={settingicon} alt="" />
              <span>My account</span>
            </NavLink>
            <NavLink to="/logout" className="single__item">
              <img src={logouticon} alt="" />
              <span>Logout</span>
            </NavLink>
          </div>
        </div>
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
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
            <NavLink
              to="/dashboard"
              className="res__single__item"
              onClick={() => dispatch({ type: HIDE__SIDEBAR })}
            >
              <img
                src={
                  status !== "dashboardActive" ? dashboardicon : dashboardActive
                }
                alt=""
              />
              Dashboard
            </NavLink>
            <NavLink
              to="/investfund"
              className="res__single__item"
              onClick={() => dispatch({ type: HIDE__SIDEBAR })}
            >
              <img
                src={status === "walletActive" ? investicon : walletActive}
                alt=""
              />
              Investment funds
            </NavLink>
            <NavLink
              to="/investoppertunity"
              className="res__single__item"
              onClick={() => dispatch({ type: HIDE__SIDEBAR })}
            >
              <img
                src={status !== "opperActive" ? opperActive : opper}
                alt=""
              />
              Invest opportunities
            </NavLink>
            <NavLink
              to="/investmanage"
              className="res__single__item"
              onClick={() => dispatch({ type: HIDE__SIDEBAR })}
            >
              <img
                src={status !== "investActive" ? investorActive : workActive}
                alt=""
              />
              Investor Management
            </NavLink>
            <NavLink
              to="/portfolio"
              className="res__single__item"
              onClick={() => dispatch({ type: HIDE__SIDEBAR })}
            >
<<<<<<< HEAD
              <img
                src={status !== "ActivePortfolio" ? ActivePortfolio : chart}
                alt=""
              />
              Portfolio
            </NavLink>
          </div>
=======
              <img src={fifth} alt="" />
              Portfolio
            </NavLink>
          </div>

          {/* bottom */}
          <div className="res__navbar__left">
            {/* items */}

            <NavLink
              className="res__single__item"
              style={{ marginTop: "28vh" }}
              to="/support"
            >
              <img src={sixth} alt="" />
              Support & help
            </NavLink>
            <NavLink className="res__single__item" to="/account">
              <img src={seventh} alt="" />
              My account
            </NavLink>
            <NavLink className="res__single__item" to="/logout">
              <img src={eight} alt="" />
              Logout
            </NavLink>
          </div>
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
        </div>
        {/* hider */}
        <div className="hider" onClick={hideSidebar}></div>
      </div>
    </>
  );
}

export default Sidebar;
