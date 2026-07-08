const OpenAccount = require("../models/OpenAccount");

// ================= ACCOUNT STATUS =================
exports.getAccountStatus = async (req, res) => {
  try {
    const account = await OpenAccount.findOne({
      userId: req.params.userId,
    });

    if (!account) {
      return res.status(404).json({
        message: "No account found",
      });
    }

    res.json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};