var webpack =require('webpack')
module.exports = {
	test: './test.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module:{
		loaders: [
		{test:/\.css$/,loader:'style-loader!css-loader'}
		]
	},
	plugins:[
        new webpack.BannerPlugin('This file is created by yuziheng')
	]
}