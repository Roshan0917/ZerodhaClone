const mongoose = require("mongoose");
const OpenAccountSchema = require("../schemas/OpenAccountSchema");

const OpenAccount = mongoose.model("OpenAccount", OpenAccountSchema);

module.exports = OpenAccount;