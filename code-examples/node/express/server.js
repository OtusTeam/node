const express = require('express')
const path = require('path')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'public'))

app.get('/', function(req, res){
  console.log(req.query)
  res.end()
})

app.use(express.static('public'))

app.get('/test', (req, res) => {
  res.render('index.html', { test: 123 })
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
})