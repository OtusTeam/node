# Namespaces в TypeScript

## 📖 Описание

Полное руководство по работе с namespaces (пространствами имён) в TypeScript: организация кода, вложенные namespaces, слияние, псевдонимы и сравнение с модулями.

## 🚀 Запуск

```bash
npm run start_namespaces
```

Или напрямую:
```bash
tsc src/samples/namespaces/index.ts && node src/samples/namespaces/index.js
```

---

## 📚 Содержание

### 1. Базовый Namespace

Основной способ организации кода через namespaces.

```typescript
namespace Geometry {
  // Экспортируемые функции
  export function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // Приватная функция (без export)
  function validatePositive(value: number): boolean {
    return value > 0;
  }

  export const PI = Math.PI;
}

// Использование
Geometry.calculateCircleArea(5);
Geometry.PI;
```

**Ключевые моменты:**
- `export` делает члены доступными снаружи
- Без `export` - приватные члены
- Глобальная область видимости

---

### 2. Вложенные Namespaces

Создание иерархии namespaces.

```typescript
namespace Shapes {
  export namespace TwoDimensional {
    export class Circle {
      constructor(public radius: number) {}
      
      area(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
  }

  export namespace ThreeDimensional {
    export class Sphere {
      constructor(public radius: number) {}
      
      volume(): number {
        return (4/3) * Math.PI * Math.pow(this.radius, 3);
      }
    }
  }
}

// Использование
const circle = new Shapes.TwoDimensional.Circle(5);
const sphere = new Shapes.ThreeDimensional.Sphere(5);
```

**Применение:**
- Логическая группировка по категориям
- Избежание конфликтов имён
- Чёткая структура проекта

---

### 3. Слияние Namespaces (Merging)

TypeScript автоматически объединяет несколько объявлений одного namespace.

```typescript
// Первое объявление
namespace Validation {
  export function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Второе объявление - сольётся с первым!
namespace Validation {
  export function validatePassword(password: string): boolean {
    return password.length >= 8;
  }
}

// Третье объявление - добавляем интерфейсы
namespace Validation {
  export interface ValidationResult {
    isValid: boolean;
    message?: string;
  }
}

// Все функции и интерфейсы доступны
Validation.validateEmail("test@example.com");
Validation.validatePassword("secret123");
const result: Validation.ValidationResult = { isValid: true };
```

**Преимущества:**
- Постепенное расширение API
- Разделение кода на файлы
- Модульное добавление функциональности

---

### 4. Псевдонимы Namespaces

Упрощение доступа к вложенным namespaces.

```typescript
namespace Company {
  export namespace Product {
    export namespace Features {
      export namespace Advanced {
        export class Processor {
          process(data: string): string {
            return data.toUpperCase();
          }
        }
      }
    }
  }
}

// Без псевдонима (длинно!)
const p1 = new Company.Product.Features.Advanced.Processor();

// С псевдонимом (короче!)
import AdvProc = Company.Product.Features.Advanced;
const p2 = new AdvProc.Processor();

// Псевдоним для конкретного класса
import Proc = Company.Product.Features.Advanced.Processor;
const p3 = new Proc();
```

**Применение:**
- Упрощение длинных путей
- Улучшение читаемости кода
- Локальные имена для удобства

---

### 5. Namespaces с Интерфейсами и Типами

Организация типов и интерфейсов в namespace.

```typescript
namespace Database {
  // Интерфейсы
  export interface IUser {
    id: number;
    name: string;
    email: string;
  }

  // Типы
  export type UserId = number;
  
  export type QueryResult<T> = {
    data: T[];
    total: number;
  };

  // Енум
  export enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
  }

  // Классы
  export class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
      this.items.push(item);
    }
    
    getAll(): T[] {
      return [...this.items];
    }
  }
}

// Использование
const repo = new Database.Repository<Database.IUser>();
const user: Database.IUser = {
  id: 1,
  name: "John",
  email: "john@example.com"
};
repo.add(user);
```

**Преимущества:**
- Логическая группировка типов
- Избежание глобального загрязнения
- Чёткая принадлежность типов

---

### 6. Namespace vs Module

Сравнение двух подходов к организации кода.

#### Namespace
```typescript
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
  
  // Приватная функция
  function validate(n: number): boolean {
    return !isNaN(n);
  }
}

// Использование
MathUtils.add(1, 2);
```

#### Module (ES6)
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// Приватная функция (не экспортируем)
function validate(n: number): boolean {
  return !isNaN(n);
}

// app.ts
import { add } from './math';
add(1, 2);
```

---

## 📊 Сравнительная таблица

| Характеристика | Namespace | Module (ES6) |
|----------------|-----------|--------------|
| **Синтаксис** | `namespace Name { }` | `export/import` |
| **Область видимости** | Глобальная | Изолированная |
| **Слияние объявлений** | ✅ Да | ❌ Нет |
| **Tree-shaking** | ❌ Нет | ✅ Да |
| **Современность** | Устаревает | Стандарт |
| **Приватные члены** | Без `export` | Не экспортируем |
| **Использование** | `.d.ts`, легаси | Современные проекты |
| **Вложенность** | Простая | Через структуру папок |
| **Загрузка** | Сразу всё | По требованию |

---

## 🎯 Когда использовать?

### ✅ Используйте NAMESPACE когда:

```typescript
// 1. Type definitions файлы (.d.ts)
declare namespace MyLib {
  export function init(): void;
  export interface Config {
    apiKey: string;
  }
}

// 2. Внутренняя организация библиотеки
namespace InternalAPI {
  export namespace Utils {
    export function helper() {}
  }
}

// 3. Легаси проекты
namespace Legacy {
  export class OldClass {}
}

// 4. Группировка типов
namespace Models {
  export interface User {}
  export interface Product {}
}
```

### ✅ Используйте MODULE когда:

```typescript
// 1. Современное приложение
// user.ts
export interface User {}
export class UserService {}

// app.ts
import { User, UserService } from './user';

// 2. Нужен tree-shaking
// Только используемые функции попадут в bundle

// 3. Большой проект
// Чёткое разделение по файлам

// 4. Работа с npm пакетами
import { Component } from 'react';
```

---

## 💡 Best Practices

### ✅ DO (Делайте)

```typescript
// ✓ Экспортируйте только публичное API
namespace API {
  export function publicMethod() {}
  
  function privateHelper() {} // Без export
}

// ✓ Используйте вложенность для структуры
namespace App {
  export namespace Auth {
    export class AuthService {}
  }
  export namespace Users {
    export class UserService {}
  }
}

// ✓ Псевдонимы для длинных путей
import Auth = App.Auth;
const authService = new Auth.AuthService();

// ✓ Группируйте связанные типы
namespace Models {
  export interface User {}
  export interface Product {}
  export type ID = string | number;
}
```

### ❌ DON'T (Не делайте)

```typescript
// ✗ Не смешивайте namespace и module в новых проектах
namespace MyNamespace {
  export function oldWay() {}
}
export function newWay() {} // Непоследовательно

// ✗ Не создавайте слишком глубокую вложенность
namespace A {
  export namespace B {
    export namespace C {
      export namespace D {
        export namespace E {} // Слишком глубоко!
      }
    }
  }
}

// ✗ Не используйте namespace для нового кода
// Вместо этого используйте ES6 модули

// ✗ Не экспортируйте всё подряд
namespace Utils {
  export function helper1() {}
  export function helper2() {}
  export function internalHelper() {} // Не экспортируйте
}
```

---

## 🔧 Компиляция Namespaces

### Один файл
```bash
tsc geometry.ts
```

### Несколько файлов в один
```bash
tsc --outFile output.js file1.ts file2.ts file3.ts
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "module": "amd",  // Для --outFile
    "outFile": "./dist/bundle.js",
    "declaration": true  // Генерация .d.ts
  }
}
```

---

## 📦 Multi-file Namespaces

### Файл 1: `shapes.ts`
```typescript
namespace Geometry {
  export interface IShape {
    area(): number;
  }
}
```

### Файл 2: `circle.ts`
```typescript
/// <reference path="shapes.ts" />

namespace Geometry {
  export class Circle implements IShape {
    constructor(public radius: number) {}
    
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}
```

### Компиляция
```bash
tsc --outFile bundle.js shapes.ts circle.ts
```

---

## 🎓 Практические примеры

### API Library
```typescript
namespace MyAPI {
  export namespace Auth {
    export function login(user: string, pass: string) {}
    export function logout() {}
  }

  export namespace Users {
    export function getUser(id: number) {}
    export function updateUser(id: number, data: any) {}
  }

  export namespace Config {
    export const API_URL = "https://api.example.com";
    export const TIMEOUT = 5000;
  }
}

// Использование
MyAPI.Auth.login("user", "pass");
MyAPI.Users.getUser(1);
console.log(MyAPI.Config.API_URL);
```

### Type Declarations
```typescript
// types.d.ts
declare namespace jQuery {
  export interface JQuery {
    addClass(className: string): JQuery;
  }
  
  export function ajax(settings: any): void;
}

// app.ts
jQuery.ajax({ url: "/api" });
$("div").addClass("active");
```

---

## 🚦 Migration: Namespace → Module

### Before (Namespace)
```typescript
namespace Utils {
  export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

Utils.capitalize("hello");
```

### After (Module)
```typescript
// utils.ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// app.ts
import { capitalize } from './utils';
capitalize("hello");
```

---

## 🐛 Troubleshooting

### Проблема: "Cannot find namespace"
```typescript
// ✗ Забыли reference
namespace A {
  export class ClassA {}
}

namespace B {
  const obj = new A.ClassA(); // Error!
}

// ✓ Добавляем reference или compile вместе
/// <reference path="a.ts" />
```

### Проблема: Слияние не работает
```typescript
// Убедитесь что имена совпадают ТОЧНО
namespace MyNamespace {} // Разные имена
namespace Mynamespace {} // Не сольются!
```

---

## 📚 Дополнительные ресурсы

- [TypeScript Handbook - Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
- [TypeScript Handbook - Namespaces and Modules](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)
- [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 🎯 Заключение

**Namespaces:**
- ✅ Хороши для: `.d.ts` файлов, легаси кода, внутренней организации
- ❌ Избегайте в: новых проектах, больших приложениях

**Modules:**
- ✅ Используйте для: всех новых проектов
- ✅ Современный стандарт
- ✅ Лучшая производительность (tree-shaking)

---

**Namespaces = Организация + Инкапсуляция + Легаси поддержка!** 📦

