const express = require("express");
const router = express.Router();

const {
  getOrders,
  newOrder,
} = require("../controllers/orderController");

// Get Orders
router.get("/allOrders/:userId", getOrders);

// Buy / Sell Order
router.post("/newOrder", newOrder);

module.exports = router;