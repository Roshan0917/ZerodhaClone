import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const res = await axios.get("http://localhost:3002/admin/accounts");
    setAccounts(res.data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const approve = async (id) => {
    await axios.post(`http://localhost:3002/admin/approve/${id}`);
    fetchAccounts();
  };

  const reject = async (id) => {
    await axios.post(`http://localhost:3002/admin/reject/${id}`);
    fetchAccounts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      {accounts.map((acc) => (
        <div
          key={acc._id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{acc.fullname}</h3>
          <p>{acc.email}</p>
          <p>STATUS: {acc.status}</p>

          <button onClick={() => approve(acc._id)}>
            Approve
          </button>

          <button onClick={() => reject(acc._id)}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;