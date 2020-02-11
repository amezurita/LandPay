const Income = require("../models/Income")
const Expense = require("../models/Expense")

exports.incomeView = (res, req, next) =>{
  "???"
}

exports.expenseView = (res, req, next) =>{
  "???"
}

exports.incomeAdd = (rea,req,next) => {
  const {name, amount, date, category, description} = req.body
  const newIncome = {name, amount, date, category, description}
  const { _id } = await Income.create(newIncome)
}