const path = require('path')

const APP_DIR = path.join(__dirname, '../')
const BUILD_DIR = path.join(__dirname, '../')

module.exports = {
    entry: path.join(APP_DIR, 'client', 'index.js'),
    output: {
        path: path.join(BUILD_DIR, 'server', 'public'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader'
            }
        ]
    }
}