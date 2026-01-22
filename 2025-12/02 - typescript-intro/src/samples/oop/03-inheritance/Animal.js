"use strict";
// ============================================
// 3. НАСЛЕДОВАНИЕ (Inheritance)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log('Животное издаёт звук');
    };
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " \u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F"));
    };
    return Animal;
}());
exports.Animal = Animal;
