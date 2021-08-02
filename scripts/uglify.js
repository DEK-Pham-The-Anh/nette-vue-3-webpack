//DO NOT TOUCH THIS IF DONT KNOW WHAT ARE YOU DOING!!!!!!!!!!

//get a reference to the file system module
var fs = require('fs');

//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

var dir_devel_lib = './www/js-development/src';
var dir_prod_dist = './www/js-production/src';

fs.readdirSync(dir_devel_lib).forEach(function(file_name)
{
	var file_path = dir_devel_lib + '/' + file_name;
	if(fs.statSync(file_path).isFile())
	{
		var file_name_min = file_name.replace('.js', '.min.js');
		var path_to_min = dir_devel_lib + '/min/' + file_name_min;
		if (!fs.existsSync(dir_prod_dist)){
			fs.mkdirSync(dir_prod_dist);
		}

		if(fs.existsSync(path_to_min))
		{
			if(fs.copyFile)
			{
				fs.copyFile(path_to_min, dir_prod_dist + '/' + file_name_min, (err) => {
					if (err) return console.log(err);
					console.log(file_name_min + ' was copied to ' + dir_prod_dist);
				});
			}
			else //fallback Node 6.x
			{
				fs.createReadStream(path_to_min).pipe(fs.createWriteStream(dir_prod_dist + '/' + file_name_min));
				console.log(file_name_min + ' was copied to ' + dir_prod_dist);
			}
		}
		else
		{
			fs.readFile(file_path, 'utf8', function (err, data) {
				if (err) return console.log(err);
				var result = UglifyJS.minify(data);

				fs.writeFile(dir_prod_dist + '/' + file_name_min , result.code, function (err) {
					if (err) return console.log(err);
					console.log(file_name_min + ' was minified to ' + dir_prod_dist);
				});
			});
		}
	}
});