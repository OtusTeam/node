// cluster: master форкает N копий сервера (по числу CPU).

const cluster = require('node:cluster');
const os = require('node:os');
const { startServer } = require('../07-server');

const totalCPUs = os.availableParallelism?.() ?? os.cpus().length;

if (cluster.isPrimary) {
  console.log(`CPUs: ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died (${signal || code})`);
    console.log('Fork another worker...');
    cluster.fork();
  });
} else {
  startServer();
}
