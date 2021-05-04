const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/app.jsx",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                issuer: /\.(js|jsx)$/,
                loader: "@svgr/webpack"
            },
            {
                test: /\.svg$/,
                issuer: /\.css$/,
                loader: "file-loader"
            },
            {
                test: /\.(eot|woff(2)?|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "dist/resources/fonts",
                    publicPath: "dist/resources/fonts"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Subscribe Now",
            template: "./src/webpack-template.html",
            filename: "index.html",
            chunks: ["app"]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".scss", ".wasm", ".mjs"]
    },
};