"use strict";
// ============================================
// 3. РАСШИРЕНИЕ (Extending)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.human = exports.employeeType = exports.employee = void 0;
exports.demoExtending = demoExtending;
exports.employee = {
    name: "Алексей",
    employeeId: 1001,
    department: "IT"
};
exports.employeeType = {
    name: "Мария",
    employeeId: 1002,
    department: "HR"
};
exports.human = {
    name: "Иван",
    walk: function () { console.log("Идёт"); },
    talk: function () { console.log("Говорит"); }
};
function demoExtending() {
    console.log('3. РАСШИРЕНИЕ (Extending)');
    console.log('Employee (interface):', exports.employee);
    console.log('Employee (type):', exports.employeeType);
    console.log('✅ Interface: extends');
    console.log('✅ Type: & (intersection)\n');
}
