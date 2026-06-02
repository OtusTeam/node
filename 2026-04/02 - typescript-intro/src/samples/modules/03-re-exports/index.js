"use strict";
// ============================================
// 3. РЕ-ЭКСПОРТ (Re-exports)
// ============================================
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.LOG_LEVEL = exports.Logger = exports.Calculator = exports.PI = exports.subtract = exports.add = void 0;
// Barrel exports - экспорт всего из одного места
var math_1 = require("../01-basic-exports/math");
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return math_1.add; } });
Object.defineProperty(exports, "subtract", { enumerable: true, get: function () { return math_1.subtract; } });
Object.defineProperty(exports, "PI", { enumerable: true, get: function () { return math_1.PI; } });
Object.defineProperty(exports, "Calculator", { enumerable: true, get: function () { return math_1.Calculator; } });
var logger_1 = require("../02-default-export/logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.default; } });
Object.defineProperty(exports, "LOG_LEVEL", { enumerable: true, get: function () { return logger_1.LOG_LEVEL; } });
// Re-export с переименованием
var math_2 = require("../01-basic-exports/math");
Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return math_2.add; } });
// Re-export всего
__exportStar(require("../01-basic-exports/math"), exports);
