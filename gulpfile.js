var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('uglifyify');
var source = require('vinyl-source-stream');

gulp.task("build", function(){
  var options={
    entires: ['./scripts.app.js']
    tranform:[]
  };
  option.transform.push([uglify, {global:true}])
  var bundler = browserify(option);
  bundler.bundle()
  .pipe(source('./scripts/app.js'))
  .pipe(gulp.dest('./scripts/public'));

});