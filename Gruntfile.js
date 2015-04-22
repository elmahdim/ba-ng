module.exports = function(grunt) {
	// measures the time each task takes
	require('time-grunt')(grunt);

	// load grunt configurations
	require('load-grunt-config')(grunt);

	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
};