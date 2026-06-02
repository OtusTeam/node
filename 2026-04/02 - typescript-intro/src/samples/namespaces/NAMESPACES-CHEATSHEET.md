# TypeScript Namespaces - Quick Reference

## 🚀 Базовый синтаксис

### Определение Namespace
```typescript
namespace MyNamespace {
  export function myFunction() {}
  export const myConst = 42;
  export class MyClass {}
  export interface MyInterface {}
}
```

### Использование
```typescript
MyNamespace.myFunction();
console.log(MyNamespace.myConst);
const obj = new MyNamespace.MyClass();
```

---

## 📦 Основные концепции

### 1. Export Members
```typescript
namespace Utils {
  // ✓ Публичные (с export)
  export function publicFunc() {}
  export const publicConst = 1;
  
  // ✗ Приватные (без export)
  function privateFunc() {}
  const privateConst = 2;
}

// Доступно
Utils.publicFunc();

// Недоступно
Utils.privateFunc(); // ❌ Error
```

---

### 2. Вложенные Namespaces
```typescript
namespace Outer {
  export namespace Inner {
    export function func() {}
  }
}

// Использование
Outer.Inner.func();
```

---

### 3. Слияние Namespaces
```typescript
// Определение 1
namespace MyLib {
  export function func1() {}
}

// Определение 2 - автоматически сольётся!
namespace MyLib {
  export function func2() {}
}

// Оба доступны
MyLib.func1();
MyLib.func2();
```

---

### 4. Псевдонимы (Aliases)
```typescript
namespace Very {
  export namespace Long {
    export namespace Path {
      export class MyClass {}
    }
  }
}

// Длинный путь
new Very.Long.Path.MyClass();

// С псевдонимом (короче!)
import ShortPath = Very.Long.Path;
new ShortPath.MyClass();

// Псевдоним класса
import MyClass = Very.Long.Path.MyClass;
new MyClass();
```

---

### 5. Интерфейсы и Типы
```typescript
namespace Models {
  export interface User {
    id: number;
    name: string;
  }
  
  export type UserId = number;
  
  export enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
  }
}

// Использование
const user: Models.User = {
  id: 1,
  name: "John"
};

const id: Models.UserId = 1;
const status = Models.Status.Active;
```

---

### 6. Generic Classes
```typescript
namespace Data {
  export class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
      this.items.push(item);
    }
    
    getAll(): T[] {
      return this.items;
    }
  }
}

const repo = new Data.Repository<string>();
repo.add("Hello");
```

---

## 📊 Сравнение: Namespace vs Module

| Характеристика | Namespace | Module |
|----------------|-----------|--------|
| **Синтаксис** | `namespace Name {}` | `export/import` |
| **Область** | Глобальная | Изолированная |
| **Слияние** | ✅ Да | ❌ Нет |
| **Tree-shaking** | ❌ Нет | ✅ Да |
| **Стандарт** | TypeScript | ES6/ESNext |
| **Использование** | Legacy, .d.ts | Современные проекты |

---

## 🎯 Когда использовать?

### ✅ Используйте NAMESPACE для:

```typescript
// 1. Type Definitions (.d.ts)
declare namespace MyLib {
  export function init(): void;
  export interface Config {}
}

// 2. Внутренней организации библиотеки
namespace InternalAPI {
  export namespace Utils {}
  export namespace Helpers {}
}

// 3. Легаси проектов
namespace Legacy {
  export class OldClass {}
}

// 4. Группировки типов
namespace Types {
  export interface User {}
  export type ID = string;
}
```

### ✅ Используйте MODULE для:

```typescript
// 1. Новых проектов
// user.ts
export class User {}

// app.ts
import { User } from './user';

// 2. Больших приложений
// Модульная структура

// 3. Tree-shaking
// Только нужные части

// 4. npm пакетов
import { Component } from 'react';
```

---

## 💡 Best Practices

### ✅ DO (Делайте)

```typescript
// ✓ Экспортируйте только API
namespace API {
  export function public() {}
  function private() {} // Без export
}

// ✓ Логическая группировка
namespace App {
  export namespace Auth {}
  export namespace Users {}
}

// ✓ Псевдонимы для длинных путей
import Auth = App.Auth;

// ✓ Группируйте типы
namespace Models {
  export interface User {}
  export interface Product {}
}

// ✓ Слияние для расширения
namespace MyLib {
  export function func1() {}
}
namespace MyLib {
  export function func2() {}
}
```

### ❌ DON'T (Не делайте)

```typescript
// ✗ Не смешивайте namespace и module
namespace NS {
  export function old() {}
}
export function newWay() {} // Непоследовательно

// ✗ Не делайте слишком глубокую вложенность
namespace A {
  export namespace B {
    export namespace C {
      export namespace D {} // Слишком глубоко!
    }
  }
}

// ✗ Не используйте для новых проектов
// Используйте ES6 модули вместо namespace

// ✗ Не экспортируйте всё
namespace Utils {
  export function helper() {}
  export function internal() {} // Не надо!
}
```

---

## 🔧 Компиляция

### Один файл
```bash
tsc namespace.ts
```

### Несколько файлов в один
```bash
tsc --outFile bundle.js file1.ts file2.ts
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "module": "amd",
    "outFile": "./dist/bundle.js"
  }
}
```

---

## 📁 Multi-file Namespaces

### Файл 1: types.ts
```typescript
namespace MyLib {
  export interface IShape {
    area(): number;
  }
}
```

### Файл 2: circle.ts
```typescript
/// <reference path="types.ts" />

namespace MyLib {
  export class Circle implements IShape {
    constructor(public radius: number) {}
    
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
}
```

### Компиляция
```bash
tsc --outFile bundle.js types.ts circle.ts
```

---

## 🎨 Паттерны

### API Pattern
```typescript
namespace MyAPI {
  export namespace Auth {
    export function login() {}
    export function logout() {}
  }
  
  export namespace Users {
    export function getUser() {}
  }
}

MyAPI.Auth.login();
MyAPI.Users.getUser();
```

### Configuration Pattern
```typescript
namespace Config {
  export const API_URL = "https://api.example.com";
  export const TIMEOUT = 5000;
  
  export function getConfig() {
    return { API_URL, TIMEOUT };
  }
}
```

### Utility Pattern
```typescript
namespace StringUtils {
  export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function reverse(str: string): string {
    return str.split('').reverse().join('');
  }
}
```

---

## 🔍 Troubleshooting

### "Cannot find namespace"
```typescript
// Проблема
namespace A {
  export class ClassA {}
}

namespace B {
  const obj = new A.ClassA(); // Error!
}

// Решение: добавьте reference
/// <reference path="a.ts" />

// ИЛИ компилируйте вместе
tsc a.ts b.ts
```

### Слияние не работает
```typescript
// Убедитесь что имена ТОЧНО совпадают
namespace MyNamespace {} // ✓
namespace Mynamespace {} // ✗ Разные имена!
```

---

## 📝 Синтаксис Reference

### Triple-slash Reference
```typescript
/// <reference path="file.ts" />
/// <reference types="node" />
```

### Import Alias
```typescript
import Alias = Long.Namespace.Path;
```

### Export Assignment
```typescript
namespace MyLib {
  export function main() {}
}

export = MyLib;
```

---

## 🎓 Примеры использования

### Type Definitions
```typescript
// jquery.d.ts
declare namespace jQuery {
  export interface JQuery {
    addClass(name: string): JQuery;
  }
  export function ajax(url: string): void;
}

// app.ts
jQuery.ajax("/api");
```

### Library API
```typescript
namespace MyLib {
  export namespace Utils {
    export function helper() {}
  }
  
  export class Main {
    init() {}
  }
}

const lib = new MyLib.Main();
lib.init();
MyLib.Utils.helper();
```

---

## 🚦 Migration: Namespace → Module

### Before (Namespace)
```typescript
// utils.ts
namespace Utils {
  export function capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }
}

// app.ts
Utils.capitalize("hello");
```

### After (Module)
```typescript
// utils.ts
export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

// app.ts
import { capitalize } from './utils';
capitalize("hello");
```

---

## 📊 Быстрая справка

### Объявление
```typescript
namespace Name { }                    // Базовый
namespace Outer.Inner { }             // Вложенный (альтернатива)
namespace Name { export... }          // С экспортом
declare namespace Name { }            // Для .d.ts
```

### Использование
```typescript
Name.member                           // Доступ к члену
import Alias = Name                   // Псевдоним
/// <reference path="file.ts" />      // Reference
```

### Слияние
```typescript
namespace A { export const x = 1; }
namespace A { export const y = 2; }   // Сольётся с первым
```

---

## ⚡ Ключевые моменты

1. **Export** - делает члены публичными
2. **Без export** - приватные члены
3. **Слияние** - автоматическое объединение объявлений
4. **Вложенность** - создание иерархии
5. **Псевдонимы** - упрощение длинных путей
6. **Legacy** - используйте модули для новых проектов
7. **Type definitions** - основное применение сегодня

---

## 🎯 Выбор: Namespace или Module?

### Namespace ✓
- Type definitions (.d.ts)
- Внутренняя организация
- Легаси код
- Простые скрипты

### Module ✓
- Новые проекты ⭐
- Большие приложения
- Tree-shaking
- npm пакеты

---

**Namespaces = Организация + Инкапсуляция + Легаси!** 📦



