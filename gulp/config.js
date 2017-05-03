module.exports = {
  paths: {
    pug: ['index.pug', 'test/test.pug'],
    less: 'src/main.less',
    lessWatch: 'src/*.less',
    js: 'src/main.js',
    copy: [
      'src/*.js',
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/prismjs/themes/prism.css',
      'bower_components/tether/dist/js/tether.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/prismjs/prism.js',
    ],
    dev: '.tmp/',
    build: 'build/',
    deploy: '.publish',
  },
};
