var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
module.exports = {
	entry:{
		build:'./ajax/index.jsx'
	},
		   
	output:{
		path: __dirname + '/build/',
        publicPath: "/build/",
		filename:"build.js"
	},
	module:{
		loaders:[
		//千万不要重复了，不然会不起作用的
			{
			    test: /\.less$/,
			    loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			},
            { 
            	test: /\.(png|jpg)$/, 
            	loader: 'url-loader?limit=8192'
            },
			{
				test:/.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"ajax")
			}
		]
	},
	devServer:{

	},
	resolve:{
		root: 'D:/webpack', //绝对路径
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			//chunks:["build"]   //限定引入的块
		}),

        //提去引入的js模块
		new webpack.optimize.CommonsChunkPlugin("lib.js"),
		//提去引入的css模块
		new ExtractTextPlugin("[name].css"),
		  
	]
}