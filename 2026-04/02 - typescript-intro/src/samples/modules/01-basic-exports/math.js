"use strict";
// ============================================
// 1. БАЗОВЫЙ ЭКСПОРТ (Basic Exports)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.PI = void 0;
exports.add = add;
exports.subtract = subtract;
// Named exports - именованный экспорт
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
exports.PI = 3.14159;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0)
            throw new Error("Деление на ноль!");
        return a / b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
