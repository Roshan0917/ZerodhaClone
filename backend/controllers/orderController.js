const { OrdersModel } = require("../models/OrdersModel");
const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");
const { UserModel } = require("../models/UserModel");



// GET ORDERS

exports.getOrders = async(req,res)=>{

try{


const orders = await OrdersModel.find({

userId:req.params.userId

}).sort({createdAt:-1});


res.json(orders);



}catch(err){

console.log(err);

res.status(500).json({
message:"Error fetching orders"
});


}

};





// NEW ORDER


exports.newOrder = async(req,res)=>{


try{


const {
userId,
name,
qty,
price,
mode

}=req.body;



const quantity=Number(qty);

const stockPrice=Number(price);

const total=quantity*stockPrice;



const user=await UserModel.findById(userId);



if(!user){

return res.status(404).send("User not found");

}





let holding = await HoldingsModel.findOne({

userId,
name

});




// ================= BUY =================


if(mode==="BUY"){



if(user.availableMargin < total){

return res.status(400).send("Insufficient Funds");

}



user.availableMargin -= total;

user.usedMargin += total;


await user.save();




// HOLDING UPDATE


if(holding){


holding.qty += quantity;

holding.avg = stockPrice;

holding.price = stockPrice;


await holding.save();


}else{


await HoldingsModel.create({

userId,

name,

qty:quantity,

avg:stockPrice,

price:stockPrice,

net:"0%",

day:"0%"

});


}






// POSITION UPDATE


let position = await PositionsModel.findOne({

userId,
name

});



if(position){


position.qty += quantity;

position.avg = stockPrice;

position.price = stockPrice;


await position.save();



}else{


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


else if(mode==="SELL"){



if(!holding){

return res.status(400).send("Stock not found");

}



if(holding.qty < quantity){

return res.status(400).send("Insufficient quantity");

}





holding.qty -= quantity;



if(holding.qty===0){


await HoldingsModel.deleteOne({

userId,
name

});


}else{


await holding.save();


}






// POSITION UPDATE


let position = await PositionsModel.findOne({

userId,
name

});



if(position){



position.qty -= quantity;



if(position.qty<=0){


await PositionsModel.deleteOne({

userId,
name

});


}else{


await position.save();


}



}






user.availableMargin += total;


user.usedMargin = Math.max(

0,

user.usedMargin-total

);



await user.save();




}






await OrdersModel.create({

userId,

name,

qty:quantity,

price:stockPrice,

mode

});




res.send("Order successful");





}catch(err){


console.log(err);


res.status(500).send("Server Error");


}



};