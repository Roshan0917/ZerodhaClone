import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Summary.css";

const Summary = () => {
console.log("SUMMARY COMPONENT MOUNTED");
  const [summary, setSummary] = useState(null);


useEffect(() => {

  const user = JSON.parse(localStorage.getItem("user"));

  console.log("USER FROM STORAGE:", user);


  if (!user) {
    console.log("NO USER FOUND");
    return;
  }


axios
.get(`https://zerodhaclone-backend-b7nd.onrender.com/summary/${user._id}`)
.then((res) => {

  console.log("SUMMARY RESPONSE:", res.data);

  setSummary(res.data);

})
.catch((err) => {

  console.log("SUMMARY ERROR:", err);

});


},[]);



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