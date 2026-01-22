"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoReExports = demoReExports;
// Импорт из barrel файла
var index_1 = require("./index");
function demoReExports() {
    console.log("\n--- 3. Ре-экспорт (Barrel exports) ---");
    console.log("Импорт из одного места:");
    console.log("add(3, 7) =", (0, index_1.add)(3, 7));
    console.log("sum(3, 7) =", (0, index_1.sum)(3, 7)); // Переименованный экспорт
    console.log("PI =", index_1.PI);
    var logger = new index_1.Logger("[BARREL]");
    logger.log("Все импортировано из index.ts");
}
