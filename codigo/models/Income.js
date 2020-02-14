const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const PLM = require("passport-local-mongoose");

const incomeSchema = new Schema(
  {
    name: {
      type: String
    },
    amount: {
      type: Number
    },
    date: String,
    category: {
      type:String,
      enum:["Rent", "Deposit", "Car Park", "Maintenance", "Other"]
    },
  owner: String,
  place: String,
    description: String
  },
  {
    timestamps: true,
    versionkey: false
  }
);

module.exports = mongoose.model("Income", incomeSchema);
