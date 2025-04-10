const fs = require('fs')
const { Transform, pipeline } = require('stream')
const { promisify } = require('util')
const pipe = promisify(pipeline)

const toUpper = new Transform({
  transform(chunk, _, callback) {
    const upper = chunk.toString().toUpperCase()
    callback(null, upper)
  }
})

async function run() {
  try {
    await pipe(
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
