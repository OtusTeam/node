"use strict";
// ============================================
// 5. АЛИАСЫ ПРИМИТИВОВ (Primitive Aliases)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.add = exports.color = exports.point = exports.isActive = exports.age = exports.userId = void 0;
exports.demoPrimitiveAliases = demoPrimitiveAliases;
exports.userId = "user_12345";
exports.age = 30;
exports.isActive = true;
exports.point = [10, 20];
exports.color = [255, 128, 0];
var add = function (a, b) { return a + b; };
exports.add = add;
var multiply = function (a, b) { return a * b; };
exports.multiply = multiply;
function demoPrimitiveAliases() {
    console.log('5. АЛИАСЫ ПРИМИТИВОВ');
    console.log('UserID:', exports.userId);
    console.log('Age:', exports.age);
    console.log('Point:', exports.point);
    console.log('Color RGB:', exports.color);
    console.log('Add 5 + 3:', (0, exports.add)(5, 3));
    console.log('✅ Type: алиасы примитивов, tuple, функции');
    console.log('❌ Interface: только для объектов\n');
}
