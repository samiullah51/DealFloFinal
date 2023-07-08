import React, { useState } from "react";
import "./SigninPage.css";
import role from "../../assets/role.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
function SigninPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="role__page res">
      {/* who are you section */}
      <div className="role__left">
        <div className="role__select">
          <h2>Login to Your Account</h2>
          <p>Empowering Your Financial Future.</p>
          {/* selection section */}
          <div className="select__section">
            <div className="single__input">
              <span>Email ID</span>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="single__input viewPassword">
              <span>Password</span>
              <input
                type={!show ? "password" : "text"}
                placeholder="*********"
              />
              {!show ? (
                <VisibilityOffOutlinedIcon onClick={() => setShow(true)} />
              ) : (
                <RemoveRedEyeOutlinedIcon onClick={() => setShow(false)} />
              )}
            </div>
            <div className="remember_me">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            {/* button */}
            <button>Login</button>
            <p style={{ color: "#000", fontSize: "16px" }}>
              Don't have an account?{" "}
              <span style={{ color: "#6699CC", cursor: "pointer" }}>
                Register
              </span>
            </p>
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

export default SigninPage;
