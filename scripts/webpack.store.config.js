//DO NOT TOUCH THIS IF DONT KNOW WHAT ARE YOU DOING!!!!!!!!!!

var path = require('path');

module.exports = function (env) {
	return {
		mode: env.environment,
		entry: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), './www/vue-development/app/' + env.appname + '/Store.js'],
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				}
			]
		},
		output: {
			library: 'STORE_' + env.appname, //https://stackoverflow.com/a/41854208/4000826
			libraryTarget: 'var',
			path: path.join(__dirname, '../www'),
			filename: './vue-' + env.environment + '/src/' + env.appname.toLowerCase() + '-store.min.js',
		},
	}
};


