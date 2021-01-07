const HomePartials = require("./webpack/Home");
const { default: merge } = require("webpack-merge");

module.exports = merge(HomePartials, {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "assets/images",
            publicPath: "assets/images",
          },
        },
      },
      {
        test: /\.(woff|woff2|otf|ttf)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          name: "[name].[contenthash].[ext]",
          outputPath: "assets/fonts",
          publicPath: "assets/fonts",
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
});
