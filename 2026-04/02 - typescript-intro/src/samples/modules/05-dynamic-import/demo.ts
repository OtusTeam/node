// ============================================
// 5. ДИНАМИЧЕСКИЙ ИМПОРТ (Dynamic Import)
// ============================================

export async function demoDynamicImport(): Promise<void> {
  console.log("\n--- 5. Динамический импорт ---");

  // Динамический импорт - загружается только когда нужно
  console.log("Загрузка модуля math...");

  const mathModule = await import("../01-basic-exports/math");

  console.log("Модуль загружен!");
  console.log("mathModule.add(8, 2) =", mathModule.add(8, 2));
  console.log("mathModule.PI =", mathModule.PI);

  // Динамический импорт default экспорта
  console.log("\nЗагрузка Logger...");
  const loggerModule = await import("../02-default-export/logger");
  const Logger = loggerModule.default;

  const logger = new Logger("[DYNAMIC]");
  logger.log("Загружен динамически!");

  // Условный импорт
  const isDevelopment = false;
  if (isDevelopment) {
    const devTools = await import("../01-basic-exports/math");
    console.log("Dev tools loaded:", devTools.PI);
  } else {
    console.log("Production mode - dev tools не загружены");
  }
}

