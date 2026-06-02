"use strict";
// ============================================
// 3. ДЕКОРАТОР СВОЙСТВА (Property Decorator)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
exports.demoPropertyDecorator = demoPropertyDecorator;
// Декоратор для логирования доступа к свойству
function logProperty(target, propertyKey) {
    console.log("\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E ".concat(propertyKey, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u043E \u0432 \u043A\u043B\u0430\u0441\u0441\u0435 ").concat(target.constructor.name));
}
// Декоратор для установки значения по умолчанию
function defaultValue(value) {
    return function (target, propertyKey) {
        target[propertyKey] = value;
    };
}
// Декоратор только для чтения
function readonly(target, propertyKey) {
    var descriptor = {
        writable: false,
        configurable: false
    };
    Object.defineProperty(target, propertyKey, descriptor);
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = "Неизвестно";
        this.age = 0;
        if (name)
            this.name = name;
        if (age)
            this.age = age;
    }
    return Person;
}());
exports.Person = Person;
function demoPropertyDecorator() {
    console.log('\n--- 3. Декораторы свойства ---');
    console.log('Примеры декораторов свойств:');
    console.log('- @logProperty - логирование объявления');
    console.log('- @defaultValue - значение по умолчанию');
    console.log('- @readonly - только для чтения');
    var person1 = new Person();
    console.log('\nPerson1 (без параметров):', person1);
    var person2 = new Person("Иван", 30);
    console.log('Person2 (с параметрами):', person2);
}
