var express = require('express')
var app = express()

app.get('/hello', function (req, res) {
  a()
})

app.listen(3000)

function a() {
  console.log(123)
}