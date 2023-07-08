import React, { useState } from "react";
import "./FundForm.css";
import FundStiper from "../FundStiper/FundStiper";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import upload from "../../assets/upload.svg";
import pdficon from "../../assets/pdficon.svg";
import wordicon from "../../assets/wordicon.svg";
import closeicon from "../../assets/closeicon.svg";
import IconBox from "./IconBox";
function FundForm3() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [value, setValue] = useState("Reinvest dividends");
  const [value2, setValue2] = useState("Role");
  const [value3, setValue3] = useState("Global");
  // show pasword visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  return (
    <div className="fund__form">
      <h1>Create investment fund</h1>
      {/* stiper */}
      <FundStiper stipe="third" />
      {/* form  */}

      <div className="form__box">
        {/* row 1 */}
        <div className="form__box__input__row">
          {/* fund name */}
          <div className="single__form__input">
            <label htmlFor=" ">Share Classes</label>
            <input
              type="text"
              placeholder="Cap Table Structure"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>
          <div className="single__form__input">
            <label htmlFor=" ">Minimum investment</label>
            <input
              type="text"
              placeholder="$10,000"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>

        {/* row 2 */}

        <div className="form__box__input__row">
          <div className="single__form__input">
            <label htmlFor="">Distribution Policies</label>
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
                  <p onClick={() => setValue("Reinvest dividends")}>
                    Reinvest dividends
                  </p>
                  <p onClick={() => setValue("Option 2")}>Option 2</p>
                  <p onClick={() => setValue("Option 3")}>Option 3</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* row 3 */}

        <div className="form__box__input__row" style={{ margin: "10px auto" }}>
          <p style={{ fontWeight: "600", fontSize: "20px" }}>
            Contact Associated
          </p>
          <button
            style={{
              width: "160px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            + Add another
          </button>
        </div>

        {/* row 4 */}
        <div className="form__box__input__row">
          <div className="row4__inputs">
            <div className="row4__inputbox">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="John Smith" />
            </div>

            <div className="row4__inputbox">
              <div
                className="single__form__input"
                style={{ width: "290px", marginTop: "15px" }}
              >
                <label htmlFor="">Role</label>
                <div
                  className="custom__dropdown"
                  onClick={() => setShowList2(!showList2)}
                  style={{ zIndex: "13" }}
                >
                  <p style={{ color: "#808080" }}>{value2}</p>
                  <ExpandMoreOutlinedIcon />

                  {/* options */}
                  {showList2 && (
                    <div className="options">
                      <p onClick={() => setValue2("Role")}>Role</p>
                      <p onClick={() => setValue2("Option 2")}>Option 2</p>
                      <p onClick={() => setValue2("Option 3")}>Option 3</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row4__inputbox">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="john.smith@example.com" />
            </div>
            <button style={{ width: "100px", marginTop: "26px" }}>Add</button>
          </div>

          {/* button*/}
        </div>

        <div
          className="form__box__input__row"
          style={{
            width: "94%",
            margin: "auto",
          }}
        >
          {/* legal advisor */}
          <div className="legal__advisor">
            <div className="legal__left">
              <p className="title">John Smith</p>
              <p className="status">Legal Advisor</p>
            </div>
            <p className="email">john.smith@example.com</p>
            <img src={closeicon} alt="" />
          </div>

          {/* fund name */}

          <button
            style={{
              backgroundColor: "#6699CC",
              color: "#fff",
              margin: "10px 0",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FundForm3;
