// ============================================
// GENERIC CONSTRAINTS (Ограничения обобщений)
// ============================================

// Ограничение: T должен иметь свойство length
export function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

// Ограничение: T должен расширять определенный тип
interface Identifiable {
    id: number;
}

export function findById<T extends Identifiable>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

// Ограничение: использование keyof
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Ограничение: T должен быть конструируемым
export function create<T>(Constructor: new () => T): T {
    return new Constructor();
}

// Ограничение: несколько ограничений
interface Nameable {
    name: string;
}

interface Ageable {
    age: number;
}

export function printInfo<T extends Nameable & Ageable>(entity: T): string {
    return `${entity.name} is ${entity.age} years old`;
}

// Ограничение: comparable
export interface Comparable<T> {
    compareTo(other: T): number;
}

export function max<T extends Comparable<T>>(a: T, b: T): T {
    return a.compareTo(b) > 0 ? a : b;
}

export function sort<T extends Comparable<T>>(array: T[]): T[] {
    return array.slice().sort((a, b) => a.compareTo(b));
}

// Пример класса с Comparable
export class Person implements Comparable<Person> {
    constructor(public name: string, public age: number) {}

    compareTo(other: Person): number {
        return this.age - other.age;
    }
}

// Generic constraint с extends для объектов
export function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Constraint для массивов
export function concatenate<T extends unknown[]>(arr1: T, arr2: T): T {
    return [...arr1, ...arr2] as T;
}

