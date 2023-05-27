const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: ['./src/index'],
    mode: isDevelopment ? 'development' : 'production',
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        hot: 'only',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|gif|eot|ttf|svg|mp3)$/,
                use: 'url-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    ],
    devtool: 'cheap-module-source-map',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}

if (isDevelopment) {
    module.exports.plugins.push(
        new ReactRefreshPlugin(),
    )
}