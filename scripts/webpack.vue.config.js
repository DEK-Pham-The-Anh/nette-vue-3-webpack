//DO NOT TOUCH THIS IF DONT KNOW WHAT ARE YOU DOING!!!!!!!!!!
require("core-js/stable");
require("regenerator-runtime/runtime");
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
//https://webpack.js.org/api/cli/
module.exports = function (env) {
	return {
		mode: env.environment,
		entry: ['./www/vue-development/app/' + env.appname + '/App.js'],
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						compilerOptions: {
						  compatConfig: {
							MODE: 2
						  }
						}
					}
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			alias: {
				'vue$': '@vue/compat'
			},
		},
		output: {
			path: path.join(__dirname, '../www'),
			filename: './vue-' + env.environment + '/src/' + env.appname.toLowerCase() + '.min.js',
		},
		plugins: [
			new VueLoaderPlugin()
		]
	}
};


