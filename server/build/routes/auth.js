'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();
var User = require('../db/models/user');
var passport = require('../passport');

// this route is just used to get the user basic info
router.get('/user', function (req, res, next) {
	console.log("Call /user for loged in user");
	console.log(req.user);
	if (req.user) {
		return res.json({ user: req.user });
	} else {
		return res.json({ user: null });
	}
});

router.post('/login', function (req, res, next) {
	// console.log(req.body)
	console.log('================');
	next();
}, passport.authenticate('local'), function (req, res) {
	console.log('POST to /login');
	var user = JSON.parse((0, _stringify2.default)(req.user)); // hack
	var cleanUser = (0, _assign2.default)({}, user);
	if (cleanUser.local) {
		console.log('Deleting ' + cleanUser.local.password);
		delete cleanUser.local.password;
	}
	res.json({ user: cleanUser });
});

router.post('/logout', function (req, res) {
	if (req.user) {
		req.session.destroy();
		res.clearCookie('connect.sid');
		return res.json({ msg: 'logging you out' });
	} else {
		return res.json({ msg: 'no user to log out!' });
	}
});

router.post('/signup', function (req, res) {
	var _req$body = req.body,
	    email = _req$body.email,
	    password = _req$body.password;

	User.findOne({ 'local.email': email }, function (err, userMatch) {
		if (userMatch) {
			return res.json({
				error: 'Sorry, already a user with the email: ' + email
			});
		}
		var newUser = new User({
			'local.email': email,
			'local.password': password
		});
		newUser.save(function (err, savedUser) {
			if (err) return res.json(err);
			return res.json(savedUser);
		});
	});
});

module.exports = router;