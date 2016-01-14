# grunt-envify

> Grunt plugin for envify without browserify.

This might not be what you're looking for.  If you want to set the
variables in process.env, you're looking for [grunt-env][0].  If you
want to use envify as part of browserify, you want [grunt-browserify][1].
This module is only useful if you'd like [envify][2] but without the
browserify.

[0]: https://github.com/jsoverson/grunt-env
[1]: https://github.com/jmreidy/grunt-browserify
[2]: https://github.com/hughsk/envify

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-envify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-envify');
```

## The "envify" task

### Overview
In your project's Gruntfile, add a section named `envify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  envify: {
    options: {
      env: {
        // Pass custom env to use instead of process.env.
      }
    },
    your_target: {
      // Target-specific file lists and/or env sandbox go here.
    }
  }
});
```

### Options

#### options.env
Type: `Object`
Default value: `process.env`

An object of env variables to use instead of process.env.

### Usage Examples

#### Default
In this example, process.env is used.

```js
grunt.initConfig({
  envify: {
    your_target: {
      files: {
        'dest/index.js': ['src/index.js']
      }
    }
  }
});
```

#### Custom Env
Override process.env with custom variables.

```js
grunt.initConfig({
  envify: {
    your_target: {
      options: {
        env: {
          NODE_ENV: 'production'
        }
      },
      files: {
        'dest/index.js': ['src/index.js']
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

  * v0.0.3 - 14 January 2016
  * v0.0.2 - 18 July 2014
