import { IFlyable } from './IFlyable';
import { ISwimmable } from './ISwimmable';

// Функция с ограничением: T должен реализовывать IFlyable И ISwimmable
export function run<T extends IFlyable & ISwimmable>(arg: T): void {
    arg.fly();
    arg.swim();
    // arg.go(); // ❌ Ошибка: 'go' does not exist on type 'T'
}

// Функция с ограничением: T должен реализовывать только IFlyable
export function makeFly<T extends IFlyable>(creature: T): void {
    creature.fly();
    // creature.swim(); // ❌ Ошибка: swim не гарантирован
}

// Функция с ограничением: T должен иметь свойство name
export function printName<T extends { name: string }>(obj: T): void {
    console.log(`Имя: ${obj.name}`);
}

// Функция с ограничением: K должен быть ключом T
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Функция с ограничением: T должен быть массивом
export function getFirstElement<T extends unknown[]>(arr: T): T[0] | undefined {
    return arr[0];
}

// Функция с ограничением: T должен иметь метод length
export function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

