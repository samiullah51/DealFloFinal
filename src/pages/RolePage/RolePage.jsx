import React from "react";
import "./RolePage.css";
import role from "../../assets/role.svg";
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
              <input type="radio" id="enterpreniuer" name="role" />
              Enterpreneur
            </label>
            <label htmlFor="investor">
              <input type="radio" id="investor" name="role" />
              Investor
            </label>
            <label htmlFor="firm">
              <input type="radio" id="firm" name="role" />
              Firm
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
