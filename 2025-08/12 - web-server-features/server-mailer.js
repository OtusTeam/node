const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware для обработки JSON
app.use(bodyParser.json());

// Настройка транспорта для Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jarod.bradtke25@ethereal.email',
        pass: '3bYmrbPvMnzrvM2kRX'
    }
});

// Маршрут для отправки электронного письма
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: 'nlapshin1989@gmail.com',
        to: to,
        subject: subject,
        text: text // Сделать HTML
    };

    console.log(mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Email sent: ' + info.response);
    });
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// https://sendgrid.com/en-us

// Page based движемся по страницам, то есть 1 страница offset 0, limit 100, вторая движемся на величину хода offset 100, limit 100
// Курсор - это id или запись в базе данных(ссылка на неё).
// Вы прочитал 100 записей и запомнили последнюю из списка (id, date и т.д.), 
// когда переходите к следующей страницы стартвое значение id + следующая запись
// На 200 записи id 100500 - и его его используем