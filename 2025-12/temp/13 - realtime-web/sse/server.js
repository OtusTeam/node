const express = require('express');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Укажите домен вашего клиента
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Разрешение на использование cookies/токенов
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Укажите допустимые методы
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Укажите разрешённые заголовки
    next();
});

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    setInterval(() => {
        const message = `data: Новое сообщение в ${new Date().toISOString()}\n\n`;
        res.write(message);
    }, 5000); // Отправка сообщений каждые 5 секунд
});

app.listen(3000, () => console.log('Сервер работает на http://localhost:3000'));
