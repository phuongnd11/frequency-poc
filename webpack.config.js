const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const buildPath = path.resolve(__dirname, 'build');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/script/index.js'
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: buildPath, // Path of output file
		filename: 'bundle.js' // Name of output file
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	devServer: {
		contentBase: "./www", // Relative directory for base of server
		inline: true,
		hot: true, // Live-reload
		noInfo: true
	},
	plugins: [
		// Enables Hot Modules Replacement
		new webpack.HotModuleReplacementPlugin(),
		// Allows error warnings but does not stop compiling.
		new webpack.NoErrorsPlugin()
	]
};
