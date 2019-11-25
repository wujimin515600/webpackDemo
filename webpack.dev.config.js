const merge = require('webpack-merge')
const config = require('./webpack.base.config')


const devWebpackConfig = merge(config, {
	mode: 'development',
	devServer: {
		port: '8888',
		host: '127.0.0.1',
		overlay: {
			errors: false
		},
		open: true
	},
	devtool: 'inline-source-map',
})
module.exports = devWebpackConfig
