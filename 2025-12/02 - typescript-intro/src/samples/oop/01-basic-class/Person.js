"use strict";
// ============================================
// 1. БАЗОВЫЙ КЛАСС (Basic Class)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // Конструктор (Constructor)
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Метод (Method)
    Person.prototype.introduce = function () {
        return "\u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this.name, ", \u043C\u043D\u0435 ").concat(this.age, " \u043B\u0435\u0442.");
    };
    return Person;
}());
exports.Person = Person;
