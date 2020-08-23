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
app.get('/restauranthome', (req, res) => {
	var query = {};
	// city and mealtype
	if (req.query.city && req.query.mealtype) {
		query = { city: req.query.city, 'type.mealtype': req.query.mealtype };
	}
	// city
	else if (req.query.city) {
		query = { city: req.query.city };
	}
	// mealtype
	else if (req.query.mealtype) {
		query = { 'type.mealtype': req.query.mealtype };
	}
	db.collection('restaurant')
		.find(query)
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - Restaurant list
app.get('/restaurantlist/:city/:mealtype', (req, res) => {
	var query = {};
	var sort = { cost: 1 };
	// cuisine, price filter & price sort
	if (req.query.cuisine && req.query.lcost && req.query.hcost && req.query.sort) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype, 'Cuisine.cuisine': req.query.cuisine, cost: { $gt: parseInt(req.query.lcost), $lt: parseInt(req.query.hcost) } };
		sort = { cost: parseInt(req.query.sort) };
	}
	// cuisine & price filter
	else if (req.query.cuisine && req.query.lcost && req.query.hcost) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype, 'Cuisine.cuisine': req.query.cuisine, cost: { $gt: parseInt(req.query.lcost), $lt: parseInt(req.query.hcost) } };
	}
	// cuisine filter & price sort
	else if (req.query.cuisine && req.query.sort) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype, 'Cuisine.cuisine': req.query.cuisine };
		sort = { cost: parseInt(req.query.sort) };
	}
	// price filter & price sort
	else if (req.query.lcost && req.query.hcost && req.query.sort) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype, cost: { $gt: parseInt(req.query.lcost), $lt: parseInt(req.query.hcost) } };
		sort = { cost: parseInt(req.query.sort) };
	}
	// cuisine filter
	else if (req.query.cuisine) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype, 'Cuisine.cuisine': req.query.cuisine };
	}
	// price filter
	else if (req.query.lcost && req.query.hcost) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype, cost: { $gt: parseInt(req.query.lcost), $lt: parseInt(req.query.hcost) } };
	}
	// price sort
	else if (req.query.sort) {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype };
		sort = { cost: parseInt(req.query.sort) };
	}
	// default
	else {
		query = { city: req.params.city, 'type.mealtype': req.params.mealtype };
		sort = { cost: 1 };
	}
	db.collection('restaurant')
		.find(query)
		.sort(sort)
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
});

// GET - Restaurant by id
app.get('/restaurantdetails/:id', (req, res) => {
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
