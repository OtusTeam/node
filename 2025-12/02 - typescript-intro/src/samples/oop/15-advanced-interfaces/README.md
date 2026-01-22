# 15. Продвинутые интерфейсы (Advanced Interfaces)

## Описание

Этот модуль демонстрирует продвинутые возможности интерфейсов в TypeScript:
- Интерфейсы с методами
- Опциональные свойства
- Readonly свойства
- Гибридные интерфейсы

## Примеры в этом модуле

### 1. ICalculator - Интерфейс с методами
```typescript
interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}
```

**Реализация через класс:**
```typescript
class Calculator implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }
    // ...
}
```

**Реализация через объект:**
```typescript
const calc: ICalculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
```

### 2. IConfig - Опциональные и readonly свойства
```typescript
interface IConfig {
    apiUrl: string;           // Обязательное
    timeout?: number;         // Опциональное
    retries?: number;         // Опциональное
    readonly version: string; // Только для чтения
}
```

**Использование:**
```typescript
const config: IConfig = {
    apiUrl: "https://api.example.com",
    version: "1.0.0"
    // timeout и retries можно не указывать
};

// config.version = "2.0.0"; // ❌ Ошибка - readonly!
```

### 3. ICounter - Гибридный интерфейс
```typescript
interface ICounter {
    (start: number): string;  // Вызываемый как функция
    interval: number;         // Свойство
    reset(): void;            // Метод
}
```

Гибридный интерфейс объединяет:
- Функциональный интерфейс (можно вызвать)
- Объектный интерфейс (есть свойства и методы)

## Опциональные свойства (?)

```typescript
interface IUser {
    id: number;
    name: string;
    email?: string;      // Может быть undefined
    phone?: string;      // Может быть undefined
}

const user1: IUser = { id: 1, name: "Иван" };                    // ✅ OK
const user2: IUser = { id: 2, name: "Мария", email: "m@m.ru" }; // ✅ OK
```

## Readonly свойства

```typescript
interface IBook {
    readonly isbn: string;
    title: string;
}

const book: IBook = {
    isbn: "978-5-17-123456-7",
    title: "Война и мир"
};

book.title = "Анна Каренина";  // ✅ OK
// book.isbn = "new";          // ❌ Ошибка - readonly!
```

## Расширение интерфейсов

```typescript
interface IAnimal {
    name: string;
    age: number;
}

interface IDog extends IAnimal {
    breed: string;
    bark(): void;
}

const dog: IDog = {
    name: "Бобик",
    age: 3,
    breed: "Овчарка",
    bark() { console.log("Гав!"); }
};
```

## Множественное расширение

```typescript
interface ICanWalk {
    walk(): void;
}

interface ICanSwim {
    swim(): void;
}

interface IDuck extends ICanWalk, ICanSwim {
    quack(): void;
}

const duck: IDuck = {
    walk() { console.log("Идёт"); },
    swim() { console.log("Плывёт"); },
    quack() { console.log("Кря-кря"); }
};
```

## Примеры из реального мира

### API Response
```typescript
interface IApiResponse<T> {
    data?: T;
    error?: string;
    status: number;
    readonly timestamp: number;
}

const response: IApiResponse<User> = {
    data: { id: 1, name: "Иван" },
    status: 200,
    timestamp: Date.now()
};
```

### Component Props (React-style)
```typescript
interface IButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
    className?: string;
}
```

### Service Interface
```typescript
interface IUserService {
    getUser(id: number): Promise<User>;
    createUser(data: CreateUserDto): Promise<User>;
    updateUser(id: number, data: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
```

## Разница: Interface vs Type

```typescript
// Interface - можно расширять
interface IUser {
    name: string;
}

interface IUser {  // ✅ Объединение (Declaration Merging)
    age: number;
}

// Type - нельзя переопределять
type User = {
    name: string;
}

// type User = {  // ❌ Ошибка!
//     age: number;
// }
```

## Когда использовать интерфейсы?

✅ **Используйте интерфейсы для:**
- Описания формы объектов
- Контрактов для классов
- API и публичных интерфейсов
- Когда нужно Declaration Merging

✅ **Используйте type для:**
- Union types: `type ID = string | number`
- Tuple types: `type Point = [number, number]`
- Mapped types: `type Readonly<T> = ...`
- Алиасов примитивов: `type ID = string`

## Запуск примера

```bash
npm run start_oop
```

## Полезные ссылки

- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Interface vs Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

