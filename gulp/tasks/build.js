const gulp = require('gulp');
const config = require('../config');
const plugins = require('gulp-load-plugins')();

const { paths } = config;

// Get one .less file and render
function css() {
  return gulp.src(paths.buildf.css)
    .pipe(plugins.rename({
      extname: '.min.css',
    }))
    // .pipe(plugins.less({
    //   compress: true
    // }))
    .pipe(gulp.dest(paths.build));
}

function html() {
  return gulp.src(paths.buildf.pug)
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug({
      compress: true,
    }))
    .pipe(gulp.dest(paths.build));
}

function js() {
  return gulp.src(paths.js)
    .pipe(plugins.rename({
      extname: '.min.js',
    }))
    .pipe(plugins.babili({
      mangle: false,
    }))
    .pipe(gulp.dest(paths.build));
}

function copy() {
  return gulp.src(paths.copyToDist)
    .pipe(gulp.dest(paths.build));
}

module.exports = gulp.series(html, js, css, copy);
