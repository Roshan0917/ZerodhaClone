import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {

  return (

    <div className="container mt-5">


      <div className="row align-items-center">


        <div className="col-lg-6 col-md-6 col-12 text-center">

          <img
            src="media/images/products-coin.png"
            className="img-fluid"
            alt={productName}
          />

        </div>




        <div className="col-lg-6 col-md-6 col-12 p-lg-5 p-4 mt-lg-5">


          <h1 className="fs-2">
            {productName}
          </h1>


          <p className="text-muted">
            {productDesription}
          </p>



          <div className="mb-3">

            <a 
              href={tryDemo}
              style={{textDecoration:"none"}}
            >
              Try Demo
            </a>


            <a
              href={learnMore}
              style={{
                marginLeft:"50px",
                textDecoration:"none"
              }}
            >
              Learn More
            </a>


          </div>




          <div className="mt-3">


            <a href={googlePlay}>

              <img
                src="media/images/googlePlayBadge.svg"
                className="img-fluid"
                style={{width:"140px"}}
              />

            </a>



            <a href={appStore}>

              <img
                src="media/images/appstoreBadge.svg"
                className="img-fluid"
                style={{
                  marginLeft:"30px",
                  width:"140px"
                }}
              />

            </a>


          </div>


        </div>



      </div>


    </div>

  );
}

export default LeftSection;