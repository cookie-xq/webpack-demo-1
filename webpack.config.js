const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: '范范',
        template: './src/assets/index.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i, //正则，以.css结尾
            use: ["style-loader", "css-loader"],
        }, ],
    },
};