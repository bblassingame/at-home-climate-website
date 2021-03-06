var webpack = require('webpack');
var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'bin/');
const APP_DIR = path.resolve(__dirname, 'src/');
const ENTRY_PATH = path.resolve(APP_DIR, 'main.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    plugins: [
        new CleanWebpackPlugin(['bin']),
        new HtmlWebpackPlugin({
            title: 'At Home Climate Storage',
            template: './src/template.ejs'
        })
    ],
};