// Импорт из barrel файла
import { add, Logger, sum, PI } from "./index";

export function demoReExports(): void {
  console.log("\n--- 3. Ре-экспорт (Barrel exports) ---");

  console.log("Импорт из одного места:");
  console.log("add(3, 7) =", add(3, 7));
  console.log("sum(3, 7) =", sum(3, 7)); // Переименованный экспорт
  console.log("PI =", PI);

  const logger = new Logger("[BARREL]");
  logger.log("Все импортировано из index.ts");
}

