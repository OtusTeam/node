"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoDefaultExport = demoDefaultExport;
// Импорт default экспорта (можно дать любое имя)
var logger_1 = require("./logger");
var logger_2 = require("./logger");
function demoDefaultExport() {
    console.log("\n--- 2. Экспорт по умолчанию ---");
    var logger = new logger_1.default("[APP]");
    logger.log("Приложение запущено");
    logger.warn("Это предупреждение");
    logger.error("Это ошибка");
    console.log("Log levels:", logger_2.LOG_LEVEL);
}
