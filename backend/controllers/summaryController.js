const { UserModel } = require("../models/UserModel");
const { HoldingsModel } = require("../models/HoldingsModel");
const YahooFinance = require("yahoo-finance2").default;

const yahooFinance = new YahooFinance();

// ================= SUMMARY =================

exports.getSummary = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const holdings = await HoldingsModel.find({
      userId: req.params.userId,
    });

    let investment = 0;
    let currentValue = 0;

    for (const stock of holdings) {
      investment += Number(stock.avg) * Number(stock.qty);

      let livePrice = Number(stock.price);

      try {
        const quote = await Promise.race([
          yahooFinance.quote(`${stock.name}.NS`),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 1500)
          ),
        ]);

        if (quote && quote.regularMarketPrice) {
          livePrice = Number(quote.regularMarketPrice);
        }
      } catch (err) {
        console.log(
          `Live price unavailable for ${stock.name}, using DB price`
        );
      }

      currentValue += livePrice * Number(stock.qty);
    }

    const pnl = currentValue - investment;

    const pnlPercent =
      investment > 0 ? (pnl / investment) * 100 : 0;

    return res.json({
      fullname: user.fullname || "",
      availableMargin: user.availableMargin || 0,
      usedMargin: user.usedMargin || 0,
      holdingsCount: holdings.length,
      investment,
      currentValue,
      pnl,
      pnlPercent,
    });
  } catch (err) {
    console.log("SUMMARY ERROR:", err);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};