const gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  paths = require('./gulp/config').paths,
  dev = require('./gulp/tasks/dev'),
  build = require('./gulp/tasks/build'),
  del = require('del');

const clean = () => del([paths.build, paths.dev, paths.deploy]);
exports.clean = clean;

// The default task (called when you run `gulp` from cli)
gulp.task('dev', dev);
gulp.task('build', build);
gulp.task('default', dev);

function copy() {
  const toCopy = [
    'src/*.js',
    'index.html',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/prismjs/themes/prism.css',
    'bower_components/tether/dist/js/tether.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/prismjs/prism.js',
  ];
  return gulp.src(toCopy, { base: '.' })
    .pipe(gulp.dest(paths.build));
}

gulp.task('deploy', gulp.series(copy, () =>
  gulp.src(`${paths.build} + **/*`)
    .pipe(ghPages())
));
