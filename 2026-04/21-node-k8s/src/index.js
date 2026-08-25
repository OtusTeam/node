const os = require('os');

const express = require('express');
const app = express();

let count = 0;

app.get('/count', (req, res) => {
  return res.json({ count: ++count, hostname: os.hostname() });
});

app.get('/new-endpoint', (req, res) => {
  return res.json({ hello: 'world', hostname: os.hostname() });
})

app.listen(4000);

console.log('Server started on 4000 port');
console.log('Server hostname:', os.hostname())
