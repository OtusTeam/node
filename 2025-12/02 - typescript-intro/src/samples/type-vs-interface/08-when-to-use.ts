// ============================================
// 8. КОГДА ЧТО ИСПОЛЬЗОВАТЬ (When to Use)
// ============================================

// ==================== ИСПОЛЬЗУЙТЕ INTERFACE ====================

// ✅ 1. Для публичного API (может потребоваться расширение)
export interface IPublicAPI {
    version: string;
    getData(): Promise<unknown>;
}

// ✅ 2. Для контрактов классов
export interface IRepository<T> {
    findById(id: string): Promise<T | null>;
    save(entity: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// ✅ 3. Когда нужно Declaration Merging
export interface IWindow {
    customProperty: string;
}

// Позже можно добавить
export interface IWindow {
    anotherProperty: number;
}

// ✅ 4. Для описания формы объектов данных
export interface IUserData {
    id: number;
    name: string;
    email: string;
}

// ==================== ИСПОЛЬЗУЙТЕ TYPE ====================

// ✅ 1. Union types
export type Status = "idle" | "loading" | "success" | "error";
export type ID = string | number;

// ✅ 2. Intersection types
export type Timestamped = { createdAt: Date; updatedAt: Date };
export type User = { id: number; name: string };
export type UserWithTimestamp = User & Timestamped;

// ✅ 3. Tuple types
export type Coordinates = [number, number];
export type RGB = [number, number, number];

// ✅ 4. Mapped types
export type Nullable<T> = { [K in keyof T]: T[K] | null };
export type Readonly<T> = { readonly [K in keyof T]: T[K] };

// ✅ 5. Conditional types
export type NonNullable<T> = T extends null | undefined ? never : T;

// ✅ 6. Primitive aliases
export type Email = string;
export type Age = number;

// ✅ 7. Function types
export type Validator<T> = (value: T) => boolean;
export type Mapper<T, U> = (input: T) => U;

// ==================== ПРИМЕРЫ ====================

const status: Status = "loading";
const coords: Coordinates = [10, 20];
const userWithTime: UserWithTimestamp = {
    id: 1,
    name: "Иван",
    createdAt: new Date(),
    updatedAt: new Date()
};

export function demoWhenToUse(): void {
    console.log('8. КОГДА ЧТО ИСПОЛЬЗОВАТЬ');
    console.log('\n✅ INTERFACE для:');
    console.log('  - Публичного API');
    console.log('  - Контрактов классов');
    console.log('  - Declaration Merging');
    console.log('  - Описания объектов');
    
    console.log('\n✅ TYPE для:');
    console.log('  - Union типов (|)');
    console.log('  - Intersection типов (&)');
    console.log('  - Tuple, Primitive aliases');
    console.log('  - Mapped и Conditional типов');
    console.log('  - Функциональных типов');
    
    console.log('\nStatus:', status);
    console.log('Coordinates:', coords);
    console.log('UserWithTimestamp:', userWithTime);
    console.log('');
}

