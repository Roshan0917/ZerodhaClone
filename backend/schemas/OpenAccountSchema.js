const mongoose = require("mongoose");

const OpenAccountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    mobile: {
      type: String,
      required: true,
      match: /^[6-9]\d{9}$/,
    },

    pan: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    },

    aadhaar: {
      type: String,
      required: true,
      match: /^[0-9]{12}$/,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    pincode: {
      type: String,
      required: true,
      match: /^[1-9][0-9]{5}$/,
    },

    holderName: {
      type: String,
      required: true,
      trim: true,
    },

    bankName: {
      type: String,
      required: true,
      trim: true,
    },

    accountNumber: {
      type: String,
      required: true,
      minlength: 9,
      maxlength: 18,
    },

    ifsc: {
      type: String,
      required: true,
      uppercase: true,
      match: /^[A-Z]{4}0[A-Z0-9]{6}$/,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    rejectedReason: {
      type: String,
      default: "",
    },

    approvedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = OpenAccountSchema;