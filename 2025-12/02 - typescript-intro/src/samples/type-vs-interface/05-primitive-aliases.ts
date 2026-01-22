// ============================================
// 5. АЛИАСЫ ПРИМИТИВОВ (Primitive Aliases)
// ============================================

// ✅ TYPE - может создавать алиасы для примитивов
type UserID = string;
type Age = number;
type IsActive = boolean;

export const userId: UserID = "user_12345";
export const age: Age = 30;
export const isActive: IsActive = true;

// ❌ INTERFACE - нельзя использовать для примитивов
// interface IUserID = string;  // Ошибка!

// TYPE - для tuple (кортежей)
type Point = [number, number];
type RGB = [number, number, number];

export const point: Point = [10, 20];
export const color: RGB = [255, 128, 0];

// TYPE - для функций
type MathOperation = (a: number, b: number) => number;

export const add: MathOperation = (a, b) => a + b;
export const multiply: MathOperation = (a, b) => a * b;

export function demoPrimitiveAliases(): void {
    console.log('5. АЛИАСЫ ПРИМИТИВОВ');
    console.log('UserID:', userId);
    console.log('Age:', age);
    console.log('Point:', point);
    console.log('Color RGB:', color);
    console.log('Add 5 + 3:', add(5, 3));
    console.log('✅ Type: алиасы примитивов, tuple, функции');
    console.log('❌ Interface: только для объектов\n');
}

