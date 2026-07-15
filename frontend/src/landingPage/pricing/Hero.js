import React from "react";

function Hero() {
  return (
    <div className="container">

      <div className="row py-lg-5 py-md-4 py-3 mt-5 border-bottom text-center">

        <div className="col-12">

          <h1>
            Pricing
          </h1>

          <h3 className="text-muted mt-3 fs-5">
            Free equity investments and flat ₹20 traday and F&O trades
          </h3>

        </div>

      </div>



      <div className="row py-5 mt-5 text-center">


        <div className="col-lg-4 col-md-4 col-12 p-4">

          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="equity"
          />

          <h1 className="fs-3">
            Free equity delivery
          </h1>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹0 brokerage.
          </p>

        </div>



        <div className="col-lg-4 col-md-4 col-12 p-4">

          <img
            src="media/images/intradayTrades.svg"
            className="img-fluid mb-3"
            alt="intraday"
          />

          <h1 className="fs-3">
            Intraday and F&O trades
          </h1>

          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>

        </div>



        <div className="col-lg-4 col-md-4 col-12 p-4">

          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="mutual fund"
          />

          <h1 className="fs-3">
            Free direct MF
          </h1>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>

        </div>


      </div>

    </div>
  );
}

export default Hero;