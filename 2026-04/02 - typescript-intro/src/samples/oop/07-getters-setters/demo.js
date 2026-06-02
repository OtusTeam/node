"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoGettersSetters = demoGettersSetters;
var Temperature_1 = require("./Temperature");
function demoGettersSetters() {
    console.log('7. ГЕТТЕРЫ И СЕТТЕРЫ');
    var temp = new Temperature_1.Temperature(25);
    console.log("\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(temp.celsius, "\u00B0C = ").concat(temp.fahrenheit.toFixed(1), "\u00B0F"));
    temp.celsius = 30;
    console.log("\u041D\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(temp.celsius, "\u00B0C = ").concat(temp.fahrenheit.toFixed(1), "\u00B0F"));
    temp.fahrenheit = 86;
    console.log("\u0427\u0435\u0440\u0435\u0437 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442: ".concat(temp.celsius.toFixed(1), "\u00B0C = ").concat(temp.fahrenheit, "\u00B0F"));
    console.log('');
}
