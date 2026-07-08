const { PositionsModel } = require("../models/PositionsModel");
const YahooFinance = require("yahoo-finance2").default;


const yahooFinance = new YahooFinance();


// GET POSITIONS

exports.getPositions = async(req,res)=>{

  try{


    const positions = await PositionsModel.find({

      userId:req.params.userId

    });



    const updatedPositions = await Promise.all(

      positions.map(async(stock)=>{


        let livePrice = stock.price;



        try{


          const quote = await yahooFinance.quote(
            `${stock.name}.NS`
          );


          if(quote.regularMarketPrice){

            livePrice = quote.regularMarketPrice;

          }


        }catch(err){

          console.log(
            "Yahoo Error:",
            stock.name
          );

        }




        const pnl =
  (livePrice * stock.qty)
  -
  (stock.avg * stock.qty);



const changePercent =
  stock.avg > 0
    ? ((livePrice - stock.avg) / stock.avg) * 100
    : 0;



return {

  ...stock._doc,

  price: livePrice,

  pnl: pnl,

  day: changePercent.toFixed(2) + "%",

  net: changePercent.toFixed(2) + "%",

};


      })

    );




    res.json(updatedPositions);



  }catch(err){


    console.log(err);


    res.status(500).json({

      message:"Error fetching positions"

    });


  }

};