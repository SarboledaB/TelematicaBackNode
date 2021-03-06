'use strict';
const Car = require('../models/cars.model');

exports.findAll = function (req, res) {
    Car.findAll(function (err, car) {
        if (err)
            res.json(err);
        res.json(car);
    });
};

exports.create = function (req, res) {
    const new_car = new Car(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Car.create(new_car, function (err, car) {
            if (err)
                res.send(err);
            res.json({ error: true, message: "car added successfully!", data: car });
        });
    }
};

exports.findById = function (req, res) {
    Car.findById(req.params.id, function (err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Car.update(req.params.id, new car(req.body), function (err, car) {
            if (err)
                res.send(err);
            res.json({ error: true, message: 'car successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    Car.delete(req.params.id, function (err, car) {
        if (err)
            res.send(err);
        res.json({ error: true, message: 'car successfully deleted' });
    });
};