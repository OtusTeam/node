const cluster = require('node:cluster');
const totalCPUs = require('node:os').cpus().length;

const server = require('./server');


if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  // запуск самого сервер
  server(); 
}


// master -> worker proccess










// Упадет, то его никто не переподнимет

// child_process или worker_threads - это больше для "местной" оптимизации.

// У компьютеров увеличивалась герцовка. 166 - 300 - 900 - 2100 
// Начали создавать ядра: 1 ядро, 2 до 32, 64

// Если запускаем один экземпляр, то по факту он на одном ядре.
// Мы можем запустить на каждом ядре наш сервер.

  // Просто запускает сервер
  // Эту часть выполняет основной скрипт
// 1 Экземпляр сервера -> 1 manager -> много worker-ов
