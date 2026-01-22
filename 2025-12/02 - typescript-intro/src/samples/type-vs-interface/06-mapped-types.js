"use strict";
// ============================================
// 6. MAPPED TYPES (Преобразованные типы)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.partialUser = exports.readonlyUser = void 0;
exports.demoMappedTypes = demoMappedTypes;
exports.readonlyUser = {
    id: 1,
    name: "Иван",
    email: "ivan@example.com"
};
// readonlyUser.name = "Пётр"; // ❌ Ошибка - readonly!
exports.partialUser = {
    id: 2
    // name и email опциональны
};
function demoMappedTypes() {
    console.log('6. MAPPED TYPES');
    console.log('ReadonlyUser:', exports.readonlyUser);
    console.log('PartialUser:', exports.partialUser);
    console.log('✅ Type: mapped types, conditional types');
    console.log('❌ Interface: не поддерживает\n');
}
