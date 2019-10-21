const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin/dist/clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./lib/index.ts",
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "library.bundle.js"
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "demo/index.html",
      template: "demo/index.html"
    })
  ],
  resolve: {
    extensions: ['.js','.ts','.tsx','.sass','.scss']
  }
};
