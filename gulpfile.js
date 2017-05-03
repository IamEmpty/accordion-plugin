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

gulp.task('deploy', gulp.series(build, () =>
  gulp.src(`${paths.build} + **/*`)
    .pipe(ghPages())
));
