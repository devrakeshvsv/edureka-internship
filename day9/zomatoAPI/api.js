const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoURL = 'mongodb://localhost:27017';
const cors = require('cors');
let db;

app.use(cors());

// GET - City
app.get('/location', (req, res) => {
	db.collection('city')
		.find()
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - Cuisine
app.get('/cuisine', (req, res) => {
	db.collection('cuisine')
		.find()
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - Mealtype
app.get('/mealtype', (req, res) => {
	db.collection('mealtype')
		.find()
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - Restaurant
app.get('/restaurant', (req, res) => {
	var query = { city: req.query.city };
	console.log(query);
	db.collection('restaurant')
		.find(query)
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - Restaurant by id
app.get('/restaurantDetail/:id', (req, res) => {
	console.log(req.params.id);
	db.collection('restaurant')
		.find({ _id: req.params.id })
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

MongoClient.connect(mongoURL, (err, client) => {
	if (err) throw err;
	db = client.db('learn');
	app.listen(port, (err, result) => {
		if (err) throw err;
		console.log(`Server is running on port ${port}`);
	});
});
