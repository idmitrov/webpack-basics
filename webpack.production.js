const path = require('path');

const webpackMerge = require('webpack-merge');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const webpackBase = require('./webpack.base');

module.exports = webpackMerge(webpackBase, {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contentHash].js'
	},
	plugins: [
		new WebpackCleanupPlugin()
	]
});
