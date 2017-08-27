var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'bin/');
var APP_DIR = path.resolve(__dirname, 'src/');
var ENTRY_PATH = path.resolve(APP_DIR, 'main.js');

module.exports = {
    entry: ['babel-polyfill', ENTRY_PATH],
    output: {
        path: BUILD_DIR,
        publicPath: '/bin/',
        filename: "bundle.js"
    },
    module: {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
};