const express = require("express");
const router = express.Router();

const {
  getFunds,
  addFunds,
  withdrawFunds,
} = require("../controllers/fundController");

// Get Funds
router.get("/:userId", getFunds);

// Add Funds
router.put("/add", addFunds);

// Withdraw Funds
router.put("/withdraw", withdrawFunds);

module.exports = router;