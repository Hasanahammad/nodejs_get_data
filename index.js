
const http = require('http');
const sql = require('mssql');

const config = {
  server: 'localhost',
  port: 1433,
  user: 'sa',
  password: '123456',
  database: 'ZABDB',
  options: {
    encrypt: true, // If encryption is enabled on the server
    trustServerCertificate: true // Disable SSL verification (for self-signed certificates)
  }
};
 
// Create a server object
http.createServer(function (req, res) {
     
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'});
     
    const url = req.url;
     
    if(url ==='/about') {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if(url ==='/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
}).listen(3000, function() {
     
    // The server object listens on port 3000
    console.log("server start at port 3000");
});