const user = require("../models/User")

exports.signUpView=(req,res,next)=>{
  res.render('auth/signup')
}

exports.signup=(req, res, next)=>{
const  { name,email,password } = req.body;
const onDB=user.findOne({email})
if(onDB===true){
  res.render("auth/signup",{message:'this user is already registred'})
}else{
  user.register({name, email}, password)
  res.redirect("/login")
}


}

exports.loginView=(req,res,next)=>{
  res.render('auth/login')
}

exports.logout=(req,res,next)=>{
  req.logout();
  res.redirect("/")
}