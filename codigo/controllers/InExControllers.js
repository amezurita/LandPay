const Income = require("../models/Income");
const Expense = require("../models/Expense");



//C in CRUD
exports.incomeAdd = async (req, res, next) => {
  const {
    name,
    amount,
    date,
    category,
    description
  } = req.body;
  const newIncome = {
    name,
    amount,
    date,
    category,
    description
  };
  const {
    _id
  } = await Income.create(newIncome);
  res.redirect("/places")
};
exports.expenseAdd = async (req, res, next) => {
  const {
    name,
    amount,
    date,
    category,
    description
  } = req.body;
  const newExpense = {
    name,
    amount,
    date,
    category,
    description
  };
  const {
    _id
  } = await Expense.create(newExpense);
  res.redirect("/places")
};

//R in CRUD
exports.createIncomeView = (req, res, next) => {
  const options = ["Rent", "Deposit", "Car Park", "Maintenance", "Other"]
  res.render("properties/income", {options})

  
};

exports.createExpenseView = (req, res, next) => {
  const options = [
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
  res.render("properties/expense", {options})
};


//U in CRUD
exports.incomeUpdate = async (req, res) => {
  const {
    name,
    amount,
    date,
    category,
    description
  } = req.body;
  const updateIncome = {
    name,
    amount,
    date,
    category,
    description
  };
  await Income.findByIdAndUpdate(req.params.id, updateIncome);
};

exports.expenseUpdate = async (req, res) => {
  const {
    name,
    amount,
    date,
    category,
    description
  } = req.body;
  const updateExpense = {
    name,
    amount,
    date,
    category,
    description
  };
  await Expense.findByIdAndUpdate(req.params.id, updateExpense);
};

//D in CRUD
exports.incomeDelete = async (req, res, next) => {
  await Income.findByIdAndDelete(req.params.id);
};
exports.expenseDelete = async (req, res, next) => {
  await Expense.findByIdAndDelete(req.params.id);
};