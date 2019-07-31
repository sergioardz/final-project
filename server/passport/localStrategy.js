const User = require("../db/models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done) {
    if (email) email = email.toLowerCase();

    // asynchronous
    process.nextTick(function() {
      User.findOne({ "local.email": email }, function(err, user) {
        // if there are any errors, return the error
        if (err) return done(err);

        // if no user is found, return the message
        if (!user) return done(null, false, { message: "Wrong email adress" });

        if (!user.validPassword(password))
          return done(null, false, { message: "Wrong email adress" });
        // all is well, return user
        else return done(null, user);
      });
    });
  }
);

module.exports = strategy;
