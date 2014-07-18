/*
 * grunt-envify
 * https://github.com/couchand/grunt-envify
 *
 * Copyright (c) 2014 Andrew Couch
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var envify = require('../lib');

module.exports = function(grunt) {

  function createDestDir(destination) {
    var folder = path.dirname(path.resolve(destination));
    if (!grunt.file.exists(folder)) {
      grunt.file.mkdir(folder);
    }
  }

  grunt.registerMultiTask('envify', 'Grunt plugin for envify without browserify.', function() {
    var options = this.options({
      env: false
    });

    var done = this.async();
    var count = this.files.length;

    function check() {
      count -= 1;
      if (count === 0) {
        done();
      }
    }

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      if (src.length === 0) {
        count -= 1;
        return;
      }

      if (src.length > 1) {
        count -= 1;
        grunt.log.warn('Only ony source file per destination, please');
        return;
      };

      createDestDir(f.dest);
      envify(src[0], f.dest, options.env ? options.env : void 0)
        .on('finish', check);
    });
  });

};
