import React, { useState } from "react";
import "./OppertunityHeader.css";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function OppertunityHeader() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);

  const [value, setValue] = useState("Valuation");
  const [value2, setValue2] = useState("Sector");

  return (
    <div className="oppertunity__header">
      <h2>Browse Opportunity</h2>
      <div
        className="single__form__input"
        style={{ width: "290px", marginTop: "15px" }}
      >
        <label htmlFor="">Browse by Sector</label>
        <div
          className="custom__dropdown"
          onClick={() => setShowList2(!showList2)}
          style={{ zIndex: "13", marginTop: "5px" }}
        >
          <p style={{ color: "#808080" }}>{value2}</p>
          <ExpandMoreOutlinedIcon />

          {/* options */}
          {showList2 && (
            <div className="options">
              <p onClick={() => setValue2("Sector")}>Sector</p>
              <p onClick={() => setValue2("Option 2")}>Option 2</p>
              <p onClick={() => setValue2("Option 3")}>Option 3</p>
            </div>
          )}
        </div>
      </div>
      <div
        className="single__form__input"
        style={{ width: "290px", marginTop: "15px" }}
      >
        <label htmlFor="">Browse by Valuation</label>
        <div
          className="custom__dropdown"
          onClick={() => setShowList(!showList)}
          style={{ zIndex: "1", marginTop: "5px" }}
        >
          <p style={{ color: "#808080" }}>{value}</p>
          <ExpandMoreOutlinedIcon />

          {/* options */}
          {showList && (
            <div className="options">
              <p onClick={() => setValue("Valuation")}>Valuation</p>
              <p onClick={() => setValue("Option 2")}>Option 2</p>
              <p onClick={() => setValue("Option 3")}>Option 3</p>
            </div>
          )}
        </div>
      </div>
      {/* button */}
      <button>Apply</button>
    </div>
  );
}

export default OppertunityHeader;
