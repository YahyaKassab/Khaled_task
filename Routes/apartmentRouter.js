const express = require('express')
const router = express.Router()
const apartmentController = require('../Controllers/apartmentController')

router.post('/', apartmentController.addApartment)

router.get('/', apartmentController.getApartments)

router.get('/:id', apartmentController.getApartmentById)

module.exports = router
