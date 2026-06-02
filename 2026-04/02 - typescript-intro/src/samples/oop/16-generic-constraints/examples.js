"use strict";
// Примеры классов для демонстрации
Object.defineProperty(exports, "__esModule", { value: true });
exports.Superman = exports.Seagull = exports.Fish = exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " (\u043F\u0442\u0438\u0446\u0430) \u043B\u0435\u0442\u0438\u0442"));
    };
    return Bird;
}());
exports.Bird = Bird;
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " (\u0440\u044B\u0431\u0430) \u043F\u043B\u044B\u0432\u0451\u0442"));
    };
    return Fish;
}());
exports.Fish = Fish;
var Seagull = /** @class */ (function () {
    function Seagull(name) {
        this.name = name;
    }
    Seagull.prototype.fly = function () {
        console.log("".concat(this.name, " (\u0447\u0430\u0439\u043A\u0430) \u043B\u0435\u0442\u0438\u0442 \u043D\u0430\u0434 \u0432\u043E\u0434\u043E\u0439"));
    };
    Seagull.prototype.swim = function () {
        console.log("".concat(this.name, " (\u0447\u0430\u0439\u043A\u0430) \u043F\u043B\u044B\u0432\u0451\u0442 \u043F\u043E \u0432\u043E\u0434\u0435"));
    };
    return Seagull;
}());
exports.Seagull = Seagull;
// Класс с дополнительными методами
var Superman = /** @class */ (function () {
    function Superman(name) {
        this.name = name;
    }
    Superman.prototype.fly = function () {
        console.log("".concat(this.name, " \u043B\u0435\u0442\u0438\u0442 \u043A\u0430\u043A \u0441\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0439!"));
    };
    Superman.prototype.useSuperPower = function () {
        console.log("".concat(this.name, " \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u0443\u043F\u0435\u0440\u0441\u0438\u043B\u0443!"));
    };
    return Superman;
}());
exports.Superman = Superman;
