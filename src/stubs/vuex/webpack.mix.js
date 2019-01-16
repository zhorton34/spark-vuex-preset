let mix = require('laravel-mix');
let exec = require('child_process').exec;
let path = require('path');

mix.sass('resources/sass/app.scss', 'public/css')
    .js('resources/js/app.js', 'public/js')
    .copy('node_modules/sweetalert/dist/sweetalert.min.js', 'public/js/sweetalert.min.js')
    .sass('resources/sass/app-rtl.scss', 'public/css')
    .then(() => {
        exec('node_modules/rtlcss/bin/rtlcss.js public/css/app-rtl.css ./public/css/app-rtl.css');
    })
    .version(['public/css/app-rtl.css'])
    .webpackConfig(require('./webpack.config.js'))
