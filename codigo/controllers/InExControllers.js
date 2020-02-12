const Income = require("../models/Income");
const Expense = require("../models/Expense");



//C in CRUD
exports.incomeAdd = async (res, req, next) => {
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
};
exports.expenseAdd = async (res, req, next) => {
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
};

//R in CRUD
exports.incomeView = (res, req, next) => {
  const options = ["Rent", "Deposit", "Car Park", "Maintenance", "Other"]
};

exports.expenseView = (res, req, next) => {
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

};


//U in CRUD
exports.incomeUpdate = async (res, req) => {
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

exports.expenseUpdate = async (res, req) => {
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
exports.incomeDelete = async (res, req, next) => {
  await Income.findByIdAndDelete(req.params.id);
};
exports.expenseDelete = async (res, req, next) => {
  await Expense.findByIdAndDelete(req.params.id);
};