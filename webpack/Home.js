const path = require("path");
const HtmlWebpackPartialPlugin = require("html-webpack-partials-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPartialPlugin({
      path: path.resolve(__dirname, "../src/views/home-partials/hero-section.html"),
      location: "HeroSection",
      template_filename: ["index.html"],
    }),
  ],
};
