'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var config = require('../config').webpack;

gulp.task('webpack', function() {
    return gulp.src(config.src)
        .pipe(webpack(config.settings))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(config.uglify, uglify()))
        .pipe(sourcemaps.write(config.sourcemaps))
        .pipe(gulp.dest(config.dest));
});