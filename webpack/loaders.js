const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const JSLoader = {
    test: /\.js$/i,
    exclude: /noe_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
};

const CSSLoader = {
    test: /\.css$/i,
    exclude: /node_modules/,
    use: [
        {
          loader: MiniCSSExtractPlugin.loader,
          options: {
              publicPath: path.resolve(__dirname, '../dist/css/')
          }  
        },
        {
            loader: 'css-loader',
            options: {importLoaders: 1},
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    config: path.resolve(__dirname, 'postcss.config.js')
                }
            }
        },
    ]
}

module.exports = {
    JSLoader,
    CSSLoader,
}