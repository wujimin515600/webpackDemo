const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	devServer: {
		host: '127.0.0.1',
		port: '8888',
		overlay: {
			errors: false
		},
		// open: true
	},
	devtool: 'inline-source-map',
	entry: ['./js/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|jpeg|png|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: '[path][name].[ext]'
					}
				}]
			},
			{
				test: require.resolve('jquery'),
				use: [{
					loader: 'expose-loader',
					options: 'jQuery'
				}, {
					loader: 'expose-loader',
					options: '$'
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html'
		})
	]
}
