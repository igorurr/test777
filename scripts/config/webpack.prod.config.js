const path = require("path");
const common = require("./webpack.common.config");

const builddir = path.join(__dirname, "../../build/last");
console.log(`дирректроия: ${builddir}`);

module.exports = {
  ...common,
  output: {
    path: builddir,
    filename: "bundle.js"
  },
  mode: 'production',
};
