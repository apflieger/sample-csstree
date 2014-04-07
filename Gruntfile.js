'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['css/**/*.gen.*'],
    csstree: {
      clientProject: {
        src: 'css'
      }
    },
    cssmin: {
      minifyBranches: {
        expand: true, // Enable dynamic expansion.
        src: ['css/**/branch.gen.css'], // Actual pattern(s) to match.
        dest: 'css/', // Destination path prefix.
        ext: '.min.css', // Dest filepaths will have this extension.
        extDot: 'last'
      }
    }
  });

  grunt.loadNpmTasks('grunt-csstree');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'csstree', 'cssmin']);

};