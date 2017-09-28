const http = require('http');

// load a file by bringing in the file system module
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4000;


// file system will read the file
fs.readFile('index.html', (err, html) => {
  // check for errors
  if(err) {
    throw err;
  }
  // if no errors, continue to run the server
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
  });
});
