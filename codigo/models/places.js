const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const placeSchema = new Schema({
      name: String,
      location: {
        address: {
          type: String,
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },

      
        placeType: {
          type: String,
          enum: ["coffee shop", "bookstore"]
        }
      },
      {
        timestamps: true,
        versionkey: false

      })

    module.exports = model("Place", placeSchema)