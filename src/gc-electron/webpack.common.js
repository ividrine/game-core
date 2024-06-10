const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "main.ts"),
    preload: path.join(__dirname, "src", "preload.ts"),
  },
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  plugins: [],
};
