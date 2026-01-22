// ============================================
// 6. MAPPED TYPES (Преобразованные типы)
// ============================================

// ✅ TYPE - может создавать mapped types
type User = {
    id: number;
    name: string;
    email: string;
};

// Делаем все свойства readonly
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

// Делаем все свойства опциональными
type PartialUser = {
    [K in keyof User]?: User[K];
};

export const readonlyUser: ReadonlyUser = {
    id: 1,
    name: "Иван",
    email: "ivan@example.com"
};

// readonlyUser.name = "Пётр"; // ❌ Ошибка - readonly!

export const partialUser: PartialUser = {
    id: 2
    // name и email опциональны
};

// ❌ INTERFACE - не может создавать mapped types напрямую
// (но можно использовать встроенные utility types)

// TYPE - для условных типов
type IsString<T> = T extends string ? "yes" : "no";

type Test1 = IsString<string>;  // "yes"
type Test2 = IsString<number>;  // "no"

export const test1: Test1 = "yes";
export const test2: Test2 = "no";

export function demoMappedTypes(): void {
    console.log('6. MAPPED TYPES');
    console.log('ReadonlyUser:', readonlyUser);
    console.log('PartialUser:', partialUser);
    console.log('✅ Type: mapped types, conditional types');
    console.log('❌ Interface: не поддерживает\n');
}

