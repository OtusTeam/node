const http = require('http')
const fs = require('fs')

fs.readFile('./index.html', (err, text) => {
  console.log(text)
  
  http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(text)
  }).listen(8002)
})
