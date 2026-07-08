import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 mb-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>

        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      {/* First Row */}
      <div className="row text-center">

        <div className="col-lg-4 col-md-6 mb-5">
          <img
  src="media/images/smallcaseLogo.png"
  alt="Smallcase"
  className="img-fluid"
  style={{
    width: "170px",
    height: "60px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  }}
/>

          <p className="text-muted mt-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
  src="media/images/streakLogo.png"
  alt="Streak"
  className="img-fluid"
  style={{
    width: "170px",
    height: "60px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  }}
/>

          <p className="text-muted mt-3">
            Algo & strategy trading
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
  src="media/images/sensibullLogo.svg"
  alt="Sensibull"
  className="img-fluid"
  style={{
    width: "170px",
    height: "60px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  }}
/>

          <p className="text-muted mt-3">
            Options trading platform
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
        <img
  src="media/images/dittoLogo.png"
  alt="Ditto"
  className="img-fluid"
  style={{
    width: "170px",
    height: "60px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  }}
/>

          <p className="text-muted mt-3">
            Insurance simplified
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
  src="media/images/tijori.png"
  alt="Tijori"
  className="img-fluid"
  style={{
    width: "170px",
    height: "60px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  }}
/>

          <p className="text-muted mt-3">
            Fundamental stock research
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
  src="media/images/goldenpiLogo.png"
  alt="GoldenPi"
  className="img-fluid"
  style={{
    width: "170px",
    height: "60px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  }}
/>

          <p className="text-muted mt-3">
            Invest in fixed-income products
          </p>
        </div>

      </div>

      {/* Signup Button */}
      <div className="text-center mt-3">

        <Link
          to="/signup"
          className="btn btn-primary btn-lg px-5 py-3"
          style={{
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Signup Now
        </Link>

      </div>

    </div>
  );
}

export default Universe;