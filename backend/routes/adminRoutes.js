const express = require("express");
const router = express.Router();

const OpenAccount = require("../models/OpenAccount");

// GET ALL ACCOUNTS
router.get("/accounts", async (req, res) => {
  try {
    const accounts = await OpenAccount.find().sort({ createdAt: -1 });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// APPROVE ACCOUNT
router.post("/approve/:id", async (req, res) => {
  try {
    const account = await OpenAccount.findById(req.params.id);

    if (!account) {
      return res.status(404).json({ message: "Not found" });
    }

    account.status = "Approved";
    await account.save();

    res.json({ message: "Account Approved" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// REJECT ACCOUNT
router.post("/reject/:id", async (req, res) => {
  try {
    const account = await OpenAccount.findById(req.params.id);

    if (!account) {
      return res.status(404).json({ message: "Not found" });
    }

    account.status = "Rejected";
    await account.save();

    res.json({ message: "Account Rejected" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;