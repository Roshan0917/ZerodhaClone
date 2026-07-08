const { HoldingsModel } = require("../models/HoldingsModel");
const YahooFinance = require("yahoo-finance2").default;


const yahooFinance = new YahooFinance();


// Get All Holdings

exports.getHoldings = async (req, res) => {

  try {


    const holdings = await HoldingsModel.find({
      userId: req.params.userId,
    });



    const updatedHoldings = await Promise.all(

      holdings.map(async(stock)=>{


        let livePrice = stock.price;



        try {


          const quote = await yahooFinance.quote(
            `${stock.name}.NS`
          );


          if(quote.regularMarketPrice){

            livePrice = quote.regularMarketPrice;

          }


        } catch(err){

          console.log(
            "Price Error:",
            stock.name
          );

        }




        return {

          ...stock._doc,

          price: livePrice,


          currentValue:
            livePrice * stock.qty,


          pnl:
            (livePrice * stock.qty) -
            (stock.avg * stock.qty)

        };


      })

    );



    res.json(updatedHoldings);



  } catch(err){


    console.log(err);


    res.status(500).json({

      message:"Error fetching holdings"

    });


  }

};