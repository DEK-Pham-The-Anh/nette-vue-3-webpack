//DO NOT TOUCH THIS IF DONT KNOW WHAT ARE YOU DOING!!!!!!!!!!

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = function (env) {
	return {
		mode: env.environment,
		entry: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), './www/vue-development/app/' + env.appname + '/App.js'],
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
				'vue': '@vue/compat'
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


