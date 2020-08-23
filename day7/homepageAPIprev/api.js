const express = require('express');
const app = express();
const port = 8989;

app.get('/', (req, res) => {
	res.status(200).send('API is running');
});

app.get('/about', (req, res) => {
	res.send('This is about homepage');
});

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});
