const http = require('http');
const fs = require('fs');
const { ESRCH } = require('constants');

var server = http.createServer((req, res) => {
	fs.readFile('db.json', 'utf-8', (err, data) => {
		if (err) throw err;
		res.write(data);
		res.end();
	});
});

server.listen(3600);
