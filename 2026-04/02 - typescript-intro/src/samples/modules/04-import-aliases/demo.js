"use strict";
// ============================================
// 4. ПСЕВДОНИМЫ ИМПОРТА (Import Aliases)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoImportAliases = demoImportAliases;
// Импорт с псевдонимом (as)
var math_1 = require("../01-basic-exports/math");
// Импорт всего модуля как объект
var MathUtils = require("../01-basic-exports/math");
// Импорт default с другим именем
var logger_1 = require("../02-default-export/logger");
function demoImportAliases() {
    console.log("\n--- 4. Псевдонимы импорта ---");
    // Использование псевдонимов
    console.log("addition(2, 3) =", (0, math_1.add)(2, 3));
    console.log("subtraction(10, 5) =", (0, math_1.subtract)(10, 5));
    // Использование namespace import
    console.log("MathUtils.add(4, 6) =", MathUtils.add(4, 6));
    console.log("MathUtils.PI =", MathUtils.PI);
    var calc = new MathUtils.Calculator();
    console.log("Calculator.multiply(3, 4) =", calc.multiply(3, 4));
    // Default import с другим именем
    var logger = new logger_1.default("[ALIAS]");
    logger.log("Импортирован как MyLogger");
}
