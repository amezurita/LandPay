const express = require('express');
const router  = express.Router();
const passport = require("../config/passport")

const {signup, signUpView, login, loginView, logout} = require("../controllers/authControllers")
const {createPlaceView,placesView,placePost,detailPlace,detailPlacePost,deletePlace}=require("../controllers/placesControllers")
const {isAuthenticated,checkRole}=require("../middlewares")
/* GET home page */
router.get('/', (req, res, next) => {

  res.render('index');
});
router.get('/signup',signUpView);
router.post('/signup',signup)
router.get("/login", loginView)
router.post("/login",
            passport.authenticate("local",{
              successRedirect:"/places",
              failureRedirect:"/login",
              failureFlash:true,
              failureMessage:"The input data is incorrect"
              
            }))

            //Aqui va facebook
router.get('/auth/facebook', passport.authenticate('facebook'));
 router.get('/auth/facebook/callback',
   passport.authenticate('facebook', { successRedirect: '/create',
  failureRedirect: '/login' }, ));



router.get('/create',isAuthenticated,createPlaceView)
 // router.get('/create',createPlaceView)

  router.get("/logout",logout)
  
  
  //router.get("/create",placesView)
  router.post("/create",placePost)
  router.get("/places",placesView)
  router.get('/places/:id', isAuthenticated, detailPlace)
  router.post('/places/:id', isAuthenticated, detailPlacePost)
  router.get('/delete/:id', isAuthenticated, deletePlace)

module.exports = router;
