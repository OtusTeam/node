const { Transform } = require('stream')
const { pipeline } = require('stream/promises')

// Реальный пример - мы хотим перелить данные из таблица А в Б, но насытить ещё данными из другой АПИ

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