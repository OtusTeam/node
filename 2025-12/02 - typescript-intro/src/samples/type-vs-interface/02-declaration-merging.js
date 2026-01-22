"use strict";
// ============================================
// 2. DECLARATION MERGING (Объединение объявлений)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal = void 0;
exports.demoDeclarationMerging = demoDeclarationMerging;
// Все три объявления объединяются в одно!
exports.animal = {
    name: "Кот",
    age: 3,
    sound: "Мяу"
};
// type Animal = {  // ❌ Ошибка! Duplicate identifier
//     age: number;
// };
function demoDeclarationMerging() {
    console.log('2. DECLARATION MERGING');
    console.log('Animal (interface):', exports.animal);
    console.log('✅ Interface: можно объявлять несколько раз');
    console.log('❌ Type: нельзя переопределять\n');
}
