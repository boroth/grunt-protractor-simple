/*
 * grunt-protractor-simple
 * https://github.com/boroth/grunt-protractor-simple
 *
 * Copyright (c) 2013 Bo Roth
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    //Declaring variables
    var fs, pt, exec, shell;

    //Requiring files
    fs = require('fs');
    exec = require('child_process').exec;
    shell = require('shelljs');

    grunt.registerTask('protractor_simple', 'A simple grunt plugin for registering Protractor tasks.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({

        });

        console.log(JSON.stringify(options, null, '   '));
//      console.log('herp');
        console.log(options.files[0]);

        // Iterate over all specified file groups.
        options.files.filter(function(filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Config file "' + filepath + '" not found.');
                return false;
            } else {
                return true;
            }
        }).forEach(function(filepath) {
                // Run protractor with each file
                console.log('Running \'protractor ' + filepath + '\'');
                var child = shell.exec("protractor " + filepath,
                    {
                        aysnc: false,
                        silent: false
                    }
                );
                if ( child.code != 0 ) {
                    process.exit(1);
                }
            });

        // Print a success message.
        grunt.log.writeln('grunt-protractor: Ran protractor tests.  See Protractor output above for results from your tests.');
    });

};
