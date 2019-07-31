const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../db/models/user");
const keys = require("../config/keys");

const strategy = new GoogleStrategy(
  {
    clientID: keys.googleAuth.clientID,
    clientSecret: keys.googleAuth.clientSecret,
    callbackURL: keys.googleAuth.callbackURL,
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
  function(req, token, refreshToken, profile, done) {
    process.nextTick(function() {
      // check if the user is already logged in
      if (!req.user) {
        User.findOne({ "google.id": profile.id }, (err, user) => {
          if (err) return done(null, false);
          // if there is already someone with that id
          if (user) {
            if (!user.google.token) {
              user.google.token = token;
              user.google.name = profile.displayName;
              user.google.email = (profile.emails[0].value || "").toLowerCase(); // pull the first email

              user.save(function(err) {
                if (err) return done(err);

                return done(null, user);
              });
            }

            return done(null, user);
          } else {
            var newUser = new User();

            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.google.name = profile.displayName;
            newUser.google.email = (
              profile.emails[0].value || ""
            ).toLowerCase();

            // save this user
            newUser.save(function(err) {
              if (err) return done(err);

              return done(null, newUser);
            });
          }
        });
      } else {
        // user already exists and is logged in, we have to link accounts
        var user = req.user; // pull the user out of the session

        user.google.id = profile.id;
        user.google.token = token;
        user.google.name = profile.displayName;
        user.google.email = (profile.emails[0].value || "").toLowerCase(); // pull the first email

        user.save(function(err) {
          if (err) return done(err);

          return done(null, user);
        });
      }
    });
  }
);

// const strategy = new GoogleStrategy(
//   {
//     clientID: keys.googleAuth.clientID,
//     clientSecret: keys.googleAuth.clientSecret,
//     callbackURL: keys.googleAuth.callbackURL
//   },
//   function(req, token, refreshToken, profile, done) {
//     User.findOne({ "google.id": profile.id }, (err, user) => {
//       // handle errors here:
//       if (err) return done(null, false);
//       // if there is already someone with that id
//       if (user) {
//         return done(null, user);
//       } else {
//         var newUser = new User();

//         newUser.google.id = profile.id;
//         newUser.google.token = token;
//         newUser.google.name = profile.displayName;
//         newUser.google.email = (profile.emails[0].value || "").toLowerCase();

//         // save this user
//         newUser.save(function(err) {
//           if (err) return done(err);

//           return done(null, newUser);
//         });
//       }
//     });
//   }
// );

module.exports = strategy;
