module.exports = {
  entry: "./src/client/index.tsx",
  devtool: "source-map",
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        use: ["source-map-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', ".ts", ".tsx", ".js"]
  },
};