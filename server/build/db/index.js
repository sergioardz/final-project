'use strict';

var mongoose = require('mongoose');
var keys = require(".././config/keys");

mongoose.connect(keys.mongoUrl);

var db = mongoose.connection;
db.on('error', function (err) {
	console.log('There was an error connecting to the database: ' + err);
});
db.once('open', function () {
	console.log('You have successfully connected to your mongo database');
});

module.exports = db;