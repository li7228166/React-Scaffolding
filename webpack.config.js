var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './app/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        alias: {
            'redux': path.join(__dirname, 'node_modules/redux')
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: path.join(__dirname, 'app', 'js')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: process.env.DEV_TOOL || true,
            __DEVTOOLS__: process.env.DEV_TOOL || true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new ExtractTextPlugin("app.css", {
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Redux React Router Async Example',
            filename: 'index.html',
            template: 'index.template.html',
            favicon: path.join(__dirname, 'app', 'assets', 'images', 'favicon.ico')
        })
    ]
};
