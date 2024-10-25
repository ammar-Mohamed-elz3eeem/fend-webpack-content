const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/client/index.js",
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
        use: [
          { loader: 'file-loader' }
        ],
			},
		],
	},
};
