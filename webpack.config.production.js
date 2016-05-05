var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'app': './app/js/index',
        'vendor': ['react', 'react-dom', 'babel-polyfill']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].[hash:8].js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".json"],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
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
        new webpack.DefinePlugin({
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash:8].js'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("app.[hash:8].css", {
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Redux React Router Async Example',
            filename: 'index.html',
            template: 'index.template.html',
            favicon: path.join(__dirname, 'app', 'assets', 'favicon.ico')
        }),
        // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.optimize.DedupePlugin(),
        // 按引用频度来排序 ID，以便达到减少文件大小的效果
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        })
    ]
};
