// ============================================
// GENERIC FUNCTIONS (Обычные функции)
// ============================================

// Простая generic функция
export function identity<T>(arg: T): T {
    return arg;
}

// Generic функция с массивом
export function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Generic функция с несколькими параметрами
export function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Generic функция для обмена значений в массиве
export function swap<T>(arr: T[], index1: number, index2: number): T[] {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

// Generic функция для фильтрации
export function filter<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of array) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

// Generic функция для маппинга
export function map<T, U>(array: T[], transform: (item: T) => U): U[] {
    const result: U[] = [];
    for (const item of array) {
        result.push(transform(item));
    }
    return result;
}

// Generic функция для поиска
export function find<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
    for (const item of array) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}

