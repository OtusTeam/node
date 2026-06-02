# Типы данных TypeScript - Простые примеры

Этот файл содержит простые примеры всех основных типов данных TypeScript.

## Запуск примеров

```bash
npm run start_basic
```

Или напрямую:
```bash
tsc src/basic/data-types.ts && node src/basic/data-types.js
```

## Типы данных

### 1. **boolean** - логическое значение true или false
```typescript
let isActive: boolean = true;
```

### 2. **number** - числовое значение
```typescript
let decimal: number = 42;
let float: number = 3.14;
```

### 3. **string** - строки
```typescript
let name: string = "Иван";
```

### 4. **array** - массивы
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let colors: Array<string> = ["красный", "зеленый"];
```

### 5. **tuple** - кортежи (массивы с фиксированным количеством элементов)
```typescript
let person: [string, number] = ["Алексей", 25];
```

### 6. **enum** - перечисления
```typescript
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Blue;
```

### 7. **any** - произвольный тип (отключает проверку типов)
```typescript
let anyValue: any = 42;
anyValue = "строка";
```

### 8. **null** и **undefined** - соответствуют значениям null и undefined в JavaScript
```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

### 9. **void** - отсутствие значения (для функций без возвращаемого значения)
```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

### 10. **never** - для функций, которые никогда не возвращают значение
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

### 11. **unknown** - неизвестный тип (безопасная альтернатива any)
```typescript
let unknownValue: unknown = 42;
// Требуется проверка типа перед использованием
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
```

## Важные замечания

- **any vs unknown**: `unknown` безопаснее, так как требует проверки типа перед использованием
- **never vs void**: `void` используется для функций, которые завершаются нормально, но не возвращают значение; `never` для функций, которые никогда не завершаются нормально
- Объявление типа переменной необязательно, но рекомендуется
- После объявления типа его нельзя изменить

