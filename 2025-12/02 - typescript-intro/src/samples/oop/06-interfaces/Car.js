"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F"));
        this.speed = 60;
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.brand, " \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F"));
        this.speed = 0;
    };
    return Car;
}());
exports.Car = Car;
