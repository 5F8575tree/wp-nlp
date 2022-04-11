const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        libraryTarget: 'var',
        library: "$",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        compress: true,
        // proxy: {
        //     '/api': 'http://localhost:3000/api'
        // },
        port: 8081
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.html$/,
                use: "html-loader"
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "fast-sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            title: 'Webpack Natural Language Processing',
            filename: 'index.html',
            inject: 'body',
        }),
        new Dotenv(

        ),
        new WorkboxPlugin.GenerateSW({
            swDest: './service-worker.js'
        })
    ]
}