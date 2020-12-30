const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require("./paths");
const ENTRY = require("./entry")

// Multiple Entry
const entryHtmlPlugins = ENTRY.html.map(entryName => {
  return new HtmlWebPackPlugin({
    filename: `${entryName}.html`,
    template: `../src/views/${entryName}.pug`,
    DATA: require(`../src/data/${entryName}.json`),
    chunks: [entryName],
    inject: true
  })
})

module.exports = {
  context: paths.src,
  entry: "./index.js",

  output: {
    path: paths.dist,
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
          self: true,
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff2?)$/i,
        loader: "file-loader",
        options: {
          emitFile: false,
          name: "[path][name].[ext]",
          publicPath: "/",
        },
      },
    ],
  },

  plugins: [
    ...entryHtmlPlugins,
    new ESLintPlugin(),
    new StylelintPlugin(),

    new SVGSpritemapPlugin("src/assets/icons/**/*.svg", {
      output: {
        filename: "assets/icons.svg",
        svg4everybody: true,
      },
      sprite: {
        prefix: false,
      },
    }),
  ],
};
