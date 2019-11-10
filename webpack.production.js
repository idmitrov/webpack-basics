const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base');
const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = webpackMerge(webpackBase, {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contentHash].js'
	},
	plugins: [
		new WebpackCleanupPlugin()
	]
});