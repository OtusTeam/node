import bodyParser from 'body-parser';
import express from 'express';

const books = [];
let idCounter = 0;

export const booksRouter = express.Router();

booksRouter.get('/api/books', (req, res) => {
    res.send(books);
});

booksRouter.post('/api/books', (req, res) => {

    idCounter++;
    books.push({ ...req.body, id: idCounter });

    res.send(idCounter + '');
});

booksRouter.post('/api/books/:id/sendMail', (req, res) => {
    res.send('ok');
});


booksRouter.get('/api/books/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const book = books.find(x => x.id === id);

    if (!book) {
        res.status(404).send(`Book ${id} not found`);
    }
    else {
        res.send(book);
    }
});

booksRouter.get('/api/books/:id/author', (req, res) => {

    const id = parseInt(req.params.id);
    const book = books.find(x => x.id === id);

    if (!book) {
        res.status(404).send(`Book ${id} not found`);
    }
    else {
        res.send(book.author);
    }
});


booksRouter.delete('/api/books/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const book = books.find(x => x.id === id);

    if (!book) {
        res.status(404).send(`Book ${id} not found`);
    }
    else {
        const i = books.indexOf(book);

        books.splice(i, 1);
        res.status(204);
    }
});


booksRouter.put('/api/books/:id', (req, res) => {

    const body = req.body;

    delete body.id;
    const id = parseInt(req.params.id);
    const book = books.find(x => x.id === id);

    if (!book) {
        res.status(404).send(`Book ${id} not found`);
    }
    else {

        const i = books.indexOf(book);

        books[i] = { ...book, ...body };
        res.status(200);
    }
});



