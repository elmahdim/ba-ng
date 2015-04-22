module.exports = {
  options: {
    separator: ";\n"
  },
  dist: {
    src: [
      'src/js/overall/header.js',
      'src/js/*.js',
      'src/js/overall/footer.js'
    ],
    dest: 'app/dest/js/main.js',
    nonull: true
  },
  plugins: {
    src: [
      'src/js/plugins/*.js'
    ],
    dest: 'app/dest/js/plugins.js',
    nonull: true
  },
  app: {
    src: [
      'src/js/app/*.js'
    ],
    dest: 'app/dest/js/app.js',
    nonull: true
  }
};