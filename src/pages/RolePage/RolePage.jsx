import React from "react";
import "./RolePage.css";
import role from "../../assets/role.svg";
import { Link } from "react-router-dom";
function RolePage() {
  return (
    <div className="role__page">
      {/* who are you section */}
      <div className="role__left">
        <div className="role__select">
          <h2>Who you are</h2>
          <p>Select your role and be a part of it.</p>
          {/* selection section */}
          <div className="select__section">
            <label htmlFor="enterpreniuer">
              <Link to="/signin">
                {" "}
                <input type="radio" id="enterpreniuer" name="role" />{" "}
                <span>Enterpreneur</span>
              </Link>
            </label>
            <label htmlFor="investor">
              <Link to="/signin">
                <input type="radio" id="investor" name="role" />
                <span>Investor</span>
              </Link>
            </label>
            <label htmlFor="firm">
              <Link to="/signin">
                <input type="radio" name="role" />
                <span>Firms</span>
              </Link>
            </label>
          </div>
        </div>
      </div>

      {/* right section for SVG ICON */}
      <div className="role__right">
        <img src={role} alt="" />
      </div>
    </div>
  );
}

export default RolePage;
