const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/build/dev"),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: ['node_modules']
  }
};
