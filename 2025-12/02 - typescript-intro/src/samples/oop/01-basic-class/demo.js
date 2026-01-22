"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoBasicClass = demoBasicClass;
var Person_1 = require("./Person");
function demoBasicClass() {
    console.log('1. БАЗОВЫЙ КЛАСС');
    var person1 = new Person_1.Person("Иван", 30);
    console.log(person1.introduce());
    console.log('');
}
