"use strict";
// ============================================
// 10. СОКРАЩЁННАЯ ЗАПИСЬ КОНСТРУКТОРА
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    // Параметры конструктора автоматически становятся свойствами
    function User(username, password, email, id) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.id = id;
    }
    User.prototype.authenticate = function (inputPassword) {
        return this.password === inputPassword;
    };
    User.prototype.getInfo = function () {
        return "User: ".concat(this.username, " (").concat(this.email, ") [ID: ").concat(this.id, "]");
    };
    return User;
}());
exports.User = User;
