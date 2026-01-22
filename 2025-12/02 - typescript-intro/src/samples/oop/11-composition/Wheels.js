"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wheels = void 0;
var Wheels = /** @class */ (function () {
    function Wheels(size) {
        this.size = size;
    }
    Wheels.prototype.getInfo = function () {
        return "\u041A\u043E\u043B\u0451\u0441\u0430 ".concat(this.size, "\"");
    };
    return Wheels;
}());
exports.Wheels = Wheels;
