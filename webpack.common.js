module.exports = {
    entry: {
        index: "./src/page-index/index.js",
        about: "./src/page-about/about.js",
        vendorCSS: "./src/js/vendorCSS.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|wav)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};