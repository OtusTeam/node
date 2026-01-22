// ============================================
// Типы данных TypeScript - Простые примеры
// ============================================
// ============================================
// 1. BOOLEAN - логическое значение true или false
// ============================================
// const isActive: boolean = true;
// const isCompleted: boolean = false;
// console.log('Boolean:', isActive); // true
// console.log('Is completed?', isCompleted); // false
// ============================================
// 2. NUMBER - числовое значение
// ============================================
var decimal = 42;
var float = 3.14;
var hex = 0xf00d;
// const binary: number = 0b1010;
// const octal: number = 0o744;
console.log('Decimal:', decimal); // 42
console.log('Float:', float); // 3.14
console.log('Hex:', hex); // 61453
// ============================================
// 3. STRING - строки
// ============================================
var firstName = "Иван";
var lastName = 'Петров';
var fullName = "".concat(firstName, " ").concat(lastName);
console.log('Full name:', fullName); // Иван Петров
// ============================================
// 4. ARRAY - массивы
// ============================================
// Способ 1: с использованием type[]
var numbers = [1, 2, 3, 4, 5];
var fruits = ["яблоко", "банан", "апельсин"];
// Способ 2: с использованием Array<type>
var colors = ["красный", "зеленый", "синий"];
console.log('Colors:', colors); // ["красный", "зеленый", "синий"]
console.log('Numbers:', numbers); // [1, 2, 3, 4, 5]
console.log('First fruit:', fruits[0]); // яблоко
// ============================================
// 5. TUPLE - кортежи
// ============================================
// Кортеж - массив с фиксированным количеством элементов известных типов
var person = ["Алексей", 25];
console.log('Person:', person); // ["Алексей", 25]
console.log('Name:', person[0]); // Алексей
console.log('Age:', person[1]); // 25
// ============================================
// 6. ENUM - перечисления
// ============================================
// Числовые enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
console.log('Favorite color:', favoriteColor); // 2
// Строковые enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log('Move direction:', move); // UP
// Enum с пользовательскими значениями
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
var httpStatus = HttpStatus.OK;
console.log('HTTP Status:', httpStatus); // 200
// ============================================
// 7. ANY - произвольный тип
// ============================================
// any отключает проверку типов
var anyValue = 42; // const anyValue: unknown = 42;  
console.log('Any value:', anyValue); // 42
anyValue = "теперь это строка";
console.log('Any value:', anyValue); // теперь это строка
anyValue = true;
console.log('Any value:', anyValue); // true
anyValue = { name: "объект" };
console.log('Any value:', anyValue); // { name: "объект" }
// ============================================
// 8. NULL и UNDEFINED
// ============================================
var nullValue = null;
var undefinedValue = undefined;
console.log('Null:', nullValue); // null
console.log('Undefined:', undefinedValue); // undefined
// Часто используются в union типах
var optional = null;
optional = "теперь строка";
console.log('Optional:', optional); // теперь строка
// ============================================
// 9. VOID - отсутствие значения
// ============================================
// Используется для функций, которые ничего не возвращают
var logMessage = function (message) {
    console.log(message);
    // нет return
};
var printNumber = function (num) {
    console.log('Number:', num);
};
logMessage("Привет, мир!"); // Привет, мир!
printNumber(100); // Number: 100
// ============================================
// 10. NEVER - тип для функций, которые никогда не возвращают значение
// ============================================
// Функция, которая всегда выбрасывает ошибку
var throwError = function (message) {
    throw new Error(message);
};
// Пример использования
var processValue = function (value) {
    if (typeof value === "string") {
        console.log("String:", value);
    }
    else if (typeof value === "number") {
        console.log("Number:", value);
    }
    else {
        // value имеет тип never, так как все варианты обработаны
        throwError("Неожиданный тип");
    }
};
processValue("hello");
// ============================================
// 11. UNKNOWN - неизвестный тип (безопасная альтернатива any)
// ============================================
var unknownValue = 42;
unknownValue = "строка";
unknownValue = { key: "value" };
// Нельзя использовать без проверки типа
// let str: string = unknownValue; // Ошибка!
// Нужна проверка типа перед использованием
if (typeof unknownValue === "string") {
    var str = unknownValue; // OK
    console.log('String length:', str.length);
}
// Безопасная работа с unknown
var processUnknown = function (value) {
    if (typeof value === "number") {
        console.log('Number squared:', value * value);
    }
    else if (typeof value === "string") {
        console.log('String upper:', value.toUpperCase());
    }
    else if (Array.isArray(value)) {
        console.log('Array length:', value.length);
    }
    else {
        console.log('Unknown type');
    }
};
processUnknown(unknownValue);
// ============================================
// ДОПОЛНИТЕЛЬНЫЕ ПРИМЕРЫ
// ============================================
// Union Types - объединение типов
var mixedValue = "hello";
console.log('Mixed value:', mixedValue);
// mixedValue = true; // Ошибка!
// Literal Types - литеральные типы
var traffic = "red";
traffic = "red";
console.log('Traffic:', traffic);
// ============================================
// ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ
// ============================================
// Функция с различными типами параметров
function greet(name, age) {
    return "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "! \u0422\u0435\u0431\u0435 ").concat(age, " \u043B\u0435\u0442.");
}
console.log(greet("Дмитрий", 30)); // Привет, Дмитрий! Тебе 30 лет.
// Функция с optional параметрами
function createUser(name, age) {
    if (age) {
        console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C: ".concat(name, ", \u0432\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(age));
    }
    else {
        console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C: ".concat(name, ", \u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D"));
    }
}
createUser("Анна", 25); // Пользователь: Анна, возраст: 25
createUser("Борис"); // Пользователь: Борис, возраст не указан
