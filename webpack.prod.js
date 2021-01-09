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
const ImageminPlugin = require("imagemin-webpack");

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
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "assets/images",
              publicPath: "assets/images",
            },
          },
          {
            loader: ImageminPlugin.loader,
            options: {
              bail: false,
              cache: false,
              severityError: "warning",
              imageminOptions: {
                plugins: [
                  ["gifsicle"],
                  ["mozjpeg", { quality: 50, progressive: true }],
                  ["pngquant", { quality: [0.5, 0.5] }],
                  ["gifsicle", { interlaced: true, optimizationLevel: 3 }],
                  [
                    "svgo",
                    {
                      plugins: [{ removeViewBox: false }],
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/index.html.ejs",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, "./src/**/*.html"), { nodir: true }),
    // }),
    new CleanWebpackPlugin(),
  ],
});
