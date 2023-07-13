import React from "react";
import loginpic from "../../assets/loginpic.svg";
import { Link } from "react-router-dom";
import "./SigninPage.css";
function SigninPage() {
  return (
    <div className="signin__page">
      <div className="signin__left">
        <div className="signin__left__header">
          <h2>Login to Your Account</h2>
          <p>Empowering Your Financial Future</p>
        </div>
        {/* single login input */}
        <div className="login__form">
          <div className="single__login__input">
            <span>Email ID</span>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="single__login__input">
            <span>Password</span>
            <input type="password" placeholder="*******" />
          </div>
          <div>
            <input type="checkbox" />
            <span> Remember me </span>
          </div>
          <Link className="login__btn" to="/dashboard">
            Login
          </Link>

          <p style={{ textAlign: "center" }}>
            Don’t have an account?{" "}
            <Link
              to="/register"
              style={{ color: "rgba(102, 153, 204, 1)", margin: "10px 0" }}
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="signin__right">
        <img src={loginpic} alt="" />
      </div>
    </div>
  );
}

export default SigninPage;
