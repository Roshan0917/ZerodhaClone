import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Search,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";
import "./Watchlist.css";



const WatchList = () => {


  const [searchTerm, setSearchTerm] = useState("");

  const [stocks, setStocks] = useState([]);




  // ================= FETCH STOCKS =================

  useEffect(() => {


    const fetchStocks = async () => {


      try {


        const res = await axios.get(
          "https://zerodhaclone-backend-b7nd.onrender.com/stocks"
        );


        setStocks(res.data);



      } catch (err) {


        console.log(
          "Stock Fetch Error:",
          err.response?.data || err.message
        );


      }


    };



    fetchStocks();



    // refresh every 15 seconds

    const interval = setInterval(
      fetchStocks,
      5000
    );



    return () => clearInterval(interval);



  }, []);







  const filtered = stocks.filter((s) =>

    s.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  );





  return (

    <div className="watchlist">



      {/* HEADER */}

      <div className="watchlist-header">

        <h2>
          Watchlist
        </h2>


        <span>
          {filtered.length}/5
        </span>


      </div>






      {/* SEARCH */}

      <div className="search-box">

        <Search className="search-icon" />


        <input

          placeholder="Search stocks..."

          value={searchTerm}

          onChange={(e)=>
            setSearchTerm(e.target.value)
          }

        />


      </div>







      {/* LIST */}

      <div className="watchlist-items">


        {filtered.map((stock,index)=>(

          <WatchListItem

            key={index}

            stock={stock}

          />

        ))}


      </div>








      {/* CHART */}

      <div className="portfolio-chart">


        <h3>
          Portfolio Allocation
        </h3>




        <DoughnutChart

          data={{

            labels: filtered.map(
              (s)=>s.name
            ),


            datasets:[

              {

                data: filtered.map(
                  (s)=>s.price
                ),


                backgroundColor:[

                  "#387ed1",
                  "#00b386",
                  "#ff9800",
                  "#9c27b0",
                  "#03a9f4",

                ],

              },

            ],


          }}

        />


      </div>



    </div>

  );

};



export default WatchList;









// ================= ITEM =================


function WatchListItem({stock}) {


  const [showActions,setShowActions] =
    useState(false);



  return (


    <div

      className="watch-item"

      onMouseEnter={()=>
        setShowActions(true)
      }

      onMouseLeave={()=>
        setShowActions(false)
      }

    >



      <div className="stock-left">


        <h4>
          {stock.name}
        </h4>



        <span
          className={
            stock.isDown
            ? "down"
            : "up"
          }
        >

          {stock.percent?.toFixed(2)}%

        </span>



      </div>








      <div className="stock-right">


        <h3>

          ₹
          {stock.price?.toLocaleString()}

        </h3>




        {

          stock.isDown ?

          (

            <KeyboardArrowDown
              className="down"
            />

          )

          :

          (

            <KeyboardArrowUp
              className="up"
            />

          )

        }



      </div>





      {

        showActions &&

        <WatchActions stock={stock}/>

      }



    </div>


  );

}









// ================= BUY / SELL =================


function WatchActions({stock}) {


  const generalContext =
    useContext(GeneralContext);




  return (


    <div className="watch-actions">





      <Tooltip
        title="Buy"
        arrow
        TransitionComponent={Grow}
      >

        <button

          className="buy-btn"

          onClick={() => generalContext.openBuyWindow(stock)}
        >

          BUY

        </button>


      </Tooltip>








      <Tooltip
        title="Sell"
        arrow
        TransitionComponent={Grow}
      >


        <button

          className="sell-btn"

          onClick={() => generalContext.openSellWindow(stock)}

        >

          SELL

        </button>


      </Tooltip>








      <Tooltip
        title="Analytics"
        arrow
      >

        <button className="icon-btn">

          <BarChartOutlined />

        </button>


      </Tooltip>







      <Tooltip
        title="More"
        arrow
      >

        <button className="icon-btn">

          <MoreHoriz />

        </button>


      </Tooltip>





    </div>


  );

}