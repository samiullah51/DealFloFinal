import React, { useState } from "react";
import "./Navbar.css";
import searchIcon from "../../assets/search.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import profileImage from "../../assets/profileImage.png";
import burger from "../../assets/burger.svg";
import { useDispatch, useSelector } from "react-redux";
import { HIDE__SEARCH, SHOW__SEARCH, SHOW__SIDEBAR } from "../../redux/type";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
function Navbar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);
  const search = useSelector((state) => state.search);
  const [showProfile, setShowProfile] = useState(false);
  const handleSidebar = () => {
    dispatch({ type: SHOW__SIDEBAR });
  };
  return (
    <>
      <div className="navbar">
        {/* navbar left side */}
        <div className="navbar__left">
          <span>Welcome 👋</span>
          <p className="username">Aqib Javid </p>
        </div>
        {/* navbar right side */}
        <div className="navbar__right">
          <div className="searchbox">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search any deals" />
          </div>
          {/* notification icon */}
          <div className="notification">
            <NotificationsIcon />
            <div className="dot">2</div>
          </div>
          {/* profile */}
          <div
            className="profile__info"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img src={profileImage} alt="" />
            <ExpandMoreIcon />
            {showProfile && (
              <div className="show__profile__modal">
                <p>
                  {" "}
                  <PersonRoundedIcon />
                  Edit profile
                </p>
                <p>
                  {" "}
                  <LockRoundedIcon />
                  Change password
                </p>
                <p>
                  {" "}
                  <SettingsOutlinedIcon />
                  My account
                </p>
                <p>
                  {" "}
                  <LogoutIcon /> Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* responsive navbar */}
      <div className="navbar__responsive">
        <div
          className="search__wrapper"
          style={{ display: !search ? "none" : "flex" }}
        >
          <div className="search__area">
            <div className="res__search__box">
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Search any deals" />
            </div>
          </div>
          <div
            className="close__area"
            onClick={() => dispatch({ type: HIDE__SEARCH })}
          ></div>
        </div>

        {/* navbar left side */}
        <div className="res__nav__left">
          <img src={burger} alt="" onClick={handleSidebar} />
          <h2
            style={{
              color: "#6699CC",
              fontWeight: "600",
              marginLeft: "15px",
              marginTop: "15px",
              fontSize: "30px",
            }}
          >
            Deal<span style={{ fontWeight: "400" }}>Flo</span>
          </h2>
        </div>
        {/* nav right */}
        {/* navbar right side */}
        <div className="res__navbar__right">
          <img
            src={searchIcon}
            alt=""
            onClick={() => dispatch({ type: SHOW__SEARCH })}
          />
          <div className="res_notify">
            <NotificationsIcon />
            <div className="res__dot">2</div>
          </div>
          <div
            className="res__profile__info"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img src={profileImage} alt="" />
            <ExpandMoreIcon />
            {showProfile && (
              <div className="show__profile__modal">
                <p>
                  {" "}
                  <PersonRoundedIcon />
                  Edit profile
                </p>
                <p>
                  {" "}
                  <LockRoundedIcon />
                  Change password
                </p>
                <p>
                  {" "}
                  <SettingsOutlinedIcon />
                  My account
                </p>
                <p>
                  {" "}
                  <LogoutIcon /> Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
