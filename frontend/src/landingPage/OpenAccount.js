import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">

        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="mb-5"
        />

        <h1 className="mt-3">
          Open a Zerodha account
        </h1>

        <p className="mb-5 mt-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>

        <Link
          to="/signup"
          className="btn btn-primary fs-5 p-3 mb-5 mt-1"
          style={{
            width: "20%",
            margin: "0 auto",
            textDecoration: "none",
          }}
        >
          Sign up for free
        </Link>

      </div>
    </div>
  );
}

export default OpenAccount;