"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoInheritance = demoInheritance;
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
function demoInheritance() {
    console.log('3. НАСЛЕДОВАНИЕ');
    var dog = new Dog_1.Dog("Бобик", "Овчарка");
    console.log(dog.getInfo());
    dog.makeSound();
    dog.fetch();
    var cat = new Cat_1.Cat("Мурка");
    cat.makeSound();
    cat.climb();
    console.log('');
}
