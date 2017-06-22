var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
		devtool: 'inline-source-map',
		entry : [
		         './containers/js/app.js'
		],
		module : {
			loaders : [
			           {
			        	   test: /\.(js|jsx)$/,
			        	   //include : path.join(__dirname,'/containers/js'),			        	   
			        	   loader: ['babel-loader'],
			        	   exclude: /node_modules/,
			        	   query: {
   					 presets: ['es2015','react']
  					}
			           }
			        ]
		},
		output : {
			filename : "bundle.js",
			path : __dirname + '/views'
		},
		plugins : [
		HTMLWebpackPluginConfig,
		new webpack.optimize.OccurrenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
    	]
};