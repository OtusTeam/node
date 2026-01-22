// Вывод команды ограничен размером буфера (по умолчанию 200 КБ в Node.js), что может стать проблемой при большом объеме данных.

const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// --user_id=100

// Как передать агрумент
// args - коротка запись -- длинная запись
// exec('node ./src/script.js --user_id=100', (error, stdout, stderr) => {
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// })










// Выгода в чём?
// Простым способом запустить тяжеловестную задачу фоном.
// 3 endpoints
// Один из них тяжелый?

// Как решить вопрос с масштабированием?
// 1. Пока не объязательно весь сервер в кластере, просто делаем "местное" масштабирование.
// 2. Масштабируем весь веб-сервер.
// 3. Реализуем систему микросервисов. 
// NodeJS -> шину данных(RabbitMQ, Redis, Kafka) -> микросервис эту задачу выполняет.
// 4. Serverless - тяжелые операции как лямбда функции.
