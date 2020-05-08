const fs = require('fs')
const http = require('http')

fs.readFile('./index.html', 'utf-8', (err, text) => {
  if (err) {
    throw new Error('')
  }
  
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(text)
  })
  
  server.listen(8001, '0.0.0.0', () => {
    console.log('Server running')
  })
})

