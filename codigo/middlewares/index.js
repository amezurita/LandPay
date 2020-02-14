exports.isAuthenticated=(req,res,next)=>{
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect("/login")
  }
}

exports.isLogged = (req,res,next) =>{
  if(req.isAuthenticated()){
  res.redirect("/places")
  } else {
     return next()
  }
}

exports.checkRole=role=>(req,res,next)=>{
  if(req.isAuthenticated()&&req.user.role===role){
    next();
  }else{
    res.redirect("/login")
  }
}