import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";



const GeneralContext = React.createContext({

  openBuyWindow: () => {},
  closeBuyWindow: () => {},

  openSellWindow: () => {},
  closeSellWindow: () => {},

});



export const GeneralContextProvider = (props) => {


  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);


  const [selectedStock, setSelectedStock] = useState(null);



  const location = useLocation();




  // Close popup whenever route changes

  useEffect(() => {


    setIsBuyWindowOpen(false);

    setIsSellWindowOpen(false);

    setSelectedStock(null);


  }, [location.pathname]);







  // ================= BUY =================


  const handleOpenBuyWindow = (stock) => {


    // close sell popup

    setIsSellWindowOpen(false);


    setSelectedStock(stock);


    setIsBuyWindowOpen(true);


  };




  const handleCloseBuyWindow = () => {


    setIsBuyWindowOpen(false);

    setSelectedStock(null);


  };









  // ================= SELL =================


  const handleOpenSellWindow = (stock) => {


    // close buy popup

    setIsBuyWindowOpen(false);


    setSelectedStock(stock);


    setIsSellWindowOpen(true);


  };





  const handleCloseSellWindow = () => {


    setIsSellWindowOpen(false);

    setSelectedStock(null);


  };








  return (


    <GeneralContext.Provider


      value={{


        openBuyWindow:
        handleOpenBuyWindow,


        closeBuyWindow:
        handleCloseBuyWindow,



        openSellWindow:
        handleOpenSellWindow,


        closeSellWindow:
        handleCloseSellWindow,


      }}


    >



      {props.children}






      {/* BUY POPUP */}


      {

        isBuyWindowOpen &&


        (

          <div

            className="popup-overlay"

            onClick={handleCloseBuyWindow}

          >


            <div

              onClick={(e)=>
                e.stopPropagation()
              }

            >


              <BuyActionWindow

                stock={selectedStock}

              />


            </div>


          </div>

        )

      }







      {/* SELL POPUP */}


      {

        isSellWindowOpen &&


        (

          <div

            className="popup-overlay"

            onClick={handleCloseSellWindow}

          >


            <div

              onClick={(e)=>
                e.stopPropagation()
              }

            >


              <SellActionWindow

                stock={selectedStock}

              />


            </div>


          </div>

        )

      }




    </GeneralContext.Provider>


  );

};



export default GeneralContext;