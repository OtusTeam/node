import { IDictionary, IStringArray, INumberDictionary, IUserDictionary } from './IDictionary';

// Пример 1: Словарь цветов (из изображения)
export const colors: IDictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
colors["yellow"] = "#ffff00";

// Пример 2: Словарь переводов
export const translations: IDictionary = {
    "hello": "привет",
    "goodbye": "до свидания",
    "thanks": "спасибо"
};

// Пример 3: Массив строк с числовым индексом
export const fruits: IStringArray = ["яблоко", "банан", "апельсин"];

// Пример 4: Словарь с числовыми значениями (возраст людей)
export const ages: INumberDictionary = {
    "Иван": 30,
    "Мария": 25,
    "Петр": 35
};

// Пример 5: Словарь пользователей с обязательными свойствами
export const users: IUserDictionary = {
    admin: "Администратор",
    guest: "Гость",
    "user1": "Иван Петров",
    "user2": "Мария Иванова"
};

