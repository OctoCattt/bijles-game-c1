const path = require("path");

module.exports = {
  entry: "./index.js", // Entry point for your JavaScript
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
