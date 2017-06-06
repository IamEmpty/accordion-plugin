const gulp = require('gulp'),
  config = require('../config'),
  paths = config.paths,
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

// Get one .less file and render
function css() {
  return gulp.src(paths.less)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      compress: false,
    }))
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(paths.dev));
}

function html() {
  return gulp.src(paths.devf.pug)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug())
    .pipe(gulp.dest(paths.dev));
}

function js() {
  return gulp.src(paths.js)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.min.js'))
    .pipe(gulp.dest(paths.dev));
}

function copy() {
  return gulp.src(paths.copy)
    .pipe(gulp.dest(paths.dev));
}

// Static server
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dev,
      index: 'index.html',
    },
    browser: ['google chrome', 'chrome'],
  });

  gulp.watch(paths.lessWatch, css);
  gulp.watch(paths.pug, html);
  gulp.watch(paths.js, js);
}

module.exports = gulp.series(html, js, copy, serve);
