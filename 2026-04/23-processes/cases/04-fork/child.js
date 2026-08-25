// Дочерний процесс: получает сообщение по IPC и отвечает.

process.on('message', (msg) => {
  console.log('child got:', msg);
  process.send({ echo: msg, pid: process.pid });
  process.exit(0);
});
