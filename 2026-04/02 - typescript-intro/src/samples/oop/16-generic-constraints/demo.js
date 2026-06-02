"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoGenericConstraints = demoGenericConstraints;
var Duck_1 = require("./Duck");
var examples_1 = require("./examples");
var functions_1 = require("./functions");
function demoGenericConstraints() {
    console.log('16. ОГРАНИЧЕНИЕ ОБОБЩЕНИЙ (Generic Constraints)');
    // Пример 1: Функция с множественным ограничением
    console.log('\n--- 1. Множественное ограничение (T extends IFlyable & ISwimmable) ---');
    var duck = new Duck_1.Duck("Утка Дональд");
    (0, functions_1.run)(duck); // ✅ Утка может и летать, и плавать
    var seagull = new examples_1.Seagull("Чайка");
    (0, functions_1.run)(seagull); // ✅ Чайка тоже может и летать, и плавать
    // const bird1 = new Bird("Воробей");
    // run(bird1); // ❌ Ошибка! Bird не реализует ISwimmable
    // const fish = new Fish("Карп");
    // run(fish); // ❌ Ошибка! Fish не реализует IFlyable
    // Пример 2: Функция с одним ограничением
    console.log('\n--- 2. Одиночное ограничение (T extends IFlyable) ---');
    var bird = new examples_1.Bird("Воробей");
    (0, functions_1.makeFly)(bird); // ✅ OK
    (0, functions_1.makeFly)(duck); // ✅ OK (Duck реализует IFlyable)
    var superman = new examples_1.Superman("Супермен");
    (0, functions_1.makeFly)(superman); // ✅ OK
    // const fish = new Fish("Лос   ось");
    // makeFly(fish); // ❌ Ошибка! Fish не летает
    // Пример 3: Ограничение по структуре объекта
    console.log('\n--- 3. Ограничение по структуре ({ name: string }) ---');
    (0, functions_1.printName)(duck); // ✅ У утки есть name
    (0, functions_1.printName)(bird); // ✅ У птицы есть name
    (0, functions_1.printName)({ name: "Анонимный объект" }); // ✅ Любой объект с name
    // Пример 4: Ограничение по ключам (keyof)
    console.log('\n--- 4. Ограничение по ключам (K extends keyof T) ---');
    var user = { id: 1, name: "Иван", email: "ivan@example.com" };
    console.log('ID:', (0, functions_1.getProperty)(user, "id")); // ✅ OK
    console.log('Name:', (0, functions_1.getProperty)(user, "name")); // ✅ OK
    // console.log(getProperty(user, "age")); // ❌ Ошибка! 'age' не существует
    // Пример 5: Ограничение массивом
    console.log('\n--- 5. Ограничение массивом (T extends any[]) ---');
    var numbers = [1, 2, 3, 4, 5];
    var strings = ["a", "b", "c"];
    console.log('First number:', (0, functions_1.getFirstElement)(numbers)); // 1
    console.log('First string:', (0, functions_1.getFirstElement)(strings)); // "a"
    // Пример 6: Ограничение по свойству length
    console.log('\n--- 6. Ограничение по length ({ length: number }) ---');
    console.log('Array length:', (0, functions_1.getLength)([1, 2, 3])); // 3
    console.log('String length:', (0, functions_1.getLength)("Hello")); // 5
    console.log('String length:', (0, functions_1.getLength)("TypeScript")); // 10
    // console.log(getLength(123)); // ❌ Ошибка! number не имеет length
    console.log('');
}
