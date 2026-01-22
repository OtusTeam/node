// ============================================
// UTILITY TYPES (Вспомогательные типы)
// ============================================

// Базовый интерфейс для примеров
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    isActive: boolean;
}

// 1. Partial<T> - все свойства опциональные
type PartialUser = Partial<User>;
export function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

// 2. Required<T> - все свойства обязательные
interface OptionalUser {
    id?: number;
    name?: string;
    email?: string;
}
type RequiredUser = Required<OptionalUser>;

// 3. Readonly<T> - все свойства только для чтения
export function createReadonlyUser(user: User): Readonly<User> {
    return Object.freeze({ ...user });
}

// 4. Pick<T, K> - выбрать определенные свойства
type UserPreview = Pick<User, 'id' | 'name' | 'email'>;
export function getUserPreview(user: User): UserPreview {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

// 5. Omit<T, K> - исключить определенные свойства
type UserWithoutPassword = Omit<User, 'password'>;
export function sanitizeUser(user: User): UserWithoutPassword {
    const { password, ...rest } = user;
    return rest;
}

// 6. Record<K, T> - создать объект с ключами типа K и значениями типа T
type UserRoles = Record<string, string[]>;
export const rolePermissions: Record<'admin' | 'user' | 'guest', string[]> = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
};

// 7. Exclude<T, U> - исключить из T типы, которые есть в U
type UserStatus = 'active' | 'inactive' | 'banned' | 'deleted';
type ActiveStatus = Exclude<UserStatus, 'deleted'>;

// 8. Extract<T, U> - извлечь из T типы, которые есть в U
type InactiveStatus = Extract<UserStatus, 'inactive' | 'banned' | 'deleted'>;

// 9. NonNullable<T> - исключить null и undefined
type NonNullableString = NonNullable<string | null | undefined>;

// 10. ReturnType<T> - получить тип возвращаемого значения функции
function getUser(): User {
    return {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: 'secret',
        age: 30,
        isActive: true
    };
}
type UserReturnType = ReturnType<typeof getUser>;

// 11. Parameters<T> - получить типы параметров функции
function createUser(name: string, email: string, age: number): User {
    return {
        id: Date.now(),
        name,
        email,
        password: '',
        age,
        isActive: true
    };
}
type CreateUserParams = Parameters<typeof createUser>;

// 12. Пользовательский Utility Type - DeepPartial
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 13. Пользовательский Utility Type - DeepReadonly
export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 14. Пользовательский Utility Type - Nullable
export type Nullable<T> = T | null;

// 15. Пользовательский Utility Type - Optional
export type Optional<T> = T | undefined;

// 16. Пользовательский Utility Type - ValueOf
export type ValueOf<T> = T[keyof T];
type UserValues = ValueOf<User>; // number | string | boolean

// 17. Conditional Types - проверка типа
export type IsString<T> = T extends string ? true : false;
export type IsArray<T> = T extends any[] ? true : false;

// 18. Mapped Types - преобразование типов
export type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// 19. Template Literal Types
export type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // "onClick"

// 20. Пример использования инференса типов
export function wrapInArray<T>(value: T): T[] {
    return [value];
}

// Пример функции с conditional type
export type Unpacked<T> = 
    T extends (infer U)[] ? U :
    T extends Promise<infer U> ? U :
    T;

export function unpack<T>(value: T): Unpacked<T> {
    if (Array.isArray(value)) {
        return value[0] as Unpacked<T>;
    }
    return value as Unpacked<T>;
}

