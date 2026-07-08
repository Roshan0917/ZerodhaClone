import React, { useState } from "react";
import "./OpenAccount.css";

const OpenAccount = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    pan: "",
    aadhaar: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    holderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3002/api/account/open", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Account Submitted Successfully 🎉");

  } catch (err) {
    console.log(err);
    alert("Server Error");
  }
};

  return (
    <div className="open-account">

      <div className="hero">
        <h1>Open Your Demat Account</h1>
        <p>Complete your account opening in just a few simple steps.</p>
      </div>

      <div className="progress">

        <div className={step >= 1 ? "step active" : "step"}>1</div>
        <div className="line"></div>

        <div className={step >= 2 ? "step active" : "step"}>2</div>
        <div className="line"></div>

        <div className={step >= 3 ? "step active" : "step"}>3</div>
        <div className="line"></div>

        <div className={step >= 4 ? "step active" : "step"}>4</div>

      </div>

      <div className="form-card">

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <h2>Personal Details</h2>

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter Full Name"
              />
            </div>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="input-group">
              <label>Mobile Number</label>

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
              />
            </div>

            <button
              className="next-btn"
              onClick={() => setStep(2)}
            >
              Continue →
            </button>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <h2>PAN & Aadhaar</h2>

            <div className="input-group">
              <label>PAN Number</label>

              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                placeholder="ABCDE1234F"
              />
            </div>

            <div className="input-group">
              <label>Aadhaar Number</label>

              <input
                type="text"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                placeholder="XXXX XXXX XXXX"
              />
            </div>

            <div style={{ display: "flex", gap: "15px" }}>

              <button
                className="next-btn"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>

              <button
                className="next-btn"
                onClick={() => setStep(3)}
              >
                Continue →
              </button>

            </div>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <h2>Address Details</h2>

            <div className="input-group">
              <label>Address</label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </div>

            <div className="input-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter City"
              />
            </div>

            <div className="input-group">
              <label>State</label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter State"
              />
            </div>

            <div className="input-group">
              <label>PIN Code</label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter PIN Code"
              />
            </div>

            <div style={{ display: "flex", gap: "15px" }}>

              <button
                className="next-btn"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>

              <button
                className="next-btn"
                onClick={() => setStep(4)}
              >
                Continue →
              </button>

            </div>
          </>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <>
            <h2>Bank Details</h2>

            <div className="input-group">
              <label>Account Holder Name</label>

              <input
                type="text"
                name="holderName"
                value={formData.holderName}
                onChange={handleChange}
                placeholder="Account Holder Name"
              />
            </div>

            <div className="input-group">
              <label>Bank Name</label>

              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
              />
            </div>

            <div className="input-group">
              <label>Account Number</label>

              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
              />
            </div>

            <div className="input-group">
              <label>IFSC Code</label>

              <input
                type="text"
                name="ifsc"
                value={formData.ifsc}
                onChange={handleChange}
                placeholder="SBIN0001234"
              />
            </div>

            <div style={{ display: "flex", gap: "15px" }}>

              <button
                className="next-btn"
                onClick={() => setStep(3)}
              >
                ← Back
              </button>

              <button
                className="next-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  );
};

export default OpenAccount;