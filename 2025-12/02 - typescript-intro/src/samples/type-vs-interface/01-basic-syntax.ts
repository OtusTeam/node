// ============================================
// 1. БАЗОВЫЙ СИНТАКСИС (Basic Syntax)
// ============================================

// INTERFACE - для описания формы объектов
interface IUser {
    id: number;
    name: string;
    email: string;
}

// TYPE - может описывать объекты и другие типы
type User = {
    id: number;
    name: string;
    email: string;
};

// Оба работают одинаково для объектов
export const interfaceUser: IUser = {
    id: 1,
    name: "Иван",
    email: "ivan@example.com"
};

export const typeUser: User = {
    id: 2,
    name: "Мария",
    email: "maria@example.com"
};

export function demoBasicSyntax(): void {
    console.log('1. БАЗОВЫЙ СИНТАКСИС');
    console.log('Interface user:', interfaceUser);
    console.log('Type user:', typeUser);
    console.log('✅ Для объектов - оба работают одинаково\n');
}

