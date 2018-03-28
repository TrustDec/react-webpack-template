const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'React Webpack',
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'favicon.ico',
            template: path.join(__dirname, 'src/favicon.ico')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 chunks: 'initial',
    //                 minChunks: 2,
    //                 maxInitialRequests: 5,
    //                 minSize: 0
    //             },
    //             vendor: {
    //                 test: /node_modules/,
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 priority: 10,
    //                 enforce: true
    //             }
    //         }
    //     },
    //     runtimeChunk: true
    // },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    }
};