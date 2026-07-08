import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Positions.css";

const Positions = () => {

  const [positions, setPositions] = useState([]);


  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;


    axios
      .get(`https://zerodhaclone-backend-b7nd.onrender.com/allPositions/${user._id}`)
      .then((res) => {

        setPositions(res.data);

      })
      .catch((err) => {

        console.log(err);

      });


  }, []);



  return (
    <>

      <h3 className="title">
        Positions ({positions.length})
      </h3>



      {positions.length === 0 ? (

        <div className="no-data">

          <h4>No positions</h4>

          <p>
            You don't have any positions yet.
          </p>

        </div>


      ) : (


        <div className="order-table">

          <table>

            <thead>

              <tr>

                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>

              </tr>

            </thead>



            <tbody>


            {positions.map((stock,index)=>{


              const currentValue =
                stock.price * stock.qty;


              const pnl =
                currentValue -
                (stock.avg * stock.qty);



              return (

              <tr key={index}>


                <td>
                  {stock.product || "CNC"}
                </td>


                <td>
                  {stock.name}
                </td>


                <td>
                  {stock.qty}
                </td>


                <td>
                  ₹ {stock.avg.toFixed(2)}
                </td>


                <td>
                  ₹ {stock.price.toFixed(2)}
                </td>



                <td
                className={
                  pnl >=0 ? "profit":"loss"
                }
                >

                  ₹ {pnl.toFixed(2)}

                </td>



                <td
                className={
                  stock.day?.includes("-")
                  ? "loss"
                  :"profit"
                }
                >

                  {stock.day || "0%"}

                </td>


              </tr>

              );

            })}



            </tbody>

          </table>

        </div>

      )}



    </>
  );

};


export default Positions;