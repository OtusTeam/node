// ============================================
// GENERIC CLASSES (Обобщенные классы)
// ============================================

// Generic класс Queue (очередь)
export class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// Generic класс Box (контейнер)
export class Box<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }

    map<U>(fn: (value: T) => U): Box<U> {
        return new Box(fn(this.value));
    }
}

// Generic класс Dictionary (словарь)
export class Dictionary<K, V> {
    private items: Map<K, V> = new Map();

    set(key: K, value: V): void {
        this.items.set(key, value);
    }

    get(key: K): V | undefined {
        return this.items.get(key);
    }

    has(key: K): boolean {
        return this.items.has(key);
    }

    delete(key: K): boolean {
        return this.items.delete(key);
    }

    keys(): K[] {
        return Array.from(this.items.keys());
    }

    values(): V[] {
        return Array.from(this.items.values());
    }

    entries(): [K, V][] {
        return Array.from(this.items.entries());
    }

    size(): number {
        return this.items.size;
    }
}

// Generic класс Result для обработки ошибок
export class Result<T, E = Error> {
    private constructor(
        private readonly value?: T,
        private readonly error?: E
    ) {}

    static ok<T, E = Error>(value: T): Result<T, E> {
        return new Result<T, E>(value, undefined);
    }

    static err<T, E = Error>(error: E): Result<T, E> {
        return new Result<T, E>(undefined, error);
    }

    isOk(): boolean {
        return this.error === undefined;
    }

    isErr(): boolean {
        return this.error !== undefined;
    }

    unwrap(): T {
        if (this.isErr()) {
            throw new Error('Called unwrap on an Err value');
        }
        return this.value!;
    }

    unwrapOr(defaultValue: T): T {
        return this.isOk() ? this.value! : defaultValue;
    }

    map<U>(fn: (value: T) => U): Result<U, E> {
        return this.isOk() 
            ? Result.ok<U, E>(fn(this.value!))
            : Result.err<U, E>(this.error!);
    }
}

// Generic класс Optional (аналог Java Optional)
export class Optional<T> {
    private constructor(private readonly value: T | null) {}

    static of<T>(value: T): Optional<T> {
        if (value === null || value === undefined) {
            throw new Error('Value cannot be null or undefined');
        }
        return new Optional(value);
    }

    static ofNullable<T>(value: T | null): Optional<T> {
        return new Optional(value);
    }

    static empty<T>(): Optional<T> {
        return new Optional<T>(null);
    }

    isPresent(): boolean {
        return this.value !== null && this.value !== undefined;
    }

    get(): T {
        if (!this.isPresent()) {
            throw new Error('No value present');
        }
        return this.value!;
    }

    orElse(defaultValue: T): T {
        return this.isPresent() ? this.value! : defaultValue;
    }

    map<U>(fn: (value: T) => U): Optional<U> {
        return this.isPresent() 
            ? Optional.of(fn(this.value!))
            : Optional.empty<U>();
    }

    filter(predicate: (value: T) => boolean): Optional<T> {
        if (this.isPresent() && predicate(this.value!)) {
            return this;
        }
        return Optional.empty<T>();
    }
}

