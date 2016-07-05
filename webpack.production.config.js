const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const buildPath = path.resolve(__dirname, 'build');

module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: buildPath, // Path of output file
		filename: 'bundle.js' // Name of output file
	},
	plugins: [
		// Minify the bundle
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				// suppresses warnings, usually from module minification
				warnings: false,
			}
		}),
		// Allows error warnings but does not stop compiling.
		new webpack.NoErrorsPlugin(),
	],	
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	}
};
