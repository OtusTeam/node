const fs = require('fs');
const { Transform } = require("stream");

; (async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-string', {
    encoding: 'utf8',
    highWaterMark: 2
  })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-uppercase-string', { encoding: 'utf8' });

  // Кастомную трансформацияю
  const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      // chuck - это не строка, а buffer
      console.log(typeof chunk, chunk, chunk.toString());

      // error-first
      // payload
      callback(null, chunk.toString().toUpperCase());
    },
  });

  readStream.pipe(uppercaseTransform).pipe(writeStream);
})()

// highWaterMark
