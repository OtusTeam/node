require('http').createServer((req, res) => {
  res.end('Hello, World!')
  console.log('got request')
}).listen(8001)