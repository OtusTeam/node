// ============================================
// GENERIC INTERFACES (Обобщенные интерфейсы)
// ============================================

// Generic интерфейс для пары ключ-значение
export interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

// Generic интерфейс для ответа API
export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: Date;
}

// Generic интерфейс для коллекции
export interface Collection<T> {
    add(item: T): void;
    remove(item: T): boolean;
    contains(item: T): boolean;
    size(): number;
    clear(): void;
    toArray(): T[];
}

// Generic интерфейс для репозитория
export interface Repository<T, ID> {
    findById(id: ID): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    delete(id: ID): Promise<boolean>;
}

// Generic интерфейс для преобразователя
export interface Converter<From, To> {
    convert(item: From): To;
}

// Пример реализации Collection
export class ArrayList<T> implements Collection<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): boolean {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    contains(item: T): boolean {
        return this.items.includes(item);
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }

    toArray(): T[] {
        return [...this.items];
    }
}

