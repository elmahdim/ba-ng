module.exports = {
 css: {
  files: '**/*.scss',
  tasks: ['compass']
 },
 scripts: {
  files: ['Gruntfile.js', 'src/js/*.js', 'src/js/**/*.js', 'src/js/**/**/*.js'],
  tasks: ['concat']
 },
 minjs: {
  files: '***/*/*.js',
  tasks: ['uglify']
 }
};