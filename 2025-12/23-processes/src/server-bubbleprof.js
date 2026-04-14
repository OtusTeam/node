const express = require('express');
const crypto = require('crypto');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/heavy', (req, res) => {
  crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    res.send('Heavy computation done!');
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

process.on('SIGINT', process.exit);
