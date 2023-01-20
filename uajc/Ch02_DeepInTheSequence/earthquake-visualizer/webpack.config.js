/**
 * https://createapp.dev/webpack/no-library--babel--cleanwebpackplugin--html-webpack-plugin
 * */

const webpack = require("webpack");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
