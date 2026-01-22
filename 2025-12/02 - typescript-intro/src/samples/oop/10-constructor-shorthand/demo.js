"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoConstructorShorthand = demoConstructorShorthand;
var User_1 = require("./User");
function demoConstructorShorthand() {
    console.log('10. СОКРАЩЁННАЯ ЗАПИСЬ КОНСТРУКТОРА');
    var user = new User_1.User("john_doe", "secret123", "john@example.com", 1001);
    console.log(user.getInfo());
    console.log("\u0410\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F: ".concat(user.authenticate("secret123")));
    console.log('');
}
