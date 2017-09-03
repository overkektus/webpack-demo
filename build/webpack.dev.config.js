const webpack = require('webpack')
const path = require('path')

module.exports = {
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        watchOptions: {
            aggregateTimeout: 1000,
            poll: 1000
        }
    },
    plugins: [
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, 'node_modules')
        ])
    ]
}