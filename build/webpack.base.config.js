const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	devtool: '#source-map',
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.css$/i,
				use: ExtractTextPlugin.extract({ // 1.这里配置提取css文件
					fallback: 'style-loader', // 如果提取失败,就使用style-loader加载到页面
					use: 'css-loader'
				})
			},
			{
				test: /\.(png|gif|jpg|jpeg)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: path.posix.join('static', '[path][name].[ext]'),
						// publicPath: 'dist/'
					}
				}]
			},
			{
				test: require.resolve('jquery'),
				use: [{
						loader: 'expose-loader',
						options: '$'
					},
					{
						loader: 'expose-loader',
						options: 'jQuery'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html'
		}),
		new ExtractTextPlugin('static/css/main.css')
	]
}
