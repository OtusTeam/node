process.on('uncaughtException', function(e) {
  console.log('stopped')
  
  Error.captureStackTrace(e)
  e.stack = e.stack.replace(/.*node/, '.')
  console.log(e.stack)
  
  start()
})

throw {} // 'String'
// throw new Error('Message')

console.log('finished')

function start() {
  console.log('started')
  
  setTimeout(() => {
    throw new Error('new error')
  })
}