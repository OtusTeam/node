// ============================================
// 1. БАЗОВЫЙ КЛАСС (Basic Class)
// ============================================

export class Person {
    // Свойства (Properties)
    name: string;
    age: number;

    // Конструктор (Constructor)
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Метод (Method)
    introduce(): string {
        return `Меня зовут ${this.name}, мне ${this.age} лет.`;
    }
}

