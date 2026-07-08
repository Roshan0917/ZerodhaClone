const express = require("express");
const router = express.Router();

const { getHoldings } = require("../controllers/holdingController");

// Get All Holdings
router.get("/allHoldings/:userId", getHoldings);

module.exports = router;