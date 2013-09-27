# grunt-protractor-simple

> A simple grunt plugin for registering Protractor tasks.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-protractor-simple --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-protractor-simple');
```

## The "protractor_simple" task

### Overview
In your project's Gruntfile, add a section named `protractor_simple` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  protractor_simple: {
    options: {
      // Task-specific options go here.
      files: [
        // List protractor config scripts
      ]
    },
  },
})
```

### Options

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  protractor_simple: {
    options: {
      files: [
        'protractorConfig1.js',
        'protractorConfig2.js'
      ],
    },
  },
})
```
```

## Release History
Since this is pretty much a personal script, I'll only be updating it as necessary for myself at least to begin with.  Feel free to fork and open pull requests if you have certain functionality you'd like to add.

Warning: This is the first NPM plugin (and grunt task) that I've written, so bear with me :)
