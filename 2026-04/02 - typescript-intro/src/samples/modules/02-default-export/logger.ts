// ============================================
// 2. ЭКСПОРТ ПО УМОЛЧАНИЮ (Default Export)
// ============================================

// Default export - один главный экспорт на модуль
export default class Logger {
  private prefix: string;

  constructor(prefix: string = "[LOG]") {
    this.prefix = prefix;
  }

  log(message: string): void {
    console.log(`${this.prefix} ${message}`);
  }

  error(message: string): void {
    console.error(`${this.prefix} [ERROR] ${message}`);
  }

  warn(message: string): void {
    console.warn(`${this.prefix} [WARN] ${message}`);
  }
}

// Можно комбинировать default и named exports
export const LOG_LEVEL = {
  INFO: "info",
  ERROR: "error",
  WARN: "warn",
};

