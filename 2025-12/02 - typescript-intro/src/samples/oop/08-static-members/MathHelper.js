"use strict";
// ============================================
// 8. СТАТИЧЕСКИЕ ЧЛЕНЫ (Static Members)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathHelper = void 0;
var MathHelper = /** @class */ (function () {
    function MathHelper() {
        MathHelper.instanceCount++;
    }
    MathHelper.square = function (x) {
        return x * x;
    };
    MathHelper.circleArea = function (radius) {
        return this.PI * this.square(radius);
    };
    MathHelper.getInstanceCount = function () {
        return MathHelper.instanceCount;
    };
    MathHelper.PI = 3.14159;
    // Счётчик экземпляров
    MathHelper.instanceCount = 0;
    return MathHelper;
}());
exports.MathHelper = MathHelper;
