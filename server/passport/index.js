const passport = require('passport')
const User = require('../db/models/user')

const LocalStrategy = require('./localStrategy')

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
	done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

// Register Strategies
passport.use(LocalStrategy)

module.exports = passport
