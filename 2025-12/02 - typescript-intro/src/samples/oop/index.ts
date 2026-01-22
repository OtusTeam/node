// ============================================
// ООП в TypeScript - Примеры
// Object-Oriented Programming Examples
// ============================================
// 
// Все классы, интерфейсы и примеры разделены по отдельным файлам
// для лучшей организации и удобства изучения
// ============================================

import { demoBasicClass } from './01-basic-class/demo';
import { demoAccessModifiers } from './02-access-modifiers/demo';
import { demoInheritance } from './03-inheritance/demo';
import { demoPolymorphism } from './04-polymorphism/demo';
import { demoAbstractClasses } from './05-abstract-classes/demo';
import { demoInterfaces } from './06-interfaces/demo';
import { demoGettersSetters } from './07-getters-setters/demo';
import { demoStaticMembers } from './08-static-members/demo';
import { demoReadonly } from './09-readonly/demo';
import { demoConstructorShorthand } from './10-constructor-shorthand/demo';
import { demoComposition } from './11-composition/demo';
import { demoGenerics } from './12-generics/demo';
import { demoFunctionInterfaces } from './13-function-interfaces/demo';
import { demoIndexableTypes } from './14-indexable-types/demo';
import { demoAdvancedInterfaces } from './15-advanced-interfaces/demo';
import { demoGenericConstraints } from './16-generic-constraints/demo';
import { demoDecorators } from './17-decorators/demo';

console.log('=== ООП В TYPESCRIPT ===\n');

// Запуск всех демонстраций
async function main() {
    demoBasicClass();
    demoAccessModifiers();
    demoInheritance();
    demoPolymorphism();
    demoAbstractClasses();
    demoInterfaces();
    demoGettersSetters();
    demoStaticMembers();
    demoReadonly();
    demoConstructorShorthand();
    demoComposition();
    demoGenerics();
    demoFunctionInterfaces();
    demoIndexableTypes();
    demoAdvancedInterfaces();
    demoGenericConstraints();
    await demoDecorators();
    
    console.log('=== КОНЕЦ ПРИМЕРОВ ===');
}

main();
