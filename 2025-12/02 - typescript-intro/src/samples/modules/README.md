# Модули в TypeScript

## 📖 Описание

Полное руководство по работе с модулями в TypeScript: импорт, экспорт, динамическая загрузка и паттерны модулей.

## 🚀 Запуск

```bash
npm run start_modules
```

Или напрямую:
```bash
tsc src/samples/modules/index.ts && node src/samples/modules/index.js
```

---

## 📚 Содержание

### 1. Базовый экспорт (Named Exports)

Экспорт нескольких значений из модуля.

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}
```

**Импорт:**
```typescript
import { add, PI, Calculator } from "./math";
```

---

### 2. Экспорт по умолчанию (Default Export)

Один главный экспорт на модуль.

```typescript
// logger.ts
export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// Можно комбинировать с named exports
export const LOG_LEVEL = { INFO: "info" };
```

**Импорт:**
```typescript
import Logger from "./logger"; // Любое имя
import { LOG_LEVEL } from "./logger";
```

---

### 3. Ре-экспорт (Barrel Exports)

Объединение экспортов из нескольких модулей в один файл.

```typescript
// index.ts - barrel file
export { add, subtract, PI } from "./math";
export { default as Logger } from "./logger";
export { add as sum } from "./math"; // С переименованием
export * from "./math"; // Всё из модуля
```

**Использование:**
```typescript
import { add, Logger, sum } from "./index";
```

---

### 4. Псевдонимы импорта (Import Aliases)

**Импорт с переименованием:**
```typescript
import { add as addition, subtract as subtraction } from "./math";

addition(2, 3); // 5
```

**Импорт всего модуля:**
```typescript
import * as MathUtils from "./math";

MathUtils.add(4, 6); // 10
MathUtils.PI; // 3.14159
```

**Default с другим именем:**
```typescript
import MyLogger from "./logger";
```

---

### 5. Динамический импорт (Dynamic Import)

Загрузка модулей по требованию (code splitting).

```typescript
// Динамический импорт возвращает Promise
const mathModule = await import("./math");
console.log(mathModule.add(8, 2)); // 10

// Default export
const loggerModule = await import("./logger");
const Logger = loggerModule.default;

// Условный импорт
if (isDevelopment) {
  const devTools = await import("./dev-tools");
  devTools.enableDebug();
}
```

**Преимущества:**
- Lazy loading (ленивая загрузка)
- Code splitting
- Уменьшение начального размера бандла
- Условная загрузка модулей

---

### 6. Паттерны модулей

#### Singleton Pattern
```typescript
class Database {
  private static instance: Database;
  
  private constructor() {}
  
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

export const database = Database.getInstance();
```

#### Configuration Pattern
```typescript
const config = {
  apiUrl: "https://api.example.com"
};

let isInitialized = false; // Приватная переменная

export function getConfig() {
  return { ...config };
}

export function initialize(): void {
  if (!isInitialized) {
    isInitialized = true;
  }
}
```

---

## 📊 Сравнение экспортов

| Тип | Синтаксис | Импорт | Количество |
|-----|-----------|--------|------------|
| **Named** | `export function add()` | `import { add }` | Много |
| **Default** | `export default class` | `import Logger` | Один |
| **Re-export** | `export { add } from './math'` | `import { add }` | Много |
| **Namespace** | `export * as Math from './math'` | `import { Math }` | Один объект |

---

## 🎯 Когда что использовать?

### Named Exports (рекомендуется)
✅ **Используйте когда:**
- Модуль экспортирует несколько вещей
- Хотите явные имена при импорте
- Лучше для tree-shaking
- Рекомендуется в большинстве случаев

```typescript
export function add() {}
export function subtract() {}
```

### Default Export
✅ **Используйте когда:**
- Модуль экспортирует одну главную вещь
- Компоненты React/Vue
- Классы, которые являются основной целью модуля

```typescript
export default class Logger {}
```

### Barrel Exports
✅ **Используйте когда:**
- Много маленьких модулей нужно объединить
- Создание публичного API пакета
- Упрощение импортов

```typescript
// index.ts
export * from './module1';
export * from './module2';
```

---

## 💡 Best Practices

### ✅ DO (Делайте)

```typescript
// 1. Используйте named exports для лучшего tree-shaking
export function add() {}
export function subtract() {}

// 2. Barrel exports для организации
// index.ts
export { add, subtract } from './math';
export { Logger } from './logger';

// 3. Const exports для неизменяемых значений
export const CONFIG = { api: '...' } as const;

// 4. Динамический импорт для больших модулей
const heavyModule = await import('./heavy-lib');

// 5. Псевдонимы для избежания конфликтов имён
import { User as UserModel } from './models';
import { User as UserComponent } from './components';
```

### ❌ DON'T (Не делайте)

```typescript
// 1. Не смешивайте default и named бездумно
export default function add() {}
export function subtract() {} // Непоследовательно

// 2. Не экспортируйте всё подряд
export * from './utils'; // Может экспортировать ненужное

// 3. Не создавайте циклические зависимости
// a.ts
import { b } from './b';
// b.ts
import { a } from './a'; // ❌ Циклическая зависимость

// 4. Не используйте require() в TypeScript
const module = require('./module'); // ❌ Используйте import
```

---

## 🔧 TypeScript Module Options

В `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "ESNext",           // ES Modules
    "moduleResolution": "node",   // Разрешение модулей как в Node.js
    "esModuleInterop": true,      // Совместимость с CommonJS
    "allowSyntheticDefaultImports": true
  }
}
```

**Типы модулей:**
- `CommonJS` - для Node.js (require/module.exports)
- `ESNext` - современные ES модули
- `AMD` - для браузеров
- `UMD` - универсальные модули

---

## 🌐 ES Modules vs CommonJS

### ES Modules (современный стандарт)
```typescript
// Экспорт
export function add() {}
export default class Logger {}

// Импорт
import { add } from './math';
import Logger from './logger';
```

### CommonJS (Node.js)
```typescript
// Экспорт
exports.add = function() {}
module.exports = class Logger {}

// Импорт
const { add } = require('./math');
const Logger = require('./logger');
```

---

## 📦 Организация больших проектов

```
src/
├── modules/
│   ├── auth/
│   │   ├── index.ts          # Barrel export
│   │   ├── AuthService.ts
│   │   ├── AuthController.ts
│   │   └── types.ts
│   │
│   ├── users/
│   │   ├── index.ts
│   │   ├── UserService.ts
│   │   └── UserRepository.ts
│   │
│   └── index.ts              # Main barrel
│
└── index.ts                  # Entry point
```

**Main barrel:**
```typescript
// src/modules/index.ts
export * from './auth';
export * from './users';
```

**Usage:**
```typescript
import { AuthService, UserService } from './modules';
```

---

## 🎓 Дополнительные примеры

### Type-only imports
```typescript
// Импорт только типов (не включается в JS)
import type { User } from './types';
import { type Config, initialize } from './config';
```

### Side-effect imports
```typescript
// Импорт для побочных эффектов (выполнение кода)
import './polyfills';
import './styles.css';
```

### Import assertions
```typescript
// JSON imports
import data from './data.json' assert { type: 'json' };
```

---

## 🚀 Запуск примеров

```bash
npm run start_modules
```

---

## 📚 Дополнительные ресурсы

- [TypeScript Handbook - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [MDN - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ES Modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

---

**Модули = Организация + Переиспользование + Инкапсуляция!** 📦

