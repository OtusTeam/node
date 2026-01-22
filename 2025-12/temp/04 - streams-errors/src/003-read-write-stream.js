const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(__dirname + '/data/output-number', { encoding: 'utf8' });

  for await (const chunk of readStream) {
    // write писать в стрим
    const res = writeStream.write(chunk);

    console.log(res);
  }

  // закрыть стрим
  // 
  writeStream.end('10000\n')
})()

// Readable stream - на чтения
// Writeable stream - на запись
// Duplex stream - чтение/запись
// Transform stream - преобразование
