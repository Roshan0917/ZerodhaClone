import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-lg-5 p-md-4 p-3 mb-5">
      <div className="row text-center">

        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-5"
          />
        </div>

        <div className="col-12">
          <h1 className="mt-3">
            Invest in everything
          </h1>

          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary fs-5 p-2 mb-5 mx-auto"
            style={{
              width: "20%",
              textDecoration: "none",
            }}
          >
            Signup Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Hero;