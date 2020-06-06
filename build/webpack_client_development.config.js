const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack_client_common.config");


const webpackPort = 3009;

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "[name].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                RUN_ENV: JSON.stringify("development")
            }
        }),
    ],
    devServer: {
        port: webpackPort,
        allowedHosts: ["test.localhost"]}
});
