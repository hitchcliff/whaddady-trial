const path = require("path");
const HtmlWebpackPartialPlugin = require("html-webpack-partials-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPartialPlugin({
      path: path.resolve(__dirname, "../src/views/home-partials/hero-section.html"),
      location: "HeroSection",
      template_filename: ["index.html"],
    }),
    new HtmlWebpackPartialPlugin({
      path: path.resolve(__dirname, "../src/views/home-partials/video-section.html"),
      location: "VideoSection",
      template_filename: ["index.html"],
    }),
    new HtmlWebpackPartialPlugin({
      path: path.resolve(__dirname, "../src/views/home-partials/music-section.html"),
      location: "MusicSection",
      template_filename: ["index.html"],
    }),
  ],
};
