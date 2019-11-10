const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base');

module.exports = webpackMerge(webpackBase, {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
});