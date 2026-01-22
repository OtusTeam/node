import { Age } from './../type-vs-interface/08-when-to-use';
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
const decimal: number = 42;
const float: number = 3.14;
const hex: number = 0xf00d;
// const binary: number = 0b1010;
// const octal: number = 0o744;

console.log('Decimal:', decimal); // 42
console.log('Float:', float); // 3.14
console.log('Hex:', hex); // 61453


// ============================================
// 3. STRING - строки
// ============================================
const firstName: string = "Иван";
const lastName: string = 'Петров';
const fullName: string = `${firstName} ${lastName}`;

console.log('Full name:', fullName); // Иван Петров


// ============================================
// 4. ARRAY - массивы
// ============================================
// Способ 1: с использованием type[]
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["яблоко", "банан", "апельсин"];

// Способ 2: с использованием Array<type>
const colors: string[] = ["красный", "зеленый", "синий"];  
console.log('Colors:', colors); // ["красный", "зеленый", "синий"]
console.log('Numbers:', numbers); // [1, 2, 3, 4, 5]
console.log('First fruit:', fruits[0]); // яблоко


// ============================================
// 5. TUPLE - кортежи
// ============================================
// Кортеж - массив с фиксированным количеством элементов известных типов
const person: [string, number] = ["Алексей", 25];
console.log('Person:', person); // ["Алексей", 25]
console.log('Name:', person[0]); // Алексей
console.log('Age:', person[1]); // 25

// ============================================
// 6. ENUM - перечисления
// ============================================
// Числовые enum
enum Color {
    Red,
    Green,
    Blue
}
const favoriteColor: Color = Color.Blue;
console.log('Favorite color:', favoriteColor); // 2

// Строковые enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
const move: Direction = Direction.Up;
console.log('Move direction:', move); // UP

// Enum с пользовательскими значениями
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}
const httpStatus: HttpStatus = HttpStatus.OK;
console.log('HTTP Status:', httpStatus); // 200


// ============================================
// 7. ANY - произвольный тип
// ============================================
// any отключает проверку типов
let anyValue: unknown = 42;   // const anyValue: unknown = 42;  
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
const nullValue: null = null;
const undefinedValue: undefined = undefined;
console.log('Null:', nullValue); // null
console.log('Undefined:', undefinedValue); // undefined
// Часто используются в union типах
let optional: string | null = null;
optional = "теперь строка";
console.log('Optional:', optional); // теперь строка

// ============================================
// 9. VOID - отсутствие значения
// ============================================
// Используется для функций, которые ничего не возвращают
const logMessage = (message: string): void => {
    console.log(message);
    // нет return
}

const printNumber = (num: number): void => {
    console.log('Number:', num);
}

logMessage("Привет, мир!"); // Привет, мир!
printNumber(100); // Number: 100


// ============================================
// 10. NEVER - тип для функций, которые никогда не возвращают значение
// ============================================
// Функция, которая всегда выбрасывает ошибку
const throwError = (message: string): never => {
    throw new Error(message);
}

// Пример использования
const processValue = (value: string | number): void => {
    if (typeof value === "string") {
        console.log("String:", value);
    } else if (typeof value === "number") {
        console.log("Number:", value);
    } else {
        // value имеет тип never, так как все варианты обработаны
        throwError("Неожиданный тип");
    }
}

processValue("hello");


// ============================================
// 11. UNKNOWN - неизвестный тип (безопасная альтернатива any)
// ============================================
let unknownValue: unknown = 42;
unknownValue = "строка";
unknownValue = { key: "value" };

// Нельзя использовать без проверки типа
// let str: string = unknownValue; // Ошибка!

// Нужна проверка типа перед использованием
if (typeof unknownValue === "string") {
    const str: string = unknownValue; // OK
    console.log('String length:', str.length);
}

// Безопасная работа с unknown
const processUnknown = (value: unknown): void => {
    if (typeof value === "number") {
        console.log('Number squared:', value * value);
    } else if (typeof value === "string") {
        console.log('String upper:', value.toUpperCase());
    } else if (Array.isArray(value)) {
        console.log('Array length:', value.length);
    } else {
        console.log('Unknown type');
    }
}

processUnknown(unknownValue);


// ============================================
// ДОПОЛНИТЕЛЬНЫЕ ПРИМЕРЫ
// ============================================

// Union Types - объединение типов
const mixedValue: string | number = "hello";
console.log('Mixed value:', mixedValue);
// mixedValue = true; // Ошибка!

// Literal Types - литеральные типы
let traffic: "red" | "yellow" | "green" = "red";
traffic = "red";
console.log('Traffic:', traffic);


// ============================================
// ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ
// ============================================

// Функция с различными типами параметров
function greet(name: string, age: number): string {
    return `Привет, ${name}! Тебе ${age} лет.`;
}

console.log(greet("Дмитрий", 30)); // Привет, Дмитрий! Тебе 30 лет.

// Функция с optional параметрами
function createUser(name: string, age?: number): void {
    if (age) {
        console.log(`Пользователь: ${name}, возраст: ${age}`);
    } else {
        console.log(`Пользователь: ${name}, возраст не указан`);
    }
}

createUser("Анна", 25); // Пользователь: Анна, возраст: 25
createUser("Борис"); // Пользователь: Борис, возраст не указан