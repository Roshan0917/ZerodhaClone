const { Schema } = require("mongoose");

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  availableMargin: {
    type: Number,
    default: 100000,
},

usedMargin: {
    type: Number,
    default: 0,
},

openingBalance: {
    type: Number,
    default: 100000,
},
});

module.exports = { UserSchema };