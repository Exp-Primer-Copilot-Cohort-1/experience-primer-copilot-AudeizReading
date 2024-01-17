// Create web server application
// Run: node comments.js
// URL: http://localhost:8080

// Import modules
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create web server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(filename);
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); // Server listen on port 8080
console.log('Server running at http://localhost:8080/');