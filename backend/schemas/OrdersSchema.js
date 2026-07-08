const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    userId: String,   // ← NEW

    name: String,
    qty: Number,
    price: Number,
    mode: String,
  },
  { timestamps: true }
);

module.exports = { OrdersSchema };