# ООП в TypeScript (Object-Oriented Programming)

Примеры объектно-ориентированного программирования в TypeScript.

## Запуск примеров

```bash
npm run start_oop
```

Или напрямую:
```bash
tsc src/samples/oop/index.ts && node src/samples/oop/index.js
```

## Основные концепции ООП

### 1. **Классы (Classes)**
Базовые строительные блоки ООП
```typescript
class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

### 2. **Модификаторы доступа (Access Modifiers)**
- `public` - доступно везде (по умолчанию)
- `private` - доступно только внутри класса
- `protected` - доступно в классе и его наследниках

```typescript
class BankAccount {
    public accountHolder: string;    // доступно везде
    private balance: number;         // только внутри класса
    protected accountNumber: string; // в классе и наследниках
}
```

### 3. **Наследование (Inheritance)**
Позволяет создавать новые классы на основе существующих
```typescript
class Animal {
    makeSound(): void { }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Гав-гав!");
    }
}
```

### 4. **Полиморфизм (Polymorphism)**
Способность объектов разных классов реагировать на одинаковые методы по-разному
```typescript
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound()); // Каждое животное издаёт свой звук
```

### 5. **Абстрактные классы (Abstract Classes)**
Классы, которые не могут быть инстанцированы напрямую
```typescript
abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;
}

class Circle extends Shape {
    getArea(): number { return Math.PI * this.radius ** 2; }
    getPerimeter(): number { return 2 * Math.PI * this.radius; }
}
```

### 6. **Интерфейсы (Interfaces)**
Контракты, определяющие структуру объектов
```typescript
interface IVehicle {
    brand: string;
    speed: number;
    start(): void;
    stop(): void;
}

class Car implements IVehicle {
    // должен реализовать все методы интерфейса
}
```

### 7. **Геттеры и Сеттеры (Getters & Setters)**
Контролируемый доступ к свойствам
```typescript
class Temperature {
    private _celsius: number;
    
    get celsius(): number {
        return this._celsius;
    }
    
    set celsius(value: number) {
        if (value < -273.15) throw new Error();
        this._celsius = value;
    }
}
```

### 8. **Статические члены (Static Members)**
Свойства и методы, принадлежащие классу, а не экземпляру
```typescript
class MathHelper {
    static PI: number = 3.14159;
    
    static circleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathHelper.circleArea(5)); // Без создания экземпляра
```

### 9. **Readonly свойства**
Свойства, которые можно установить только при инициализации
```typescript
class Book {
    readonly isbn: string;
    
    constructor(isbn: string) {
        this.isbn = isbn;
        // this.isbn = "new"; // ❌ Ошибка
    }
}
```

### 10. **Сокращённая запись конструктора**
TypeScript позволяет объявлять свойства прямо в параметрах конструктора
```typescript
class User {
    constructor(
        public username: string,
        private password: string,
        public readonly id: number
    ) {}
}
```

### 11. **Композиция (Composition)**
Создание сложных объектов из простых
```typescript
class Engine {
    start(): void { }
}

class Car {
    private engine: Engine;
    
    constructor() {
        this.engine = new Engine();
    }
}
```

### 12. **Generic классы**
Классы, работающие с различными типами данных
```typescript
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
const stringStack = new Stack<string>();
```

## Принципы ООП (SOLID)

### S - Single Responsibility Principle
Каждый класс должен иметь одну ответственность

### O - Open/Closed Principle
Классы открыты для расширения, но закрыты для модификации

### L - Liskov Substitution Principle
Объекты подклассов должны заменять объекты базовых классов

### I - Interface Segregation Principle
Много специализированных интерфейсов лучше одного универсального

### D - Dependency Inversion Principle
Зависимость от абстракций, а не от конкретных реализаций

## Когда использовать ООП?

✅ **Используйте ООП когда:**
- Нужно моделировать реальные объекты
- Есть сложная бизнес-логика
- Требуется повторное использование кода
- Нужна чёткая структура и иерархия

❌ **Не используйте ООП когда:**
- Задача очень простая
- Функциональный подход более подходит
- Создание классов усложняет код без пользы

## Дополнительные ресурсы

- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [SOLID принципы](https://en.wikipedia.org/wiki/SOLID)

