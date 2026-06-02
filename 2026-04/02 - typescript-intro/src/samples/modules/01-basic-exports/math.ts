// ============================================
// 1. БАЗОВЫЙ ЭКСПОРТ (Basic Exports)
// ============================================

// Named exports - именованный экспорт
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14159;

export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) throw new Error("Деление на ноль!");
    return a / b;
  }
}

