const path = require('path');
const loaders = require('./loaders')
const webpack = require('webpack');
const { rules } = require('eslint-config-prettier');
const plugins = require('./plugins');

module.exports = {
    entry: ["./src/js/index.js"],
    module: {
        rules: [
            loaders.JSLoader
        ]
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new webpack.ProgressPlugin(),
        plugins.ESLintPlugin,
    ],
};