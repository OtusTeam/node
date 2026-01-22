"use strict";
// ============================================
// GENERIC FUNCTIONS (Обычные функции)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = identity;
exports.getFirstElement = getFirstElement;
exports.pair = pair;
exports.swap = swap;
exports.filter = filter;
exports.map = map;
exports.find = find;
// Простая generic функция
function identity(arg) {
    return arg;
}
// Generic функция с массивом
function getFirstElement(arr) {
    return arr[0];
}
// Generic функция с несколькими параметрами
function pair(first, second) {
    return [first, second];
}
// Generic функция для обмена значений в массиве
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
// Generic функция для фильтрации
function filter(array, predicate) {
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}
// Generic функция для маппинга
function map(array, transform) {
    var result = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var item = array_2[_i];
        result.push(transform(item));
    }
    return result;
}
// Generic функция для поиска
function find(array, predicate) {
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var item = array_3[_i];
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
