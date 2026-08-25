// /slow-thread считает в worker_threads, main thread обслуживает /fast.

const path = require('node:path');
const express = require('express');
const { Worker } = require('node:worker_threads');
const data = require('../../shared/data');
const { attachGracefulShutdown } = require('../../shared/graceful-shutdown');

const PORT = process.env.PORT || 4002;

const app = express();

app.get('/fast', (_req, res) => {
  res.status(200).send(data.user);
});

app.get('/slow-thread', (req, res) => {
  const worker = new Worker(path.join(__dirname, 'worker.js'), {
    workerData: { users: data.users },
  });

  worker.once('message', (likes) => {
    res.status(200).send({ likesCount: likes.length });
  });

  worker.once('error', (error) => {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).send({ error: error.message });
    }
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server+worker started on ${PORT} port`);
});

attachGracefulShutdown(server);
