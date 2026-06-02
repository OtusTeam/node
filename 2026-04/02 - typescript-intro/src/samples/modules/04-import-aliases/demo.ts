// ============================================
// 4. ПСЕВДОНИМЫ ИМПОРТА (Import Aliases)
// ============================================

// Импорт с псевдонимом (as)
import { add as addition, subtract as subtraction } from "../01-basic-exports/math";

// Импорт всего модуля как объект
import * as MathUtils from "../01-basic-exports/math";

// Импорт default с другим именем
import MyLogger from "../02-default-export/logger";

export function demoImportAliases(): void {
  console.log("\n--- 4. Псевдонимы импорта ---");

  // Использование псевдонимов
  console.log("addition(2, 3) =", addition(2, 3));
  console.log("subtraction(10, 5) =", subtraction(10, 5));

  // Использование namespace import
  console.log("MathUtils.add(4, 6) =", MathUtils.add(4, 6));
  console.log("MathUtils.PI =", MathUtils.PI);

  const calc = new MathUtils.Calculator();
  console.log("Calculator.multiply(3, 4) =", calc.multiply(3, 4));

  // Default import с другим именем
  const logger = new MyLogger("[ALIAS]");
  logger.log("Импортирован как MyLogger");
}

