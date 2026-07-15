import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(240,240,240)" }}
    >

      <div className="container mt-5">

        <div className="row mt-5 g-4">


          {/* Logo */}
          <div className="col-lg-3 col-md-6 col-12">

            <img
              src="media/images/logo.svg"
              className="img-fluid mb-3"
              style={{ width: "50%" }}
              alt="logo"
            />

            <p>
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>

          </div>



          {/* Account */}
          <div className="col-lg-2 col-md-6 col-12">

            <p>Account</p>

            <a href="/" className="text-muted text-decoration-none">
              Open demat account
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Minor demat account
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              NRI demat account
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              HUF demat account
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Commodity
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Fund transfer
            </a>

          </div>



          {/* Support */}
          <div className="col-lg-2 col-md-6 col-12">

            <p>Support</p>

            <a href="/" className="text-muted text-decoration-none">
              Contact us
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Support portal
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              How to file a complaint
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Downloads
            </a>

          </div>



          {/* Company */}
          <div className="col-lg-2 col-md-6 col-12">

            <p>Company</p>

            <a href="/" className="text-muted text-decoration-none">
              About
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Philosophy
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Careers
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Open source
            </a>

          </div>



          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 col-12">

            <p>Quick links</p>

            <a href="/" className="text-muted text-decoration-none">
              Upcoming IPOs
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Brokerage charges
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Market holidays
            </a><br/>

            <a href="/" className="text-muted text-decoration-none">
              Calculator
            </a>

          </div>


        </div>



        <div className="mt-5 text-muted" style={{fontSize:"15px"}}>


          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd.
          </p>


          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES.
          </p>


          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>


          <p>
            India's largest broker based on networth as per NSE.
          </p>



          {/* Bottom Navigation */}

          <ul className="list-inline text-center mt-5">

            <li className="list-inline-item p-2 fs-5">
              <Link className="text-muted text-decoration-none" to="/signup">
                Signup
              </Link>
            </li>


            <li className="list-inline-item p-2 fs-5">
              <Link className="text-muted text-decoration-none" to="/about">
                About
              </Link>
            </li>


            <li className="list-inline-item p-2 fs-5">
              <Link className="text-muted text-decoration-none" to="/product">
                Product
              </Link>
            </li>


            <li className="list-inline-item p-2 fs-5">
              <Link className="text-muted text-decoration-none" to="/pricing">
                Pricing
              </Link>
            </li>


            <li className="list-inline-item p-2 fs-5">
              <Link className="text-muted text-decoration-none" to="/support">
                Support
              </Link>
            </li>


          </ul>


        </div>


        <div className="text-center mt-4 mb-3 text-muted">
  <p>
   © 2026 Zerodha Clone. Built for learning & demonstration purposes.
Built with ❤️ by {" "}
    <a
      href="https://github.com/Roshan0917"
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
        color:"#387ed1",
        fontWeight:"600"
      }}
    >
      Roshan
    </a>
  </p>
</div>

      </div>

    </footer>
  );
}

export default Footer;