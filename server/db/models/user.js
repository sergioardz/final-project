const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// define the schema for our user model
var userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  facebook: {
    id: String,
    token: String,
    name: String,
    email: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});

// // Define userSchema
// const userSchema = new Schema({
//   firstName: { type: String, unique: false },
//   lastName: { type: String, unique: false },
//   local: {
//     username: { type: String, unique: false, required: false },
//     password: { type: String, unique: false, required: false }
//   },
//   google: {
//     googleId: { type: String, required: false }
//   },
//   photos: []
// });

// // Define schema methods
// userSchema.methods = {
//   checkPassword: function(inputPassword) {
//     return bcrypt.compareSync(inputPassword, this.local.password);
//   },
//   hashPassword: plainTextPassword => {
//     return bcrypt.hashSync(plainTextPassword, 10);
//   }
// };

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.local.password) {
    console.log("=======NO PASSWORD PROVIDED=======");
    next();
  } else {
    this.local.password = this.generateHash(this.local.password);
    next();
  }
});

// Create reference to User & export
const User = mongoose.model("User", userSchema);
module.exports = User;
