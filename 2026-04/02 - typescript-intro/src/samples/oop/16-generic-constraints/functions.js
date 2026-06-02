"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
exports.makeFly = makeFly;
exports.printName = printName;
exports.getProperty = getProperty;
exports.getFirstElement = getFirstElement;
exports.getLength = getLength;
// Функция с ограничением: T должен реализовывать IFlyable И ISwimmable
function run(arg) {
    arg.fly();
    arg.swim();
    // arg.go(); // ❌ Ошибка: 'go' does not exist on type 'T'
}
// Функция с ограничением: T должен реализовывать только IFlyable
function makeFly(creature) {
    creature.fly();
    // creature.swim(); // ❌ Ошибка: swim не гарантирован
}
// Функция с ограничением: T должен иметь свойство name
function printName(obj) {
    console.log("\u0418\u043C\u044F: ".concat(obj.name));
}
// Функция с ограничением: K должен быть ключом T
function getProperty(obj, key) {
    return obj[key];
}
// Функция с ограничением: T должен быть массивом
function getFirstElement(arr) {
    return arr[0];
}
// Функция с ограничением: T должен иметь метод length
function getLength(item) {
    return item.length;
}
