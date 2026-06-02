"use strict";
// ============================================
// 2. ДЕКОРАТОР МЕТОДА (Method Decorator)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
exports.demoMethodDecorator = demoMethodDecorator;
// Декоратор для логирования вызова метода
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("\u0412\u044B\u0437\u043E\u0432 \u043C\u0435\u0442\u043E\u0434\u0430 ".concat(propertyKey, " \u0441 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438:"), args);
        var result = originalMethod.apply(this, args);
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043C\u0435\u0442\u043E\u0434\u0430 ".concat(propertyKey, ":"), result);
        return result;
    };
    return descriptor;
}
// Декоратор для измерения времени выполнения
function measure(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var start = performance.now();
        var result = originalMethod.apply(this, args);
        var end = performance.now();
        console.log("".concat(propertyKey, " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0437\u0430 ").concat((end - start).toFixed(2), "\u043C\u0441"));
        return result;
    };
    return descriptor;
}
// Декоратор для валидации
function validate(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.some(function (arg) { return arg == null; })) {
            throw new Error("".concat(propertyKey, ": \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C null \u0438\u043B\u0438 undefined"));
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0)
            throw new Error('Деление на ноль!');
        return a / b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
function demoMethodDecorator() {
    console.log('\n--- 2. Декораторы метода ---');
    var calc = new Calculator();
    console.log('Примеры декораторов методов:');
    console.log('- @log - логирование вызовов');
    console.log('- @measure - измерение времени');
    console.log('- @validate - валидация аргументов');
    console.log('\nВызов add(5, 3):');
    var result = calc.add(5, 3);
    console.log('Результат:', result);
    console.log('\nВызов divide(10, 2):');
    var result2 = calc.divide(10, 2);
    console.log('Результат:', result2);
}
