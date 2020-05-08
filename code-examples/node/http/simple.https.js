// openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
const https = require('https');
const fs = require('fs');
var path = require('path');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, (request, response) => {
  var filePath = request.url;
  console.log(filePath)
  if (filePath == '/')
    filePath = '/index.html';

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.ogg':
      contentType = 'audio/ogg';
      break;
  }

  console.log('./public/' + filePath)
  fs.readFile('./public/' + filePath, function (error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        fs.readFile('./404.html', function (error, content) {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        });
      }
      else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        response.end();
      }
    }
    else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });

}).listen(8080, '0.0.0.0');

console.log('localhost:8080 is up and running')