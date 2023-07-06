import React from "react";
import "./OnboardingPage.css";
import onboarding from "../../assets/onboarding.svg";
function OnboardingPage() {
  return (
    <div className="onboarding__page">
      <img src={onboarding} alt="" />
      <h2>Welcome to DealFlo</h2>
      <p>
        Discover a powerful investment management platform designed to help you
        make informed financial decisions. Access a wide range of features,
        track your investments, andstay up-to-date with market trends.
      </p>
      <button className="go__ahead__btn">Go Ahead</button>
    </div>
  );
}

export default OnboardingPage;
