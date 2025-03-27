const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Настройка сессий
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true
}));

// Учетные данные для примера
const users = {
    admin: 'password'
};

// Маршрут для обработки формы входа
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);

    if (users[username] && users[username] === password) {
        req.session.user = username;

        console.log('test', req.session.user);

        res.redirect('/protected');
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Middleware для проверки сессии
const authenticateSession = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Защищенный маршрут
app.get('/protected', authenticateSession, (req, res) => {
    console.log(req.session);

    res.send('Hello, authenticated user!');
});

// Запуск сервера
app.listen(3010, () => console.log('Server running on port 3010'));
