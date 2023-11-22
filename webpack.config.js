// 1. Setting entry point
// 2. Setting loader
// 3. build, dev server setting
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPulgin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

require("dotenv").config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/build",
    filename: "app/[name].js",
    publicPath: "/",
    assetModuleFilename: (filePath) => {
      // public/assets/... => assets/...

      return filePath.filename.split("/").slice(1).join("/");
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", "..."],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          emit: false, // don't generate files
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d\.\d\.\d)?$/,
        type: "asset/resource",
        generator: {
          emit: false, // don't generate files
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true,
      favicon: "public/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
      port: process.env.port,
    }),
    new MiniCssExtractPlugin({
      filename: "app/[name].css",
      chunkFilename: "app/[id].css",
    }), // build : build/app
    new CopyWebpackPulgin({
      patterns: [{ from: "public/assets", to: "assets" }], // dev : project/public/assets, product : build/assets
    }),
  ],
  devServer: {
    host: process.env.host,
    port: process.env.port,
    static: {
      directory: __dirname + "/public",
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
};
