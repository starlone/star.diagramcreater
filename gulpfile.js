var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

var files = 'src/**/*.js';

gulp.task('lint', function() {
    gulp.src(files)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
    return gulp
            .src([files])
            .pipe(uglify())
            .pipe(gulp.dest('build'));
});
