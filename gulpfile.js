var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('uglyfify');
  var watch = require('gulp-watch');
  var source = require('vinyl-source-stream'); 


gulp.task("build", function(){
    var options = {
        entries: ['./scripts/app.js'],
        transform:[]
    };

options.transform.push([uglify, {global:true}]);

 browserify(options).bundle()
.pipe(source('./scripts/app.js'))
.pipe(gulp.dest('./scripts/public/'));

});

 
 
gulp.task('./scripts/**/*.js');
 
