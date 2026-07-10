import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph.js";
import "./Holdings.css";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
useEffect(() => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return;


  const fetchHoldings = async () => {

    try {

      const res = await axios.get(
        `https://zerodhaclone-backend-b7nd.onrender.com/allHoldings/${user._id}`
      );


      setAllHoldings(res.data);


    } catch (err) {

      console.log(err);

    }

  };



  // first load

  fetchHoldings();



  // refresh every 5 seconds

  const interval = setInterval(
    fetchHoldings,
    5000
  );



  return () => clearInterval(interval);



}, []);

  const summary = useMemo(() => {
    const investment = allHoldings.reduce(
      (acc, stock) => acc + stock.avg * stock.qty,
      0
    );

    const current = allHoldings.reduce(
      (acc, stock) => acc + stock.price * stock.qty,
      0
    );

    const pnl = current - investment;

    const pnlPercent =
      investment > 0 ? (pnl / investment) * 100 : 0;

    return {
      investment,
      current,
      pnl,
      pnlPercent,
    };
  }, [allHoldings]);

  const money = (num) =>
    Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="holdings-page">

      <div className="holdings-header">

        <div>
          <h2>My Holdings</h2>
          <p>{allHoldings.length} Stocks in Portfolio</p>
        </div>

        <div className="summary-cards">

          <div className="summary-card">
            <p>Investment</p>
            <h3>₹ {money(summary.investment)}</h3>
          </div>

          <div className="summary-card">
            <p>Current Value</p>
            <h3>₹ {money(summary.current)}</h3>
          </div>

          <div
            className={`summary-card ${
              summary.pnl >= 0 ? "profit-card" : "loss-card"
            }`}
          >
            <p>Total P&L</p>

            <h3>
              {summary.pnl >= 0 ? "▲" : "▼"} ₹ {money(Math.abs(summary.pnl))}
            </h3>

            <span>
              {summary.pnlPercent >= 0 ? "+" : ""}
              {summary.pnlPercent.toFixed(2)}%
            </span>
          </div>

        </div>

      </div>

      {allHoldings.length === 0 ? (

        <div className="empty-holdings">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="empty"
          />

          <h2>No Holdings Yet</h2>

          <p>
            Buy your first stock to start building your portfolio.
          </p>

        </div>

      ) : (
        <>

          <div className="holdings-table">

            <div className="table-head">

              <span>Stock</span>
              <span>Qty</span>
              <span>Avg</span>
              <span>LTP</span>
              <span>Current</span>
              <span>P&L</span>
              <span>Day</span>

            </div>

            {allHoldings.map((stock, index) => {

              const currentValue = stock.qty * stock.price;

              const pnl =
                currentValue - stock.qty * stock.avg;

              return (
                <div className="table-row" key={index}>

                  <span className="stock-name">
                    {stock.name}
                  </span>

                  <span>{stock.qty}</span>

                  <span>₹ {money(stock.avg)}</span>

                  <span>₹ {money(stock.price)}</span>

                  <span>₹ {money(currentValue)}</span>

                  <span
                    className={
                      pnl >= 0 ? "profit-text" : "loss-text"
                    }
                  >
                    {pnl >= 0 ? "+" : "-"}₹{" "}
                    {money(Math.abs(pnl))}
                  </span>

                  <span
                    className={
                      stock.day.includes("-")
                        ? "loss-text"
                        : "profit-text"
                    }
                  >
                    {stock.day}
                  </span>

                </div>
              );
            })}
          </div>

          <div className="portfolio-chart">

            <div className="chart-header">
              <h3>Portfolio Distribution</h3>
              <p>Current Market Price</p>
            </div>

            <VerticalGraph
              data={{
                labels: allHoldings.map((stock) => stock.name),

                datasets: [
                  {
                    label: "Current Price",
                    data: allHoldings.map(
                      (stock) => stock.price
                    ),
                    backgroundColor: [
                      "#2563eb",
                      "#22c55e",
                      "#f97316",
                      "#ec4899",
                      "#8b5cf6",
                      "#14b8a6",
                      "#eab308",
                    ],
                    borderRadius: 8,
                  },
                ],
              }}
            />

          </div>

        </>
      )}
    </div>
  );
};

export default Holdings;