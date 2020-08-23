const express = require('express');
const fs = require('fs');
const { STATUS_CODES } = require('http');
const app = express();
const port = 8900;

app.get('/', (req, res) => {
	res.status(200).send('API is Running');
});

app.get('/restaurantData', (req, res) => {
	fs.readFile('../db.json', 'utf-8', (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});
