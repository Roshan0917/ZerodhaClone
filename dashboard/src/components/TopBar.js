import React from "react";
import "./TopBar.css";
import Menu from "./Menu";

const IndexBox = ({ name, value, change, percent }) => {
  const isPositive = change >= 0;

  return (
    <div className="index-box">
      <p className="index-name">{name}</p>

      <div className="index-values">
        <p className="index-value">{value}</p>

        <p className={isPositive ? "index-change up" : "index-change down"}>
          {isPositive ? "+" : ""}
          {change} ({percent}%)
        </p>
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <IndexBox name="NIFTY 50" value={22345.6} change={+120.5} percent={0.54} />
        <IndexBox name="SENSEX" value={74210.2} change={-85.3} percent={-0.11} />
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;