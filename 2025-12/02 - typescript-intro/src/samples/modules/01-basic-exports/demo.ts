// Импорт именованных экспортов
import { add, subtract, PI, Calculator } from "./math";

export function demoBasicExports(): void {
  console.log("\n--- 1. Базовый экспорт ---");

  console.log("add(5, 3) =", add(5, 3));
  console.log("subtract(10, 4) =", subtract(10, 4));
  console.log("PI =", PI);

  const calc = new Calculator();
  console.log("multiply(6, 7) =", calc.multiply(6, 7));
  console.log("divide(20, 4) =", calc.divide(20, 4));
}

