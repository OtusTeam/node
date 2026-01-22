"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Animal_1 = require("./Animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // Вызов конструктора родительского класса
        _this.breed = breed;
        return _this;
    }
    // Переопределение метода (Method Override)
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u043B\u0430\u0435\u0442: \u0413\u0430\u0432-\u0433\u0430\u0432!"));
    };
    Dog.prototype.fetch = function () {
        console.log("".concat(this.name, " \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043C\u044F\u0447"));
    };
    Dog.prototype.getInfo = function () {
        return "\u0421\u043E\u0431\u0430\u043A\u0430: ".concat(this.name, ", \u043F\u043E\u0440\u043E\u0434\u0430: ").concat(this.breed);
    };
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;
