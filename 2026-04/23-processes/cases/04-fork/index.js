// fork: отдельный Node-процесс + IPC из коробки.

const path = require('node:path');
const { fork } = require('node:child_process');

const child = fork(path.join(__dirname, 'child.js'));

child.on('message', (msg) => {
  console.log('parent got:', msg);
});

child.on('exit', (code) => {
  console.log('child exited with code', code);
});

child.send({ hello: 'world' });
