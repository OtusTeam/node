"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoIndexableTypes = demoIndexableTypes;
var examples_1 = require("./examples");
function demoIndexableTypes() {
    console.log('14. ИНТЕРФЕЙСЫ МАССИВОВ И СЛОВАРЕЙ (Indexable Types)');
    // Словарь цветов
    console.log('Цвета:');
    console.log("\u041A\u0440\u0430\u0441\u043D\u044B\u0439: ".concat(examples_1.colors["red"]));
    console.log("\u0417\u0435\u043B\u0451\u043D\u044B\u0439: ".concat(examples_1.colors["green"]));
    console.log("\u0421\u0438\u043D\u0438\u0439: ".concat(examples_1.colors["blue"]));
    // Словарь переводов
    console.log('\nПереводы:');
    console.log("hello -> ".concat(examples_1.translations["hello"]));
    console.log("thanks -> ".concat(examples_1.translations["thanks"]));
    // Массив фруктов
    console.log('\nФрукты:');
    console.log("\u041F\u0435\u0440\u0432\u044B\u0439 \u0444\u0440\u0443\u043A\u0442: ".concat(examples_1.fruits[0]));
    console.log("\u0412\u0442\u043E\u0440\u043E\u0439 \u0444\u0440\u0443\u043A\u0442: ".concat(examples_1.fruits[1]));
    // Словарь возрастов
    console.log('\nВозраст:');
    console.log("\u0418\u0432\u0430\u043D: ".concat(examples_1.ages["Иван"], " \u043B\u0435\u0442"));
    console.log("\u041C\u0430\u0440\u0438\u044F: ".concat(examples_1.ages["Мария"], " \u043B\u0435\u0442"));
    // Словарь пользователей
    console.log('\nПользователи:');
    console.log("\u0410\u0434\u043C\u0438\u043D: ".concat(examples_1.users.admin));
    console.log("user1: ".concat(examples_1.users["user1"]));
    // Перебор всех ключей
    console.log('\nВсе цвета:');
    for (var colorName in examples_1.colors) {
        console.log("  ".concat(colorName, ": ").concat(examples_1.colors[colorName]));
    }
    console.log('');
}
