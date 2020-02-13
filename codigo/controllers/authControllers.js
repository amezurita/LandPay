const User = require("../models/User");

exports.signUpView = (req, res, next) => {
  res.render("auth/signup");
};

exports.signup = async (req, res, next) => {
  const { name, email, password, photo } = req.body;
  const onDB = User.findOne({ email });
  if (onDB === true) {
    res.render("auth/signup", { message: "this user is already registred" });
  } else {
    try {
      const balance = req.places.balance
      let newUser = new User({ email: email, name: name, photo: photo, balance: "???" });
      const result = await User.register(newUser, password);
      res.redirect("/login");
    } catch (err) {
      console.log("an error has occurred", err);
    }
  }
};

exports.loginView = (req, res, next) => {
  res.render("auth/login");
  console.log(User);
};

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
