'use strict';

var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('build', ['webpack', 'styles', 'html'], function() {
    gulp.src(config.src);
});