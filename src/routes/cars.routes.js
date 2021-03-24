const express = require('express')
const router = express.Router()

const carController = require('../controllers/cars.controller');

// Retrieve all cars
router.get('/', carController.findAll);

// Create a new car
router.post('/', carController.create);

// Retrieve a single car with id
router.get('/:id', carController.findById);

// Update a car with id
router.put('/:id', carController.update);

// Delete a car with id
router.delete('/:id', carController.delete);

module.exports = router