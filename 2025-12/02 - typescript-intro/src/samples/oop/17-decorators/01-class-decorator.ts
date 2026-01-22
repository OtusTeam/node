// ============================================
// 1. ДЕКОРАТОР КЛАССА (Class Decorator)
// ============================================

// Простой декоратор класса 
function sealed(constructor: any) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log(`Класс ${constructor.name} запечатан`);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Декоратор с логированием
function logger(constructor: any) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log(`Создан класс: ${constructor.name}`);
}

@sealed
@logger
export class User {
    constructor(public name: string) {}
}

// Декоратор, который добавляет свойство
function addTimestamp<T extends { new(...args: any[]): object }>(constructor: T) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    return class extends constructor {
        createdAt = new Date();
    };
}

@addTimestamp
export class Product {
    constructor(public name: string, public price: number) {}
}

export function demoClassDecorator(): void {
    console.log('\n--- 1. Декораторы класса ---');
    
    const user = new User("Иван");
    console.log('User:', user);
    
    const product = new Product("Ноутбук", 50000) as any;  // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log('Product:', product);
    console.log('Created at:', product.createdAt);
}

