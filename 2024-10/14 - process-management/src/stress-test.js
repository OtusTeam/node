const autocannon = require('autocannon')

startBench()

// autocannon

function startBench () {
  const instance = autocannon({
    url: 'http://localhost:3000',
    connections: 100,
    duration: 15,
    debug: true,
    requests: [
      {
        method: 'GET',
        path: '/heavy'
      }
    ]
  }, finishedBench)

  autocannon.track(instance)

  process.once('SIGINT', () => {
    instance.stop()
  })
}

function finishedBench (err, res) {
  // console.log('finished bench', err, res)
}


// 104k requests in 15.04s, 29.2 MB read 14
// 211k requests in 15.07s, 59.5 MB read 6.62 ms
