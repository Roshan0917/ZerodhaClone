import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";


const BuyActionWindow = ({ stock }) => {


  const generalContext = useContext(GeneralContext);


  const [stockQuantity, setStockQuantity] = useState(1);



  const stockPrice = stock?.price || 0;



  const totalAmount =
    Number(stockQuantity) * Number(stockPrice);



  const handleBuyClick = async () => {


    try {


      const user = JSON.parse(
        localStorage.getItem("user")
      );


      if(!user){

        toast.error("Please login again");
        return;

      }



      await axios.post(
        "http://localhost:3002/newOrder",
        {

          userId:user._id,

          name:stock.name,

          qty:Number(stockQuantity),

          price:Number(stockPrice),

          mode:"BUY"

        }
      );



      toast.success(
        `Bought ${stockQuantity} shares of ${stock.name}`
      );



      generalContext.closeBuyWindow();



      setTimeout(()=>{

        window.location.reload();

      },1500);



    }

    catch(err){

      console.log(err);

      toast.error("Order failed");

    }

  };





  return (

    <div className="container" id="buy-window">


      <div className="regular-order">


        <h3>
          Buy {stock?.name}
        </h3>


        <p>
          Current Price: ₹{stockPrice}
        </p>



        <div className="inputs">


          <fieldset>

            <legend>
              Qty.
            </legend>


            <input

              type="number"

              value={stockQuantity}

              onChange={(e)=>
                setStockQuantity(e.target.value)
              }

            />

          </fieldset>





          <fieldset>

            <legend>
              Price
            </legend>


            <input

              type="number"

              value={stockPrice}

              disabled

            />

          </fieldset>



        </div>


      </div>




      <div className="buttons">


        <span>
          Margin Required ₹
          {totalAmount.toFixed(2)}
        </span>



        <div>


          <button
  className="btn btn-blue"
  onClick={handleBuyClick}
>
  Buy
</button>




          <button
  className="btn btn-grey"
  onClick={() =>
    generalContext.closeBuyWindow()
  }
>
  Cancel
</button>


        </div>



      </div>



    </div>

  );

};


export default BuyActionWindow;