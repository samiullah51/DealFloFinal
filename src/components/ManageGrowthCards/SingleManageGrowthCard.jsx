import React from "react";
import "./ManageGrowthCards.css";
import trendingup from "../../assets/fundicon.svg";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import fourth from "../../assets/images/fourth.png";
import fifth from "../../assets/images/fifth.png";
import { Link } from "react-router-dom";
function SingleManageGrowthCard() {
  return (
    <Link to="/investmanagedetails" className="single__manage__growth__card">
      <div className="single__manage__header">
        <div className="manage__header__left">
          <img src={trendingup} alt="" />
          <div>
            <p className="fund__title">ABC Growth Fund</p>
            <p className="status">Series C funding</p>
            <p className="status">52 Investors</p>
          </div>
          {/* active button */}
          <button>Active</button>
        </div>
      </div>
      {/* footer */}
      <div className="single__manage__growth__card__footer">
        <div className="manage__card__footer">
          <p className="status">Total investment</p>
          <p className="title">$584,890</p>
        </div>
        {/* footer right */}
        <div className="manage__card__footer__right">
          <img src={first} alt="" style={{ marginRight: "-14px" }} />
          <img src={second} alt="" style={{ marginRight: "-14px" }} />
          <img src={third} alt="" style={{ marginRight: "-14px" }} />
          <img src={fourth} alt="" style={{ marginRight: "-14px" }} />
          <img src={fifth} alt="" />
          <p>5</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleManageGrowthCard;
