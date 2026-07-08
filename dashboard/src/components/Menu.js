import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }

    // notify all components
    window.dispatchEvent(new Event("themeChanged"));
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "http://localhost:3000/login";
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu-container">
     <img
  src="DashboardLogo.png"
  alt="logo"
  className="dashboard-logo"
/>

      <div className="menus">
        <ul>

          <li>
            <Link to="/" className="menu-link">
              <p className={isActive("/") ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" className="menu-link">
              <p className={isActive("/orders") ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" className="menu-link">
              <p className={isActive("/holdings") ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" className="menu-link">
              <p className={isActive("/positions") ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" className="menu-link">
              <p className={isActive("/funds") ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" className="menu-link">
              <p className={isActive("/apps") ? "menu selected" : "menu"}>
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        <div className="profile">
          <div className="avatar">
            {user?.fullname?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <p className="username">
            {user?.fullname || "USER"}
          </p>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <button
         className="logout-btn"
         onClick={handleLogout}
       >
         Logout
       </button>
      </div>
    </div>
  );
};

export default Menu;