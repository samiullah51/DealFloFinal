import React, { useState } from "react";
import "./RegistrationForm.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
function RegistrationForm() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [value, setValue] = useState("Invest in startups");
  const [value2, setValue2] = useState(" $100,000 - $200,000");
  const [value3, setValue3] = useState("2 - 6 deals");
  // show pasword visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);

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
        {/* Name */}
        <div className="single__form__input">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        {/* Email */}
        <div className="single__form__input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>

        {/* Selection box */}
        {/* 1 - Business purpose */}
        <div className="single__form__input">
          <label htmlFor="">Business Purpose</label>
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
                <p onClick={() => setValue("Invest in startups")}>
                  Invest in startups
                </p>
                <p onClick={() => setValue("Option 2")}>Option 2</p>
                <p onClick={() => setValue("Option 3")}>Option 3</p>
              </div>
            )}
          </div>
        </div>

        {/* 2 - Annual Income */}
        <div className="single__form__input">
          <label htmlFor="">Annual Income</label>
          <div
            className="custom__dropdown"
            onClick={() => setShowList2(!showList2)}
            style={{ zIndex: "12" }}
          >
            <p>{value2}</p>
            <ExpandMoreOutlinedIcon />

            {/* options */}
            {showList2 && (
              <div className="options">
                <p onClick={() => setValue2(" $100,000 - $200,000")}>
                  $100,000 - $200,000
                </p>
                <p onClick={() => setValue2("Option 2")}>Option 2</p>
                <p onClick={() => setValue2("Option 3")}>Option 3</p>
              </div>
            )}
          </div>
        </div>

        {/* 3 - Number of Deals per year */}
        <div className="single__form__input">
          <label htmlFor="">Number of Deals per/year</label>
          <div
            className="custom__dropdown"
            onClick={() => setShowList3(!showList3)}
          >
            <p>{value3}</p>
            <ExpandMoreOutlinedIcon />

            {/* options */}
            {showList3 && (
              <div className="options">
                <p onClick={() => setValue3("2 - 6 deals")}>2 - 6 deals</p>
                <p onClick={() => setValue3("Option 2")}>Option 2</p>
                <p onClick={() => setValue3("Option 3")}>Option 3</p>
              </div>
            )}
          </div>
        </div>

        {/* 4 - Password */}
        <div className="single__form__input viewPassword">
          <label htmlFor="">Password</label>
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="*********"
          />
          {!showPassword ? (
            <VisibilityOffOutlinedIcon onClick={() => setShowPassword(true)} />
          ) : (
            <RemoveRedEyeOutlinedIcon onClick={() => setShowPassword(false)} />
          )}
        </div>

        {/* 5 - Confirm Password */}
        <div className="single__form__input viewPassword">
          <label htmlFor="">Confirm Password</label>
          <input
            type={!showCpassword ? "password" : "text"}
            placeholder="*********"
          />
          {!showCpassword ? (
            <VisibilityOffOutlinedIcon onClick={() => setShowCpassword(true)} />
          ) : (
            <RemoveRedEyeOutlinedIcon onClick={() => setShowCpassword(false)} />
          )}
        </div>

        {/* 6 - Continue Button */}
        <div className="single__form__input">
          <button style={{ margin: "40px 0" }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
