import React from "react";
import "./ProfileCards.css";
import SingleProfileCard from "./SingleProfileCard";
import wallet from "../../assets/wallet.svg";
import fundicon from "../../assets/fundicon.svg";
function ProfileCards() {
  return (
    <div className="profile__cards">
      <SingleProfileCard
        icon={wallet}
        title="Total investment value"
        value="$250,000"
        type="increase"
        trendValue="+16.24"
      />
      <SingleProfileCard
        icon={fundicon}
        title="Current portfolio value"
        value="$$220,500"
        type="decrease"
        trendValue="-9.75"
      />
      <SingleProfileCard
        icon={fundicon}
        title="Total net return"
        value="$145,870"
        type="increase"
        trendValue="+16.24"
      />
    </div>
  );
}

export default ProfileCards;
