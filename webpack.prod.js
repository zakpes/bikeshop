const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page-index/index.html",
            inject: true,
            chunks: ["vendorCSS", "vendor", "index"],
            chunksSortMode: "manual",
            excludeAssets: [/vendorCSS.*.js/],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page-about/about.html",
            inject: true,
            chunks: ["vendorCSS", "vendor", "about"],
            chunksSortMode: "manual",
            excludeAssets: [/vendorCSS.*.js/],
            filename: "about.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
            // chunkFilename: "[id].[contentHash].css",
            // ignoreOrder: false
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackExcludeAssetsPlugin()
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /^vendorCSS\.[a-z|A-Z|0-9]+\.css$/
            }),
            new TerserPlugin({
                include: /vendor/
            })
        ],
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'expanded',
                                minimize: false
                            },
                        }
                    }
                ]
            }
        ]
    }
});