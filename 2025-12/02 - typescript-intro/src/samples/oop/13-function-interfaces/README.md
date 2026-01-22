# 13. Интерфейсы функций (Function Interfaces)

## Описание

**Интерфейсы функций** содержат определение типа функции. Они позволяют создавать контракты для функций, указывая их сигнатуру (параметры и возвращаемый тип).

## Синтаксис

```typescript
interface IFunctionName {
    (param1: type1, param2: type2): returnType;
}
```

## Примеры в этом модуле

### IFullNameBuilder
Интерфейс для функций, которые строят полное имя из имени и фамилии.

```typescript
interface IFullNameBuilder {
    (name: string, surname: string): string;
}
```

### Реализации

1. **simpleBuilder** - простая версия с "Mr."
2. **formalBuilder** - формальная версия с "Господин"
3. **shortBuilder** - краткая версия (Имя Ф.)

## Использование

```typescript
import { IFullNameBuilder } from './IFullNameBuilder';

// Создание функции с типом интерфейса
const myBuilder: IFullNameBuilder = (name, surname) => {
    return `${name} ${surname}`;
};

// Использование
console.log(myBuilder("Иван", "Петров")); // Иван Петров
```

## Преимущества

✅ **Типобезопасность** - TypeScript проверит сигнатуру функции  
✅ **Переиспользование** - один интерфейс для многих реализаций  
✅ **Документация** - явное описание того, что делает функция  
✅ **Гибкость** - можно передавать разные реализации

## Когда использовать?

- Callback функции с определённой сигнатурой
- Стратегии и паттерны проектирования
- Когда нужны взаимозаменяемые функции
- API с функциями обратного вызова

## Примеры из реального мира

```typescript
// Валидатор
interface IValidator {
    (value: string): boolean;
}

const emailValidator: IValidator = (value) => {
    return value.includes('@');
};

// Обработчик событий
interface IEventHandler {
    (event: Event): void;
}

const clickHandler: IEventHandler = (event) => {
    console.log('Clicked!', event);
};

// Преобразователь данных
interface ITransformer<T, U> {
    (input: T): U;
}

const stringToNumber: ITransformer<string, number> = (input) => {
    return parseInt(input, 10);
};
```

## Запуск примера

```bash
npm run start_oop
```

