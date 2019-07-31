module.exports = {
  mongoUrl: 'mongodb://localhost/klewertdb',

  facebookAuth: {
    clientID: "1883786078349797",
    clientSecret: "e58fee1d65b945ea794e2623fefbd61b",
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "email", "name"]
  },

  twitterAuth: {
    consumerKey: "IJA7WEGnslKzCsjUrD5HMKZ89",
    consumerSecret: "SlSLk3vM34XbdppbbCRPAZwNJyKIAiykg7zPFmVmMbCj9tFg37",
    callbackURL: "/auth/twitter/callback"
  },

  googleAuth: {
    clientID:
      "193463624317-calhsohej1ajs1j0irrauj1aad4nqvha.apps.googleusercontent.com",
    clientSecret: "rP8TCqxGwA-qyd4LuBqNBEwL",
    callbackURL: "/auth/google/callback"
  }
};
