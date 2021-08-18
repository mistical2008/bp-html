// https://github.com/csstools/postcss-font-magician
// for using in css without @font-face rule
exports.fonts = {
  variants: {
    "Jost": {
      "300": ['woff, woff2, eot', 'cyrillic'],
      "400": ['woff, woff2, eot', 'cyrillic'],
      "500": ['woff, woff2, eot', 'cyrillic'],
      "600": ['woff, woff2, eot', 'cyrillic'],
      "700": ['woff, woff2, eot', 'cyrillic'],
      "800": ['woff, woff2, eot', 'cyrillic'],
    },
  },
  display: "swap",
  foundries: ["google"],
  hosted: ["./src/assets/fonts"],
};

