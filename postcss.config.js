const postcssImport = require("postcss-import");
const postcssNormalize = require("postcss-normalize");
const fontsConfig = require("./globalConfig.js").fonts;

module.exports = {
  plugins: [
    // require("postcss-font-magician")(fontsConfig),
    require("stylelint"),
    require("postcss-focus"),
    require("postcss-url"),
    require("postcss-sorting"),
    require("postcss-easy-z"),
    require("postcss-easing-gradients"),
    // require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env"),
    require("postcss-responsive-images"),
    postcssImport(postcssNormalize().postcssImport()),
    require("postcss-utilities"),
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
