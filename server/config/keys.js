if (process.env.NODE_ENV === "production") {
  console.log("Use prod keys");
  module.exports = require("./prod");
} else {
  console.log("Use dev keys");
  module.exports = require("./dev");
}
