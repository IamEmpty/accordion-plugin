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
        'node_modules/bootstrap/dist/css/bootstrap.css',
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
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/bootstrap/dist/css/bootstrap.css.map',
      'node_modules/prismjs/themes/prism.css',
      'node_modules/tether/dist/js/tether.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
    ],
    copyToDist: [
      'node_modules/tether/dist/js/tether.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ],
    dev: '.tmp/',
    build: 'build/',
    deploy: '.publish',
  },
};
