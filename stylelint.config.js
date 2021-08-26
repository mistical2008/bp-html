module.exports = {
  fix: true,
  extends: [
   "stylelint-config-rational-order",
   "stylelint-config-prettier",
  ],
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "scale-unlimited/declaration-strict-value": [
      "z-index",
      {
        ignoreValues: ["initial", -1, 0, 1],
      },
    ],
  },
};
