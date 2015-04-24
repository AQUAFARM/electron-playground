'use strict';

var dest = './build';
var src = './src';

module.exports = {
  electron: {
    configFile: {
      src: src + '/template/package.json',
      dest: dest
    },
    build: {
      src: dest,
      main: 'main.js',
      darwin: {
        dest: './release/darwin.zip'
      },
      win32: {
        dest: './release/win32.zip'
      }
    }
  },
  styles: {
    less: {
      src: src + '/less/main.less',
      dest: dest + '/styles'
    },
    sourcemaps: './maps'
  },
  babel: {
    src: [src + '/js/**/*.js', src + '/js/**/*.jsx'],
    dest: dest
  },
  html: {
    src: src + '/html/**/*.html',
    dest: dest
  },
  images: {
    src: src + '/images/**/*',
    dest: dest + '/images'
  },
  watch: {
    src: src + '/**/*.*',
    tasks: ['build']
  }
};
