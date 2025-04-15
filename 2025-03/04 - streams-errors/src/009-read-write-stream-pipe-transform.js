const fs = require('node:fs');
const { Transform } = require("node:stream");

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-string', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-uppercase-string', { encoding: 'utf8' });

  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      // Что-то делаем и потом пробрасываем дальше.
      callback(null, chunk.toString().toUpperCase());
    },
  });


  readStream.pipe(uppercase).pipe(writeStream);
})()

// Читаем кусочками данные
// Можем менять состояние эти данных API
