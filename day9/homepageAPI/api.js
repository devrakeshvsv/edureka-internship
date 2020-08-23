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
let col_usr = 'user';

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

// GET _ user
app.get('/users', (req, res) => {
	db.collection(col_usr)
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

// PUT
app.put('/updateMovie', (req, res) => {
	db.collection(col_name).update(
		{ _id: req.body._id },
		{
			$set: {
				name: req.body.name,
				language: req.body.language,
				rate: req.body.rate,
				type: req.body.type,
				imageUrl: req.body.imageUrl,
			},
		},
		(err, result) => {
			if (err) {
				throw err;
			} else {
				res.send('Data Updated Successfully');
			}
		}
	);
});

// DELETE
app.delete('/deleteMovie', (req, res) => {
	db.collection(col_name).remove({ _id: req.body._id }, (err, result) => {
		if (err) {
			throw err;
		} else {
			res.send('Data Deleted Successfully');
		}
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
