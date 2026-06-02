"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoAccessModifiers = demoAccessModifiers;
var BankAccount_1 = require("./BankAccount");
function demoAccessModifiers() {
    console.log('2. МОДИФИКАТОРЫ ДОСТУПА');
    var account = new BankAccount_1.BankAccount("Мария", 1000);
    account.deposit(500);
    account.withdraw(300);
    console.log("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ".concat(account.getBalance(), "\u20BD"));
    // console.log(account.balance); // ❌ Ошибка: balance is private
    console.log('');
}
