const { Transform } = require('stream')
const { pipeline } = require('stream/promises')

const asyncTransform = new Transform({
  objectMode: true,
  async transform(chunk, _, cb) {
    try {
      const user = await fetchUserData(chunk.id)
      this.push({ ...chunk, user })
      cb()
    } catch (e) {
      cb(e)
    }
  }
})