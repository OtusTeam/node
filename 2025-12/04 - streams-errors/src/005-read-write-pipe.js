const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + 'data/input-number', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + 'data/output-number', { encoding: 'utf8' });
 
  // Перенаправить стрим
  // pipe и можем их делать несколько
  // выход readStream -> на вход writeStream
  readStream.pipe(writeStream)
})()

// .on('data) + pipe - это что было из корбки