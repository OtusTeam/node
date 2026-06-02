"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoBasicExports = demoBasicExports;
// Импорт именованных экспортов
var math_1 = require("./math");
function demoBasicExports() {
    console.log("\n--- 1. Базовый экспорт ---");
    console.log("add(5, 3) =", (0, math_1.add)(5, 3));
    console.log("subtract(10, 4) =", (0, math_1.subtract)(10, 4));
    console.log("PI =", math_1.PI);
    var calc = new math_1.Calculator();
    console.log("multiply(6, 7) =", calc.multiply(6, 7));
    console.log("divide(20, 4) =", calc.divide(20, 4));
}
