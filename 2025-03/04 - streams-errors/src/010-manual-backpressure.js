const fs = require('fs')
const readStream = fs.createReadStream('./big.txt')
const writeStream = fs.createWriteStream('./out.txt')

readStream.on('data', (chunk) => {
  const canContinue = writeStream.write(chunk)
  if (!canContinue) {
    readStream.pause()
    writeStream.once('drain', () => {
      readStream.resume()
    })
  }
})

readStream.on('end', () => {
  writeStream.end()
})