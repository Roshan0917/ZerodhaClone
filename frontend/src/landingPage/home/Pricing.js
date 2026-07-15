import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row align-items-center">


        <div className="col-lg-4 col-md-5 col-12 mb-4">

          <h1 className="mb-3 fs-2">
            Unbeatable pricing
          </h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>


          <a href="/" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

        </div>



        <div className="col-lg-2 col-md-1 d-none d-md-block"></div>



        <div className="col-lg-6 col-md-6 col-12 mb-5">

          <div className="row text-center">


            <div className="col-12 col-sm-6 p-3 border">

              <img
                src="media/images/0rupees.svg"
                className="img-fluid"
                alt="zero pricing"
              />

              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>

            </div>



            <div className="col-12 col-sm-6 p-3 border">

              <img
                src="media/images/20rupees.svg"
                className="img-fluid"
                alt="20 rupees pricing"
              />

              <p>
                Intraday and F&O
              </p>

            </div>


          </div>

        </div>


      </div>
    </div>
  );
}

export default Pricing;