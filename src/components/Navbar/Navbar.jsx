import React from "react";
import "./Navbar.css";
import search from "../../assets/search.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import profileImage from "../../assets/profileImage.png";
function Navbar() {
  return (
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
  );
}

export default Navbar;
