// if parent
// if child
console.log('before')

const { spawn } = require('child_process')

console.log('parent id %d', process.ppid)
console.log('my id', process.pid)

if (process.argv[process.argv.length - 1] === 'true') {
  setTimeout(() => {
    console.log('exit')
  }, 2e4)
  return
}

const child = spawn('node', ['./fork.js', 'true'])
child.unref()

console.log('child id', child.pid)

console.log('after')