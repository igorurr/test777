const path = require("path");
const comon = require("./webpack.comon.config");

const builddir = path.join(__dirname, "../../build/last");
console.log(builddir);

module.exports = {
  ...comon,
  output: {
    path: builddir,
    filename: "bundle.js"
  },
  mode: 'production',
};
