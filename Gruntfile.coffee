# grunt-envify

module.exports = (grunt) ->

  grunt.initConfig
    coffee:
      build:
        expand: yes
        flatten: no
        cwd: 'src'
        src: ['**/*.coffee']
        dest: 'lib'
        ext: '.js'

    clean:
      test: 'tmp'

    env:
      test:
        NODE_ENV: 'production'

    envify:
      test:
        expand: yes
        flatten: no
        cwd: 'test'
        src: ['**/*.js']
        dest: 'tmp'
        ext: '.js'
      custom:
        options:
          env:
            NODE_ENV: 'foobar'
        files:
            'tmp/custom.js': ['test/fixture/sample.js']

  grunt.loadTasks 'tasks'

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-env'

  grunt.registerTask 'build', ['coffee']
  grunt.registerTask 'test', ['env', 'envify']
  grunt.registerTask 'cleanup', ['clean']
  grunt.registerTask 'default', ['build', 'test']
