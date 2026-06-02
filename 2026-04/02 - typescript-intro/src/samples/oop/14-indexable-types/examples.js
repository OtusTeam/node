"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.ages = exports.fruits = exports.translations = exports.colors = void 0;
// Пример 1: Словарь цветов (из изображения)
exports.colors = {};
exports.colors["red"] = "#ff0000";
exports.colors["green"] = "#00ff00";
exports.colors["blue"] = "#0000ff";
exports.colors["yellow"] = "#ffff00";
// Пример 2: Словарь переводов
exports.translations = {
    "hello": "привет",
    "goodbye": "до свидания",
    "thanks": "спасибо"
};
// Пример 3: Массив строк с числовым индексом
exports.fruits = ["яблоко", "банан", "апельсин"];
// Пример 4: Словарь с числовыми значениями (возраст людей)
exports.ages = {
    "Иван": 30,
    "Мария": 25,
    "Петр": 35
};
// Пример 5: Словарь пользователей с обязательными свойствами
exports.users = {
    admin: "Администратор",
    guest: "Гость",
    "user1": "Иван Петров",
    "user2": "Мария Иванова"
};
