import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Summary.css";

const Summary = () => {

  const [summary, setSummary] = useState(null);


 useEffect(() => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return;



  const fetchSummary = () => {

    axios
      .get(`http://localhost:3002/summary/${user._id}`)
      .then((res) => {

        setSummary(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  };



  fetchSummary();



  const interval = setInterval(fetchSummary, 30000);



  return () => clearInterval(interval);



}, []);



  if (!summary) {
    return <h3>Loading...</h3>;
  }



  return (
    <div>


      <div className="welcome-card">

        <div>

          <h2>
            👋 Welcome Back, {summary.fullname}
          </h2>

          <p>
            Here's your portfolio overview.
          </p>

        </div>

      </div>




      <div className="summary-grid">


        <div className="summary-card">

          <p>Available Margin</p>

          <h2>
            ₹ {summary.availableMargin?.toLocaleString()}
          </h2>

          <small>
            Ready to trade
          </small>

        </div>





        <div className="summary-card">

          <p>Total Investment</p>

          <h2>
            ₹ {summary.investment?.toLocaleString()}
          </h2>

          <small>
            Across all holdings
          </small>

        </div>






        <div className="summary-card">

          <p>Current Value</p>

          <h2>
            ₹ {summary.currentValue?.toLocaleString()}
          </h2>


          <small 
          className={summary.pnlPercent >= 0 ? "profit" : "loss"}
          >

            {summary.pnlPercent.toFixed(2)}%

          </small>


        </div>







        <div className="summary-card">


          <p>Total P&L</p>


          <h2
          className={summary.pnl >= 0 ? "profit" : "loss"}
          >

            {summary.pnl >= 0 ? "+" : ""}
            ₹ {summary.pnl?.toLocaleString()}

          </h2>


          <small>

            Overall Profit

          </small>


        </div>



      </div>


    </div>
  );
};


export default Summary;