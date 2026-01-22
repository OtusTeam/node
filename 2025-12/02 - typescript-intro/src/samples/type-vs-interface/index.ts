// ============================================
// TYPE vs INTERFACE - Различия и примеры
// ============================================

import { demoBasicSyntax } from './01-basic-syntax';
import { demoDeclarationMerging } from './02-declaration-merging';
import { demoExtending } from './03-extending';
import { demoUnionTypes } from './04-union-types';
import { demoPrimitiveAliases } from './05-primitive-aliases';
import { demoMappedTypes } from './06-mapped-types';
import { demoClasses } from './07-classes';
import { demoWhenToUse } from './08-when-to-use';

console.log('=== TYPE vs INTERFACE В TYPESCRIPT ===\n');

demoBasicSyntax();
demoDeclarationMerging();
demoExtending();
demoUnionTypes();
demoPrimitiveAliases();
demoMappedTypes();
demoClasses();
demoWhenToUse();

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

