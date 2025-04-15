const fs = require('fs')
const { Transform } = require('stream')
const { pipeline } = require('stream/promises');

const toUpper = new Transform({
  transform(chunk, _, callback) {
    const upper = chunk.toString().toUpperCase()
    callback(null, upper)
  }
})

async function run() {
  try {
    await pipeline(
      fs.createReadStream('./big.txt'),
      toUpper,
      fs.createWriteStream('./result.txt')
    )
    console.log('✅ Done with backpressure-aware pipeline')
  } catch (err) {
    console.error('❌ Pipeline failed:', err)
  }
}

run()
