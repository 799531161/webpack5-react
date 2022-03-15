const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const webpack = require("webpack");
module.exports = merge(config, {
  target: "web",
  mode: "development",
  devtool: "source-map",
  // plugins: [new webpack.HotModuleReplacementPlugin({})],
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    // hot: true,
  },
});
