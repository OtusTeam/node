"use strict";
// ============================================
// UTILITY TYPES (Вспомогательные типы)
// ============================================
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolePermissions = void 0;
exports.updateUser = updateUser;
exports.createReadonlyUser = createReadonlyUser;
exports.getUserPreview = getUserPreview;
exports.sanitizeUser = sanitizeUser;
exports.wrapInArray = wrapInArray;
exports.unpack = unpack;
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
// 3. Readonly<T> - все свойства только для чтения
function createReadonlyUser(user) {
    return Object.freeze(__assign({}, user));
}
function getUserPreview(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}
function sanitizeUser(user) {
    var password = user.password, rest = __rest(user, ["password"]);
    return rest;
}
exports.rolePermissions = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
};
// 10. ReturnType<T> - получить тип возвращаемого значения функции
function getUser() {
    return {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: 'secret',
        age: 30,
        isActive: true
    };
}
// 11. Parameters<T> - получить типы параметров функции
function createUser(name, email, age) {
    return {
        id: Date.now(),
        name: name,
        email: email,
        password: '',
        age: age,
        isActive: true
    };
}
// 20. Пример использования инференса типов
function wrapInArray(value) {
    return [value];
}
function unpack(value) {
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
}
