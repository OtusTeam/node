const fs = require('node:fs');

// Накапливаем массив данных по 1000
// Как накопили, записали в бд
// И буфер отчили.

// fs.createReadStream

// Создай стрим на этот файл
const readStream = fs.createReadStream(__dirname + '/data/input-number')

// Добавлять данные
let data = ''

// Какой формат данных
readStream.setEncoding('UTF8')

// Подписка на поток данных
readStream.on('data', function(chunk) {
  console.log('chunk', chunk);
  // Получение данные чанком.

  data += chunk; // Просто в переменную

  // writable.write(chuck);
  // сделать запрос в бд
  // перенаправить в другой поток.
});

// Когда все закончит
readStream.on('end', function() {
  console.log('end', data);
});

// Если случилась ошибка
readStream.on('error', function(err) {
  console.log(err.stack);
});

console.log("Program Ended");

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
