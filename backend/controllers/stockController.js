const YahooFinance = require("yahoo-finance2").default;


// Create Yahoo Finance instance
const yahooFinance = new YahooFinance();


// // NSE STOCKS
// const STOCKS = [
//     "RELIANCE.NS",
//     "TCS.NS",
//     "INFY.NS",
//     "HDFCBANK.NS",
//     "ICICIBANK.NS"
// ];



// // ================= GET LIVE STOCKS =================

// exports.getStocks = async (req, res) => {

//     try {


//         const stocks = await Promise.all(

//             STOCKS.map(async (symbol) => {


//                 const quote = await yahooFinance.quote(symbol);



//                 return {

//                     name: symbol.replace(".NS", ""),

//                     price: quote.regularMarketPrice || 0,

//                     change: quote.regularMarketChange || 0,

//                     percent: quote.regularMarketChangePercent || 0,

//                     isDown: quote.regularMarketChange < 0

//                 };


//             })

//         );



//         res.json(stocks);



//     } catch (err) {


//         console.log("STOCK ERROR:", err);


//         res.status(500).json({

//             message: "Stock API Error"

//         });


//     }

// };

const STOCKS = [
    "RELIANCE",
    "TCS",
    "INFY",
    "HDFCBANK",
    "ICICIBANK"
];


const STOCK_DATA = {
    RELIANCE:{
        price:1450,
        change:12,
        percent:0.8
    },

    TCS:{
        price:3200,
        change:-15,
        percent:-0.4
    },

    INFY:{
        price:1500,
        change:8,
        percent:0.5
    },

    HDFCBANK:{
        price:1700,
        change:-5,
        percent:-0.2
    },

    ICICIBANK:{
        price:1400,
        change:10,
        percent:0.7
    }
};



exports.getStocks = async(req,res)=>{


    try{


        const stocks = STOCKS.map((symbol)=>{


            let stock = STOCK_DATA[symbol];


            return {

                name:symbol,

                price:stock.price,

                change:stock.change,

                percent:stock.percent,

                isDown:stock.change < 0

            };


        });



        res.json(stocks);


    }
    catch(err){


        console.log(err);


        res.status(500).json({

            message:"Stock API Error"

        });


    }


};