"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoInterfaces = demoInterfaces;
var Car_1 = require("./Car");
var ElectricCar_1 = require("./ElectricCar");
function demoInterfaces() {
    console.log('6. ИНТЕРФЕЙСЫ');
    var car = new Car_1.Car("Toyota");
    car.start();
    car.stop();
    var tesla = new ElectricCar_1.ElectricCar("Tesla Model 3");
    tesla.start();
    tesla.charge();
    console.log('');
}
