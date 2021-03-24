'use strict';
var dbConn = require('./../../config/db.config');


//Car object create
var Car = function (car) {
    this.id = car.id;
    this.brand = car.branch;
    this.model = car.model;
    this.commercial_value = car.commercial_value;
    this.daily_rental_value = car.daily_rental_value;
    this.available = car.status ? car.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};


Car.create = function (newEmp, result) {
    dbConn.query("INSERT INTO cars set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Car.findById = function (id, result) {
    dbConn.query("Select * from cars where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Car.findAll = function (result) {
    dbConn.query("Select * from cars", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Cars : ', res);
            result(null, res);
        }
    });
};

Car.update = function (id, car, result) {
    dbConn.query("UPDATE cars SET id=?,brand=?,model=?,commercial_value=?,daily_rental_value=?,available=? WHERE id = ?", [car.id, car.brand, car.model, car.commercial_value, car.daily_rental_value, car.available], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Car.delete = function (id, result) {
    dbConn.query("DELETE FROM cars WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Car;