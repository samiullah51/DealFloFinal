import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function BackButton() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#130F26",
      }}
    >
      <ArrowBackIosNewIcon
        style={{ fontSize: "12px", color: "#130F26", marginTop: "1px" }}
      />
      <span style={{ marginLeft: "2px", color: "#130F26", fontSize: "16px" }}>
        Back
      </span>
    </div>
  );
}

export default BackButton;
