"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoReadonly = demoReadonly;
var Book_1 = require("./Book");
function demoReadonly() {
    console.log('9. READONLY СВОЙСТВА');
    var book = new Book_1.Book("978-5-17-123456-7", "Война и мир", "Лев Толстой");
    console.log("\u041A\u043D\u0438\u0433\u0430: ".concat(book.title, " (ISBN: ").concat(book.isbn, ")"));
    console.log('');
}
