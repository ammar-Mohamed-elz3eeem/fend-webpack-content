const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
	entry: "./src/client/index.js",
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /(node_modules)/,
				use: "babel-loader",
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				exclude: /(node_modules)/,
				use: [{ loader: "file-loader" }],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/client/views/index.html",
			filename: "index.html",
		}),
		new CleanWebpackPlugin({
			verbose: true,
			dry: true,
		}),
		new BundleAnalyzerPlugin()
	],
};
