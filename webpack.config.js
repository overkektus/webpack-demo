const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = {
    entry: {
        build: path.join(__dirname, 'src')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo'
        })
    ]
}

const productionConfig = () => baseConfig

const developmentConfig = () => {
    const config = {
        devServer: {
            historyApiFallback: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT,
            watchOptions: {
                aggregateTimeout: 1000,
                poll: 1000
            }
        }
    }

    return Object.assign({}, baseConfig, config)
}

module.exports = (env) => {
    if (env === 'production') {
        return productionConfig()
    }

    return developmentConfig()
}