const express = require("express");
const router = express.Router();

const OpenAccount = require("../models/OpenAccount");

// CREATE ACCOUNT
router.post("/account/open", async (req, res) => {
  try {
    const userId = req.user.id;

    const existing = await OpenAccount.findOne({ userId });

    if (existing) {
      return res.status(400).json({
        message: "Account already exists",
      });
    }

    const account = new OpenAccount({
      ...req.body,
      userId,
      status: "Pending",
    });

    await account.save();

    res.json({
      message: "Account submitted successfully",
      account,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;