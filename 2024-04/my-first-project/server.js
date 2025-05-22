import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world. test');
})

app.listen(4000);

console.log('Server started on 4000 port');