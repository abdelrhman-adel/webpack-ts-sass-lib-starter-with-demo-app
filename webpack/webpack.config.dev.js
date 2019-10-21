const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.common.js");
module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, "../public/"),
    index: "demo/index.html"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  mode: "development"
});
