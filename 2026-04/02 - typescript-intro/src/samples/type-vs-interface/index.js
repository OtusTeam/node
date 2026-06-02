"use strict";
// ============================================
// TYPE vs INTERFACE - Различия и примеры
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
var _01_basic_syntax_1 = require("./01-basic-syntax");
var _02_declaration_merging_1 = require("./02-declaration-merging");
var _03_extending_1 = require("./03-extending");
var _04_union_types_1 = require("./04-union-types");
var _05_primitive_aliases_1 = require("./05-primitive-aliases");
var _06_mapped_types_1 = require("./06-mapped-types");
var _07_classes_1 = require("./07-classes");
var _08_when_to_use_1 = require("./08-when-to-use");
console.log('=== TYPE vs INTERFACE В TYPESCRIPT ===\n');
(0, _01_basic_syntax_1.demoBasicSyntax)();
(0, _02_declaration_merging_1.demoDeclarationMerging)();
(0, _03_extending_1.demoExtending)();
(0, _04_union_types_1.demoUnionTypes)();
(0, _05_primitive_aliases_1.demoPrimitiveAliases)();
(0, _06_mapped_types_1.demoMappedTypes)();
(0, _07_classes_1.demoClasses)();
(0, _08_when_to_use_1.demoWhenToUse)();
console.log('=== КРАТКАЯ ШПАРГАЛКА ===');
console.log('\n📌 INTERFACE:');
console.log('  ✅ Расширение (extends)');
console.log('  ✅ Declaration Merging');
console.log('  ✅ Контракты для классов');
console.log('  ❌ Не может: union, tuple, примитивы');
console.log('\n📌 TYPE:');
console.log('  ✅ Union типы (|)');
console.log('  ✅ Intersection (&)');
console.log('  ✅ Tuple, примитивы, функции');
console.log('  ✅ Mapped & Conditional типы');
console.log('  ❌ Не может: Declaration Merging');
console.log('\n💡 ПРАВИЛО:');
console.log('  Interface для объектов и контрактов');
console.log('  Type для всего остального');
console.log('\n=== КОНЕЦ ПРИМЕРОВ ===');
