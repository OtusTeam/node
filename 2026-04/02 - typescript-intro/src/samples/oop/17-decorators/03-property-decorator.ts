// ============================================
// 3. ДЕКОРАТОР СВОЙСТВА (Property Decorator)
// ============================================

// Декоратор для логирования доступа к свойству
function logProperty(target: unknown, propertyKey: string) {
    console.log(`Свойство ${propertyKey} объявлено в классе ${target?.constructor.name}`);
}

// Декоратор для установки значения по умолчанию
function defaultValue<T>(value: T) {
    return function(target: T, propertyKey: string) {
        (target as Record<string, unknown>)[propertyKey] = value;
    };
}

// Декоратор только для чтения
function readonly(target: unknown, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
        writable: false,
        configurable: false
    };
    Object.defineProperty(target, propertyKey, descriptor);
}

export class Person {
    @readonly
    @logProperty
    name: string = "Неизвестно";

    @defaultValue<Person>(new Person())
    person!: Person;
}