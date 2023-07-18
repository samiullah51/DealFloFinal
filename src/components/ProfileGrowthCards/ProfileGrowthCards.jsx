import React from "react";
import "./ProfileGrowthCards.css";
import SingleProfileGrowthCard from "./SingleProfileGrowthCard";
function ProfileGrowthCards() {
  return (
    <div className="profile__growth__cards">
      <SingleProfileGrowthCard
        totalInvest="$1,000,000"
        currentVal="$1,200,000"
        totalReturn="+18.5%"
      />
      <SingleProfileGrowthCard
        totalInvest="$800,000"
        currentVal="$900,000"
        totalReturn="+12.5%"
      />
      <SingleProfileGrowthCard
        totalInvest="$1,000,000"
        currentVal="$1,200,000"
        totalReturn="+18.5%"
      />
      <SingleProfileGrowthCard
        totalInvest="$800,000"
        currentVal="$900,000"
        totalReturn="+12.5%"
      />
    </div>
  );
}

export default ProfileGrowthCards;
