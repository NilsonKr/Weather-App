const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [/* 
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }), */
        new CopyPlugin({
            patterns: [{ from: 'styles',
            to: 'styles/' },
            { from: 'assets',
            to: 'assets/' }],
        }),  
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
    ]
}