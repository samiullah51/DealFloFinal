import React from "react";
import "./OppertunityCards.css";
import SingleOppertunityCard from "./SingleOppertunityCard";
import opper1 from "../../assets/opper1.svg";
import opper2 from "../../assets/opper2.svg";
function OppertunityCards() {
  return (
    <div className="oppertunity__cards">
      {/* single oppertunity card */}
      <SingleOppertunityCard image={opper1} />
      <SingleOppertunityCard image={opper2} />
      <SingleOppertunityCard image={opper1} />
      <SingleOppertunityCard image={opper1} />
      <SingleOppertunityCard image={opper2} />
      <SingleOppertunityCard image={opper1} />
    </div>
  );
}

export default OppertunityCards;
