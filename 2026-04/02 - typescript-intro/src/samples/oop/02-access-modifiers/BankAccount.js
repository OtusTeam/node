"use strict";
// ============================================
// 2. МОДИФИКАТОРЫ ДОСТУПА (Access Modifiers)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(holder, initialBalance) {
        this.accountHolder = holder;
        this.balance = initialBalance;
        this.accountNumber = this.generateAccountNumber();
    }
    BankAccount.prototype.generateAccountNumber = function () {
        return 'ACC' + Math.floor(Math.random() * 1000000);
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("\u0412\u043D\u0435\u0441\u0435\u043D\u043E: ".concat(amount, "\u20BD. \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance, "\u20BD"));
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("\u0421\u043D\u044F\u0442\u043E: ".concat(amount, "\u20BD. \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance, "\u20BD"));
        }
        else {
            console.log('Недостаточно средств');
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
