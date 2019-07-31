const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// define the schema for our user model
var userSchema = mongoose.Schema({

  local: {
    email: String,
    password: String
  }

});

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
