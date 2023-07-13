import React, { useState } from "react";
import "./RegistrationForm.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";
function RegistrationForm2() {
  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState("$5 million - $10 million");

  return (
    <div className="registration__form">
      {/* form header */}
      <div className="form__header">
        <h2>Registration</h2>
        <p>
          You will required to provide basic info and business details to get
          register.
        </p>
      </div>
      {/* form inputs */}
      <div className="form__inputs">
        {/* 1-  Nature of Business */}
        <div className="single__form__input">
          <label htmlFor="">Nature of business</label>
          <textarea
            name=""
            id=""
            placeholder="Details about your business"
          ></textarea>
        </div>

        {/* 2 - Funds Managed */}
        <div className="single__form__input">
          <label htmlFor="">Funds Managed</label>
          <div
            className="custom__dropdown"
            onClick={() => setShowList(!showList)}
            style={{ zIndex: "13" }}
          >
            <p>{value}</p>
            <ExpandMoreOutlinedIcon />

            {/* options */}
            {showList && (
              <div className="options">
                <p onClick={() => setValue("$5 million - $10 million")}>
                  $5 million - $10 million
                </p>
                <p onClick={() => setValue("Option 2")}>Option 2</p>
                <p onClick={() => setValue("Option 3")}>Option 3</p>
              </div>
            )}
          </div>
        </div>

        {/* 3-  Investment Strategy */}
        <div className="single__form__input">
          <label htmlFor="">Investment Strategy</label>
          <textarea
            name=""
            id=""
            placeholder="ABC Investments focuses on early-stage technology startups in the healthcare and fintech sectors."
            style={{ height: "150px" }}
            cols={400}
          ></textarea>
        </div>
        <div className="remember_me" style={{ marginBottom: "-20px" }}>
          <input type="checkbox" />
          <span style={{ fontWeight: "400", marginLeft: "10px" }}>
            I agree the user agreement and Terms & Condition
          </span>
        </div>
        {/* 6 - Continue Button */}
        <div className="single__form__input">
          <Link to="/onboard" className="reg__btn" style={{ margin: "10px 0" }}>
            Register
          </Link>
        </div>

        <p
          style={{
            color: "#000",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Already have an account?{" "}
          <Link to="/signin" style={{ color: "#6699CC", cursor: "pointer" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm2;
