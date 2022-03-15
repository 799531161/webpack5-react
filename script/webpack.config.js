const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { ESBuildPlugin } = require("esbuild-loader");
const autoprefixer = require('autoprefixer');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[contenthash].js',
        clean: true
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    process.env.ENV_LWD == 'development'
                        ? {
                              loader: 'style-loader'
                          }
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]_[local]_[hash:8]'
                            }
                        }
                    },
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'css',
                            minify: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer({
                                        overrideBrowserslist: [
                                            'last 10 Chrome versions',
                                            'last 5 Firefox versions',
                                            'Safari >= 6',
                                            'ie> 8'
                                        ]
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack5',
            template: path.join(__dirname, '../public/index.html')
        }),
        new ESLintPlugin(),
        // new ESBuildPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            ignoreOrder: true
        }),
        new WebpackBar()
    ],
    stats: 'errors-only'
};
