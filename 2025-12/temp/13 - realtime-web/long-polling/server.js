const { setTimeout: delay } = require('node:timers/promises');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let dataQueue = [];

// Генерация новых данных (например, события или обновления)
setInterval(() => {
    const timestamp = new Date().toISOString();
    dataQueue.push(`Новые данные на ${timestamp}`);
}, 5000); // Новые данные каждые 5 секунд

// Эндпоинт для длинного опроса
app.get('/long-poll', async(req, res) => {
    while(true) {
        if (dataQueue.length) {
            return res.json({ success: true, data: dataQueue.shift() });
        }

        await delay(1000); // 1 секунда.
    };
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
