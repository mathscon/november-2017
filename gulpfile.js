var gulp = require('gulp');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src(['css/creative.css', 'css/slideshow.css'])
        .pipe(minify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/'))
    ;
});

gulp.task('uglify', function () {
    gulp.src(['js/slideshow.js', 'js/maps.js'])
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/'))
    ;
});

gulp.task('default', ['minify', 'uglify'], function() {

});
