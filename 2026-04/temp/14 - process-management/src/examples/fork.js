const { fork } = require('child_process');

const child = fork('./src/examples/spawn.js');

child.on('message', (msg) => {
  console.log('msg', msg);
  // console.log('Получено сообщение от дочернего процесса:', msg);
});

child.send({ hello: 'world' });
