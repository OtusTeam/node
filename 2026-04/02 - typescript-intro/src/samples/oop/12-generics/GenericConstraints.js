"use strict";
// ============================================
// GENERIC CONSTRAINTS (Ограничения обобщений)
// ============================================
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
exports.getLength = getLength;
exports.findById = findById;
exports.getProperty = getProperty;
exports.create = create;
exports.printInfo = printInfo;
exports.max = max;
exports.sort = sort;
exports.merge = merge;
exports.concatenate = concatenate;
// Ограничение: T должен иметь свойство length
function getLength(item) {
    return item.length;
}
function findById(items, id) {
    return items.find(function (item) { return item.id === id; });
}
// Ограничение: использование keyof
function getProperty(obj, key) {
    return obj[key];
}
// Ограничение: T должен быть конструируемым
function create(Constructor) {
    return new Constructor();
}
function printInfo(entity) {
    return "".concat(entity.name, " is ").concat(entity.age, " years old");
}
function max(a, b) {
    return a.compareTo(b) > 0 ? a : b;
}
function sort(array) {
    return array.slice().sort(function (a, b) { return a.compareTo(b); });
}
// Пример класса с Comparable
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.compareTo = function (other) {
        return this.age - other.age;
    };
    return Person;
}());
exports.Person = Person;
// Generic constraint с extends для объектов
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Constraint для массивов
function concatenate(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
