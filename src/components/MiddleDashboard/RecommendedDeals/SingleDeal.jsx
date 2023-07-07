import React from "react";
import fundicon from "../../../assets/fundicon.svg";
function SingleDeal() {
  return (
    <div className="single__deal">
      <div className="deal__header">
        <div className="deal__header__left">
          <img src={fundicon} alt="" />
          <div className="deal__info">
            <p>ABC Growth Fund</p>
            <span>21 day's left</span>
          </div>
        </div>
      </div>
      <div className="deal__footer">deal header</div>
    </div>
  );
}

export default SingleDeal;
