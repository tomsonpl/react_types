const path = require("path");
const webpack = require("webpack");
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/client.tsx"
    },
    output: {
        path: path.resolve("dist/bundle/"), // `path` has to be absolute path
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [
                                "@babel/preset-typescript",
                                "@babel/preset-react"
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                APP_ENV: JSON.stringify("browser")
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        plugins: [PnpWebpackPlugin] // we need this only for webpack v4
    },
    resolveLoader: { // we need this only for webpack v4
        plugins: [PnpWebpackPlugin.moduleLoader(module)]
    }
};
