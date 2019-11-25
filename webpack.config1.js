const path = require('path')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devSer: {
		port: '8888',
		host: '0.0.0.0',
		overlay: {
			errors: true
		}
	},
	entry: './js/index.js',
	// entry: ['./js/index.js', './js/1.js'],
	// entry: {
	// 	one: './src/index.js',
	// 	two: './src/1.js'
	// },
	output: {
		path: path.resolve(__dirname, 'dest'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: require.resolve('jquery'),
			use: [{
				loader: 'expose-loader',
				options: 'jQuery'
			}, {
				loader: 'expose-loader',
				options: '$'
			}]
		}, {
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(jpg|png|gif|jpeg)$/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 10000,
					// publicPath:'./img',
					name: '[path][name].[ext]',

				}
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			// filename: './dest/index.html'
		})
	]
}
