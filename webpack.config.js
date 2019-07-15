const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
        {
            test: /\.ts(x?)$/,
            use: {
                loader: 'awesome-typescript-loader'
            }
        }
    ]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ],
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
};
