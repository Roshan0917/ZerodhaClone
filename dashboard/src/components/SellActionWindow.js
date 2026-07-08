import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";



const SellActionWindow = ({ stock }) => {


  const generalContext = useContext(GeneralContext);



  const [stockQuantity,setStockQuantity]=useState(1);



  const stockPrice = stock?.price || 0;



  const totalAmount =
    Number(stockQuantity) * Number(stockPrice);





  const handleSellClick = async()=>{


    try{


      const user =
        JSON.parse(localStorage.getItem("user"));



      await axios.post(

        "http://localhost:3002/newOrder",

        {


          userId:user._id,

          name:stock.name,

          qty:Number(stockQuantity),

          price:Number(stockPrice),

          mode:"SELL"


        }

      );




      toast.success(
        `Sold ${stockQuantity} shares of ${stock.name}`
      );



      generalContext.closeSellWindow();



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

    <div className="container" id="sell-window">


      <div className="regular-order">


        <h3>
          Sell {stock?.name}
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
          Value ₹{totalAmount.toFixed(2)}
        </span>



        <div>

          <Link
 className="btn btn-red"
 onClick={handleSellClick}
>
 Sell
</Link>


          <Link

            className="btn btn-grey"

            onClick={()=>
              generalContext.closeSellWindow()
            }

          >

            Cancel

          </Link>


        </div>


      </div>



    </div>


  );


};


export default SellActionWindow;