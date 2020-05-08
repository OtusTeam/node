setInterval(() => {
  // console.log('hello')
}, 500)

console.log(process.pid)

process.addListener('SIGUSR1', () => {
  console.log('got it')
  process.exit(0)
})