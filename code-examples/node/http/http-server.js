const http = require('http') 
const fs = require('fs')

fs.readFile('./index.html', (err, text) => {
  http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(text)
  }).listen(3002)  
})



