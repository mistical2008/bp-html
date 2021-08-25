// https://github.com/csstools/postcss-font-magician
// for using in css without @font-face rule
exports.fonts = {
  /* variants: {
    "Jost": {
      "300": ['woff2', 'cyrillic, latin-ext'],
      "400": ['woff2', 'cyrillic, latin-ext'],
      "500": ['woff2', 'cyrillic, latin-ext'],
      "600": ['woff2', 'cyrillic, latin-ext'],
      "700": ['woff2', 'cyrillic, latin-ext'],
      "800": ['woff2', 'cyrillic, latin-ext'],
    },
  }, */
  display: "swap",
  foundries: ["hosted"],
  hosted: ["./src/assets/fonts"],
};

exports.css = {
  grid: {
    containerWidth: 1240,
    collumns: 12,
    gridGutter: 15,
    gridHorPadding: 20,
  },
  breakpoints: {
    desktop: 1240,
    tabletL: 980,
    labletM: 780,
    mobileL: 568,
    mobileM: 320,
  },
  designTokens: {
    color: {
    },
    spacings: {
    },
    font: {
      families: [],
      sizes: [],
      weights: [],
    }
  }
}
