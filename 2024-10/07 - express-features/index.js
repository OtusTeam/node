import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Настройка шаблонизатора (Pug)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(bodyParser.json()); // Для обработки JSON
app.use(bodyParser.urlencoded({ extended: true })); // Для обработки URL-encoded данных
app.use(cookieParser()); // Для обработки cookies

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
app.get('/', (req, res) => {
  res.render('index', { title: 'Express Example', message: 'Welcome to Express!' });
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
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
