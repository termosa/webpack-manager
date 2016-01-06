Webpack Manager
========================================================================

[![NPM version](https://badge.fury.io/js/webpack-manager.svg)](http://badge.fury.io/js/webpack-manager)
[![Build Status](https://travis-ci.org/termosa/webpack-manager.svg?branch=master)](https://travis-ci.org/termosa/webpack-manager)
[![Join the chat at https://gitter.im/termosa/webpack-manager](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/termosa/webpack-manager)

Simple API to extend and generate complex Webpack configurations

Installation
------------

To install Webpack Manager, simply:

```bash
$ npm install --save webpack-manager
```

API
---

**Webpack Manager** uses [Setup Manager](https://github.com/termosa/setup-manager#api) and it has all it's API as a result.

In addition it has several other methods to simplify your experience with Webpack.
All of them are just two kind of methods:

#### Setters

```javascript
var manager = require("webpack-manager")();
manager.setter_name([ name, ] value);
manager.setter_name.nested_setter_name([ name, ] value);
```

This are nested functions that sets the property with the same path

```javascript
var config = require("webpack-manager")();

config.entry("./index");

// To set nested properties you can specify the key and the value
config.resolve.alias("component", "./bower_components");

// or give an object as an argument
config.resolve.alias({ component: "./bower_components" });

module.exports = config.setup();

/* Will resolve in:
 * {
 *   "context": "./index",
 *   "resolve": {
 *     "alias": { "component": "./bower_components" }
 *   }
 * }
 */
```

And it extends exists value:

```javascript
var config = require("webpack-manager")();

var alias = config.resolve.alias;

alias("style", "./assets/styles");
alias({ component: "./bower_components" });

module.exports = config.setup();

/* Will resolve in:
 * {
 *   "resolve": {
 *     "alias": {
 *       "style": "./assets/styles",
 *       "component": "./bower_components"
 *     }
 *   }
 * }
 */
```

#### Adders

```javascript
var manager = require("webpack-manager")();
manager.setter_name.add(items);
```

This functions creates an array for the property and pushes passed values in it. They are always nested to **setters** and exists only for Webpack properties that can be defined as array.

```javascript
var webpack = require("webpack");
var config = require("webpack-manager")();

// Setting array with setter method
config.entry(["./index", "./mobile"]);

// Setting array with adder method
config.module.loaders.add({ test: /\.css$/, loader: "style!css" });
config.module.loaders.add([
  { test: /\.js$/, loader: "babel" },
  { test: /\.coffee$/, loader: "coffee" }
]);

module.exports = config.setup();

/* Will resolve in:
 * {
 *   "entry": [ "./index", "./mobile" ],
 *   "module": {
 *     "loaders": [
 *       { "test": /\.css$/, "loader": "style!css" },
 *       { "test": /\.js$/, "loader": "babel" },
 *       { "test": /\.coffee$/, "loader": "coffee" }
 *     ]
 *   }
 * }
 */
```

