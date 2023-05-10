const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: "/",
    assetModuleFilename: "public/svgs/[name][ext]",
  },
  devServer: {
    static: path.resolve(__dirname, "build"),
    open: true,
    compress: true,
    historyApiFallback: true,
    allowedHosts: [".ngrok.io"],
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
          },
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "public/images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],

  resolve: {
    alias: {
      contexts: path.resolve(__dirname, "src", "contexts"),
      services: path.resolve(__dirname, "src", "services"),
      pages: path.resolve(__dirname, "src", "pages"),
      components: path.resolve(__dirname, "src", "components"),
      utils: path.resolve(__dirname, "src", "utils"),
      consts: path.resolve(__dirname, "src", "consts"),
      imagens: path.resolve(__dirname, "public", "imagens"),
      svgs: path.resolve(__dirname, "public", "svgs"),
    },
    extensions: [".js", ".jsx"],
  },
};
