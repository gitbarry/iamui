/**
 * Created by barrypoore on 06/10/2016.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')

    .pipe(sassGlob())
        .pipe(sourcemaps.write())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
});


gulp.task('build', function() {
    return gulp.src('css/styles.css')
        .pipe(cleanCSS({ compatibility: 'ie9' }))
        .pipe(gulp.dest('css/dist'));
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(gulp.dest('css'));
});