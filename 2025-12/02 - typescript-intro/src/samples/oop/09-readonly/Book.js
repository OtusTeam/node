"use strict";
// ============================================
// 9. READONLY СВОЙСТВА (Readonly Properties)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    Book.prototype.updateAuthor = function (newAuthor) {
        this.author = newAuthor;
        // this.isbn = "new"; // ❌ Ошибка: readonly свойство
    };
    return Book;
}());
exports.Book = Book;
