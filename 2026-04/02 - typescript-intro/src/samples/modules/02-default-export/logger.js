"use strict";
// ============================================
// 2. ЭКСПОРТ ПО УМОЛЧАНИЮ (Default Export)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_LEVEL = void 0;
// Default export - один главный экспорт на модуль
var Logger = /** @class */ (function () {
    function Logger(prefix) {
        if (prefix === void 0) { prefix = "[LOG]"; }
        this.prefix = prefix;
    }
    Logger.prototype.log = function (message) {
        console.log("".concat(this.prefix, " ").concat(message));
    };
    Logger.prototype.error = function (message) {
        console.error("".concat(this.prefix, " [ERROR] ").concat(message));
    };
    Logger.prototype.warn = function (message) {
        console.warn("".concat(this.prefix, " [WARN] ").concat(message));
    };
    return Logger;
}());
exports.default = Logger;
// Можно комбинировать default и named exports
exports.LOG_LEVEL = {
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
};
