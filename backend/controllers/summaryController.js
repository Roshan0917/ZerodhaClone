const { UserModel } = require("../models/UserModel");
const { HoldingsModel } = require("../models/HoldingsModel");
const YahooFinance = require("yahoo-finance2").default;


const yahooFinance = new YahooFinance();


// ================= SUMMARY =================

exports.getSummary = async (req, res) => {

  try {

    const user = await UserModel.findById(req.params.userId);


    if (!user) {
      return res.status(404).send("User not found");
    }



    const holdings = await HoldingsModel.find({
      userId: req.params.userId,
    });



    let investment = 0;
    let currentValue = 0;



    for (let stock of holdings) {


      let livePrice = stock.price;



      try {


        const quote = await yahooFinance.quote(
          `${stock.name}.NS`
        );


        if (quote.regularMarketPrice) {

          livePrice = quote.regularMarketPrice;

        }


      } catch (err) {

        console.log(
          "Price Error:",
          stock.name
        );

      }





      investment += stock.avg * stock.qty;


      currentValue += livePrice * stock.qty;



    }




    const pnl = currentValue - investment;



    const pnlPercent =
      investment > 0
        ? (pnl / investment) * 100
        : 0;




    res.json({

      fullname: user.fullname,


      availableMargin: user.availableMargin,


      usedMargin: user.usedMargin,


      holdingsCount: holdings.length,


      investment: investment,


      currentValue: currentValue,


      pnl: pnl,


      pnlPercent: pnlPercent,


    });



  } catch (err) {


    console.log(err);


    res.status(500).send("Server Error");


  }


};