const path = require('path');
const _ESLintPlugin = require('eslint-webpack-plugin');

const ESLintPlugin = new _ESLintPlugin({
    overrideConfigFile: path.resolve(__dirname, '../.eslintrc.json'),
    context: path.resolve(__dirname, '../src/js'),
    files: '**/*.js',
})

module.exports = {
    ESLintPlugin: ESLintPlugin,
}