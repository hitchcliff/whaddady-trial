const HtmlWebpackPartialPlugin = require("html-webpack-partials-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPartialPlugin({
      path: "./src/views/Home/partials/navigation.html",
      location: "navigation",
      template_filename: ["index.html"],
    }),
  ],
};
