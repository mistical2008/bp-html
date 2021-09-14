// @ts-ignore
const postcssImport = require('postcss-import');
const fontsConfig = require('./globalConfig.js').fonts;
const customFunctions = require('./postcss-functions/fluid');

module.exports = {
  // syntax: 'postcss-scss',
  plugins: [
    require('postcss-font-magician')(fontsConfig),
    postcssImport({
      plugins: [
        require('postcss-preset-env'),
        require('stylelint'),
        require('postcss-sorting'),
        require('postcss-browser-reporter'),
      ],
    }),
    require('postcss-google-font'),
    /* require("postcss-functions")({
      functions: {
        ...customFunctions,
      }
    }), */
    require('postcss-color-alpha'),
    require('postcss-easysprites')({
      imagePath: './src/assets/img',
      spritePath: './dist/assets/img/sprites',
    }),
    // require("postcss-advanced-variables"),
    require('postcss-url'),
    require('postcss-easy-z'),
    require('postcss-easing-gradients'),
    // require("tailwindcss"),
    require('postcss-aspect-ratio'),
    // require('postcss-preset-env'),
    require('postcss-fluidvars')({namespace: 'fv'}),
    require('postcss-responsive-images'),
    require('postcss-utilities'),
    require('postcss-focus'),
    require('postcss-pxtorem')({replace: false}), // rem as fallback
    require('postcss-custom-properties'),
    require('postcss-color-rgba-fallback'),
    require('postcss-flexbugs-fixes'),
    require('postcss-fontstack-auto'),
    require('postcss-presence-transition'),
    require('postcss-will-change-transition'),
    require('postcss-will-change'),
    require('postcss-calc'),
    require('postcss-viewport-height-correction'),
    require('autoprefixer'),
    require('postcss-browser-reporter'),
  ],
};
