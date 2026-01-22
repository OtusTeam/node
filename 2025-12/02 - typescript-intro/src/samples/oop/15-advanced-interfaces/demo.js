"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoAdvancedInterfaces = demoAdvancedInterfaces;
var Calculator_1 = require("./Calculator");
function demoAdvancedInterfaces() {
    var _a;
    console.log('15. ПРОДВИНУТЫЕ ИНТЕРФЕЙСЫ (Advanced Interfaces)');
    // Калькулятор через класс
    var calc = new Calculator_1.Calculator();
    console.log("10 + 5 = ".concat(calc.add(10, 5)));
    console.log("10 - 5 = ".concat(calc.subtract(10, 5)));
    console.log("10 * 5 = ".concat(calc.multiply(10, 5)));
    console.log("10 / 5 = ".concat(calc.divide(10, 5)));
    // Калькулятор через объект
    console.log('\nПростой калькулятор:');
    console.log("20 + 3 = ".concat(Calculator_1.simpleCalculator.add(20, 3)));
    console.log("20 * 3 = ".concat(Calculator_1.simpleCalculator.multiply(20, 3)));
    // Конфигурация с опциональными свойствами
    var config = {
        apiUrl: "https://api.example.com",
        version: "1.0.0"
    };
    var configWithTimeout = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3,
        version: "2.0.0"
    };
    console.log('\nКонфигурация 1:');
    console.log("API: ".concat(config.apiUrl));
    console.log("Version: ".concat(config.version));
    console.log("Timeout: ".concat((_a = config.timeout) !== null && _a !== void 0 ? _a : 'default'));
    console.log('\nКонфигурация 2:');
    console.log("API: ".concat(configWithTimeout.apiUrl));
    console.log("Timeout: ".concat(configWithTimeout.timeout, "ms"));
    console.log("Retries: ".concat(configWithTimeout.retries));
    console.log('');
}
