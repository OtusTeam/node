// ============================================
// МОДУЛИ В TYPESCRIPT
// ============================================

import { demoBasicExports } from "./01-basic-exports/demo";
import { demoDefaultExport } from "./02-default-export/demo";
import { demoReExports } from "./03-re-exports/demo";
import { demoImportAliases } from "./04-import-aliases/demo";
import { demoDynamicImport } from "./05-dynamic-import/demo";
import { demoModulePatterns } from "./06-module-patterns/demo";

console.log("=== МОДУЛИ В TYPESCRIPT ===");

async function main() {   
  demoBasicExports(); //модуль с базовыми экспортами
  demoDefaultExport(); //модуль с default экспортом
  demoReExports(); //модуль с ре-экспортом
  demoImportAliases(); //модуль с псевдонимами импорта
  await demoDynamicImport(); //модуль с динамическим импортом
  demoModulePatterns(); //модуль с паттернами модулей

  console.log("\n=== КОНЕЦ ПРИМЕРОВ ===");
}

main(); //запуск всех модулей

