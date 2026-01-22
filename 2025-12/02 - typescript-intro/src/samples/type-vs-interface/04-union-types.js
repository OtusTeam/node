"use strict";
// ============================================
// 4. UNION TYPES (Объединение типов)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.dog = exports.cat = exports.id2 = exports.id1 = exports.status2 = exports.status1 = void 0;
exports.handlePet = handlePet;
exports.demoUnionTypes = demoUnionTypes;
exports.status1 = "pending";
exports.status2 = "approved";
exports.id1 = "abc123";
exports.id2 = 42;
exports.cat = {
    type: "cat",
    meow: function () { console.log("Мяу!"); }
};
exports.dog = {
    type: "dog",
    bark: function () { console.log("Гав!"); }
};
function handlePet(pet) {
    if (pet.type === "cat") {
        pet.meow();
    }
    else {
        pet.bark();
    }
}
function demoUnionTypes() {
    console.log('4. UNION TYPES');
    console.log('Status:', exports.status1, exports.status2);
    console.log('ID:', exports.id1, exports.id2);
    handlePet(exports.cat);
    handlePet(exports.dog);
    console.log('✅ Type: поддерживает union (|)');
    console.log('❌ Interface: не поддерживает union напрямую\n');
}
