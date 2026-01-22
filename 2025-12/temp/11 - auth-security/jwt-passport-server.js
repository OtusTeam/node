const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

// Пример хранилища пользователей (обычно используется база данных)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Middleware для парсинга тела запросов
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Настройка стратегии JWT
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
  // Поиск пользователя по id (jwtPayload.sub)
  const user = users.find(user => user.id === jwtPayload.sub);

  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));

// Middleware Passport
app.use(passport.initialize());


// Маршрут для аутентификации пользователей и выдачи JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // в реальных приложениях надо сравнивать hash password
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const payload = { sub: user.id };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Защищенный маршрут, доступный только аутентифицированным пользователям
app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Сюда пускаем.

  res.json({ message: `Hello, ${req.user.username}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
