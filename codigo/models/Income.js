const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const incomeSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  amount:{
    type: Number,
    required: true
  },
  date: String,
  category: {
    required: true,
    enum:["Rent", "Deposit", "Car Park", "Maintenance", "Other"]
  },
  description: String
},
{
  timestamps: true,
  versionkey: false
});

module.exports = mongoose.model("Income", incomeSchema)