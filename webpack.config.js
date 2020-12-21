const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

module.exports = {
    mode: ( process.env.NODE_ENV ? process.env.NODE_ENV : 'development' ),
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
          Assets: path.resolve(__dirname, 'src/assets/'),
          Components: path.resolve(__dirname, 'src/components/'),
          Data: path.resolve(__dirname, 'src/data/'),
          Redux_Component: path.resolve(__dirname, 'src/redux/'),
          Loader : path.resolve(__dirname, 'src/loader/')
        }
    },
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
                    loader: 'css-loader', 
                  }, {
                    loader: 'less-loader',
                    options: {
                        lessOptions: { 
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
        new AsyncChunkNames()
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