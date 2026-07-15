import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Menu.css";

const Menu = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }

    window.dispatchEvent(new Event("themeChanged"));
  }, [darkMode]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href =
      "https://zerodha-clone-frontend-sable.vercel.app/login";
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu-container">

      {/* Logo */}

      <img
        src="/DashBoardLogo.png"
        alt="logo"
        className="dashboard-logo"
      />

      {/* Desktop Menu */}

      <div className="desktop-menu">

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

      {/* Hamburger */}

      <button
        className="hamburger"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay */}

      <div
        className={`drawer-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* Drawer */}

      <div className={`drawer ${menuOpen ? "open" : ""}`}>

        <div className="drawer-header">

          <img
            src="/DashBoardLogo.png"
            alt="logo"
            className="dashboard-logo"
          />

          <button
            className="close-btn"
            onClick={closeMenu}
          >
            <FaTimes />
          </button>

        </div>

        <ul>

          <li>
            <Link
              to="/"
              className="menu-link"
              onClick={closeMenu}
            >
              <p className={isActive("/") ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              className="menu-link"
              onClick={closeMenu}
            >
              <p className={isActive("/orders") ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              className="menu-link"
              onClick={closeMenu}
            >
              <p className={isActive("/holdings") ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              className="menu-link"
              onClick={closeMenu}
            >
              <p className={isActive("/positions") ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              className="menu-link"
              onClick={closeMenu}
            >
              <p className={isActive("/funds") ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              className="menu-link"
              onClick={closeMenu}
            >
              <p className={isActive("/apps") ? "menu selected" : "menu"}>
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <div className="drawer-footer">

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
            onClick={() => {
              closeMenu();
              handleLogout();
            }}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Menu;