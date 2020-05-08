const { Worker, isMainThread } = require('worker_threads')

if (isMainThread) {
  new Worker(__filename)
  console.log(process.pid)
} else {
  console.log(isMainThread)
  setTimeout(() => {
    console.log('Inside Worker!')
    console.log(process.pid)
  }, 1e4)
}