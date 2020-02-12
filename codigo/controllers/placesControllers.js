const Places = require("../models/places")



//C in CRUD
exports.createPlaceView=(req,res,next)=>{
  const options=["House", "Apartment", "Other"]
  const img = Places.photo
  res.render("properties/create",{options, img})
}

exports.placePost = async (req, res) => {
  const photo = req.file.url
  console.log(req)
  const owner = req.user._id
  const { name, rent, tennants, address, latitude, longitude, placeType } = req.body
  const newPlace = {
    name,
    rent,
    tennants,
    owner,
    photo,
    location: {
      address,
      coordinates: [longitude, latitude]
    },
    placeType
  }
  console.log(newPlace)
  const { _id } = await Places.create(newPlace)
  res.redirect(`/places`)
}

//R in CRUD
exports.placesView=async (req,res)=>{
  console.log(req)
  const places = await Places.find({owner: req.user._id}).sort({createdAt:-1})
  res.render("properties/places",{places})
}

exports.detailPlace=async(req,res)=>{
  const {id}=req.params;
  const place=await Places.findById(id)
  res.render("properties/detailed",place);
}


// U in CRUD
exports.detailPlacePost=async (req,res,next)=>{
 await console.log(req.params.id)
  const { name, rent, tennants, photo,  address, latitude, longitude, placeType } = req.body
  const updatePlace = {
    name,
    rent,
    tennants,
    photo,
    location: {
      address,
      coordinates: [longitude, latitude]
    },
    placeType
  }
  await Places.findByIdAndUpdate(req.params.id, updatePlace);

  res.redirect("/places");
}


//D in CRUD
exports.deletePlace= async(req,res,next)=>{
await Places.findByIdAndDelete(req.params.id);
res.redirect("/places")
}

/*
// R in CRUD
exports.getPlaces = async(req, res) =>{
  const places = await Places.find().populate("places")
  res.render("folder/places", { places })
}


exports.createPlace = async (req, res) =>{ 
  const {name, location} =req.body;
  await Places.create ({
    name,
    location
  })
  res.redirect("/")
}

exports.updatePlacesView = async (req, res) => {
  const Places = await Places.find.ById(req.params.placesid)
  res.render("update-places")
}*/