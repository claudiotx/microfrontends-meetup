const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		'root-app': 'src/root-app/root-app.js',
		'common-dependencies': [
			'core-js/client/shim.min.js',
			'@angular/common',
			'@angular/compiler',
			'@angular/core',
			'@angular/platform-browser-dynamic',
			'@angular/router',
			'reflect-metadata',
			'react',
			'react-dom',
		],
	},
	output: {
		publicPath: '/dist/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src/angular-header/node_modules')],
				query: { compact: false },
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss$/,
        loader: ["raw-loader", "sass-loader?sourceMap"]
      }
		],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
			'src/angular-header/node_modules'
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common-dependencies',
		}),
		new ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
			path.resolve(__dirname, '../src')
			)
	],
	devtool: 'source-map',
	externals: [
	],
};