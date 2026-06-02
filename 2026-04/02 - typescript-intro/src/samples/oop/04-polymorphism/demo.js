"use strict";
// ============================================
// 4. ПОЛИМОРФИЗМ (Polymorphism)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoPolymorphism = demoPolymorphism;
var Dog_1 = require("../03-inheritance/Dog");
var Cat_1 = require("../03-inheritance/Cat");
function demoPolymorphism() {
    console.log('4. ПОЛИМОРФИЗМ');
    var animals = [
        new Dog_1.Dog("Рекс", "Лабрадор"),
        new Cat_1.Cat("Барсик"),
        new Dog_1.Dog("Шарик", "Дворняга")
    ];
    animals.forEach(function (animal) {
        animal.makeSound(); // Каждое животное издаёт свой звук
    });
    console.log('');
}
