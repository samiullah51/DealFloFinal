import React, { useState } from "react";
import "./FundForm.css";
import FundStiper from "../FundStiper/FundStiper";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
function FundForm() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [value, setValue] = useState("Investment Objective");
  const [value2, setValue2] = useState("LLC");
  const [value3, setValue3] = useState("Startups");
  // show pasword visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  return (
    <div className="fund__form">
      <h1>Create investment fund</h1>
      {/* stiper */}
      <FundStiper stipe="first" />
      {/* form  */}

      <div className="form__box">
        {/* row 1 */}
        <div className="form__box__input__row">
          {/* fund name */}
          <div className="single__form__input">
            <label htmlFor=" ">Fund Name</label>
            <input
              type="text"
              placeholder="ABC Growth Fund"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>

          <div className="single__form__input">
            <label htmlFor="">Investment Objective</label>
            <div
              className="custom__dropdown"
              onClick={() => setShowList(!showList)}
              style={{ zIndex: "13" }}
            >
              <p style={{ color: "#808080" }}>{value}</p>
              <ExpandMoreOutlinedIcon />

              {/* options */}
              {showList && (
                <div className="options">
                  <p onClick={() => setValue("Private Equality Firm")}>
                    Invest in startups
                  </p>
                  <p onClick={() => setValue("Option 2")}>Option 2</p>
                  <p onClick={() => setValue("Option 3")}>Option 3</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="form__box__input__row" style={{ margin: "8px auto" }}>
          <div className="dates">
            <div className="single__date">
              <label htmlFor="">Start Date</label>
              <input type="date" value="2017-06-01" />
            </div>
            <div className="single__date">
              <label htmlFor="">End Date</label>
              <input type="date" value="2017-06-01" />
            </div>
          </div>

          <div className="single__form__input legal">
            <label htmlFor="">Legal structure</label>
            <div
              className="custom__dropdown"
              onClick={() => setShowList2(!showList2)}
              style={{ zIndex: "1" }}
            >
              <p style={{ color: "#808080" }}>{value2}</p>
              <ExpandMoreOutlinedIcon />

              {/* options */}
              {showList2 && (
                <div className="options">
                  <p onClick={() => setValue2("LLC")}>LLC</p>
                  <p onClick={() => setValue2("Option 2")}>Option 2</p>
                  <p onClick={() => setValue2("Option 3")}>Option 3</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* row 3 */}

        <div className="form__box__input__row">
          <div className="single__form__input">
            <label htmlFor="">Target Market</label>
            <div
              className="custom__dropdown"
              onClick={() => setShowList3(!showList3)}
              style={{ zIndex: "13" }}
            >
              <p style={{ color: "#808080" }}>{value3}</p>
              <ExpandMoreOutlinedIcon />

              {/* options */}
              {showList3 && (
                <div className="options">
                  <p onClick={() => setValue3("Startups")}>
                    Invest in startups
                  </p>
                  <p onClick={() => setValue3("Option 2")}>Option 2</p>
                  <p onClick={() => setValue3("Option 3")}>Option 3</p>
                </div>
              )}
            </div>
          </div>

          {/* fund name */}
          <div className="single__form__input">
            <label htmlFor=" ">Business License</label>
            <input
              type="text"
              placeholder="BL123456789"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>

        {/* row 4 */}
        <div className="form__box__input__row">
          {/* fund name */}
          <div className="single__form__input">
            <label htmlFor=" ">EIN</label>
            <input
              type="text"
              placeholder="12-3456789"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>
          {/* fund name */}
          <div className="single__form__input">
            <label htmlFor=" ">Partner email</label>
            <input
              type="text"
              placeholder="john.smith@example.com"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>

        {/* row 5 */}
        <div
          className="form__box__input__row"
          style={{ width: "94%", margin: "auto" }}
        >
          {/* fund name */}
          <div className="single__form__input" style={{ width: "100%" }}>
            <label htmlFor=" ">Fund description</label>
            <textarea
              name=""
              id=""
              placeholder="A high-growth equity fund focused on technology startups"
            ></textarea>
          </div>
        </div>

        {/* row 5 */}
        <div
          className="form__box__input__row"
          style={{ width: "94%", margin: "auto" }}
        >
          {/* fund name */}

          <Link to="/addfundpart2" style={{ width: "100%" }}>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FundForm;
