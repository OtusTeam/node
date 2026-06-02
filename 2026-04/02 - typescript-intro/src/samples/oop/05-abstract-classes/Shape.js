"use strict";
// ============================================
// 5. АБСТРАКТНЫЕ КЛАССЫ (Abstract Classes)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    // Конкретный метод в абстрактном классе
    Shape.prototype.describe = function () {
        console.log("\u041F\u043B\u043E\u0449\u0430\u0434\u044C: ".concat(this.getArea(), ", \u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: ").concat(this.getPerimeter()));
    };
    return Shape;
}());
exports.Shape = Shape;
