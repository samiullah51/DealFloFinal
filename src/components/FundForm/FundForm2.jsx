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
import { Link } from "react-router-dom";
function FundForm2() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [value, setValue] = useState("Technology");
  const [value2, setValue2] = useState("LLC");
  const [value3, setValue3] = useState("Global");
  // show pasword visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  return (
    <div className="fund__form">
      <h1>Create investment fund</h1>
      {/* stiper */}
      <FundStiper stipe="second" />
      {/* form  */}

      <div className="form__box">
        {/* row 1 */}
        <div className="form__box__input__row">
          {/* fund name */}
          <div className="single__form__input">
            <label htmlFor=" ">Asset Class</label>
            <input
              type="text"
              placeholder="Real Estate, Startups, Reshoring, Private Shares"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>

          <div className="single__form__input">
            <label htmlFor="">Sector</label>
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
                  <p onClick={() => setValue("Technology")}>Technology</p>
                  <p onClick={() => setValue("Option 2")}>Option 2</p>
                  <p onClick={() => setValue("Option 3")}>Option 3</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* row 2 */}

        <div className="form__box__input__row">
          <div className="single__form__input">
            <label htmlFor="">Geographical Focus</label>
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
                  <p onClick={() => setValue3("Global")}>Global</p>
                  <p onClick={() => setValue3("Option 2")}>Option 2</p>
                  <p onClick={() => setValue3("Option 3")}>Option 3</p>
                </div>
              )}
            </div>
          </div>

          <div className="single__form__input">
            <label htmlFor=" ">Investment Criteria</label>
            <input
              type="text"
              placeholder="High-growth companies with solid fundamentals"
              style={{
                border: "1px solid #ccc",
                height: "51px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
        {/* upload file */}

        <div className="form__box__input__row file">
          <label htmlFor="file">
            <img src={upload} alt="" />
            Upload any documents
            <input type="file" id="file" />
          </label>
        </div>

        <div
          className="form__box__input__row"
          style={{ width: "94%", margin: "auto" }}
        >
          <IconBox icon={pdficon} title="Capitalization table" />
          <IconBox icon={wordicon} title="Company Pitch Deck" />
        </div>

        <div
          className="form__box__input__row"
          style={{ width: "94%", margin: "auto" }}
        >
          {/* fund name */}

          <Link to="/addfundpart3" style={{ width: "100%" }}>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FundForm2;
