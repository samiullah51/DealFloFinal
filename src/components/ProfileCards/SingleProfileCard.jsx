import React from "react";
import incIcon from "../../assets/incIcon.svg";
import decIcon from "../../assets/decIcon.svg";
function SingleProfileCard({ icon, title, value, type, trendValue }) {
  return (
    <div className="single__profile__card">
      <div className="single__profile__card__header">
        <img src={icon} alt="" />
        <div className="profile__card__title">{title}</div>
      </div>
      <div className="single__profile__card__footer">
        <div className="profile__card__value">{value}</div>
        <div>
          <img src={type === "increase" ? incIcon : decIcon} alt="" />
          <span
            style={{
              color:
                type === "increase"
                  ? "rgba(34, 197, 94, 1)"
                  : "rgba(239, 68, 68, 1)",
            }}
          >
            {trendValue} %
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleProfileCard;
