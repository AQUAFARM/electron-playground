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
            dest: 'app.zip',
            main: 'main.js'
        }
    },
    styles: {
        less: {
            src: 'src/less/main.less',
            dest: dest + '/styles'
        },
        sourcemaps: './maps'
    },
    babel: {
        src: [src + '/js/**/*.js', src + '/js/**/*.jsx'],
        dest: dest
    },
    webpack: {
        settings: {
            output: {
                filename: 'renderer.js'
            },
            stats: {
                color: true
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx$/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.json$/,
                        loader: 'json'
                    }
                ]
            },
            resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
            },
            devtool: 'eval',
            debug: true
        },
        src: src + '/js/ui/renderer.jsx',
        dest: dest + '/js',
        outputName: 'renderer.js',
        sourcemaps: './maps',
        uglify: false
    },
    html: {
        src: 'src/html/**/*.html',
        dest: dest
    },
    watch: {
        src: src + '/**/*.*',
        tasks: ['build']
    }
};