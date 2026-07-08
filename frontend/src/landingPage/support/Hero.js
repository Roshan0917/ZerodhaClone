import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        background: "#387ed1",
        minHeight: "420px",
        paddingBottom: "40px",
      }}
    >

      {/* Header */}

      <div
        className="container d-flex justify-content-between align-items-center"
        id="supportWrapper"
        style={{
          paddingTop: "35px",
        }}
      >

        <h4
          style={{
            color: "#fff",
            fontSize: "24px",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Support Portal
        </h4>


        <a
          href="https://support.zerodha.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "1px solid rgba(255,255,255,.5)",
            fontSize: "15px",
          }}
        >
          Track Tickets
        </a>

      </div>




      {/* Main Content */}

      <div
        className="container"
        style={{
          marginTop: "50px",
        }}
      >

        <div
          className="row"
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "35px",
            boxShadow: "0 15px 40px rgba(0,0,0,.15)",
          }}
        >



          {/* Search */}

          <div
            className="col-lg-7 col-md-12"
          >

            <h1
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#222",
                lineHeight: "1.4",
              }}
            >
              Search for an answer or browse help topics to create a ticket
            </h1>


            <input

              type="text"

              placeholder="Eg. how do I activate F&O"

              style={{
                width: "100%",
                marginTop: "25px",
                padding: "15px 20px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "16px",
                outline: "none",
              }}

            />



            <div
              style={{
                marginTop: "25px",
                display:"flex",
                flexWrap:"wrap",
                gap:"15px",
              }}
            >



              <a
                href="https://support.zerodha.com/category/account-opening"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Track account opening
              </a>



              <a
                href="https://support.zerodha.com/"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Track segment activation
              </a>



              <a
                href="https://support.zerodha.com/category/trading-and-markets/margins"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Intraday margins
              </a>




              <a
                href="https://support.zerodha.com/category/kite"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Kite user manual
              </a>



            </div>


          </div>





          {/* Featured */}


          <div
            className="col-lg-5 col-md-12"
            style={{
              marginTop:"20px",
            }}
          >


            <h2
              style={{
                fontSize:"26px",
                fontWeight:"700",
                color:"#222",
              }}
            >
              Featured
            </h2>



            <ol
              style={{
                marginTop:"25px",
                paddingLeft:"20px",
              }}
            >


              <li
                style={{
                  marginBottom:"20px",
                }}
              >

                <a
                  href="https://support.zerodha.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={featuredLink}
                >
                  Current Takeovers and Delisting - January 2024
                </a>

              </li>



              <li>

                <a
                  href="https://support.zerodha.com/category/trading-and-markets"
                  target="_blank"
                  rel="noreferrer"
                  style={featuredLink}
                >
                  Latest Intraday leverages - MIS & CO
                </a>

              </li>


            </ol>


          </div>



        </div>


      </div>



    </section>
  );
}



const linkStyle = {

  color:"#387ed1",
  background:"#f1f7ff",
  textDecoration:"none",
  padding:"10px 16px",
  borderRadius:"20px",
  fontSize:"15px",
  fontWeight:"500",
  transition:".3s",

};



const featuredLink = {

  color:"#387ed1",
  textDecoration:"none",
  fontSize:"16px",
  fontWeight:"500",

};



export default Hero;