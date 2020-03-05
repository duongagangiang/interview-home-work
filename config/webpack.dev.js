const merge = require('webpack-merge')
const common = require('./webpack.config')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

const APP_DIR = path.join(__dirname, '../')
const BUILD_DIR = path.join(__dirname, '../')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(APP_DIR, 'client', 'index.html'),
            filename: path.join(BUILD_DIR, 'server', 'public', 'index.html')
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(BUILD_DIR, 'server', 'public'),
        hot: true,
        port: 3000,
        proxy: {
            '/v1': {
                target: {
                    host: 'localhost',
                    protocol: 'http',
                    port: 5000
                }
            }
        }
    },
    devtool: 'source-map'
})