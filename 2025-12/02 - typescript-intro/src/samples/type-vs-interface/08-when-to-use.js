"use strict";
// ============================================
// 8. КОГДА ЧТО ИСПОЛЬЗОВАТЬ (When to Use)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoWhenToUse = demoWhenToUse;
// ==================== ПРИМЕРЫ ====================
var status = "loading";
var coords = [10, 20];
var userWithTime = {
    id: 1,
    name: "Иван",
    createdAt: new Date(),
    updatedAt: new Date()
};
function demoWhenToUse() {
    console.log('8. КОГДА ЧТО ИСПОЛЬЗОВАТЬ');
    console.log('\n✅ INTERFACE для:');
    console.log('  - Публичного API');
    console.log('  - Контрактов классов');
    console.log('  - Declaration Merging');
    console.log('  - Описания объектов');
    console.log('\n✅ TYPE для:');
    console.log('  - Union типов (|)');
    console.log('  - Intersection типов (&)');
    console.log('  - Tuple, Primitive aliases');
    console.log('  - Mapped и Conditional типов');
    console.log('  - Функциональных типов');
    console.log('\nStatus:', status);
    console.log('Coordinates:', coords);
    console.log('UserWithTimestamp:', userWithTime);
    console.log('');
}
