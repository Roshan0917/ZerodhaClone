import React from "react";
import { Routes, Route } from "react-router-dom";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import OpenAccount from "./OpenAccount";
import AdminPanel from "./AdminPanel";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
          <Route path="open-account" element={<OpenAccount />} />
          <Route path="admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;