﻿const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const distPath = path.join(__dirname, "dist")

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 8080,
        contentBase: distPath,
        hot: true,
        historyApiFallback: true
    },
    // optimization: {
    //     usedExports: true
    // }
});