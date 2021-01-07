const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // change to "production" later
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/Home/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new PurgeCSSPlugin({
      paths: glob.sync(path.join(__dirname, "src/**/*.html"), { nodir: true }),
    }),
    new CleanWebpackPlugin(),
  ],
});
