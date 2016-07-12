var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('build', function() {
    return gulp
            .src(['src/**/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build'));
});
