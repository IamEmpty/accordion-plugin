const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const paths = require('./gulp/config').paths;
const dev = require('./gulp/tasks/dev');
const build = require('./gulp/tasks/build');
const del = require('del');

const clean = () => del([paths.build, paths.dev, paths.deploy]);

exports.clean = clean;
exports.dev = dev;
exports.build = build;
// The default task (called when you run `gulp` from cli)
exports.default = dev;

gulp.task('deploy', gulp.series(build, () =>
  gulp.src(`${paths.build} + **/*`)
    .pipe(ghPages()),
));
