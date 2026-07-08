const express = require("express");
const router = express.Router();

const {
  getPositions,
} = require("../controllers/positionController");

router.get("/allPositions/:userId", getPositions);

module.exports = router;