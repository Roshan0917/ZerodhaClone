import React, { useState } from "react";
import "./Apps.css";
import AppCard from "./AppCard";

import {
  FaChartLine,
  FaWallet,
  FaCoins,
  FaGraduationCap,
  FaRobot,
  FaCode,
  FaChartPie,
  FaUniversity,
} from "react-icons/fa";

const appsData = [
  {
    id: 1,
    name: "Kite",
    category: "Trading",
       link: "https://kite.zerodha.com",
    description:
      "Fast and modern trading platform for stocks, F&O, currency and commodities.",
    logo: <FaChartLine />,
    featured: true,
  },
  {
    id: 2,
    name: "Console",
    category: "Portfolio",
     link: "https://console.zerodha.com",
    description:
      "View portfolio, reports, P&L, tax reports and account activity & more." ,
    logo: <FaWallet />,
    featured: true,
  },
  {
    id: 3,
    name: "Coin",
    category: "Mutual Funds",
     link: "https://coin.zerodha.com",
    description:
      "Invest in direct mutual funds with zero commission.",
    logo: <FaCoins />,
    featured: true,
  },
  {
    id: 4,
    name: "Varsity",
    category: "Education",
     link: "https://zerodha.com/varsity/",
    description:
      "Learn stock market absolutely free.",
    logo: <FaGraduationCap />,
    featured: false,
  },
  {
    id: 5,
    name: "Smallcase",
    category: "Investing",
    link: "https://www.smallcase.com",
    description:
      "Ready-made portfolios created by experts.",
    logo: <FaChartPie />,
    featured: false,
  },
  {
    id: 6,
    name: "Streak",
    category: "Algo Trading",
        link: "https://www.streak.tech",
    description:
      "Create trading strategies without coding.",
    logo: <FaRobot />,
    featured: false,
  },
  {
    id: 7,
    name: "Sensibull",
    category: "Options",
    link: "https://sensibull.com",
    description:
      "India's leading options trading platform.",
    logo: <FaUniversity />,
    featured: false,
  },
  {
    id: 8,
    name: "Kite Connect",
    category: "API",
    link: "https://kite.trade",
    description:
      "Trading APIs for developers and businesses.",
    logo: <FaCode />,
    featured: false,
  },
];

const Apps = () => {
  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  const featuredApps = filteredApps.filter((app) => app.featured);

  return (
    <div className="apps-page">

      <div className="apps-header">
        <h1>Applications</h1>
        <p>
          Explore all trading, investing and learning products.
        </p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search applications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="stats">
        <div className="stat-card">
          <h2>{appsData.length}</h2>
          <p>Total Apps</p>
        </div>

        <div className="stat-card">
          <h2>{featuredApps.length}</h2>
          <p>Featured</p>
        </div>

        <div className="stat-card">
          <h2>24×7</h2>
          <p>Availability</p>
        </div>
      </div>

      <h2 className="section-title">Featured Apps</h2>

      <div className="apps-grid">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <h2 className="section-title">All Applications</h2>

      <div className="apps-grid">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

    </div>
  );
};

export default Apps;