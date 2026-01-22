// ============================================
// 1. БАЗОВЫЙ NAMESPACE
// ============================================

namespace Geometry {
  // Экспортируемые функции доступны снаружи
  export function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  export function calculateRectangleArea(
    width: number,
    height: number
  ): number {
    return width * height;
  }

  // Приватная функция - доступна только внутри namespace
  function validatePositive(value: number): boolean {
    return value > 0;
  }

  export function calculateTriangleArea(
    base: number,
    height: number
  ): number {
    if (!validatePositive(base) || !validatePositive(height)) {
      throw new Error("Значения должны быть положительными");
    }
    return (base * height) / 2;
  }

  // Константы
  export const PI = Math.PI;
  export const E = Math.E;
}

// Использование namespace
console.log("\n--- 1. Базовый namespace ---");
console.log("Площадь круга (r=5):", Geometry.calculateCircleArea(5));
console.log(
  "Площадь прямоугольника (10x5):",
  Geometry.calculateRectangleArea(10, 5)
);
console.log("Площадь треугольника (6x4):", Geometry.calculateTriangleArea(6, 4));
console.log("PI:", Geometry.PI);

// Приватная функция недоступна
// Geometry.validatePositive(5); // ❌ Error

