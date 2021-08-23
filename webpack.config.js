const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const cssLoaders = [parts.postCssLoader()];
const imageSizeLimit = 15000;

// Set config for css-modules
// const modulesConf = {
// localIdentName: "[folder]__[local]--[hash:base64:5]",
// auto: true,
// };

// CONFIGS:
const commonConfig = merge([
  { entry: ["./src/index.js"] },
  {
    output: {
      clean: true,
      assetModuleFilename: "assets/[hash][ext][query]",
    },
  },
  parts.aliases(),
  parts.pug(),
  parts.esbuild(),
  parts.loadFonts(),
  parts.loadImages({ limit: imageSizeLimit }),
  parts.extractCSS({
    loaders: cssLoaders,
  }),
  parts.copyAssets(),
]);

// FIXME:  <20-07-21, > Breaks CSS. Need to fix
// const productionConfig = merge([parts.eliminateUnusedCSS()]);
const productionConfig = merge({});

const developmentConfig = merge([
  { entry: ["webpack-plugin-serve/client"] },
  { stats: "minimal" },
  { stats: { errorDetails: 'auto' } },
  { stats: { children: true } },
  parts.devServer(),
  /* parts.dashboardPlugin({
    includeAssets: ['index', 'main', 'bundle'],
  }), */
  parts.bundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'bundle-report-dev.html',
    openAnalyzer: false,
  }),
]);

const getConfig = (mode) => {
  process.env.NODE_ENV = mode;
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
