"use strict";
// ============================================
// 11. КОМПОЗИЦИЯ (Composition)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(horsePower) {
        this.horsePower = horsePower;
    }
    Engine.prototype.start = function () {
        console.log("\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C ".concat(this.horsePower, " \u043B.\u0441. \u0437\u0430\u043F\u0443\u0449\u0435\u043D"));
    };
    Engine.prototype.stop = function () {
        console.log('Двигатель остановлен');
    };
    Engine.prototype.getInfo = function () {
        return "".concat(this.horsePower, " \u043B.\u0441.");
    };
    return Engine;
}());
exports.Engine = Engine;
