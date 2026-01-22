# 16. Ограничение обобщений (Generic Constraints)

## 📖 Описание

**Generic Constraints** (ограничения обобщений) позволяют ограничить типы, которые могут быть использованы в качестве параметров обобщённых функций или классов.

## 🎯 Зачем нужны ограничения?

Без ограничений TypeScript не знает, какие свойства или методы доступны у generic типа:

```typescript
// ❌ Без ограничения - ошибка!
function printName<T>(obj: T): void {
    console.log(obj.name); // Ошибка! 'name' не существует на 'T'
}

// ✅ С ограничением - работает!
function printName<T extends { name: string }>(obj: T): void {
    console.log(obj.name); // OK!
}
```

---

## 📝 Синтаксис

### Базовое ограничение
```typescript
function func<T extends SomeType>(arg: T) { }
```

### Множественное ограничение (intersection)
```typescript
function func<T extends Type1 & Type2>(arg: T) { }
```

### Ограничение ключами
```typescript
function func<T, K extends keyof T>(obj: T, key: K) { }
```

---

## 🔥 Примеры из модуля

### 1. Множественное ограничение

Пример из изображения:

```typescript
interface IFlyable {
    fly(): void;
}

interface ISwimmable {
    swim(): void;
}

// T должен реализовывать ОБА интерфейса
function run<T extends IFlyable & ISwimmable>(arg: T) {
    arg.fly();   // ✅ OK
    arg.swim();  // ✅ OK
    arg.go();    // ❌ Ошибка: 'go' не существует на T
}

class Duck implements IFlyable, ISwimmable {
    fly() { console.log("Летит"); }
    swim() { console.log("Плывёт"); }
}

const duck = new Duck();
run(duck); // ✅ OK - утка может и летать, и плавать
```

---

### 2. Одиночное ограничение

```typescript
function makeFly<T extends IFlyable>(creature: T): void {
    creature.fly(); // ✅ Гарантировано есть метод fly
}

class Bird implements IFlyable {
    fly() { console.log("Птица летит"); }
}

makeFly(new Bird()); // ✅ OK
```

---

### 3. Ограничение по структуре

```typescript
// T должен иметь свойство name типа string
function printName<T extends { name: string }>(obj: T): void {
    console.log(obj.name);
}

printName({ name: "Иван", age: 30 });        // ✅ OK
printName({ name: "Мария", email: "..." }); // ✅ OK
// printName({ age: 30 });                   // ❌ Ошибка! нет name
```

---

### 4. Ограничение по ключам (keyof)

```typescript
// K должен быть ключом объекта T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: "Иван", email: "ivan@mail.com" };

getProperty(user, "id");    // ✅ OK, возвращает number
getProperty(user, "name");  // ✅ OK, возвращает string
// getProperty(user, "age"); // ❌ Ошибка! 'age' не существует
```

---

### 5. Ограничение массивом

```typescript
function getFirstElement<T extends any[]>(arr: T): T[0] | undefined {
    return arr[0];
}

getFirstElement([1, 2, 3]);      // ✅ OK, возвращает 1
getFirstElement(["a", "b"]);     // ✅ OK, возвращает "a"
// getFirstElement("hello");     // ❌ Ошибка! string не массив
```

---

### 6. Ограничение по свойству

```typescript
// T должен иметь свойство length
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength([1, 2, 3]);    // ✅ OK, возвращает 3
getLength("Hello");      // ✅ OK, возвращает 5
// getLength(123);       // ❌ Ошибка! number не имеет length
```

---

## 🎨 Типы ограничений

### 1. Interface Constraint
```typescript
interface HasId {
    id: number;
}

function printId<T extends HasId>(obj: T): void {
    console.log(obj.id);
}
```

### 2. Class Constraint
```typescript
class Animal {
    name: string = "";
}

function createInstance<T extends Animal>(cls: new () => T): T {
    return new cls();
}
```

### 3. Union Constraint
```typescript
function process<T extends string | number>(value: T): T {
    return value;
}
```

### 4. Multiple Constraints (Intersection)
```typescript
interface A { a: string; }
interface B { b: number; }

function combine<T extends A & B>(obj: T): void {
    console.log(obj.a, obj.b); // Оба доступны
}
```

---

## 💡 Реальные примеры

### API Response Handler
```typescript
interface IApiResponse {
    status: number;
    data: unknown;
}

function handleResponse<T extends IApiResponse>(response: T): void {
    if (response.status === 200) {
        console.log("Success:", response.data);
    }
}
```

### Database Entity
```typescript
interface IEntity {
    id: number;
    createdAt: Date;
}

function saveEntity<T extends IEntity>(entity: T): Promise<T> {
    console.log(`Saving entity ${entity.id}`);
    return Promise.resolve(entity);
}
```

### Array Operations
```typescript
function findMax<T extends number[]>(arr: T): number {
    return Math.max(...arr);
}

function sortByKey<T extends Record<string, any>, K extends keyof T>(
    arr: T[],
    key: K
): T[] {
    return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
```

---

## ⚠️ Частые ошибки

### ❌ Неправильно
```typescript
// Слишком строгое ограничение
function process<T extends string>(value: T) { } // Только string!

// Забыли добавить ограничение
function getName<T>(obj: T) {
    return obj.name; // ❌ Ошибка! name не гарантирован
}
```

### ✅ Правильно
```typescript
// Используйте union для гибкости
function process<T extends string | number>(value: T) { }

// Добавьте ограничение
function getName<T extends { name: string }>(obj: T) {
    return obj.name; // ✅ OK
}
```

---

## 🔗 Связь с другими концепциями

- **Generics** (12-generics) - базовые обобщения
- **Interfaces** (06-interfaces) - определение контрактов
- **Type vs Interface** (samples/type-vs-interface) - когда использовать что

---

## 🚀 Запуск примеров

```bash
npm run start_oop
```

---

## 📚 Ключевые моменты

1. **Безопасность типов** - ограничения гарантируют наличие свойств/методов
2. **Гибкость** - можно комбинировать ограничения с `&`
3. **keyof** - мощный инструмент для работы с ключами объектов
4. **Наследование** - ограничения работают с иерархией типов
5. **Inference** - TypeScript выводит типы автоматически

---

## 💡 Best Practices

1. ✅ Используйте минимальные ограничения (достаточные, но не избыточные)
2. ✅ Предпочитайте structural typing (`{ name: string }`) явным интерфейсам
3. ✅ Используйте `keyof` для безопасной работы с ключами
4. ✅ Комбинируйте ограничения с `&` для множественных требований
5. ❌ Избегайте слишком строгих ограничений (теряется гибкость)

---

**Ограничения обобщений = Типобезопасность + Гибкость!** 🎯

