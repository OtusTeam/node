# TypeScript ООП - Шпаргалка (Cheat Sheet)

## 📚 Быстрый справочник по ООП в TypeScript

### 1️⃣ Базовый класс

```typescript
class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return `Привет, я ${this.name}`;
    }
}

const person = new Person("Иван", 30);
```

---

### 2️⃣ Модификаторы доступа

| Модификатор | Класс | Наследники | Вне класса |
|------------|-------|------------|------------|
| `public`   | ✅    | ✅         | ✅         |
| `protected`| ✅    | ✅         | ❌         |
| `private`  | ✅    | ❌         | ❌         |

```typescript
class Example {
    public publicProp: string;      // доступно везде
    protected protectedProp: string; // в классе и наследниках
    private privateProp: string;     // только в этом классе
}
```

---

### 3️⃣ Наследование

```typescript
class Animal {
    constructor(protected name: string) {}
    
    makeSound(): void {
        console.log("Звук");
    }
}

class Dog extends Animal {
    constructor(name: string, private breed: string) {
        super(name); // вызов конструктора родителя
    }
    
    // Переопределение метода
    makeSound(): void {
        console.log("Гав-гав!");
    }
}
```

---

### 4️⃣ Абстрактные классы

```typescript
abstract class Shape {
    // Абстрактный метод (должен быть реализован в наследниках)
    abstract getArea(): number;
    
    // Обычный метод (может иметь реализацию)
    describe(): void {
        console.log(`Площадь: ${this.getArea()}`);
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// const shape = new Shape(); // ❌ Ошибка!
const circle = new Circle(5);  // ✅ OK
```

---

### 5️⃣ Интерфейсы

```typescript
// Определение интерфейса
interface IUser {
    id: number;
    name: string;
    login(): void;
}

// Реализация интерфейса
class User implements IUser {
    constructor(
        public id: number,
        public name: string
    ) {}
    
    login(): void {
        console.log(`${this.name} вошёл в систему`);
    }
}

// Множественная реализация
interface ILogger {
    log(message: string): void;
}

class Admin implements IUser, ILogger {
    constructor(public id: number, public name: string) {}
    
    login(): void { }
    log(message: string): void { }
}
```

---

### 6️⃣ Геттеры и Сеттеры

```typescript
class User {
    private _age: number;
    
    // Getter
    get age(): number {
        return this._age;
    }
    
    // Setter
    set age(value: number) {
        if (value < 0) throw new Error("Возраст не может быть отрицательным");
        this._age = value;
    }
}

const user = new User();
user.age = 25;           // вызов setter
console.log(user.age);   // вызов getter
```

---

### 7️⃣ Статические члены

```typescript
class MathUtils {
    static PI: number = 3.14159;
    
    static circleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

// Использование без создания экземпляра
console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
```

---

### 8️⃣ Readonly свойства

```typescript
class User {
    readonly id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;     // ✅ OK в конструкторе
        this.name = name;
    }
    
    updateId(newId: number): void {
        // this.id = newId; // ❌ Ошибка!
        this.name = "New"; // ✅ OK
    }
}
```

---

### 9️⃣ Сокращённая запись конструктора

```typescript
// Длинная запись
class UserLong {
    public name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Короткая запись (то же самое)
class UserShort {
    constructor(
        public name: string,
        private age: number
    ) {}
}
```

---

### 🔟 Generic классы

```typescript
class Box<T> {
    private value: T;
    
    constructor(value: T) {
        this.value = value;
    }
    
    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("привет");
```

---

### 1️⃣1️⃣ Композиция vs Наследование

#### Наследование (IS-A)
```typescript
class Animal { }
class Dog extends Animal { } // Собака - это животное
```

#### Композиция (HAS-A)
```typescript
class Engine { }
class Car {
    private engine: Engine; // Машина имеет двигатель
    
    constructor() {
        this.engine = new Engine();
    }
}
```

**Правило:** Предпочитайте композицию наследованию!

---

## 🎯 SOLID Принципы

### **S** - Single Responsibility
```typescript
// ❌ Плохо
class User {
    saveToDatabase() { }
    sendEmail() { }
    generateReport() { }
}

// ✅ Хорошо
class User { }
class UserRepository {
    save(user: User) { }
}
class EmailService {
    send(to: string) { }
}
```

### **O** - Open/Closed
```typescript
// Открыто для расширения, закрыто для модификации
abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    area(): number { return Math.PI * this.r ** 2; }
}
```

### **L** - Liskov Substitution
```typescript
// Объекты подклассов должны заменять объекты базовых классов
function processShape(shape: Shape) {
    return shape.area(); // Работает для любого наследника Shape
}
```

### **I** - Interface Segregation
```typescript
// ❌ Плохо: один большой интерфейс
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

// ✅ Хорошо: несколько маленьких интерфейсов
interface Workable { work(): void; }
interface Eatable { eat(): void; }
interface Sleepable { sleep(): void; }
```

### **D** - Dependency Inversion
```typescript
// Зависимость от абстракций, а не от конкретных реализаций
interface IDatabase {
    save(data: any): void;
}

class MySQLDatabase implements IDatabase {
    save(data: any): void { }
}

class UserService {
    constructor(private db: IDatabase) { } // Зависит от интерфейса
}
```

---

## 🔑 Ключевые различия

### Class vs Interface

| Аспект | Class | Interface |
|--------|-------|-----------|
| Создание экземпляра | ✅ Да | ❌ Нет |
| Реализация методов | ✅ Да | ❌ Нет (только сигнатуры) |
| Наследование | `extends` (одиночное) | `extends` (множественное) |
| Реализация | - | `implements` (множественное) |
| Использование | Во время выполнения | Только во время компиляции |

### Abstract Class vs Interface

| Аспект | Abstract Class | Interface |
|--------|---------------|-----------|
| Реализация методов | ✅ Да | ❌ Нет |
| Множественное наследование | ❌ Нет | ✅ Да |
| Модификаторы доступа | ✅ Да | ❌ Нет |
| Конструктор | ✅ Да | ❌ Нет |

---

## 💡 Лучшие практики

### ✅ DO (Делайте)

```typescript
// 1. Используйте readonly для неизменяемых свойств
class User {
    constructor(readonly id: number) {}
}

// 2. Используйте private для внутренних деталей
class BankAccount {
    private balance: number = 0;
    
    public getBalance(): number {
        return this.balance;
    }
}

// 3. Предпочитайте композицию наследованию
class Car {
    private engine: Engine;
}

// 4. Используйте интерфейсы для контрактов
interface IPaymentProcessor {
    process(amount: number): void;
}

// 5. Используйте сокращённую запись конструктора
class Product {
    constructor(
        public name: string,
        public price: number
    ) {}
}
```

### ❌ DON'T (Не делайте)

```typescript
// 1. Не делайте всё public
class User {
    public password: string; // ❌ Плохо!
}

// 2. Не создавайте глубокие иерархии наследования
class A extends B extends C extends D { } // ❌ Плохо!

// 3. Не используйте any
class Box {
    private value: any; // ❌ Плохо! Используйте generic
}

// 4. Не создавайте God классы (всё в одном)
class Application {
    database() { }
    router() { }
    logger() { }
    email() { }
    // ... ещё 100 методов
}
```

---

## 📖 Дополнительно

### Порядок объявления членов класса

```typescript
class Example {
    // 1. Статические свойства
    static staticProperty: string;
    
    // 2. Свойства экземпляра (public → protected → private)
    public publicProp: string;
    protected protectedProp: string;
    private privateProp: string;
    
    // 3. Конструктор
    constructor() { }
    
    // 4. Статические методы
    static staticMethod(): void { }
    
    // 5. Методы экземпляра
    public publicMethod(): void { }
    protected protectedMethod(): void { }
    private privateMethod(): void { }
    
    // 6. Геттеры и сеттеры
    get value(): string { return ""; }
    set value(v: string) { }
}
```

---

## 🚀 Запуск примеров

```bash
npm run start_oop
```

Или:

```bash
tsc src/samples/oop/index.ts && node src/samples/oop/index.js
```

