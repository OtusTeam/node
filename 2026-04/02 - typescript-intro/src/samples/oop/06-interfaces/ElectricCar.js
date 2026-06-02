"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricCar = void 0;
var ElectricCar = /** @class */ (function () {
    function ElectricCar(brand) {
        this.brand = brand;
        this.speed = 0;
        this.batteryLevel = 100;
    }
    ElectricCar.prototype.start = function () {
        if (this.batteryLevel > 0) {
            console.log("".concat(this.brand, " (\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0431\u0438\u043B\u044C) \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u0448\u0443\u043C\u043D\u043E"));
            this.speed = 80;
        }
        else {
            console.log('Батарея разряжена');
        }
    };
    ElectricCar.prototype.stop = function () {
        console.log("".concat(this.brand, " \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F"));
        this.speed = 0;
    };
    ElectricCar.prototype.charge = function () {
        console.log('Зарядка...');
        this.batteryLevel = 100;
        console.log('Батарея заряжена на 100%');
    };
    return ElectricCar;
}());
exports.ElectricCar = ElectricCar;
