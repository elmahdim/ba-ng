module.exports = {
 options: {
  mangle: false
 },
 my_target: {
  files: {
   'app/dest/js/main.min.js'   : 'app/dest/js/main.js',
   'app/dest/js/plugins.min.js': 'app/dest/js/plugins.js',
   'app/dest/js/app.min.js'    : 'app/dest/js/app.js'
  }
 }
};