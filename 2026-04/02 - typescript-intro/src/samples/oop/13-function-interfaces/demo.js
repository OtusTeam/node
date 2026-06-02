"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoFunctionInterfaces = demoFunctionInterfaces;
var functions_1 = require("./functions");
function demoFunctionInterfaces() {
    console.log('13. ИНТЕРФЕЙСЫ ФУНКЦИЙ (Function Interfaces)');
    // Использование разных реализаций
    console.log((0, functions_1.simpleBuilder)("Иван", "Петров"));
    console.log((0, functions_1.formalBuilder)("Иван", "Петров"));
    console.log((0, functions_1.shortBuilder)("Иван", "Петров"));
    // Можно создать функцию напрямую
    var casualBuilder = function (name, surname) { return "".concat(name, " ").concat(surname); };
    console.log(casualBuilder("Мария", "Иванова"));
    // Массив функций одного типа
    var builders = [functions_1.simpleBuilder, functions_1.formalBuilder, functions_1.shortBuilder];
    console.log('\nВсе варианты:');
    builders.forEach(function (builder) {
        console.log(builder("Алексей", "Смирнов"));
    });
    console.log('');
}
