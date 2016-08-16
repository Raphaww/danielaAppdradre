var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('uglify');
var source = require('vinyl-source-stream');

gulp.task("build", function() {
	var options = {
		entries: ['./scripts/app.js'],
		transform: []
	};
	options.transform.push([uglify,{global:true}]);
	
	var bundler = browserify(options);
	bundler.bundle()
	.pipe(source('./scripts/app.js'))
	.pipe(gulp.dest('./scripts/public'));
})