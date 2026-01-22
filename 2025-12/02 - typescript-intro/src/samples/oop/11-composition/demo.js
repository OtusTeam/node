"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComposition = demoComposition;
var Automobile_1 = require("./Automobile");
function demoComposition() {
    console.log('11. КОМПОЗИЦИЯ');
    var car = new Automobile_1.Automobile("BMW X5", 340, 20);
    console.log(car.getSpecs());
    car.start();
    car.stop();
    console.log('');
}
