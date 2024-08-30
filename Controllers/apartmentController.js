const Apartment = require('../Models/ApartmentModel')
exports.addApartment = async (req, res) => {
  try {
    const newApartment = await Apartment.create(req.body)
    res.status(201).json({
      status: 'Success',
      data: newApartment,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    })
  }
}

exports.getApartments = async (req, res) => {
  try {
    const { query } = req
    const filter = {}

    if (query.unitName) {
      filter.unitName = { $regex: query.unitName, $options: 'i' }
    }
    if (query.unitNumber) {
      filter.unitNumber = { $regex: query.unitNumber, $options: 'i' }
    }
    if (query.project) {
      filter.project = { $regex: query.project, $options: 'i' }
    }

    const apartments = await Apartment.find(filter)

    res.status(200).json({
      status: 'success',
      results: apartments.length,
      data: apartments,
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    })
  }
}

exports.getApartmentById = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id)
    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' })
    }
    res.status(200).json({
      status: 'Success',
      data: apartment,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
