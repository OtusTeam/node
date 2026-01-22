// ============================================
// ИНТЕРФЕЙСЫ МАССИВОВ И СЛОВАРЕЙ (Indexable Types)
// ============================================

// Интерфейс для словаря (Dictionary) - доступ по строковому ключу
export interface IDictionary {
    [index: string]: string;
}

// Интерфейс для массива с числовым индексом
export interface IStringArray {
    [index: number]: string;
}

// Интерфейс для числового словаря
export interface INumberDictionary {
    [key: string]: number;
}

// Смешанный интерфейс - с индексом и обычными свойствами
export interface IUserDictionary {
    [userId: string]: string;  // Индексная сигнатура
    admin: string;              // Обязательное свойство
    guest: string;              // Обязательное свойство
}

