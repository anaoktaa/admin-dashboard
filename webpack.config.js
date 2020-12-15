const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        dashboardcommerce: path.resolve(__dirname, './src/pages/dashboard-commerce/dashboard-commerce.component.js'),
        dashboardsales: path.resolve(__dirname, './src/pages/dashboard-sales/dashboard-sales.component'),
        dashboardanalytic: path.resolve(__dirname, './src/pages/dashboard-analytic/dashboard-analytic.component'),
    },
    resolve: {
        alias: {
          Assets: path.resolve(__dirname, 'src/assets/'),
          Components: path.resolve(__dirname, 'src/components/'),
          Pages: path.resolve(__dirname, 'src/pages/'),
          Data: path.resolve(__dirname, 'src/data/'),
          Redux_Component: path.resolve(__dirname, 'src/redux/'),
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    ],
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                  }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                        modifyVars: {
                            'primary-color': '#545cd8',
                            'link-color': '#545cd8',
                            'success-color': '#31b16f',
                            'error-color': '#d92550',
                            'warning-color': '#f7b924',
                            'info-color': '#30b1ff',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                        },
                   },
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/]/,
                }
            },
        },
    },
}