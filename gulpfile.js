var gulp=requiere('gulp');
var browserify=requiere('browserify');
var uglify=require('uglifyify');
var source=require('vinyl-source-stream');


gulp.task("build",function(){
	var options={
		entries:["./scripts/app.js"],
		transform:[]
	};
	var bundler=browserify(options);
	bundler.bundle();
	
});