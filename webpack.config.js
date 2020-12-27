const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const StylelintPlugin = require("stylelint-webpack-plugin")

const stylelintOptions = {
  configFile: path.resolve(__dirname, ".stylelintrc.json"),
  context: path.resolve(__dirname, "./src/css"),
  files: "**/*.css",
  fix: true,
}
const entryDir = "src/"

module.exports = {
  entry: {
    script: "./" + entryDir + "js/_script.js",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    // Generating HTML
    new HtmlWebpackPlugin({
      template: "./" + entryDir + "pug/_index.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPugPlugin(),
    new MiniCssExtractPlugin({ filename: "style.css" }), // Generating CSS
    new StylelintPlugin(stylelintOptions), // Stylelint checking
    new CopyWebpackPlugin([{ from: "./" + entryDir + "img", to: "img" }]), // Copy images
  ],

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },

  module: {
    rules: [
      // HTML
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          // Extract to external CSS file
          { loader: MiniCssExtractPlugin.loader },

          // Regular CSS
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              sourceMap: true,
              url: false,
            },
          },

          // PostCSS with plugins
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-nested"),
                require("postcss-flexbugs-fixes"),
                require("postcss-preset-env")({
                  autoprefixer: {
                    flexbox: "no-2009",
                  },
                  stage: 3,
                }),
              ],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  // Development server
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 4000,
    writeToDisk: true,
  },

  mode: process.env.NODE_ENV || "development",
}
