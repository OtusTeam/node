import { Book } from './Book';

export function demoReadonly(): void {
    console.log('9. READONLY СВОЙСТВА');
    
    const book = new Book("978-5-17-123456-7", "Война и мир", "Лев Толстой");
    console.log(`Книга: ${book.title} (ISBN: ${book.isbn})`);
    console.log('');
}

