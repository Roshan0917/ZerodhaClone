import React from "react";
import "./Apps.css";

const AppCard = ({ app }) => {
  return (
    <div className="app-card">

      <div className="app-logo">
        {app.logo}
      </div>


      <div className="app-content">

        <h3>
          {app.name}
        </h3>


        <span className="category">
          {app.category}
        </span>


        <p>
          {app.description}
        </p>


        <a
          href={app.link}
          target="_blank"
          rel="noopener noreferrer"
          className="launch-btn"
        >
          Launch App
        </a>


      </div>


    </div>
  );
};

export default AppCard;