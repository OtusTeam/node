"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automobile = void 0;
var Engine_1 = require("./Engine");
var Wheels_1 = require("./Wheels");
var Automobile = /** @class */ (function () {
    function Automobile(model, horsePower, wheelSize) {
        this.model = model;
        this.engine = new Engine_1.Engine(horsePower);
        this.wheels = new Wheels_1.Wheels(wheelSize);
    }
    Automobile.prototype.start = function () {
        console.log("".concat(this.model, ": \u0417\u0430\u043F\u0443\u0441\u043A"));
        this.engine.start();
    };
    Automobile.prototype.stop = function () {
        console.log("".concat(this.model, ": \u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430"));
        this.engine.stop();
    };
    Automobile.prototype.getSpecs = function () {
        return "".concat(this.model, ": ").concat(this.engine.getInfo(), ", ").concat(this.wheels.getInfo());
    };
    return Automobile;
}());
exports.Automobile = Automobile;
