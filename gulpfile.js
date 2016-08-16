var gulp = require('gulp');
var browserify = require('browserify');


gulp.task("build", function(){
    var options = {
        entries: ['./scripts/app.js'],
        transform:[]
    };

options.transform.push([uglify, {global:true}]);

var bundler = browserify(options);
bundlerl.bundle()
.pipe(source('./scripts/app.js'))
.pipe(gulp.dest('./scripts/public/'));

});