const path = require("path");
const comon = require("./webpack.comon.config");

module.exports = {
  ...comon,
  output: {
    path: path.join(__dirname, "/build/dev"),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: ['node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, "/build/dev"),
    port: 3000
  }
};
