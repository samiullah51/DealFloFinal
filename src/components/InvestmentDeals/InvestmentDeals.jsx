import React, { useState } from "react";
import "./InvestmentDeals.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";

function InvestmentDeals() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);

  const [value, setValue] = useState("Sector");
  const [value2, setValue2] = useState("Valuation");

  return (
    <div className="investment__deals">
      <h2>Investment deals</h2>
      {/* browe by sector */}
      <div className="single__form__input">
        <label htmlFor="">Browse by Sector</label>
        <div
          className="custom__dropdown"
          onClick={() => setShowList(!showList)}
          style={{ zIndex: 222 }}
        >
          <p>{value}</p>
          <ExpandMoreOutlinedIcon />

          {/* options */}
          {showList && (
            <div className="options">
              <p onClick={() => setValue("Sector")}>Sector</p>
              <p onClick={() => setValue("Option 2")}>Option 2</p>
              <p onClick={() => setValue("Option 3")}>Option 3</p>
            </div>
          )}
        </div>
      </div>

      {/* browse by valuation */}
      <div className="single__form__input">
        <label htmlFor="">Browse by Valuation</label>
        <div
          className="custom__dropdown"
          onClick={() => setShowList2(!showList2)}
          style={{ zIndex: 111 }}
        >
          <p>{value2}</p>
          <ExpandMoreOutlinedIcon />

          {/* options */}
          {showList2 && (
            <div className="options">
              <p onClick={() => setValue2("Valuation")}>Valuation</p>
              <p onClick={() => setValue2("Option 2")}>Option 2</p>
              <p onClick={() => setValue2("Option 3")}>Option 3</p>
            </div>
          )}
        </div>
      </div>
      <button>Apply</button>
      <Link
        to="/addfund"
        className="creat__fund__btn"
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{ fontSize: "20px", marginRight: "5px", marginBottom: "1px" }}
        >
          +
        </span>{" "}
        Create fund
      </Link>
    </div>
  );
}

export default InvestmentDeals;
