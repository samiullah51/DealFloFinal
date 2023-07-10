import React from "react";
import "./Navbar.css";
import search from "../../assets/search.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import profileImage from "../../assets/profileImage.png";
import burger from "../../assets/burger.svg";
function Navbar() {
  return (
    <>
      <div className="navbar">
        {/* navbar left side */}
        <div className="navbar__left">
          <span>Welcome 👋</span>
          <p className="username">Aqib Javid</p>
        </div>
        {/* navbar right side */}
        <div className="navbar__right">
          <div className="searchbox">
            <img src={search} alt="" />
            <input type="text" placeholder="Search any deals" />
          </div>
          {/* notification icon */}
          <div className="notification">
            <NotificationsIcon />
            <div className="dot">2</div>
          </div>
          {/* profile */}
          <div className="profile__info">
            <img src={profileImage} alt="" />
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
      {/* responsive navbar */}
      <div className="navbar__responsive">
        {/* navbar left side */}
        <div className="res__nav__left">
          <img src={burger} alt="" />
          <h2
            style={{
              color: "#6699CC",
              fontWeight: "600",
              marginLeft: "15px",
              marginTop: "-2px",
              fontSize: "32px",
            }}
          >
            Deal<span style={{ fontWeight: "400" }}>Flo</span>
          </h2>
        </div>
        {/* nav right */}
        {/* navbar right side */}
        <div className="res__navbar__right">
          <img src={search} alt="" />
          <div className="res_notify">
            <NotificationsIcon />
            <div className="res__dot">2</div>
          </div>
          <div className="res__profile__info">
            <img src={profileImage} alt="" />
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
