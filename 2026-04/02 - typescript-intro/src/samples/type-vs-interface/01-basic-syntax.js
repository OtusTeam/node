"use strict";
// ============================================
// 1. БАЗОВЫЙ СИНТАКСИС (Basic Syntax)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeUser = exports.interfaceUser = void 0;
exports.demoBasicSyntax = demoBasicSyntax;
// Оба работают одинаково для объектов
exports.interfaceUser = {
    id: 1,
    name: "Иван",
    email: "ivan@example.com"
};
exports.typeUser = {
    id: 2,
    name: "Мария",
    email: "maria@example.com"
};
function demoBasicSyntax() {
    console.log('1. БАЗОВЫЙ СИНТАКСИС');
    console.log('Interface user:', exports.interfaceUser);
    console.log('Type user:', exports.typeUser);
    console.log('✅ Для объектов - оба работают одинаково\n');
}
