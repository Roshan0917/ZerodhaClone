const YahooFinance = require("yahoo-finance2").default;


// Create Yahoo Finance instance
const yahooFinance = new YahooFinance();


// NSE STOCKS
const STOCKS = [
    "RELIANCE.NS",
    "TCS.NS",
    "INFY.NS",
    "HDFCBANK.NS",
    "ICICIBANK.NS"
];



// ================= GET LIVE STOCKS =================

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

                    isDown: quote.regularMarketChange < 0

                };


            })

        );



        res.json(stocks);



    } catch (err) {


        console.log("STOCK ERROR:", err);


        res.status(500).json({

            message: "Stock API Error"

        });


    }

};