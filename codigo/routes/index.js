const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const uploadCloud = require('../config/cloudinary');
const Places = require("../models/places");

const {
  signup,
  signUpView,
  login,
  loginView,
  logout
} = require("../controllers/authControllers");
const {
  createPlaceView,
  placesView,
  placePost,
  detailPlace,
  detailPlacePost,
  deletePlace
} = require("../controllers/placesControllers");
const {
  incomeAdd,
  expenseAdd,
  createIncomeView,
  createExpenseView,
  incomeUpdate,
  expenseUpdate,
  incomeDelete,
  expenseDelete
} = require("../controllers/InExControllers")


const { isAuthenticated, checkRole } = require("../middlewares");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/signup", signUpView);
router.post("/signup", signup);
router.get("/login", loginView);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/places",
    failureRedirect: "/login",
    failureFlash: true,
    failureMessage: "The input data is incorrect"
  })
);

//Facebook Login
router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/create",
    failureRedirect: "/login"
  })
);

//Google login

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/places",
    failureRedirect: "/"
  })
);

//Property routes 
router.get("/create", isAuthenticated, createPlaceView);
router.post("/create", uploadCloud.single('photo'), placePost);
router.get("/places", isAuthenticated, placesView);
router.get("/places/:id", isAuthenticated, detailPlace);
router.post("/places/:id", isAuthenticated, detailPlacePost);
router.get("/delete/:id", isAuthenticated, deletePlace);


//Income-Expense routes
router.get("/income", isAuthenticated, createIncomeView)
router.post("/income", isAuthenticated, incomeAdd)
router.get("/expense", isAuthenticated, createExpenseView)
router.post("/expense", isAuthenticated, expenseAdd)
//COME BACK TO THIS!!!
router.get("/in/delete/:id", isAuthenticated, incomeDelete);
router.get("/ex/delete/:id", isAuthenticated, expenseDelete);



router.get("/logout", logout);
module.exports = router;
