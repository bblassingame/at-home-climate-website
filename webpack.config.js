var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'bin/');
var APP_DIR = path.resolve(__dirname, 'src/');
var ENTRY_PATH = path.resolve(APP_DIR, 'main.js');

var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            },
            {
                test: /\.(gif|png|jpg)$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'This is the future website for At Home Climate Control Storage in Longview, Texas',
            template: './src/template.ejs'
        })
    ],
};