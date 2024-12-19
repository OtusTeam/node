const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware для обработки JSON
app.use(bodyParser.json());

// Настройка транспорта для Nodemailer
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'nlapshin1989@gmail.com',
        password: ''
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
