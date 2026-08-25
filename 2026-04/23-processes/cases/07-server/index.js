// Сервер с блокирующим /slow: демонстрирует проблему CPU в main thread.

const express = require('express');
const crypto = require('node:crypto');
const data = require('../../shared/data');
const { attachGracefulShutdown } = require('../../shared/graceful-shutdown');

const PORT = process.env.PORT || 4002;

function createServer() {
  const app = express();

  app.get('/fast', (_req, res) => {
    res.status(200).send(data.user);
  });

  app.get('/slow', (_req, res) => {
    const likes = concatLikes(data.users);
    res.status(200).send({ likesCount: likes.length });
  });

  app.get('/crypto', (_req, res) => {
    crypto.pbkdf2('secret', 'salt', 100_000, 64, 'sha512', (err) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }
      res.send('Heavy computation done!');
    });
  });

  return app;
}

function startServer(port = PORT) {
  const app = createServer();

  const server = app.listen(port, () => {
    console.log(`Server started on ${port} port (pid ${process.pid})`);
  });

  attachGracefulShutdown(server);
  return server;
}

function concatLikes(users) {
  return users.reduce((res, user) => {
    res.push(user.like);
    return res;
  }, []);
}

module.exports = {
  createServer,
  startServer,
};

if (require.main === module) {
  startServer();
}
