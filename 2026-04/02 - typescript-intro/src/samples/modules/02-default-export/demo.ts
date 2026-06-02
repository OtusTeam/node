// Импорт default экспорта (можно дать любое имя)
import Logger from "./logger";
import { LOG_LEVEL } from "./logger";

export function demoDefaultExport(): void {
  console.log("\n--- 2. Экспорт по умолчанию ---");

  const logger = new Logger("[APP]");
  logger.log("Приложение запущено");
  logger.warn("Это предупреждение");
  logger.error("Это ошибка");

  console.log("Log levels:", LOG_LEVEL);
}

