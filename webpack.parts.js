const glob = require("glob");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { WebpackPluginServe } = require("webpack-plugin-serve");
const purgeCssPlugin = require("purgecss-webpack-plugin");

const ALL_FILES = glob.sync(path.join(__dirname, "src/*.js"));
const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
  assets: "assets/",
};

const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

exports.aliases = () => ({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@css": path.resolve(__dirname, "src/css"),
    },
  },
});

exports.dashboardPlugin = (pluginOptions = {}) => ({
  plugins: [ new DashboardPlugin(pluginOptions) ],
});

exports.bundleAnalyzerPlugin = (pluginOptions = {}) => ({
  plugins: [ new BundleAnalyzerPlugin(pluginOptions) ],
});

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 3000,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
      // historyFallback: true,
      // ramdisk: true,
      host: "127.0.0.1",
      open: true,
      progress: false,
    }),
  ],
});

exports.pug = () => ({
  plugins: [
    // Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
    ],
  },
});

exports.esbuild = ({ target = "es2015" } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: "esbuild-loader",
        options: {
          target,
        },
        exclude: /node_modules/,
      },
    ],
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});

exports.extractCSS = ({ options = {}, loaders = [], modules = false } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            // "css-loader",
            {
              loader: "css-loader",
              options: {
                modules,
              },
            },
          ].concat(loaders),
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };
};

exports.postCssLoader = () => ({
  loader: "postcss-loader",
  options: { sourceMap: true, postcssOptions: require("./postcss.config.js") },
});

exports.eliminateUnusedCSS = () => ({
  plugins: [
    new purgeCssPlugin({
      paths: ALL_FILES,
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ["html"],
        },
      ],
    }),
  ],
});

exports.copyAssets = () => ({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
        { from: `${PATHS.src}/static`, to: "" },
      ],
    }),
  ],
});

exports.loadFonts = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          type: "asset",
        },
      ],
    },
  };
};

exports.loadImages = ({ limit } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: "asset/resource",
          parser: { dataUrlCondition: { maxSize: limit } },
        },
      ],
    },
  };
};
