const path = require("path");
const comon = require("./webpack.comon.config");

module.exports = {
  ...comon,
  output: {
    path: path.join(__dirname, "/build/last"),
    filename: "bundle.js"
  },
  mode: 'production',
};
