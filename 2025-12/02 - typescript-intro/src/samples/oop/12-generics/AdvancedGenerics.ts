// ============================================
// ADVANCED GENERICS (Продвинутые обобщения)
// ============================================

// Generic фабрика
export class Factory<T> {
    constructor(private creator: () => T) {}

    create(): T {
        return this.creator();
    }

    createMultiple(count: number): T[] {
        return Array.from({ length: count }, () => this.create());
    }
}

// Generic Builder Pattern
export class Builder<T> {
    private instance: Partial<T> = {};

    set<K extends keyof T>(key: K, value: T[K]): this {
        this.instance[key] = value;
        return this;
    }

    build(): T {
        return this.instance as T;
    }
}

// Generic Observer Pattern
export interface Observer<T> {
    update(data: T): void;
}

export class Observable<T> {
    private observers: Observer<T>[] = [];

    subscribe(observer: Observer<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer<T>): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data: T): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}

// Generic Promise wrapper
export class AsyncResult<T> {
    constructor(private promise: Promise<T>) {}

    async map<U>(fn: (value: T) => U): Promise<AsyncResult<U>> {
        const value = await this.promise;
        return new AsyncResult(Promise.resolve(fn(value)));
    }

    async flatMap<U>(fn: (value: T) => Promise<U>): Promise<AsyncResult<U>> {
        const value = await this.promise;
        return new AsyncResult(fn(value));
    }

    async getOrElse(defaultValue: T): Promise<T> {
        try {
            return await this.promise;
        } catch {
            return defaultValue;
        }
    }

    toPromise(): Promise<T> {
        return this.promise;
    }
}

// Generic State Machine
export class StateMachine<S extends string, E extends string> {
    private transitions: Map<S, Map<E, S>> = new Map();

    constructor(private currentState: S) {}

    addTransition(from: S, event: E, to: S): void {
        if (!this.transitions.has(from)) {
            this.transitions.set(from, new Map());
        }
        this.transitions.get(from)!.set(event, to);
    }

    trigger(event: E): boolean {
        const stateTransitions = this.transitions.get(this.currentState);
        if (!stateTransitions) return false;

        const nextState = stateTransitions.get(event);
        if (!nextState) return false;

        this.currentState = nextState;
        return true;
    }

    getState(): S {
        return this.currentState;
    }
}

// Generic Memento Pattern
export class Memento<T> {
    constructor(private state: T) {}

    getState(): T {
        return this.state;
    }
}

export class Originator<T> {
    constructor(private state: T) {}

    setState(state: T): void {
        this.state = state;
    }

    getState(): T {
        return this.state;
    }

    saveToMemento(): Memento<T> {
        return new Memento(JSON.parse(JSON.stringify(this.state)));
    }

    restoreFromMemento(memento: Memento<T>): void {
        this.state = memento.getState();
    }
}

// Generic Lazy initialization
export class Lazy<T> {
    private value?: T;
    private isInitialized = false;

    constructor(private initializer: () => T) {}

    getValue(): T {
        if (!this.isInitialized) {
            this.value = this.initializer();
            this.isInitialized = true;
        }
        return this.value!;
    }
}

// Generic Event Emitter
export class EventEmitter<Events extends Record<string, any>> {
    private listeners: { [K in keyof Events]?: Array<(data: Events[K]) => void> } = {};

    on<K extends keyof Events>(event: K, listener: (data: Events[K]) => void): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(listener);
    }

    emit<K extends keyof Events>(event: K, data: Events[K]): void {
        const eventListeners = this.listeners[event];
        if (eventListeners) {
            for (const listener of eventListeners) {
                listener(data);
            }
        }
    }

    off<K extends keyof Events>(event: K, listener: (data: Events[K]) => void): void {
        const eventListeners = this.listeners[event];
        if (eventListeners) {
            const index = eventListeners.indexOf(listener);
            if (index > -1) {
                eventListeners.splice(index, 1);
            }
        }
    }
}

// Generic Cache
export class Cache<K, V> {
    private cache: Map<K, { value: V; expiry: number }> = new Map();

    constructor(private defaultTTL: number = 60000) {} // Default 60 seconds

    set(key: K, value: V, ttl?: number): void {
        const expiry = Date.now() + (ttl ?? this.defaultTTL);
        this.cache.set(key, { value, expiry });
    }

    get(key: K): V | undefined {
        const entry = this.cache.get(key);
        if (!entry) return undefined;

        if (Date.now() > entry.expiry) {
            this.cache.delete(key);
            return undefined;
        }

        return entry.value;
    }

    has(key: K): boolean {
        return this.get(key) !== undefined;
    }

    delete(key: K): boolean {
        return this.cache.delete(key);
    }

    clear(): void {
        this.cache.clear();
    }
}

