const http = require('http')

let i = 0
const total = parseInt(process.argv[2], 10) || 10
const type = process.argv[3] || 'sequence'

const sendRequest = () => new Promise((resolve, reject) => {
  i++
  const req = http.request({
    port: 8000
  }, (res) => {
    resolve(i)
  })

  req.on('error', (e) => {
    console.error(`problem with ${i}: ${e}`)
    reject(i)
  })

  req.end()
})

async function sendAllSequential() {
  let j = 0
  while (j++ < total) {
    const index = await sendRequest()
  }
}

async function sendAllParallel() {
  await Promise.all(
    new Array(total)
      .fill(true)
      .map(sendRequest)
  )
}

(
  type === 'sequence' ? 
  sendAllSequential :
  sendAllParallel
)()
  .then(() => {
    console.log(`Fine on ${total} in ${type}`)
  })
  .catch((e) => {
    console.error(new Error(`Could not handle so much requests in ${type}`))
    console.error(j)
    console.error(e)
  })
