"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleCalculator = exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error('Деление на ноль!');
        }
        return a / b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
// Объект, реализующий интерфейс без класса
exports.simpleCalculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return a / b; }
};
