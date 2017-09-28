const http = require('http');
// load a file - bring in the file system module
const fs = require('fs');

// our local host
const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  // Output into the browser
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log('Server started on port ' + port);
});
