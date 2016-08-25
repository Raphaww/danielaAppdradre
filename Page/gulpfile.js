var gulp= require('gulp');
var browserify= require('browserify');
var uglify= require('uglifyify');
var source= require('vinyl-source-steam');

gulp.task("build", function()
{
	var options= {
		entries: ['./script/app.js'],
		transform:[]
	};

	options.transform.push([uglify, {global:true}]);
	
})

gulp.task("build", function()
{
	{}
})