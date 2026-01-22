const path = require('path');
const Piscina = require('piscina');

// Запущена в воркера
const worker = new Piscina({
  filename: path.resolve(__dirname, './worker.js')
});

// const worker = require('./worker');

;(async () => {
    console.log(await worker.run('data', { name: 'longHardJob' }));
})();

// console.log(worker.longHardJob('data'));