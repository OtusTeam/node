# Type vs Interface в TypeScript

## 📖 Обзор

Полное руководство по различиям между `type` и `interface` в TypeScript с практическими примерами.

## 🚀 Запуск

```bash
npm run start_type_vs_interface
```

Или напрямую:
```bash
tsc src/samples/type-vs-interface/index.ts && node src/samples/type-vs-interface/index.js
```

---

## 📚 Содержание

### 1. Базовый синтаксис
Основные способы объявления типов и интерфейсов.

### 2. Declaration Merging
Interface можно объявлять несколько раз (они объединятся), Type нельзя.

### 3. Расширение
Interface использует `extends`, Type использует `&` (intersection).

### 4. Union Types
Type может создавать union (`|`), Interface не может.

### 5. Алиасы примитивов
Type может создавать алиасы для примитивов, tuple, функций.

### 6. Mapped Types
Type поддерживает mapped и conditional типы.

### 7. Классы
Оба могут использоваться с классами через `implements`.

### 8. Когда что использовать
Практические рекомендации по выбору между type и interface.

---

## 🔍 Основные различия

### Таблица сравнения

| Возможность | Interface | Type |
|------------|-----------|------|
| Описание объектов | ✅ | ✅ |
| Расширение | ✅ `extends` | ✅ `&` |
| Declaration Merging | ✅ | ❌ |
| Union типы | ❌ | ✅ |
| Intersection типы | ❌ (через extends) | ✅ |
| Tuple types | ❌ | ✅ |
| Primitive aliases | ❌ | ✅ |
| Mapped types | ❌ | ✅ |
| Conditional types | ❌ | ✅ |
| Использование с классами | ✅ | ✅ |

---

## 📝 Примеры

### Interface - Расширение
```typescript
interface IPerson {
    name: string;
}

interface IEmployee extends IPerson {
    employeeId: number;
}
```

### Type - Union
```typescript
type Status = "pending" | "approved" | "rejected";
type ID = string | number;
```

### Type - Tuple
```typescript
type Point = [number, number];
type RGB = [number, number, number];
```

### Interface - Declaration Merging
```typescript
interface IUser {
    name: string;
}

interface IUser {  // ✅ Объединятся!
    age: number;
}

// Результат: { name: string; age: number; }
```

### Type - Mapped Types
```typescript
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

type Partial<T> = {
    [K in keyof T]?: T[K];
};
```

---

## 💡 Когда использовать Interface

✅ **Используйте Interface для:**

1. **Публичного API** - может потребоваться расширение пользователями
```typescript
interface IPlugin {
    name: string;
    init(): void;
}
```

2. **Контрактов для классов**
```typescript
interface IRepository<T> {
    findById(id: string): T | null;
    save(entity: T): void;
}

class UserRepository implements IRepository<User> {
    // реализация
}
```

3. **Описания формы объектов**
```typescript
interface IUserData {
    id: number;
    name: string;
    email: string;
}
```

4. **Когда нужно Declaration Merging**
```typescript
interface Window {
    myCustomProperty: string;
}
```

---

## 💡 Когда использовать Type

✅ **Используйте Type для:**

1. **Union типов**
```typescript
type Status = "idle" | "loading" | "success" | "error";
type Result = string | number | boolean;
```

2. **Tuple типов**
```typescript
type Coordinates = [number, number];
type RGB = [number, number, number];
```

3. **Primitive aliases**
```typescript
type UserID = string;
type Age = number;
type Email = string;
```

4. **Mapped types**
```typescript
type Nullable<T> = { [K in keyof T]: T[K] | null };
type Readonly<T> = { readonly [K in keyof T]: T[K] };
```

5. **Conditional types**
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

6. **Intersection типов**
```typescript
type Timestamped = { createdAt: Date; updatedAt: Date };
type User = { id: number; name: string };
type UserWithTimestamp = User & Timestamped;
```

7. **Function types**
```typescript
type Validator<T> = (value: T) => boolean;
type Mapper<T, U> = (input: T) => U;
```

---

## 🎯 Простое правило

> **Interface** для структуры объектов и контрактов  
> **Type** для всего остального

---

## ⚠️ Частые ошибки

### ❌ Неправильно
```typescript
// Попытка создать union с interface
interface IStatus = "pending" | "approved";  // Ошибка!

// Попытка переопределить type
type User = { name: string };
type User = { age: number };  // Ошибка!
```

### ✅ Правильно
```typescript
// Union с type
type Status = "pending" | "approved";

// Declaration Merging с interface
interface IUser {
    name: string;
}
interface IUser {
    age: number;
}
```

---

## 🔗 Связанные примеры

- `samples/oop/06-interfaces/` - Примеры интерфейсов с классами
- `samples/oop/13-function-interfaces/` - Интерфейсы функций
- `samples/oop/14-indexable-types/` - Индексируемые типы

---

## 📚 Дополнительные ресурсы

- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Handbook - Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
- [Interfaces vs Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

---

## 🎓 Практические советы

1. **Consistency** - выберите стиль команды и следуйте ему
2. **Public API** - используйте Interface для библиотек
3. **React Props** - любой вариант (но Interface популярнее)
4. **Complex types** - используйте Type для сложных преобразований
5. **Extensibility** - Interface если нужна возможность расширения

---

**Создано для изучения TypeScript** 📘

