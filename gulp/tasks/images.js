'use strict';

var gulp = require('gulp');
var config = require('../config.js').images;

gulp.task('images', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
