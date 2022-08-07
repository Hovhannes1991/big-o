const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.ts",
  infrastructureLogging: {
    level: "error",
  },
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    port: 4200,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: path.join(__dirname, "dist") }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // experiments: {
  //   topLevelAwait: true
  // }
};
