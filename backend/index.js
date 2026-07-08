require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ================= MIDDLEWARE =================
const authMiddleware = require("./middleware/authMiddleware");

// ================= ROUTES =================
const authRoutes = require("./routes/authRoutes");
const holdingRoutes = require("./routes/holdingRoutes");
const positionRoutes = require("./routes/positionRoutes");
const orderRoutes = require("./routes/orderRoutes");
const fundRoutes = require("./routes/fundRoutes");
const summaryRoutes = require("./routes/summaryRoutes");
const accountRoutes = require("./routes/accountRoutes");
const openAccountRoutes = require("./routes/openAccountRoutes");
const adminRoutes = require("./routes/adminRoutes");
const stockRoutes = require("./routes/stockRoutes");

// ================= APP =================
const app = express();

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// ================= GLOBAL MIDDLEWARE =================
app.use(
  cors({
    origin: "*",
    methods:["GET","POST","PUT","DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================================================
//                    PUBLIC ROUTES
// ======================================================

// Authentication
app.use("/", authRoutes);

// Holdings
app.use("/", holdingRoutes);

// Positions
app.use("/", positionRoutes);

// Orders (Buy / Sell / Order History)
app.use("/", orderRoutes);

// Funds
app.use("/funds", fundRoutes);

// Dashboard Summary
app.use("/summary", summaryRoutes);

// Open Account Status
app.use("/", accountRoutes);

// Stocks
app.use("/stocks", stockRoutes);

// ======================================================
//                  PROTECTED ROUTES
// ======================================================

// Open Account APIs
app.use("/api", authMiddleware, openAccountRoutes);

// ======================================================
//                    ADMIN ROUTES
// ======================================================

app.use("/admin", adminRoutes);

// ======================================================
//                DATABASE & SERVER START
// ======================================================

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err);
  });