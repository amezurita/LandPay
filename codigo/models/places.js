const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const placeSchema = new Schema({
      name: String,
      rent: Number,
      tennants: String,
      photo: String,
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
      balance: Number,
      income: Number,
      outcome: Number,
      owner: String,
        placeType: {
          type: String,
          enum: ["House", "Apartment", "Other"]
        }
      },
      {
        timestamps: true,
        versionkey: false

      })

    module.exports = model("Place", placeSchema)