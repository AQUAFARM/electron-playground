'use strict';

var gulp = require('gulp');
var template = require('gulp-template');
var merge = require('event-stream').merge;
var atomshell = require('gulp-atom-shell');
var atom = require('gulp-atom');

var config = require('../config.js').electron;
var packageConfig = require('../../package.json');

var appConfig = {
  name: packageConfig.name,
  version: packageConfig.version,
  main: config.build.main
};

gulp.task('electron-config', function () {
  //return gulp.src(config.configFile.src)
  //    .pipe(template(appConfig))
  //    .pipe(gulp.dest(config.configFile.dest));

  return gulp.src('./package.json')
    .pipe(gulp.dest(config.configFile.dest));
});

gulp.task('electron-copy-module', function () {
  var dependencies = Object.keys(packageConfig.dependencies).map(function (dependency) {
    return 'node_modules/' + dependency + '/**/*';
  });

  return gulp.src(dependencies, {base: "./node_modules/"})
    .pipe(gulp.dest('./build/node_modules'));
});

gulp.task('electron', ['electron-config', 'electron-copy-module'], function () {
  //return gulp.src(config.build.src + '/**/*')
  //    .pipe(atomshell({
  //        version: '0.25.0',
  //        platform: 'darwin'
  //    }))
  //    .pipe(atomshell.zfsdest(config.build.dest));

  return atom({
    srcPath: './build',
    releasePath: './release',
    cachePath: './cache',
    version: 'v0.25.1',
    rebuild: false,
    platforms: ['darwin-x64', 'win32-x64', 'win32-ia32']
  });
});
