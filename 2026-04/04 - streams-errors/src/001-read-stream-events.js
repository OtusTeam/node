const fs = require('node:fs'); // работа с файловой системой

// Создай стрим на этот файл
const readStream = fs.createReadStream(__dirname + '/data/input-number')

// Добавлять данные
let data = ''

// Какой формат данных
readStream.setEncoding('UTF8')

// Подписка на поток данных
readStream.on('data', (chunk) => {
  // Мы можем начать пробразовывать данные
  console.log('chunk', chunk.length);

  data += chunk; // Просто в переменную
});

// Когда все закончит
readStream.on('end', () => {
  console.log('end', data);

  console.log("Program Ended");
  // На самом деле она завершается тут
});

// Если случилась ошибка
readStream.on('error', (err) => {
  console.log(err.stack);
});


console.log("Started");



// Накапливаем массив данных по 1000
// Как накопили, записали в бд
// И буфер отчили.

// Получение данные чанком.

// fs.createReadStream


// writable.write(chuck);
// сделать запрос в бд
// перенаправить в другой поток.

// Поставим задачу вычитать данные файл
// Зашифровать
// Заархивировать
// Записать в другой файл





// fs.readFileSync() // это не очень хорошо
// fs.readFile() // это лучше
// fs.createReadStream() // это отлично

// fs.readFileSync хуже, чем вот это readFile
// fs.readFileSync читаем файл 100 МБ и занимает время 10 секунд
// Event loop - когда выполняются синхронные операции, то все ждут.
// fs.readFile - файл 100 МБ. Сколько NodeJS памяти оперативной под процесс выделяется?
// 20 пользователей который вычитывают файл просто крашут наш сервер.

// Нам не нужно весь файл целиком, мы можем кусочками(чанками chunk)
