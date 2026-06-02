"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortBuilder = exports.formalBuilder = exports.simpleBuilder = void 0;
// Реализация интерфейса функции - простая версия
var simpleBuilder = function (name, surname) {
    return "Mr. " + name + " " + surname;
};
exports.simpleBuilder = simpleBuilder;
// Реализация интерфейса функции - с титулом
var formalBuilder = function (name, surname) {
    return "\u0413\u043E\u0441\u043F\u043E\u0434\u0438\u043D ".concat(surname, " ").concat(name);
};
exports.formalBuilder = formalBuilder;
// Реализация интерфейса функции - краткая версия
var shortBuilder = function (name, surname) {
    return "".concat(name, " ").concat(surname[0], ".");
};
exports.shortBuilder = shortBuilder;
