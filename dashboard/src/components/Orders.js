import React, { useEffect, useState } from "react";
import axios from "axios";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    axios
      .get(`http://localhost:3002/allOrders/${user._id}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders">

      {orders.length === 0 ? (
        <div className="no-orders">
          <h2>No Orders Yet</h2>
          <p>Your completed trades will appear here.</p>
        </div>
      ) : (
        <div className="orders-container">

          {orders.map((order, index) => (
            <div className="order-card" key={index}>

              <div className="order-header">
                <div>
                  <h3>{order.name}</h3>
                  <p className="order-time">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString()
                      : ""}
                  </p>
                </div>

                <span
                  className={
                    order.mode === "BUY"
                      ? "order-type buy-tag"
                      : "order-type sell-tag"
                  }
                >
                  {order.mode}
                </span>
              </div>

              <div className="order-details">
                <div>
                  <p>Quantity</p>
                  <h4>{order.qty}</h4>
                </div>

                <div>
                  <p>Price</p>
                  <h4>₹{order.price}</h4>
                </div>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Orders;