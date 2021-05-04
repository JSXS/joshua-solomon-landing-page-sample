const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimizer: [
          new TerserPlugin({
              cache: true,
              parallel: true,
              sourceMap: true,
              terserOptions: {
                  ecma: 6,
                  keep_classnames: true,
                  keep_fnames: true
              }
          })
        ]
    }
});