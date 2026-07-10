const { OrdersModel } = require("../models/OrdersModel");
const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");
const { UserModel } = require("../models/UserModel");


// ================= GET ORDERS =================

exports.getOrders = async (req, res) => {
  try {

    const orders = await OrdersModel.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });


    res.json(orders);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Error fetching orders",
    });

  }
};




// ================= NEW ORDER =================

exports.newOrder = async (req, res) => {

  try {

    const {
      userId,
      name,
      qty,
      price,
      mode
    } = req.body;


    const quantity = Number(qty);
    const stockPrice = Number(price);

    const total = quantity * stockPrice;



    const user = await UserModel.findById(userId);


    if (!user) {

      return res.status(404).json({
        message:"User not found"
      });

    }



    let holding = await HoldingsModel.findOne({
      userId,
      name
    });




    // ================= BUY =================


    if(mode === "BUY"){


      if(user.availableMargin < total){

        return res.status(400).json({
          message:"Insufficient Funds"
        });

      }



      // Update Balance

      user.availableMargin -= total;

      user.usedMargin += total;

      await user.save();





      // ================= HOLDINGS =================



      if(holding){


        const oldQty = Number(holding.qty);

        const oldAvg = Number(holding.avg);



        const newQty = oldQty + quantity;


        const newAvg =
        ((oldQty * oldAvg) + (quantity * stockPrice))
        /
        newQty;



        holding.qty = newQty;

        holding.avg = Number(newAvg.toFixed(2));

        holding.price = stockPrice;


        await holding.save();



      }

      else{


        await HoldingsModel.create({

          userId,

          name,

          qty: quantity,

          avg: stockPrice,

          price: stockPrice,

          net:"0%",

          day:"0%"

        });


      }






      // ================= POSITIONS =================



      let position = await PositionsModel.findOne({
        userId,
        name
      });



      if(position){


        const oldQty = Number(position.qty);

        const oldAvg = Number(position.avg);



        const newQty = oldQty + quantity;



        const newAvg =
        ((oldQty * oldAvg)+(quantity*stockPrice))
        /
        newQty;



        position.qty = newQty;

        position.avg = Number(newAvg.toFixed(2));

        position.price = stockPrice;


        await position.save();



      }

      else{


        await PositionsModel.create({

          userId,

          product:"CNC",

          name,

          qty:quantity,

          avg:stockPrice,

          price:stockPrice,

          net:"0%",

          day:"0%",

          isLoss:false

        });


      }



    }





    // ================= SELL =================


    else if(mode === "SELL"){



      if(!holding){

        return res.status(400).json({
          message:"Stock not found"
        });

      }



      if(holding.qty < quantity){

        return res.status(400).json({
          message:"Insufficient quantity"
        });

      }





      // Remove From Holdings


      holding.qty -= quantity;



      if(holding.qty <= 0){


        await HoldingsModel.deleteOne({
          userId,
          name
        });


      }

      else{


        await holding.save();


      }







      // ================= POSITIONS =================



      let position = await PositionsModel.findOne({
        userId,
        name
      });



      if(position){


        position.qty -= quantity;



        if(position.qty <=0){


          await PositionsModel.deleteOne({
            userId,
            name
          });


        }

        else{


          await position.save();


        }


      }






      // ================= UPDATE BALANCE =================



      user.availableMargin += total;



      user.usedMargin = Math.max(
        0,
        user.usedMargin - total
      );



      await user.save();



    }




    else{


      return res.status(400).json({
        message:"Invalid Order Type"
      });


    }






    // ================= SAVE ORDER =================



    await OrdersModel.create({

      userId,

      name,

      qty:quantity,

      price:stockPrice,

      mode


    });






    return res.status(200).json({

      success:true,

      message:"Order Successful"

    });




  }

  catch(err){


    console.log("ORDER ERROR:",err);


    res.status(500).json({

      success:false,

      message:"Server Error"

    });


  }

};