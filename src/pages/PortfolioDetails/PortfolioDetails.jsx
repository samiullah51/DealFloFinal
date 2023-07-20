import React from "react";
import "./PortfolioDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BackButton from "../../components/BackButton/BackButton";
import fundicon from "../../assets/fundicon.svg";
import LineChart3 from "../../LineChart3";
function PortfolioDetails() {
  return (
    <div className="portfolio__details__page">
      <Sidebar activePortDetails="yes" />
      <div className="contents">
        <Navbar />

        <div className="contents__wrapper">
          <BackButton />

          <div className="portfolio__info">
            <img src={fundicon} alt="" />
            <div>
              <p>ABC Growth Fund</p>
              <span>Type: Venture capital</span>
            </div>
          </div>
          <p style={{ textAlign: "justify" }}>
            A high-growth equity fund focused on technology startups. Our
            high-growth equity fund is dedicated to supporting technology
            startups on their path to success. With a focus on cutting-edge
            industries and transformative ideas, we empower entrepreneurs and
            fuel groundbreaking advancements. Join us in shaping the future and
            unlock the potential for exceptional returns. Invest in ABC Growth
            Fund today and be part of the next generation of innovation.
          </p>
          {/* invest summary */}
          <div className="invest__summary">
            <p
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Investment summary
            </p>
            <div className="intest__summary__wrapper">
              <div>
                <span>Total investment</span>
                <p className="summary__val">$800,000</p>
              </div>
              <div>
                <span>Current value</span>
                <p className="summary__val">$900,000</p>
              </div>
              <div>
                <span>Total Return</span>
                <p className="summary__val">+12.5%</p>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: "20px",
              fontWeight: "600",
              margin: "40px 0",
              marginTop: "100px",
            }}
          >
            Performance summary
          </p>
          <div style={{ width: "fill", height: "100%" }}>
            <LineChart3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetails;
