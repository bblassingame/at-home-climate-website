var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'bin/');
var APP_DIR = path.resolve(__dirname, 'src/');
var ENTRY_PATH = path.resolve(APP_DIR, 'index.js');

module.exports = {
    entry: ['babel-polyfill', ENTRY_PATH],
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    // devServer: {
    //     contentBase: "./src",
    //     hot: true
    // },
};