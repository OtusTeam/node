// ============================================
// 3. РЕ-ЭКСПОРТ (Re-exports)
// ============================================

// Barrel exports - экспорт всего из одного места
export { add, subtract, PI, Calculator } from "../01-basic-exports/math";
export { default as Logger, LOG_LEVEL } from "../02-default-export/logger";

// Re-export с переименованием
export { add as sum } from "../01-basic-exports/math";

// Re-export всего
export * from "../01-basic-exports/math";

