import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// '/users/:id'
// '/users/download'

// Настройка шаблонизатора (Pug)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares

// bodyParser.json() -> return функция middleware

app.use(bodyParser.json()); // Для обработки JSON
app.use(bodyParser.urlencoded({ extended: true })); // Для обработки URL-encoded данных
app.use(cookieParser()); // Для обработки cookies

// Ошибку свою от не своей.
class CustomError extends Error {};


app.use((req, res, next) => {
  console.log('middleware 1');

  console.log('middleware 1 req.user', req.user);
  
  next();
});

// авторизация
app.use((req, res, next) => {
  console.log('middleware 2');

  // проверка авторизации уже есть

  req.user = { name: 'nik' };

  console.log('middleware 2 req.user', req.user);

  if (req.user.name !== 'nik') {
    next(new CustomError('middleware error'));
  }

  next();
});

app.get('/users/download', (req, res) => {
  // Выполнится ли он?
  console.log('handler /users/download');

  res.json({ download: 'download' });
});

app.get('/users/:id', (req, res) => {
  console.log('handler /users/:id');

  console.log('handler req.user', req.user)

  res.json({ id: req.params.id });
});

// Маршрут для теста парсеров Body и Cookie
app.post('/submit', (req, res) => {
  const { name, message } = req.body; // Парсинг тела запроса
  const userCookie = req.cookies.user || 'Гость'; // Парсинг cookie

  res.render('response', {
    name,
    message,
    user: userCookie,
  });
});

// Установка cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'TestUser', { httpOnly: true });
  res.send('Cookie установлена!');
});

// Маршрут для отображения HTML через шаблонизатор
app.get('/', async (req, res, next) => {
  try {
    console.log('handler /');
    console.log('handler / req.user', req.user);

    // asdfsfasdff + gggg;
  
    throw new Error('test error');
  
    res.render('index', { title: 'Express Example', message: 'Welcome to Express!' });
  } catch(err) {
    next(err);
  }
});

// Маршрут для отправки файла через потоки
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'example.txt'); // Убедитесь, что файл существует
  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Disposition', 'attachment; filename="example.txt"');
  fileStream.pipe(res); // Отправка файла через потоки
});

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).render('404', { message: 'Page not found' });
});

// Обработка ошибок
app.use((err, req, res, next) => {
  // error first approach(подход)
  // Если нет ошибки, то err = null
  if (err instanceof CustomError) {
    return res.status(400).json({
      status: 400,
      msg: 'Bad request',
      serviceMsg: err.message
    });
  }

  console.error(err.stack);
  res.status(500).json({
    status: 500,
    msg: 'Что-то пошло не так!',
    serviceMsg: err.message
  });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
