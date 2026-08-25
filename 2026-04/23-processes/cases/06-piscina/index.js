// Piscina: пул worker_threads + очередь задач.

const path = require('node:path');
const Piscina = require('piscina');

const piscina = new Piscina({
  filename: path.resolve(__dirname, 'worker.js'),
});

(async () => {
  const result = await piscina.run({ a: 54, b: 6 });
  console.log('result:', result);
  await piscina.destroy();
})();
