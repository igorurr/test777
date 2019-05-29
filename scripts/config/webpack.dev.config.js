const path = require("path");
const comon = require("./webpack.comon.config");

const devdir = path.join(__dirname, "../../build/dev");
console.log(devdir);

module.exports = {
  ...comon,
  output: {
    path: devdir,
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
    contentBase: devdir,
    port: 3000
  }
};
