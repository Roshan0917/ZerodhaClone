import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Funds.css";

const Funds = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [funds, setFunds] = useState({
    availableMargin: 0,
    usedMargin: 0,
    openingBalance: 0,
  });
const [showAddModal, setShowAddModal] = useState(false);
const [showWithdrawModal, setShowWithdrawModal] = useState(false);
const [amount, setAmount] = useState("");
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    Promise.all([
      axios.get(`http://localhost:3002/funds/${user._id}`),
      axios.get(`http://localhost:3002/account/status/${user._id}`)
    ])
      .then(([fundRes, accRes]) => {
        setFunds(fundRes.data);
        setAccount(accRes.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="funds-page">

      {/* TOP */}
      <div className="funds-top">
        <div>
          <h2>Funds</h2>
          <p>Manage your trading balance</p>
        </div>

        <div className="fund-buttons">
         <button
       className="green-btn"
       onClick={() => {
        setAmount("");
        setShowAddModal(true);
        }}
        >
            + Add Funds
        </button>

<button
  className="blue-btn"
  onClick={() => {
    setAmount("");
    setShowWithdrawModal(true);
  }}
>
  Withdraw
</button>
        </div>
      </div>

      {/* ACCOUNT STATUS */}
      <div className="fund-card" style={{ marginBottom: "20px" }}>
        <h3>Account Status</h3>

        {loading ? (
          <p>⏳ Loading...</p>
        ) : !account ? (
          <p>❌ No account found</p>
        ) : (
          <>
            <h2>Status: {account.status}</h2>

            {account.status === "Pending" && (
              <p>⏳ Your account is under review</p>
            )}

            {account.status === "Approved" && (
              <p>✅ Your account is active</p>
            )}

            {account.status === "Rejected" && (
              <p>❌ Your account was rejected</p>
            )}
          </>
        )}
      </div>

      {/* FUNDS GRID */}
      <div className="funds-grid">

        <div className="fund-card">
          <h3>Equity</h3>

          <div className="fund-row">
            <span>Available Margin</span>
            <span className="green">
              ₹ {funds.availableMargin?.toLocaleString()}
            </span>
          </div>

          <div className="fund-row">
            <span>Used Margin</span>
            <span>₹ {funds.usedMargin?.toLocaleString()}</span>
          </div>

          <div className="fund-row">
            <span>Available Cash</span>
            <span>₹ {funds.availableMargin?.toLocaleString()}</span>
          </div>

          <hr />

          <div className="fund-row">
            <span>Opening Balance</span>
            <span>₹ {funds.openingBalance?.toLocaleString()}</span>
          </div>
        </div>

        <div className="commodity-card">

          <div className="commodity-icon">💼</div>

          <h3>No Commodity Account</h3>

          <p>
            Open a commodity account to trade Futures & Options.
          </p>

          <button
            className="blue-btn"
            onClick={() => navigate("/open-account")}
          >
            Open Account
          </button>

        </div>

        {/* ADD FUNDS MODAL */}

{showAddModal && (
  <div className="modal-overlay">

    <div className="fund-modal">

      <h2>Add Funds</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="modal-buttons">

        <button
          className="green-btn"
         onClick={() => {

  axios.put("http://localhost:3002/funds/add", {
    userId: user._id,
    amount: Number(amount)
  })
  .then((res)=>{

    setFunds({
      ...funds,
      availableMargin: res.data.availableMargin,
      openingBalance: res.data.openingBalance
    });

    setAmount("");
    setShowAddModal(false);

  })
  .catch((err)=>{
    console.log(err);
    alert("Something went wrong");
  });

}}
        >
          Confirm
        </button>

        <button
          className="blue-btn"
          onClick={() => setShowAddModal(false)}
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}

{/* WITHDRAW MODAL */}

{showWithdrawModal && (
  <div className="modal-overlay">

    <div className="fund-modal">

      <h2>Withdraw Funds</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="modal-buttons">

        <button
          className="blue-btn"
          onClick={() => {

 axios.put("http://localhost:3002/funds/withdraw", {

    userId:user._id,
    amount:Number(amount)

 })
 .then((res)=>{

    setFunds({
      ...funds,
      availableMargin:res.data.availableMargin,
      openingBalance:res.data.openingBalance
    });

    setAmount("");
    setShowWithdrawModal(false);

 })
 .catch((err)=>{

    alert(err.response.data);

 });

}}
        >
          Confirm
        </button>

        <button
          className="green-btn"
          onClick={() => setShowWithdrawModal(false)}
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}

      </div>
    </div>
  );
};

export default Funds;