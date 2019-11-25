const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.config')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const proWebpackConfig = merge(config,{
	mode: 'production',
	// devtool: 'eval',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: path.posix.join('static/', 'js/[name].[chunkhash].js'),
		// chunkFilename:  path.posix.join('static/','js/[id].[chunkhash].js')
		publicPath:'/webpack/dist/'
	},
	plugins:[
		new CleanWebpackPlugin()
	]
})
module.exports = proWebpackConfig