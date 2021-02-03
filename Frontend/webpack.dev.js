const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./build"),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: { index: "index.html" },
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "../config.env"),
    }),
  ],
});
