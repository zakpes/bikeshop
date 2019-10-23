const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page-index/index.html",
            inject: true,
            chunks: ["vendorCSS", "index"],
            chunksSortMode: "manual",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page-about/about.html",
            inject: true,
            chunks: ["vendorCSS", "about"],
            chunksSortMode: "manual",
            filename: "about.html"
        }),
        new webpack.SourceMapDevToolPlugin({
          filename: '[file].map'
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 name: 'vendor',
    //                 test: /[\\/]node_modules[\\/]/,
    //                 chunks: 'all',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
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
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: "cheap-eval-source-map"
});