const YahooFinance = require("yahoo-finance2").default;

const yahooFinance = new YahooFinance();

const STOCKS = [
  "RELIANCE.NS",
  "TCS.NS",
  "INFY.NS",
  "HDFCBANK.NS",
  "ICICIBANK.NS",
];

exports.getStocks = async (req, res) => {
  try {
    const stocks = await Promise.all(
      STOCKS.map(async (symbol) => {
        const quote = await yahooFinance.quote(symbol);

        return {
          name: symbol.replace(".NS", ""),
          price: quote.regularMarketPrice || 0,
          change: quote.regularMarketChange || 0,
          percent: quote.regularMarketChangePercent || 0,
          isDown: (quote.regularMarketChange || 0) < 0,
        };
      })
    );

    res.json(stocks);
  } catch (err) {
    console.log("STOCK ERROR:", err);

    res.status(500).json({
      message: "Stock API Error",
    });
  }
};