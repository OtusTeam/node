// ============================================
// ПРОДВИНУТЫЕ ИНТЕРФЕЙСЫ (Advanced Interfaces)
// ============================================

// Интерфейс с методами-функциями
export interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

// Гибридный интерфейс - объект и функция одновременно
export interface ICounter {
    (start: number): string;  // Вызываемый как функция
    interval: number;          // Свойство
    reset(): void;             // Метод
}

// Интерфейс конфигурации с опциональными свойствами
export interface IConfig {
    apiUrl: string;
    timeout?: number;          // Опциональное
    retries?: number;          // Опциональное
    readonly version: string;  // Только для чтения
}

