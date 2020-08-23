const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.readFile('db.json', 'utf-8', (err, data) => {
		if (err) throw err;
		res.write(data);
		res.end();
	});
});

server.listen(3401);
