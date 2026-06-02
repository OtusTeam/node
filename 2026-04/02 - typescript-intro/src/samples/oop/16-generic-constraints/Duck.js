"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = name;
    }
    Duck.prototype.fly = function () {
        console.log("".concat(this.name, " \u043B\u0435\u0442\u0438\u0442"));
    };
    Duck.prototype.swim = function () {
        console.log("".concat(this.name, " \u043F\u043B\u044B\u0432\u0451\u0442"));
    };
    return Duck;
}());
exports.Duck = Duck;
