'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../config.js').styles;

gulp.task('styles', function() {
    return gulp.src(config.less.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssmin())
        .pipe(sourcemaps.write(config.sourcemaps))
        .pipe(gulp.dest(config.less.dest));
});