import React from "react";
import "./Founders.css";
import founder from "../../assets/images/founder.png";
function SingleFounder() {
  return (
    <div className="single__founder">
      <div className="founder__header">
        <img src={founder} alt="" />
        <div>
          <p className="title">John Smith</p>
          <p className="status">Chief Technology officer</p>
        </div>
      </div>
      <p className="desc">
        Experienced entrepreneur with a strong track record in technology
        startups. Passionate about innovation and driving business growth.
      </p>
    </div>
  );
}

export default SingleFounder;
