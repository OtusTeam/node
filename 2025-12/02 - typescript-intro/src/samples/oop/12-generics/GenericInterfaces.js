"use strict";
// ============================================
// GENERIC INTERFACES (Обобщенные интерфейсы)
// ============================================
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
exports.ArrayList = void 0;
// Пример реализации Collection
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    };
    ArrayList.prototype.contains = function (item) {
        return this.items.includes(item);
    };
    ArrayList.prototype.size = function () {
        return this.items.length;
    };
    ArrayList.prototype.clear = function () {
        this.items = [];
    };
    ArrayList.prototype.toArray = function () {
        return __spreadArray([], this.items, true);
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
