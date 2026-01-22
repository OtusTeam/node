# 14. Интерфейсы массивов и словарей (Indexable Types)

## Описание

**Indexable Types** (индексируемые типы) позволяют описывать объекты, к которым можно обращаться по индексу. Это могут быть:
- Словари (Dictionary) - доступ по строковому ключу
- Массивы - доступ по числовому индексу

## Синтаксис

### Строковый индекс (Dictionary)
```typescript
interface IDictionary {
    [key: string]: ValueType;
}
```

### Числовой индекс (Array)
```typescript
interface IArray {
    [index: number]: ValueType;
}
```

## Примеры в этом модуле

### 1. IDictionary - Словарь строк
```typescript
interface IDictionary {
    [index: string]: string;
}

const colors: IDictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
```

### 2. IStringArray - Массив строк
```typescript
interface IStringArray {
    [index: number]: string;
}

const fruits: IStringArray = ["яблоко", "банан"];
```

### 3. INumberDictionary - Словарь чисел
```typescript
interface INumberDictionary {
    [key: string]: number;
}

const ages: INumberDictionary = {
    "Иван": 30,
    "Мария": 25
};
```

### 4. IUserDictionary - Смешанный интерфейс
```typescript
interface IUserDictionary {
    [userId: string]: string;  // Индексная сигнатура
    admin: string;              // Обязательное свойство
    guest: string;              // Обязательное свойство
}
```

## Использование

```typescript
// Создание словаря
const translations: IDictionary = {
    "hello": "привет",
    "bye": "пока"
};

// Доступ по ключу
console.log(translations["hello"]); // привет

// Добавление нового ключа
translations["thanks"] = "спасибо";

// Перебор всех ключей
for (let key in translations) {
    console.log(`${key}: ${translations[key]}`);
}
```

## Правила

### ⚠️ Важно знать:

1. **Тип индекса**: может быть только `string` или `number`
2. **Тип значения**: должен быть одинаковым для всех элементов
3. **Смешанные типы**: если есть обычные свойства, их тип должен быть совместим с индексной сигнатурой

```typescript
// ❌ Ошибка - несовместимые типы
interface Bad {
    [key: string]: string;
    count: number;  // Ошибка! number не совместим со string
}

// ✅ Правильно - совместимые типы
interface Good {
    [key: string]: string | number;
    count: number;  // OK
    name: string;   // OK
}
```

## Примеры из реального мира

### Кэш
```typescript
interface ICache<T> {
    [key: string]: T;
}

const userCache: ICache<User> = {
    "user1": { id: 1, name: "Иван" },
    "user2": { id: 2, name: "Мария" }
};
```

### Конфигурация
```typescript
interface IEnvironment {
    [key: string]: string;
}

const env: IEnvironment = {
    "API_URL": "https://api.example.com",
    "API_KEY": "secret123",
    "DEBUG": "true"
};
```

### Локализация
```typescript
interface ITranslations {
    [language: string]: {
        [key: string]: string;
    };
}

const i18n: ITranslations = {
    "ru": {
        "hello": "Привет",
        "bye": "Пока"
    },
    "en": {
        "hello": "Hello",
        "bye": "Goodbye"
    }
};

console.log(i18n["ru"]["hello"]); // Привет
```

## Преимущества

✅ **Гибкость** - динамическое добавление свойств  
✅ **Типобезопасность** - TypeScript знает тип значений  
✅ **Читаемость** - явное описание структуры данных  
✅ **IntelliSense** - автодополнение в IDE

## Когда использовать?

- Словари и карты (key-value pairs)
- Динамические свойства объектов
- Конфигурационные объекты
- Кэши и хранилища
- Системы локализации

## Запуск примера

```bash
npm run start_oop
```

