require('@babel/register')({
    ignore: [/\/(public|node_modules)\//],
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
})
require('ignore-styles')
require('@babel/polyfill')
require('./index.js')