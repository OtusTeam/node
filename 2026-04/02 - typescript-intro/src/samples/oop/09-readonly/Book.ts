// ============================================
// 9. READONLY СВОЙСТВА (Readonly Properties)
// ============================================

export class Book {
    readonly isbn: string;
    readonly title: string;
    author: string;

    constructor(isbn: string, title: string, author: string) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }

    updateAuthor(newAuthor: string): void {
        this.author = newAuthor;
        // this.isbn = "new"; // ❌ Ошибка: readonly свойство
    }
}

