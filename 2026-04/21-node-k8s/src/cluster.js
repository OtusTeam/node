const cluster = require('cluster');
const totalCPUs = require('os').cpus().length; // 8
// Хочу на каждом запустить экземпляр.

// Мастер процесс и воркер процессы.
// 1. Стартует главный процессы - мастер isMaster = true
// 2. Этот мастер процесс порождает процессы-воркеры.
// 3. Запускает тот же скрипт, но ставит флаг isMaster = false

if (cluster.isMaster) {
  // Это для основного процесса.
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    console.log('Start child proccess');
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  // Просто запускает сервер
  // Запускаем наши воркеры
  require('./')
}
