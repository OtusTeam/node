const fs = require('fs');

; (async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(__dirname + '/data/output-number', { encoding: 'utf8' });

  for await (const chunk of readStream) {
    // write писать в стрим
    // Здесь нужно иметь понимание, что стрим write готов принимать новый буфер
    const res = writeStream.write(chunk);

    console.log(res); // если false

    // если false ,то делаем if проверка и ставим readStream на stop, потом следим за drain событием для writeStream и т.д.
  }

  // закрыть стрим
  //
  writeStream.end('10000\n')
})()

// Readable stream - на чтения
// Writeable stream - на запись
// Duplex stream - чтение/запись
// Transform stream - преобразование
