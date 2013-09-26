/*
 * grunt-protractor-simple
 * https://github.com/boroth/grunt-protractor-simple
 *
 * Copyright (c) 2013 Bo Roth
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-shell');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    protractor_simple: {
      default_options: {
        options: {
        },
        files: ['protractorConfig.js'],
      },
      custom_options: {
        options: {
        },
        files: ['protractorConfigCustom.js'],
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');



  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
//  grunt.registerTask('test', ['protractor_simple', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['protractor_simple']);

};
