const express = require("express");
const router = express.Router();

const {
  getAccountStatus,
} = require("../controllers/accountController");

router.get("/account/status/:userId", getAccountStatus);

module.exports = router;