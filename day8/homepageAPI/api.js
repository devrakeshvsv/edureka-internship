const express = require('express');
const app = express();
const port = 8900;
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = 'mongodb://localhost:27017';
const cors = require('cors');
let db;
let col_name = 'movies';
let col_stu = 'student_info';

app.get('/', (req, res) => {
	res.status(200).send('API is Running');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// GET
app.get('/movies', (req, res) => {
	db.collection(col_name)
		.find()
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - student_info
app.get('/students', (req, res) => {
	db.collection(col_stu)
		.find()
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// POST
app.post('/addMovies', (req, res) => {
	console.log(req.body);
	db.collection(col_name).insert(req.body, (err, result) => {
		if (err) throw err;
		res.send('Data Added Successfully');
	});
});

MongoClient.connect(mongourl, (err, client) => {
	if (err) throw err;
	db = client.db('learn');
	app.listen(port, (err) => {
		if (err) throw err;
		console.log(`Server is running on port ${port}`);
	});
});
