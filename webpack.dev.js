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
            chunks: ["index"],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/page-about/about.html",
            inject: true,
            chunks: ["about"],
            filename: "about.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});