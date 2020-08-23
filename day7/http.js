const http = require('http');

var server = http.createServer((req, res) => {
	res.write('<h1>Hi to NodeJS App</h1>');
	res.end();
});

server.listen(3400);
