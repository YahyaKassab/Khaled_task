const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
  unitName: { type: String, required: true },
  unitNumber: { type: String, required: true },
  project: { type: String, required: true },
  areaInMetersSquared: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
})

const Apartment = mongoose.model('Apartment', apartmentSchema)

module.exports = Apartment
