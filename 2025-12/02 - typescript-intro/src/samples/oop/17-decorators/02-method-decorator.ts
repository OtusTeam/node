// ============================================
// 2. ДЕКОРАТОР МЕТОДА (Method Decorator)
// ============================================

// Декоратор для логирования вызова метода
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {  // eslint-disable-line @typescript-eslint/no-explicit-any
        console.log(`Вызов метода ${propertyKey} с аргументами:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Результат метода ${propertyKey}:`, result);
        return result;
    };
    
    return descriptor;
}

// Декоратор для измерения времени выполнения
function measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {  // eslint-disable-line @typescript-eslint/no-explicit-any
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey} выполнен за ${(end - start).toFixed(2)}мс`);
        return result;
    };
    
    return descriptor;
}

// Декоратор для валидации
function validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {  // eslint-disable-line @typescript-eslint/no-explicit-any
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {  // eslint-disable-line @typescript-eslint/no-explicit-any    
        if (args.some(arg => arg == null)) {
            throw new Error(`${propertyKey}: аргументы не могут быть null или undefined`);
        }
        return originalMethod.apply(this, args);
    };
    
    return descriptor;
}

export class Calculator {
    @log
    @measure
    @validate
    add(a: number, b: number): number {
        return a + b;
    }
    
    @log
    divide(a: number, b: number): number {
        if (b === 0) throw new Error('Деление на ноль!');
        return a / b;
    }
}

export function demoMethodDecorator(): void {
    console.log('\n--- 2. Декораторы метода ---');
    
    const calc = new Calculator();
    
    console.log('Примеры декораторов методов:');
    console.log('- @log - логирование вызовов');
    console.log('- @measure - измерение времени');
    console.log('- @validate - валидация аргументов');
    
    console.log('\nВызов add(5, 3):');
    const result = calc.add(5, 3);
    console.log('Результат:', result);
    
    console.log('\nВызов divide(10, 2):');
    const result2 = calc.divide(10, 2);
    console.log('Результат:', result2);
}

