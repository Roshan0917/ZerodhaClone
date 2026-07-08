const { UserModel } = require("../models/UserModel");


// ================= GET FUNDS =================
exports.getFunds = async (req, res) => {
  try {

    const user = await UserModel.findById(req.params.userId);

    if (!user) {
      return res.status(404).send("User not found");
    }


    res.json({
      availableMargin: user.availableMargin,
      usedMargin: user.usedMargin,
      openingBalance: user.openingBalance,
    });


  } catch (err) {

    console.log(err);
    res.status(500).send("Server Error");

  }
};



// ================= ADD FUNDS =================
exports.addFunds = async (req, res) => {

  try {

    const { userId, amount } = req.body;


    const value = Number(amount);


    if (!value || value <= 0) {
      return res.status(400).send("Invalid amount");
    }



    const user = await UserModel.findById(userId);


    if (!user) {
      return res.status(404).send("User not found");
    }



    // Add money to available balance
    user.availableMargin += value;



    await user.save();



    res.json({

      message: "Funds Added Successfully",

      availableMargin: user.availableMargin,

      usedMargin: user.usedMargin,

      openingBalance: user.openingBalance

    });



  } catch (err) {

    console.log(err);
    res.status(500).send("Server Error");

  }

};





// ================= WITHDRAW FUNDS =================
exports.withdrawFunds = async (req, res) => {


  try {


    const { userId, amount } = req.body;



    const value = Number(amount);



    if (!value || value <= 0) {

      return res.status(400).send("Invalid amount");

    }



    const user = await UserModel.findById(userId);



    if (!user) {

      return res.status(404).send("User not found");

    }



    // Balance check

    if (user.availableMargin < value) {

      return res.status(400).send("Insufficient Balance");

    }



    // Deduct money

    user.availableMargin -= value;



    await user.save();



    res.json({

      message: "Withdrawal Successful",

      availableMargin: user.availableMargin,

      usedMargin: user.usedMargin,

      openingBalance: user.openingBalance

    });



  } catch (err) {


    console.log(err);
    res.status(500).send("Server Error");


  }

};