// ============================================
// 6. NAMESPACE VS MODULE
// ============================================

// ========== NAMESPACE ==========
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function multiply(a: number, b: number): number {
    return a * b;
  }

  // Приватная функция
  function validate(n: number): boolean {
    return !isNaN(n);
  }

  export class Calculator {
    compute(a: number, b: number, operation: "add" | "multiply"): number {
      if (operation === "add") return add(a, b);
      return multiply(a, b);
    }
  }
}

console.log("\n--- 6. Namespace vs Module ---");
console.log("\n=== NAMESPACE ===");
console.log("Namespace add:", MathUtils.add(5, 3));
console.log("Namespace multiply:", MathUtils.multiply(4, 2));

const calc1 = new MathUtils.Calculator();
console.log("Calculator compute:", calc1.compute(10, 5, "add"));

// ========== MODULE (ES6) ==========
// Это альтернативный способ организации кода через модули

export namespace StringUtils {
  export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  export function reverse(str: string): string {
    return str.split("").reverse().join("");
  }

  export class TextFormatter {
    format(text: string): string {
      return capitalize(text);
    }
  }
}

console.log("\n=== MODULE ===");
console.log("Capitalize:", StringUtils.capitalize("hello"));
console.log("Reverse:", StringUtils.reverse("TypeScript"));

const formatter = new StringUtils.TextFormatter();
console.log("Formatter:", formatter.format("world"));

// ========== СРАВНЕНИЕ ==========
console.log("\n=== СРАВНЕНИЕ ===");
console.log(`
NAMESPACE:
✓ Внутренняя организация кода
✓ Группировка связанной логики
✓ Приватные члены через отсутствие export
✓ Автоматическое слияние объявлений
✓ Глобальная область видимости
✗ Нет tree-shaking
✗ Сложнее для больших проектов

MODULE (ES6):
✓ Современный стандарт
✓ Tree-shaking поддержка
✓ Явное импортирование
✓ Изолированная область видимости
✓ Лучше для больших проектов
✗ Нет автоматического слияния
✗ Требует систему модулей (webpack, etc)

КОГДА ИСПОЛЬЗОВАТЬ NAMESPACE:
- Внутренняя структура библиотеки
- Type definitions (.d.ts файлы)
- Легаси код
- Простые скрипты

КОГДА ИСПОЛЬЗОВАТЬ MODULE:
- Современные приложения
- Большие проекты
- Когда нужен tree-shaking
- Работа с внешними пакетами
`);

