//Load HTTP Module
var http = require ("http");

//Create HTTP Serber and listen on port 2314 for requests
http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type': 'text/plain'});

	res.end('Hello World\n');
}).listen(2314);

console.log('Server running on port 2314')

