const Income = require("../models/Income");
const Expense = require("../models/Expense");
const Place = require("../models/places")

//C in CRUD
exports.incomeAdd = async (req, res, next) => {
  const owner = req.user._id
  const { name, amount, date, place, category, description } = req.body;
  const newIncome = {
    name,
    amount,
    date,
    category,
    place,
    description, 
    owner
  };
  const { _id } = await Income.create(newIncome);

  res.redirect("/places");
};
exports.expenseAdd = async (req, res, next) => {
  const owner = req.user._id
  const { name, amount, date, category, place, description } = req.body;
  const newExpense = {
    name,
    amount: amount * -1,
    date,
    category,
    place,
    description, 
    owner
  };
  const { _id } = await Expense.create(newExpense);
  res.redirect("/places");
};

//R in CRUD
exports.createIncomeView = async (req, res, next) => {
  const options = ["Rent", "Deposit", "Car Park", "Maintenance", "Other"];
  const place = await Place.find({owner: req.user._id}, {name: 1, _id: 0}).sort({createdAt:-1})
  res.render("properties/income", { options, place });
};


exports.createExpenseView = async (req, res, next) => {
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
  ];
  const place = await Place.find({owner: req.user._id}, {name: 1, _id: 0}).sort({createdAt:-1})
  res.render("properties/expense", { options, place });
};

//U in CRUD
exports.incomeUpdate = async (req, res) => {
  const { name, amount, date, category, place,description } = req.body;
  const updateIncome = {
    name,
    amount,
    date,
    category,
    place,
    description
  };
  await Income.findByIdAndUpdate(req.params.id, updateIncome);
};

exports.expenseUpdate = async (req, res) => {
  const { name, amount, date, category, place, description } = req.body;
  const updateExpense = {
    name,
    amount,
    date,
    category,
    place,
    description
  };
  await Expense.findByIdAndUpdate(req.params.id, updateExpense);
};

//D in CRUD
exports.incomeDelete = async (req, res, next) => {
  await Income.findByIdAndDelete(req.params.id);
  res.redirect("/places");
};
exports.expenseDelete = async (req, res, next) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.redirect("/places");
};
