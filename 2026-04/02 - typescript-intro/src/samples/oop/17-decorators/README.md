# 17. Декораторы (Decorators)

## 📖 Описание

**Decorators** (декораторы) - это специальные функции, которые позволяют добавлять метаданные и изменять поведение классов, методов, свойств и параметров.

> ⚠️ **Важно:** Декораторы - это экспериментальная функция TypeScript. Для использования нужно включить `experimentalDecorators` в `tsconfig.json`.

## 🔧 Настройка

В `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## 📝 Типы декораторов

### 1. Декоратор класса (Class Decorator)

Применяется к классу и может модифицировать или заменить конструктор класса.

```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class User {
    constructor(public name: string) {}
}
```

**Сигнатура:**
```typescript
function decorator<T extends { new(...args: any[]): {} }>(constructor: T)
```

---

### 2. Декоратор метода (Method Decorator)

Применяется к методу класса и может изменить его поведение.

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(`Вызов ${propertyKey} с:`, args);
        return originalMethod.apply(this, args);
    };
    
    return descriptor;
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}
```

**Сигнатура:**
```typescript
function decorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor | void
```

---

### 3. Декоратор свойства (Property Decorator)

Применяется к свойству класса.

```typescript
function defaultValue(value: any) {
    return function(target: any, propertyKey: string) {
        target[propertyKey] = value;
    };
}

class Person {
    @defaultValue("Неизвестно")
    name: string;
}
```

**Сигнатура:**
```typescript
function decorator(target: any, propertyKey: string): void
```

---

### 4. Декоратор параметра (Parameter Decorator)

Применяется к параметру метода.

```typescript
function required(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Параметр #${parameterIndex} обязателен`);
}

class Service {
    createOrder(@required orderId: string, quantity: number) {
        // ...
    }
}
```

**Сигнатура:**
```typescript
function decorator(
    target: any,
    propertyKey: string,
    parameterIndex: number
): void
```

---

## 🏭 Фабрики декораторов (Decorator Factories)

Функция, которая возвращает декоратор и позволяет передавать параметры.

```typescript
function Component(options: { selector: string; template: string }) {
    return function<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            selector = options.selector;
            template = options.template;
        };
    };
}

@Component({ selector: 'app-header', template: '<header>...</header>' })
class HeaderComponent {}
```

---

## 🔄 Порядок выполнения

### Для класса:
```typescript
@First    // 2. Вызов
@Second   // 1. Вызов (снизу вверх)
class Example {}
```

### Для методов:
```typescript
class Example {
    @First()    // 4. Фабрика
    @Second()   // 3. Фабрика
    method() {} // 2. @Second вызов
                // 1. @First вызов
}
```

---

## 💡 Практические примеры

### Логирование
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`[LOG] ${propertyKey}:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
```

### Измерение времени
```typescript
function measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey}: ${(end - start).toFixed(2)}ms`);
        return result;
    };
    return descriptor;
}
```

### Валидация
```typescript
function validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        if (args.some(arg => arg == null)) {
            throw new Error('Аргументы не могут быть null');
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
```

### Мемоизация (кэширование)
```typescript
function memoize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    
    descriptor.value = function(...args: any[]) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
    
    return descriptor;
}

class Math {
    @memoize
    fibonacci(n: number): number {
        if (n <= 1) return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}
```

### Ограничение значений
```typescript
function range(min: number, max: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const value = args[0];
            if (value < min || value > max) {
                throw new Error(`Значение должно быть между ${min} и ${max}`);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}

class Validator {
    @range(0, 120)
    setAge(age: number) { }
}
```

### Задержка выполнения
```typescript
function delay(ms: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            await new Promise(resolve => setTimeout(resolve, ms));
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
```

---

## 🎯 Популярные библиотеки с декораторами

### TypeORM
```typescript
@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
}
```

### NestJS
```typescript
@Controller('users')
class UserController {
    @Get()
    findAll() { }
    
    @Post()
    create(@Body() user: User) { }
}
```

### Angular
```typescript
@Component({
    selector: 'app-root',
    template: '<h1>Hello</h1>'
})
class AppComponent { }
```

### class-validator
```typescript
class CreateUserDto {
    @IsString()
    @Length(2, 50)
    name: string;
    
    @IsEmail()
    email: string;
}
```

---

## ⚠️ Ограничения

1. **Экспериментальная функция** - не стандарт JavaScript
2. **Производительность** - могут замедлить выполнение
3. **Отладка** - сложнее отследить ошибки
4. **Порядок выполнения** - может быть неочевидным

---

## ✅ Best Practices

1. **Используйте фабрики** для параметризованных декораторов
2. **Сохраняйте контекст** (`this`) при замене методов
3. **Документируйте** поведение декораторов
4. **Тестируйте** код с декораторами
5. **Не злоупотребляйте** - сложная магия усложняет код

---

## 🚀 Запуск примеров

```bash
npm run start_oop
```

---

## 📚 Дополнительные ресурсы

- [TypeScript Handbook - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [TC39 Decorators Proposal](https://github.com/tc39/proposal-decorators)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)

---

**Декораторы = Метапрограммирование + Чистый код!** 🎨

