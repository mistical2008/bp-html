// @ts-ignore
const postcssImport = require("postcss-import");
const postcssNormalize = require("postcss-normalize");
const fontsConfig = require("./globalConfig.js").fonts;
const customFunctions = require("./postcss-functions/fluid")

module.exports = {
  // syntax: 'postcss-scss',
  plugins: [
    postcssImport(
      postcssNormalize().postcssImport(),
      require("postcss-google-font"),
      require("postcss-font-magician")(fontsConfig),
      require("stylelint"),
    ),
    require("postcss-functions")({
      functions: {
        ...customFunctions,
      }
    }),
    require("postcss-color-alpha"),
    require("postcss-easysprites")({
      imagePath: './src/assets/img',
      spritePath: './dist/assets/img/sprites',
    }),
    require("postcss-sorting"),
    require("postcss-advanced-variables"),
    require("postcss-url"),
    require("postcss-easy-z"),
    require("postcss-easing-gradients"),
    // require("tailwindcss"),
    require("postcss-aspect-ratio"),
    require("postcss-preset-env"),
    require("postcss-fluidvars")({namespace: 'fv'}),
    require("postcss-responsive-images"),
    require("postcss-utilities"),
    require("postcss-focus"),
    require('postcss-pxtorem')({ replace: false }), // rem as fallback
    require("postcss-color-rgba-fallback"),
    require('postcss-flexbugs-fixes'),
    require('postcss-will-change-transition'),
    require('postcss-will-change'),
    require('postcss-calc'),
    require("autoprefixer"),
    require("postcss-browser-reporter"),
  ],
};


// https://ismamz.github.io/postcss-utilities
// https://github.com/postcss/postcss-browser-reporter
// https://github.com/azat-io/postcss-responsive-images
// https://github.com/CSSSR/postcss-easy-z
// https://github.com/arccoza/postcss-aspect-ratio
// https://github.com/hail2u/node-css-mqpacker
// https://github.com/ChristianMurphy/postcss-combine-duplicated-selectors
