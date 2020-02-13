const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const PLM = require("passport-local-mongoose");

const expenseSchema = new Schema(
  {
    name: String,
    amount: Number,
    date: String,
    category: {
     
      enum: [
       "Reparation",
       "Salary",
       "Water",
       "Electricity",
       "Taxes",
       "Maintenance",
       "Insurance",
       "Cleaning",
       "Remodelation",
       "Legal", 
       "Accountant", 
       "Other"
    ]
    },
    description: String
  },
  {
    timestamps: true,
    versionkey: false
  }
);

module.exports = mongoose.model("Expense", expenseSchema)
