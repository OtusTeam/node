// ============================================
// 6. ПАТТЕРНЫ МОДУЛЕЙ - Configuration
// ============================================

// Module pattern для конфигурации
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};

// Приватные переменные
let isInitialized = false;

// Публичный API
export function getConfig() {
  return { ...config }; // Возвращаем копию
}

export function setApiUrl(url: string): void {
  config.apiUrl = url;
}

export function initialize(): void {
  if (!isInitialized) {
    console.log("Config initialized");
    isInitialized = true;
  } else {
    console.log("Config already initialized");
  }
}

export function isReady(): boolean {
  return isInitialized;
}

