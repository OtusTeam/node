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
exports.Cat = void 0;
var Animal_1 = require("./Animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u043C\u044F\u0443\u043A\u0430\u0435\u0442: \u041C\u044F\u0443!"));
    };
    Cat.prototype.climb = function () {
        console.log("".concat(this.name, " \u043B\u0430\u0437\u0430\u0435\u0442 \u043F\u043E \u0434\u0435\u0440\u0435\u0432\u044C\u044F\u043C"));
    };
    return Cat;
}(Animal_1.Animal));
exports.Cat = Cat;
