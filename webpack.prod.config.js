const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/build/last"),
    filename: "bundle.js"
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  },
};
