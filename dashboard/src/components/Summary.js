import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Summary.css";

const Summary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user._id) {
      console.log("User not found");
      setLoading(false);
      return;
    }

    const fetchSummary = async () => {
      try {
        const res = await axios.get(
          `https://zerodhaclone-backend-b7nd.onrender.com/summary/${user._id}`
        );

        console.log("SUMMARY RESPONSE:", res.data);

        setSummary(res.data);
      } catch (err) {
        console.log("SUMMARY ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();

    const interval = setInterval(fetchSummary, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!summary) {
    return <h2>No Data Found</h2>;
  }

  return (
    <div>
      <div className="welcome-card">
        <div>
          <h2>
            👋 Welcome Back, {summary.fullname || "User"}
          </h2>

          <p>Here's your portfolio overview.</p>
        </div>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <p>Available Margin</p>

          <h2>
            ₹ {Number(summary.availableMargin || 0).toLocaleString()}
          </h2>

          <small>Ready to trade</small>
        </div>

        <div className="summary-card">
          <p>Total Investment</p>

          <h2>
            ₹ {Number(summary.investment || 0).toLocaleString()}
          </h2>

          <small>Across all holdings</small>
        </div>

        <div className="summary-card">
          <p>Current Value</p>

          <h2>
            ₹ {Number(summary.currentValue || 0).toLocaleString()}
          </h2>

          <small
            className={
              Number(summary.pnlPercent || 0) >= 0 ? "profit" : "loss"
            }
          >
            {Number(summary.pnlPercent || 0).toFixed(2)}%
          </small>
        </div>

        <div className="summary-card">
          <p>Total P&amp;L</p>

          <h2
            className={
              Number(summary.pnl || 0) >= 0 ? "profit" : "loss"
            }
          >
            {Number(summary.pnl || 0) >= 0 ? "+" : ""}
            ₹ {Number(summary.pnl || 0).toLocaleString()}
          </h2>

          <small>Overall Profit</small>
        </div>
      </div>
    </div>
  );
};

export default Summary;