import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {

  return (

    <div className="container mt-5">

      <div className="row align-items-center">


        <div className="col-lg-6 col-md-6 col-12 p-lg-5 p-4 mt-lg-5">

          <h1 className="fs-2">
            {productName}
          </h1>


          <p className="text-muted">
            {productDesription}
          </p>


          <div>
            <a 
              href={learnMore}
              style={{textDecoration:"none"}}
            >
              Learn More
            </a>
          </div>


        </div>



        <div className="col-lg-6 col-md-6 col-12 text-center">

          <img
            src="media\images\products-console.png"
            className="img-fluid"
            alt={productName}
          />

        </div>


      </div>


    </div>

  );
}

export default RightSection;