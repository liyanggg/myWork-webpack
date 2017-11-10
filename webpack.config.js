/*
* @Author: 37940
* @Date:   2017-08-21 06:49:28
* @Last Modified by:   37940
* @Last Modified time: 2017-08-21 09:21:30
*/
var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry:'./src/js/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname, './dist'),
	},
	module:{
		rules:[{
			test: /\.css$/,
			use: ExtractTextWebpackPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        }),
		}]
	},
	plugins:[
		new UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([{
			from: './src/images',
			to: './images'
		}]),
		new ExtractTextWebpackPlugin('./style.css'),
		new CleanWebpackPlugin(['dist'], {
            root: 'C:/Users/37940/Desktop/homework/project',
            verbose: true,
            dry: false,
        	}
        ),
	]
}