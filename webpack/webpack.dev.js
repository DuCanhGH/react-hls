const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",
  entry: "./example/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    historyApiFallback: true,
    static: "public",
    host: "127.0.0.1",
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
});
