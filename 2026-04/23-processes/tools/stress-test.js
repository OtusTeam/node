// Простой бенчмарк через autocannon.
// Пример: node tools/stress-test.js --path /fast

const autocannon = require('autocannon');

const args = process.argv.slice(2);
const pathFlagIndex = args.indexOf('--path');
const requestPath = pathFlagIndex >= 0 ? args[pathFlagIndex + 1] : '/fast';
const port = process.env.PORT || 4002;

const instance = autocannon(
  {
    url: `http://localhost:${port}`,
    connections: 100,
    duration: 15,
    requests: [
      {
        method: 'GET',
        path: requestPath,
      },
    ],
  },
  (err) => {
    if (err) {
      console.error(err);
    }
  },
);

autocannon.track(instance);

process.once('SIGINT', () => {
  instance.stop();
});
