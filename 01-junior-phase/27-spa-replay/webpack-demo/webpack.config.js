const path = require("path");

module.exports = {
  // 1. mode
  mode: "development",
  // 2. entry
  entry: "./src/index.js",
  // 3. output
  output: {
    path: path.join(__dirname, '/public'),
    filename: "bundle.js"
  }
}
