module.exports = {
  paths: {
    devf: {
      pug: [
        'index-dev.pug',
      ],
    },
    buildf: {
      pug: [
        'index-build.pug',
      ],
      css: [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'node_modules/prismjs/themes/prism.css',
      ],
    },
    less: 'src/main.less',
    lessWatch: 'src/*.less',
    js: [
      'src/*.js',
      'node_modules/prismjs/prism.js',
    ],
    copy: [
      'bower_components/bootstrap/dist/css/bootstrap.css',
      'bower_components/bootstrap/dist/css/bootstrap.css.map',
      'node_modules/prismjs/themes/prism.css',
      'bower_components/tether/dist/js/tether.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
    ],
    copyToDist: [
      'bower_components/tether/dist/js/tether.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
    ],
    dev: '.tmp/',
    build: 'build/',
    deploy: '.publish',
  },
};
